import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Inventory Smart
        </a>
        <div className="navbar-menu">
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Services
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Contact
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
