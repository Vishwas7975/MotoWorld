import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { Link } from "react-router-dom";



function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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

      if (data.role === "ADMIN" || data.role === "ROLE_ADMIN") navigate("/admindashboard");
      else navigate("/userdashboard");
    } catch (err) {
      alert("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div
      className="auth-page d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >

      {/* Centered form card */}
      <div
        className="auth-form bg-white shadow-sm p-4 rounded"
        style={{ width: "100%", maxWidth: "400px" }}
        title="Login to your MotoWorld account"
      >
        {/* Left-aligned Login title */}
        <h3 className="card-title text-start mb-3">Login</h3>

        <form onSubmit={handleLogin}>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="form-control mb-2"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            required
          />
          <button type="submit" className="btn btn-primary w-100 mb-2" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button type="button" className="btn btn-google w-100 mb-2" onClick={googleLogin}>
          Continue with Google
        </button>

<p className="text-center small mb-0">
  Don’t have an account? <Link to="/register">Register</Link>
</p>

      </div>
    </div>
  );
}

export default Login;