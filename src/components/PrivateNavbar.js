import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import avatar from "../images/avatar512.png";
import "./style/navbar.css";

const PrivateNavbar = ({ user, onLogin, onLogout }) => {
  return (
    <nav className="private-navbar">
      <div className="private-navbar-container">
        <a href="/" className="navbar-logo">
          Inventory Smart
        </a>
        <div className="navbar-menu">
          <li className="navbar-item">
            <a href="/home" className="navbar-link">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">
              About
            </a>
          </li>
          <li className="navbar-item">
            {user ? (
              <>
                <span className="user-info">
                  <img src={avatar} alt={user.name} className="user-avatar" />
                  <span className="user-name">{user.name}</span>
                </span>
                <button onClick={onLogout} className="logout-button">
                  <FontAwesomeIcon icon={faSignOutAlt} size={18} />
                  Logout
                </button>
              </>
            ) : (
              <button onClick={onLogin} className="login-button">
                <FontAwesomeIcon icon={faUserCircle} size={18} />
                Login
              </button>
            )}
          </li>
        </div>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
