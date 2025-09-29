import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
    {/* Hero Section */}
    <section id="hero" className="mt-5 py-5 text-center bg-success text-white section-padd">
        <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="container py-4"
            >
            <h1 className="display-4 fw-bold">SmartEd Africa</h1>
            <p className="lead mb-5">
                AI-powered, offline-first learning for students, teachers, and communities across Africa.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/signup" className="btn btn-light btn-lg text-success fw-semibold">
                  Get Started — Free
                </Link>
                <Link to="/login" className="btn btn-outline-light btn-lg">
                  Log in
                </Link>
            </div>
        </motion.div>
      </section>
    </>
  )
}

export default HeroSection