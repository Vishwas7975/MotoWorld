import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/api"; // backend API call

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser(form);
      const data = res.data;

      if (data.token) localStorage.setItem("token", data.token);
      if (data.role) {
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("userName", data.name || "");
      }

      if (data.role === "ADMIN" || data.role === "ROLE_ADMIN") {
        alert("Welcome Admin!");
        navigate("/admindashboard");
      } else {
        alert("Login successful!");
        navigate("/userdashboard");
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Login failed. Please check your credentials.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="page-contacts">
      <div className="page-wrapper">
        <main className="page-main">
          {/* 🔹 Background Hero */}
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
                    <span>
                      Your journey to power, style, and speed begins here.
                    </span>
                    <div className="uk-h1">Login</div>
                  </div>
                  <div className="section-hero__breadcrumb">
                    <ul className="uk-breadcrumb">
                      <li><a href="/">Home</a></li>
                      <li><span>Login</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 🔹 Login Form */}
          <div className="page-content uk-flex uk-flex-center uk-padding-large">
            <div
              className="uk-card uk-card-default uk-card-body uk-width-1-2@m uk-width-1-1@s uk-border-rounded"
              style={{
                maxWidth: "450px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <div className="uk-text-center uk-margin-bottom">
               
                <h3 className="uk-margin-small-top">Login to MotoWorld</h3>
              </div>

              <form onSubmit={handleLogin}>
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
                <div className="uk-margin-medium-top uk-text-center">
                  <button
                    className="uk-button uk-button-danger uk-button-large uk-width-1-1"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
               
              </form>

              <div className="uk-margin-top uk-text-center">
                <p>
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    style={{
                      color: "#d32f2f",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    Create Account
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
