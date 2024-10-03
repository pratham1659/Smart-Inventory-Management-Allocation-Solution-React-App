import React from "react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
