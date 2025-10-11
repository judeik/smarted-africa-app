// @ts-nocheck
// backend/src/controllers/authController.js

import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import mongoose from "mongoose"; 
import User from "../models/User.js";
import env from "../config/env.js";

// ----------------------------
// Email Transporter
// ----------------------------
const transporter = nodemailer.createTransport({
  host: env.smtpHost,
  port: env.smtpPort,
  secure: env.smtpPort === 465, // true for 465, false for 587
  auth: { user: env.smtpUser, pass: env.smtpPass },
});

// ----------------------------
// Helper: Generate JWT Tokens
// ----------------------------
const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn }
  );

  const refreshToken = jwt.sign(
    { id: user._id },
    env.refreshSecret,
    { expiresIn: env.refreshExpiresIn }
  );

  return { accessToken, refreshToken };
};

// ----------------------------
// Helper: Send Email
// ----------------------------
const sendEmail = async ({ to, subject, html }) => {
  try {
    await transporter.sendMail({
      from: `"SmartEd Africa" <${env.emailFrom}>`,
      to,
      subject,
      html,
    });
  } catch (err) {
    console.error("Email sending failed:", err);
  }
};

// ----------------------------
// Registration: Only email verification
// ----------------------------
export const register = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email)
      return res.status(400).json({ message: "Name and email are required" });

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      if (existingUser.confirmed)
        return res.status(400).json({ message: "Email already registered. Please login." });
      else {
        // Auto-resend confirmation email
        existingUser.emailToken = crypto.randomBytes(32).toString("hex");
        await existingUser.save();

        const confirmUrl = `${env.frontendUrl}/confirm/${existingUser.emailToken}`;
        await sendEmail({
          to: normalizedEmail,
          subject: "Confirm your SmartEd Africa account",
          html: `<h3>Hello ${existingUser.name}</h3>
                 <p>Please confirm your email:</p>
                 <a href="${confirmUrl}">Confirm Email</a>`,
        });

        return res.status(200).json({ message: "Confirmation email resent." });
      }
    }

    const emailToken = crypto.randomBytes(32).toString("hex");

    const user = await User.create({
      name,
      email: normalizedEmail,
      emailToken,
      confirmed: false,
    });

    const confirmUrl = `${env.frontendUrl}/confirm/${emailToken}`;
    await sendEmail({
      to: normalizedEmail,
      subject: "Confirm your SmartEd Africa account",
      html: `<h3>Hello ${name}</h3>
             <p>Please confirm your email:</p>
             <a href="${confirmUrl}">Confirm Email</a>`,
    });

    return res.status(201).json({ message: "Registration successful. Please confirm your email." });
  } catch (err) {
    console.error("Registration error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ----------------------------
// Confirm Email → Redirect to set password
// ----------------------------
export const confirmEmail = async (req, res) => {
  try {
    const user = await User.findOne({ emailToken: req.params.token });

    if (!user)
      return res.status(400).json({ message: "Invalid or expired confirmation link" });

    user.confirmed = true;
    user.emailToken = null;
    await user.save();

    return res.json({
      message: "Email verified. Please set your password to login.",
      redirectTo: `${env.frontendUrl}/set-password/${user._id}`, // frontend handles set-password
    });
  } catch (err) {
    console.error("Confirm email error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ----------------------------
// Set Password (after email verification)
// ----------------------------
export const setPassword = async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;

    // Validate input
    if (!password || !confirmPassword)
      return res.status(400).json({ message: "Password and confirmation are required" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    // Strong password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!passwordRegex.test(password))
      return res.status(400).json({
        message: "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
      });

    // Trim the ID from URL param to avoid hidden newlines or spaces
    const userId = req.params.id.trim();

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId))
      return res.status(400).json({ message: "Invalid user ID" });

    // Find the user
    const user = await User.findById(userId);
    if (!user || !user.confirmed)
      return res.status(400).json({ message: "Invalid user or email not confirmed" });

    // Set the password (pre-save middleware hashes it)
    user.password = password;

    // Auto-login: generate JWT tokens
    const { accessToken, refreshToken } = generateTokens(user);
    user.refreshToken = refreshToken;

    // Save user
    await user.save();

    // Notify user via email
    await sendEmail({
      to: user.email,
      subject: "Password Set Successfully",
      html: `<h3>Hello ${user.name}</h3>
             <p>Your password has been set. You are now logged in.</p>`,
    });

    // Respond with user info and tokens
    return res.json({
      message: "Password set successfully",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      accessToken,
      refreshToken,
    });
  } catch (err) {
    console.error("Set password error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// ----------------------------
// Login
// ----------------------------
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await User.findOne({ email: email.toLowerCase() }).select("+password");
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    if (!user.confirmed)
      return res.status(403).json({ message: "Please confirm your email first" });

    if (!user.password)
      return res.status(403).json({ message: "Password not set. Please set your password." });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

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
// Forgot Password
// ----------------------------
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(404).json({ message: "User not found" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExp = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetUrl = `${env.frontendUrl}/reset-password/${resetToken}`;
    await sendEmail({
      to: user.email,
      subject: "SmartEd Africa Password Reset",
      html: `<h3>Hello ${user.name}</h3>
             <p>Click to reset your password:</p>
             <a href="${resetUrl}">Reset Password</a>
             <p>This link is valid for 1 hour.</p>`,
    });

    return res.json({ message: "Password reset email sent" });
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
    if (!password || !confirmPassword)
      return res.status(400).json({ message: "Password and confirmation are required" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Passwords do not match" });

    const user = await User.findOne({
      resetToken: req.params.token,
      resetTokenExp: { $gt: Date.now() },
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired reset link" });

    user.password = password;
    user.resetToken = null;
    user.resetTokenExp = null;
    user.refreshToken = null;
    await user.save();

    await sendEmail({
      to: user.email,
      subject: "Password Reset Successful",
      html: `<h3>Hello ${user.name}</h3>
             <p>Your password has been reset successfully.</p>`,
    });

    return res.json({ message: "Password reset successful" });
  } catch (err) {
    console.error("Reset password error:", err);
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

    // Generate a new confirmation token
    user.emailToken = crypto.randomBytes(32).toString("hex");
    await user.save();

    // Send confirmation email
    const confirmUrl = `${env.frontendUrl}/confirm/${user.emailToken}`;
    await sendEmail({
      to: user.email,
      subject: "Resend: Confirm your SmartEd Africa account",
      html: `<h3>Hello ${user.name}</h3>
             <p>Please confirm your email by clicking the link below:</p>
             <a href="${confirmUrl}">Confirm Email</a>`,
    });

    return res.json({ message: "Confirmation email resent successfully." });
  } catch (err) {
    console.error("Resend confirmation error:", err);
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
    const payload = jwt.verify(token, env.refreshSecret);
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
// Logout (using access token)
// ----------------------------

export const logout = async (req, res) => {
  try {
    // Expect access token in Authorization header: "Bearer <token>"
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access token required" });
    }

    const token = authHeader.split(" ")[1];

    // Verify token
    let payload;
    try {
      payload = jwt.verify(token, env.jwtSecret);
    } catch (err) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Find user by ID from token payload
    const user = await User.findById(payload.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Revoke refresh token
    user.refreshToken = null;
    await user.save();

    return res.json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

