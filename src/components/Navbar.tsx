/**
 * src/components/Navbar.tsx
 * Responsive, sticky navbar with smooth scrolling and full section links
 */

import logo from "@assets/images/Logo_2.png";
import "@assets/styles/custom.css";
import { APP_NAME, APP_TAGLINE } from "@constants/app";
import { useAuth } from "@context/useAuth";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import  {FaBars, FaTimes} from 'react-icons/fa'

export default function Navbar(): React.ReactElement {
  const { isAuthenticated } = useAuth();
  const loc = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    if (loc.pathname === "/") {
      const el = document.getElementById("hero");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Navigate to home page and scroll to hero
      window.location.href = "/#home";
    }
    setIsOpen(false);
  };

  const handleSectionClick = (id: string) => {
    if (loc.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = `/#${id}`;
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-bottom sticky-top">
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Logo & Title */}
        <Link to="/" className="d-flex align-items-center text-decoration-none" aria-label={`${APP_NAME} home`}>
          <img src={logo} width={40} height={40} className="navbar-logo" alt={`${APP_NAME} logo`} />
          <div className="ms-2 d-none d-md-block">
            <div className="navbar-title">{APP_NAME}</div>
            <div className="navbar-tagline">{APP_TAGLINE}</div>
          </div>
        </Link>

        {/* Hamburger for mobile */}
        <FaBars
          className={`navbar-toggler d-md-none btn btn-outline-secondary ${!isOpen ? "d-flex" : "d-none"}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          title="Toggle navigation menu"
          aria-label="Toggle navigation menu"
        />
          {/* <span className="navbar-toggler-icon"></span> */}

        {/* Nav links */}
        <nav className={`d-md-flex flex-column flex-md-row align-items-center gap-6 ${isOpen ? "d-flex nav-menu" : "d-none d-md-flex"}`}>
          <FaTimes className="d-md-none cursor-pointer text-lg btn-outline-secondary absolute right-8" onClick={() => setIsOpen(!isOpen)}/>
          <button className="btn btn-sm btn-link text-dark" onClick={handleHomeClick}>
            Home
          </button>
          <button className="btn btn-sm btn-link text-dark" onClick={() => handleSectionClick("about")}>
            About
          </button>
          <button className="btn btn-sm btn-link text-dark" onClick={() => handleSectionClick("features")}>
            Features
          </button>
          <button className="btn btn-sm btn-link text-dark" onClick={() => handleSectionClick("donation")}>
            Donate
          </button>
          <button className="btn btn-sm btn-link text-dark" onClick={() => handleSectionClick("contact")}>
            Contact
          </button>
          <button className="btn btn-sm btn-link text-dark" onClick={() => handleSectionClick("impact")}>
            Our Impact
          </button>

          {/* Auth links */}
          {isAuthenticated ? (
            <Link
              to="/dashboard"
              className={`btn btn-sm btn-success ms-md-2`}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className={`btn btn-sm btn-outline-primary ms-md-2`}
                onClick={() => setIsOpen(false)}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="btn btn-sm btn-success ms-md-2"
                onClick={() => setIsOpen(false)}
              >
                Sign up
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
