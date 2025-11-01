import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "http://localhost:8080/api/auth";

  // 🔹 Handle input change
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // 🔹 Register user
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.role) {
      alert("Please select a role before registering.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/register`, form, {
        headers: { "Content-Type": "application/json" },
      });

      alert(res.data.message || "Registered successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
      const msg =
        err.response?.data?.message ||
        "Registration failed. Please try again.";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Google registration
  const googleRegister = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="page-contacts">
      <div className="page-wrapper">
        <main className="page-main">
          {/* 🔹 Background Header */}
          <div className="section-hero">
            <div
              className="section-hero__bg"
              style={{
                backgroundImage: "url(/src/assets/img/bg/contacts.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="uk-container">
                <div className="section-hero__content">
                  <div className="section-hero__title">
                    <span>Taking rides to a newer level</span>
                    <div className="uk-h1">Register</div>
                  </div>
                  <div className="section-hero__breadcrumb">
                    <ul className="uk-breadcrumb">
                      <li><a href="/">Home</a></li>
                      <li><span>Register</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Registration Form */}
          <div className="page-content uk-flex uk-flex-center uk-padding-large">
            <div
              className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-width-1-1@s uk-border-rounded"
              style={{
                maxWidth: "500px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <div className="uk-text-center uk-margin-bottom">
               
                <h3 className="uk-margin-small-top">Create Your MotoWorld Account</h3>
              </div>

              <form onSubmit={handleRegister}>
                <div className="uk-margin">
                  <input
                    className="uk-input uk-form-large"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="uk-margin">
                  <input
                    className="uk-input uk-form-large"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="uk-margin">
                  <input
                    className="uk-input uk-form-large"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* 🔹 Role Dropdown */}
                <div className="uk-margin">
                  <select
                    className="uk-select uk-form-large"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select Role
                    </option>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </div>

                {/* 🔹 Submit Button */}
                <div className="uk-margin-medium-top uk-text-center">
                  <button
                    className="uk-button uk-button-danger uk-button-large uk-width-1-1"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </div>

                {/* 🔹 Google Signup */}
                
              </form>

              {/* 🔹 Already have account */}
              <div className="uk-margin-top uk-text-center">
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    style={{
                      color: "#d32f2f",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
