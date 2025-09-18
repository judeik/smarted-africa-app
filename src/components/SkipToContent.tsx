/**
 * src/components/SkipToContent.tsx
 * A skip-link for keyboard users and screen readers.
 * Visible on keyboard focus.
 */
import React from "react";

export default function SkipToContent(): JSX.Element {
  return (
    <a
      href="#main-content"
      className="sr-only"
      onFocus={(e) => (e.currentTarget.className = "btn btn-link")}
    >
      Skip to main content
    </a>
  );
}
