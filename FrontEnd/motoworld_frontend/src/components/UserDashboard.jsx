import React from "react";


function UserDashboard() {
  const name = localStorage.getItem("userName") || "User";

  return (
    <div className="dashboard-page">
      <div className="container mt-5 text-center">
        <h2>Welcome, {name}</h2>
        <p className="lead">This is your user dashboard. Explore bikes, view bookings and manage your profile.</p>
      </div>
    </div>
  );
}

export default UserDashboard;