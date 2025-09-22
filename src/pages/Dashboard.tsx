/**
 * src/pages/Dashboard.tsx
 * Simple placeholder dashboard demonstrating role-based placeholders.
 * Integrate real auth + RBAC with backend for production.
 */

import React from "react";

export default function Dashboard(): React.ReactElement {
  return (
    <div className="container py-4 mt-5">
      <h2>Dashboard</h2>
      <p className="text-muted">
        This is a placeholder dashboard. Replace with role-based components (student/teacher/admin).
      </p>

      <section className="mt-3">
        <div className="card p-3">
          <h3>Welcome</h3>
          <p>Student progress, current courses, and quick actions will appear here.</p>
        </div>
      </section>
    </div>
  );
}
