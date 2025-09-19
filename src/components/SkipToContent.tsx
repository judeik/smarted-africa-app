// src/components/SkipToContent.tsx
// 🔹 Accessibility helper: lets users jump straight to main content

import React from "react";

export default function SkipToContent(): React.ReactElement {
  return (
    <a
      href="#main"
      className="skip-to-content"
    >
      Skip to main content
    </a>
  );
}
