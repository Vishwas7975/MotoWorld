import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDashboard from "./components/UserDashboard";
import AdminDashboard from "./components/AdminDashboard";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Bike from "./components/Bike.jsx";
import BikeDetail from "./components/BikeDetail";
import AddToCart from "./components/AddToCart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/bikes" element={<Bike />} />
        <Route path="/bike/:id" element={<BikeDetail />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
