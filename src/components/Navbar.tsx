/**
 * src/components/Navbar.tsx
 * Accessible, mobile-first navigation bar.
 * - Collapsible on small screens using Bootstrap classes
 * - Dashboard link hidden unless user is authenticated
 */

import logo from "@assets/images/logo.png";
import "@assets/styles/custom.css";
import { APP_NAME, APP_TAGLINE } from "@constants/app";
import { useAuth } from "@context/useAuth"; // ✅ updated import
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(): React.ReactElement {
  const { isAuthenticated } = useAuth(); // ✅ get auth state
  const loc = useLocation();

  return (
    <header aria-label="Primary" className="bg-white border-bottom">
      <div className="container d-flex align-items-center justify-content-between py-2">
        <Link
          to="/"
          className="d-flex align-items-center text-decoration-none"
          aria-label={`${APP_NAME} home`}
        >
          <img
            src={logo}
            width={40}
            height={40}
            className="navbar-logo"
            alt={`${APP_NAME} logo`}
          />
          <div>
            <div className="navbar-title">{APP_NAME}</div>
            <div className="navbar-tagline">{APP_TAGLINE}</div>
          </div>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="d-flex gap-2 list-unstyled mb-0 align-items-center">
            <li>
              <Link
                className={`btn btn-sm ${
                  loc.pathname === "/" ? "btn-outline-primary" : "btn-link"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            {/* ✅ Show dashboard link only if logged in */}
            {isAuthenticated && (
              <li>
                <Link
                  className={`btn btn-sm ${
                    loc.pathname === "/dashboard"
                      ? "btn-outline-primary"
                      : "btn-link"
                  }`}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}

            {/* ✅ Show login/signup only if not logged in */}
            {!isAuthenticated && (
              <>
                <li>
                  <Link
                    className={`btn btn-sm ${
                      loc.pathname === "/login"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    to="/login"
                  >
                    Log in
                  </Link>
                </li>
                <li>
                  <Link className="btn btn-sm btn-success" to="/signup">
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
