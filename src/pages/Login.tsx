/**
 * src/pages/Login.tsx
 * Accessible login page:
 * - Email/Phone + Password
 * - Magic link placeholder
 * - Progressively hints for offline PIN (for mobile/offline)
 * - Uses simple client-side validation
 */

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../assets/styles/custom.css"; // external CSS for overrides

// 🔹 Type for form state
type FormState = {
  identifier: string; // email or phone
  password: string;   // password
};

export default function Login(): React.ReactElement {
  const [form, setForm] = useState<FormState>({ identifier: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // 🔹 Update state when input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  // 🔹 Handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    if (!form.identifier || !form.password) {
      setError("Please enter your email/phone and password.");
      return;
    }

    // TODO: Call real API via src/services/api.ts
    // For now, simulate success -> navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-container mt-5 py-5">
      {/* 🔹 Page heading */}
      <h2 className="mb-3">Log in</h2>
      <p className="text-muted">
        Use email/phone and password, or choose Magic Link for passwordless login.
      </p>

      {/* 🔹 Login form */}
      <form onSubmit={handleSubmit} aria-describedby="login-error">
        {/* Error message (if any) */}
        {error && (
          <div id="login-error" role="alert" className="alert alert-danger">
            {error}
          </div>
        )}

        {/* Identifier (email or phone) */}
        <div className="mb-3">
          <label htmlFor="identifier" className="form-label">
            Email or Phone
          </label>
          <input
            id="identifier"
            name="identifier"
            value={form.identifier}
            onChange={handleChange}
            className="form-control"
            placeholder="you@example.com or +234..."
            inputMode="email"
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            className="form-control"
            aria-describedby="passwordHelp"
            required
          />
          <div id="passwordHelp" className="form-text">
            Minimum 8 characters. Use a mix of letters and numbers.
          </div>
        </div>

        {/* 🔹 Login actions */}
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => alert("Magic Link not configured in demo")}
          >
            Send Magic Link
          </button>
        </div>
      </form>

      {/* 🔹 Offline PIN (future feature for mobile/offline) */}
      {/*
      <div className="mt-3">
        <label htmlFor="pin" className="form-label">Offline PIN (Optional)</label>
        <input
          id="pin"
          name="pin"
          type="number"
          className="form-control"
          placeholder="Enter 4-digit offline PIN"
        />
      </div>
      */}

      {/* 🔹 Signup link */}
      <div className="mt-3 small">
        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
