/**
 * src/pages/Signup.tsx
 * Signup uses progressive profiling: collect essentials first (name, email/phone, password, role).
 * Additional profile information can be collected after signup.
 * Frontend performs basic validation; backend must enforce full validation and verification.
 */

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/custom.css"; // external CSS for custom styles
import { validateEmail } from "../utils/validators";

type FormState = {
  name: string;
  identifier: string;
  password: string;
  role: "student" | "teacher" | "parent" | "admin";
};

export default function Signup(): React.ReactElement {
  const [form, setForm] = useState<FormState>({
    name: "",
    identifier: "",
    password: "",
    role: "student",
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.identifier || !form.password) {
      setError("Please fill all required fields.");
      return;
    }
    if (!validateEmail(form.identifier) && !/^\+?[0-9]{7,15}$/.test(form.identifier)) {
      setError("Identifier must be a valid email or phone number.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    // TODO: call /api/auth/signup -> handle response & verification flow
    // Demo: redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="signup-container mt-5 py-4">
      <h2>Create an account</h2>
      <p className="text-muted">
        Sign up with email or phone. We'll verify your contact info before full access.
      </p>
      <form onSubmit={handleSubmit} aria-describedby="signup-error">
        {error && (
          <div id="signup-error" role="alert" className="alert alert-danger">
            {error}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control"
            placeholder="First Last"
          />
        </div>
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
          />
        </div>
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
          />
          <div className="form-text">
            Choose a strong password. We'll ask for verification via email or SMS.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            className="form-select"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="parent">Parent</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Create account
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate("/login")}
          >
            Have an account?
          </button>
        </div>
      </form>
    </div>
  );
}
