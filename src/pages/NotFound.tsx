import React from "react";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <div className="container py-4">
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-outline-primary">
        Return home
      </Link>
    </div>
  );
}
