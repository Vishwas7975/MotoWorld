import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      const { role } = res.data;
      localStorage.setItem("userRole", role);
      if (role === "ADMIN") navigate("/admindashboard");
      else navigate("/userdashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3 className="text-center mb-4">Login to MotoWorld</h3>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="btn btn-primary w-100 mb-2">Login</button>
        <button type="button" className="btn btn-danger w-100" onClick={googleLogin}>
          Continue with Google
        </button>
      </form>
      <p className="text-center mt-3">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;