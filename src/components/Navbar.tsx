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
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar(): React.ReactElement {
  const { isAuthenticated } = useAuth();
  const loc = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(!isOpen);

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

  const navAnimation = {
    hidden: {
      opacity: 0, x: "100vw"
    },
    visible: {
      opacity: 1, x: 0,
      transition: {delay: 0, duration: 0.4}
    },
    remove: {
      opacity: 0, x: "100vw",
      transition: {delay: 0.1, duration: 0.4}
    }
  }

  return (
    <header className="bg-white border-bottom fixed-top">
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Logo & Title */}
        <Link to="/" className="d-flex align-items-center text-decoration-none" aria-label={`${APP_NAME} home`}>
          <img src={logo} width={40} height={40} className="navbar-logo" alt={`${APP_NAME} logo`} />
          <div className="ms-2 d-block">
            <div className="navbar-title">{APP_NAME}</div>
            <div className="text-black" style={{fontSize: "0.7rem"}}>{APP_TAGLINE}</div>
          </div>
        </Link>

        {/* Hamburger for mobile */}
        {!isOpen && (
          <FaBars
          className="d-md-none d-flex text-xl cursor-pointer" onClick={open} title="Toggle navigation menu"
          />)
        }

        <AnimatePresence>
        {isOpen && (
          <motion.nav 
            variants={navAnimation}
            initial= "hidden"
            animate="visible"
            exit= "remove"
          className="flex-column align-items-center d-md-none d-flex nav-menu gap-4">
          <FaTimes className="d-md-none cursor-pointer text-xl absolute right-5" onClick={open}/>
          <button className="btn btn-sm btn-link text-dark btn-hover mt-5" onClick={handleHomeClick}>
            Home
          </button>
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={() => handleSectionClick("about")}>
            About
          </button>
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={() => handleSectionClick("features")}>
            Features
          </button>
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={() => handleSectionClick("donation")}>
            Donate
          </button>
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={() => handleSectionClick("contact")}>
            Contact
          </button>
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={() => handleSectionClick("impact")}>
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
        </motion.nav>
        )}
        </AnimatePresence>

        {/* Nav links */}
        <nav className="d-md-flex flex-column flex-md-row align-items-center lg:gap-6 d-none ords-nav">
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={handleHomeClick}>
            Home
          </button>
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={() => handleSectionClick("about")}>
            About
          </button>
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={() => handleSectionClick("features")}>
            Features
          </button>
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={() => handleSectionClick("donation")}>
            Donate
          </button>
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={() => handleSectionClick("contact")}>
            Contact
          </button>
          <button className="btn btn-sm btn-link text-dark btn-hover" onClick={() => handleSectionClick("impact")}>
            Our Impact
          </button>

          {/* Auth links */}
          {isAuthenticated ? (
            <Link to="/dashboard">
              <button className={`btn btn-sm btn-success ms-md-2`}
              onClick={() => setIsOpen(false)}>
                Dashboard
              </button>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button className="btn btn-sm btn-outline-primary ms-md-2"
                onClick={() => setIsOpen(false)}>
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-sm btn-success ms-md-2"
                onClick={() => setIsOpen(false)}>
                  Sign up
                </button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
