// src/pages/NotFound.tsx
// 🔹 Fallback 404 page

import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(): React.ReactElement {
  return (
    <div className="notfound-container text-center py-10 mt-5">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn btn-primary px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-800"
      >
        Go Back Home
      </Link>
    </div>
  );
}
