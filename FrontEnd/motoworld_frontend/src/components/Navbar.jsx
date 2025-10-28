import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm bg-white">
      <div className="container d-flex justify-content-between align-items-center position-relative">
        
        {/* Left: Logo */}
        <Link className="navbar-brand logo" to="/">
          MotoWorld
        </Link>

        {/* Center: Welcome text */}
        <h2 className="navbar-title text-center m-0 position-absolute start-50 translate-middle-x">
          Welcome to MotoWorld !
        </h2>

      </div>
    </nav>
  );
}

export default Navbar;