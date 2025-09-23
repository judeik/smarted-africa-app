// src/pages/NotFound.tsx
// 🔹 Fallback 404 page

import React from "react";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound(): React.ReactElement {
  return (
      <div className="notfound-container flex flex-col items-center gap-2 py-10 mt-5">
      <FaExclamationTriangle className="text-amber-500 text-8xl"/>
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/" className="no-underline">
        <button className="flex items-center gap-1 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-800 h-12">
        <FaHome/>Go Back Home
        </button>
      </Link>
    </div>
  );
}
