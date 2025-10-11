// @ts-nocheck
// backend/src/controllers/authController.js

import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
import env from "../config/env.js";

// ----------------------------
// Email transporter
// ----------------------------
const transporter = nodemailer.createTransport({
  host: env.smtpHost,
  port: env.smtpPort,
  secure: env.smtpPort === 465, // true for 465, false for 587
  auth: { user: env.smtpUser, pass: env.smtpPass },
});

// ----------------------------
// Helper Functions
// ----------------------------

// Generate access & refresh tokens
const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    env.jwtSecret,                // use lowercase
    { expiresIn: env.jwtExpiresIn } // optional: use env variable
  );

  const refreshToken = jwt.sign(
    { id: user._id },
    env.refreshSecret,              // use lowercase
    { expiresIn: env.refreshExpiresIn } // optional: use env variable
  );

  return { accessToken, refreshToken };
};

// Send confirmation email
const sendConfirmationEmail = async (user) => {
  const confirmUrl = `${env.frontendUrl}/confirm/${user.emailToken}`;

  try {
    await transporter.sendMail({
      from: env.emailFrom,
      to: user.email,
      subject: "Confirm your SmartEd Africa account",
      html: `<h3>Hello ${user.name},</h3>
             <p>Please confirm your email by clicking the link below:</p>
             <a href="${confirmUrl}">Confirm Email</a>`,
    });
  } catch (err) {
    console.error("Failed to send confirmation email:", err);
    // Do not block registration; user can resend confirmation
  }
};

// ----------------------------
// Controllers
// ----------------------------

// ----------------------------
// Register
// ----------------------------
export const register = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    // Validate required fields
    if (!name || !email || !password || !confirmPassword)
      return res.status(400).json({ message: "All fields are required" });

    // Password confirmation
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    // Strong password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check if user exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      if (existingUser.confirmed) {
        return res
          .status(400)
          .json({ message: "Email already registered. Please login." });
      } else {
        // Auto-resend confirmation for unconfirmed user
        existingUser.emailToken = crypto.randomBytes(32).toString("hex");
        existingUser.emailTokenExp = Date.now() + 24 * 60 * 60 * 1000; // 24h
        await existingUser.save();

        await sendConfirmationEmail(existingUser);
        return res.status(200).json({
          message: "Confirmation email resent to unverified account.",
        });
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const emailToken = crypto.randomBytes(32).toString("hex");

    // Create user
    const user = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      emailToken,
      emailTokenExp: Date.now() + 24 * 60 * 60 * 1000,
      confirmed: false,
      role: "user",
    });

    // Send confirmation email
    await sendConfirmationEmail(user);

    return res.status(201).json({
      message: "Registration successful. Please verify your email.",
    });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ----------------------------
// Confirm Email
// ----------------------------
export const confirmEmail = async (req, res) => {
  try {
    const user = await User.findOne({ emailToken: req.params.token });

    if (
      !user ||
      (user.emailTokenExp && user.emailTokenExp < Date.now())
    ) {
      return res
        .status(400)
        .json({ message: "Invalid or expired confirmation link" });
    }

    user.confirmed = true;
    user.emailToken = null;
    user.emailTokenExp = null;

    // Generate tokens
    const { accessToken, refreshToken } = generateTokens(user);
    user.refreshToken = refreshToken;

    await user.save();

    return res.json({
      message: "Email verified successfully",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error("Email confirmation error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ----------------------------
// Login with auto-reset email for missing password
// ----------------------------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email & password required" });

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // If user has no password, automatically send reset email
    if (!user.password) {
      const resetToken = crypto.randomBytes(32).toString("hex");
      user.resetToken = resetToken;
      user.resetTokenExp = Date.now() + 3600000; // 1 hour
      await user.save();

      const resetUrl = `${env.frontendUrl}/reset-password/${resetToken}`;
      await transporter.sendMail({
        from: '"SmartEd Africa" <divinegpc@gmail.com>',
        to: email,
        subject: "Set your SmartEd Africa password",
        html: `<h3>Hello ${user.name},</h3>
               <p>You need to set a password before login. Click below:</p>
               <a href="${resetUrl}">Set Password</a>
               <p>This link is valid for 1 hour.</p>`,
      });

      return res.status(403).json({
        message:
          "No password set for this account. A reset link has been sent to your email.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    if (!user.confirmed)
      return res
        .status(403)
        .json({ message: "Please verify your email before login" });

    const { accessToken, refreshToken } = generateTokens(user);
    user.refreshToken = refreshToken;
    await user.save();

    return res.json({
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ----------------------------
// Refresh Token
// ----------------------------
export const refreshToken = async (req, res) => {
  const { token } = req.body;
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const payload = jwt.verify(token, env.jwtRefreshSecret);
    const user = await User.findById(payload.id);

    if (!user || user.refreshToken !== token)
      return res.status(401).json({ message: "Invalid refresh token" });

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(user);
    user.refreshToken = newRefreshToken;
    await user.save();

    return res.json({ accessToken, refreshToken: newRefreshToken });
  } catch (err) {
    console.error("Refresh token error:", err.message);
    return res.status(401).json({ message: "Invalid refresh token" });
  }
};

// ----------------------------
// Logout
// ----------------------------
export const logout = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      user.refreshToken = null; // revoke
      await user.save();
    }

    return res.json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ----------------------------
// Resend Email Confirmation
// ----------------------------
export const resendConfirmation = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.confirmed)
      return res.status(400).json({ message: "Account already confirmed" });

    user.emailToken = crypto.randomBytes(32).toString("hex");
    user.emailTokenExp = Date.now() + 24 * 60 * 60 * 1000; // 24h
    await user.save();

    await sendConfirmationEmail(user);
    return res.json({ message: "Confirmation email resent successfully." });
  } catch (err) {
    console.error("Resend confirmation error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ----------------------------
// Forgot Password
// ----------------------------
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ message: "User not found" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExp = Date.now() + 3600000; // 1h
    await user.save();

    const resetUrl = `${env.frontendUrl}/reset-password/${resetToken}`;
    try {
      await transporter.sendMail({
        from: env.emailFrom,
        to: email,
        subject: "SmartEd Africa Password Reset",
        html: `<h3>Hello ${user.name},</h3>
               <p>You requested a password reset. Click below:</p>
               <a href="${resetUrl}">Reset Password</a>
               <p>This link is valid for 1 hour.</p>`,
      });
    } catch (err) {
      console.error("Failed to send password reset email:", err);
    }

    return res.json({ message: "Password reset email sent." });
  } catch (err) {
    console.error("Forgot password error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ----------------------------
// Reset Password
// ----------------------------
export const resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
      });
    }

    const user = await User.findOne({
      resetToken: req.params.token,
      resetTokenExp: { $gt: Date.now() },
    });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired reset link" });

    // Hash new password
    const hashed = await bcrypt.hash(password, 10);
    user.password = hashed;

    // Clear reset token and force logout
    user.resetToken = null;
    user.resetTokenExp = null;
    user.refreshToken = null;

    await user.save();

    return res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Reset password error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
