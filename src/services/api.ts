/**
 * src/services/api.ts
 * Axios instance with interceptors for auth tokens.
 * Team notes:
 * - Replace BASE_URL with environment variable (VITE_API_URL)
 * - Store refresh tokens securely (HttpOnly cookie recommended)
 * - Implement token rotation and revocation in backend
 */

import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // if using cookies for refresh tokens
});

// Example interceptor skeleton (extend per auth strategy)
api.interceptors.request.use((config) => {
  // TODO: attach Authorization header from secure store (not localStorage if possible)
  const token = ""; // placeholder
  if (token) {
    config.headers = config.headers ?? {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    // TODO: attempt refresh token flow on 401
    return Promise.reject(err);
  }
);

export default api;
