import React from "react";
import "./Navbar.css";
import logo from '../../Assets/logo-removebg-preview.png';

function Navbar() {
  return (
    <nav class="navbar">
      <div class="navbar-logo">
        <a href="#">
          <img className="Logo" src={logo} alt="Logo" />
        </a>
      </div>
      <div class="navbar-links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div class="navbar-button">
        <a href="#">Make An Appointement</a>
      </div>
    </nav>
  );
}

export default Navbar;
