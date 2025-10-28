import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!form.role) {
        alert("Please select a role before registering.");
        setLoading(false);
        return;
      }

      const res = await registerUser(form);
      alert(res.data.message || "Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const googleRegister = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="auth-page">
      <div className="auth-form" title="Create a MotoWorld account">
        <h3 className="card-title">Register</h3>
        <form onSubmit={handleRegister}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Full name"
            className="form-control mb-2"
            required
          />

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

          {/* Role Dropdown with Placeholder */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="form-control mb-3"
            required
          >
            <option value="" disabled>
              Role
            </option>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button type="submit" className="btn btn-primary w-100 mb-2" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Google OAuth2 register/login */}
        <button type="button" className="btn btn-google w-100 mb-2" onClick={googleRegister}>
          Continue with Google
        </button>

        <p className="text-center small">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;