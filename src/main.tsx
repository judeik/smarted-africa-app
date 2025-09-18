/**
 * src/main.tsx
 * Entry point for the SmartEd Africa frontend.
 * - Imports global CSS (mobile-first)
 * - Mounts the App component
 * - Includes Bootstrap CSS for rapid layout and accessibility defaults
 *
 * Team notes:
 * - Keep this file minimal. App logic belongs in src/App.tsx and feature folders.
 */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider"; // <- new path (or alias)
import "./styles/global.css";

const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
