/**
 * src/App.tsx
 * App router + global layout.
 * - Mobile-first routes
 * - Skip-to-content link for keyboard users
 * - Route protection is stubbed (extend in auth flow)
 */

import React from "react";
import { Route, Routes } from "react-router-dom";

// ✅ Use aliases instead of relative paths
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import SkipToContent from "@components/SkipToContent";
import Dashboard from "@pages/Dashboard";
import Landing from "@pages/Landing";
import Login from "@pages/Login";
import NotFound from "@pages/NotFound";
import Signup from "@pages/Signup";

export default function App(): React.ReactElement {
  return (
    <>
      <SkipToContent />
      <Navbar />

      {/* 🔹 Main landmark for accessibility */}
      <main id="main-content" tabIndex={-1} role="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
