import React from "react";

function AdminDashboard() {
  const name = localStorage.getItem("userName") || "Admin";

  return (
    <div className="dashboard-page">
      <div className="container mt-5 text-center">
        <h2>Admin Dashboard</h2>
        <p className="lead">Manage users, showrooms and bookings from here.</p>
      </div>
    </div>
  );
}

export default AdminDashboard;