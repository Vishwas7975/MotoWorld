import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/uikit.min.css";
import "../assets/css/main.css";


export default function Navbar() {
  return (
    <header className="page-header page-header-transparent">
      <div className="page-header__inner">
        {/* ===== Left Section ===== */}
        <div className="page-header__left">
          <div className="logo">
            <NavLink className="logo__link" to="/">
              <div className="logo__icon">
                <img src="/src/assets/img/logo.svg" alt="KeyMoto" />
              </div>
              <div className="logo__text">MOTOWORLD</div>
            </NavLink>
          </div>
        </div>

        {/* ===== Center Nav ===== */}
        <div className="page-header__center">
          <nav className="page-nav" data-uk-navbar="true">
            <ul className="uk-navbar-nav">
              <li>
                <NavLink to="/">Home</NavLink>
                
              </li>

              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>

              <li>
                <a href="#">Bikes</a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <NavLink to="#">Royal Enfield Classic 350</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Yamaha MT-15</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">KTM Duke 200</NavLink>
                    </li>
                  
                  </ul>
                </div>
              </li>

              <li>
                <a href="#"> Latest update</a>
                <div className="uk-navbar-dropdown">
                  <ul className="uk-nav uk-navbar-dropdown-nav">
                    <li>
                      <NavLink to="#">TVS Apache RTR 310</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Bajaj Pulsar NS400Z</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Yamaha R3 </NavLink>
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* ===== Right Section ===== */}
        <div className="page-header__right">
          
          <a className="uk-navbar-toggle cart-btn" href="#!">
            <div className="cart-btn__icon uk-icon" data-uk-icon="cart">
              <span className="cart-btn__count">2</span>
            </div>
          </a>
          <a
            className="uk-navbar-toggle menu-btn"
            
          >
            <img src="/src/assets/img/icons/menu.svg" alt="menu" />
          </a>
        </div>
      </div>
    </header>
  );
}
