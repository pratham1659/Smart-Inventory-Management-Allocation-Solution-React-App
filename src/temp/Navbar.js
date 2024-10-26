import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import avatar from "../images/avatar512.png";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({ user, onLogin, onLogout }) => {
  return (
    <nav className="bg-white shadow-bottom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/login"
              className="text-2xl font-bold text-gray-700 hover:text-gray-800 transition-all no-underline hover:no-underline focus:no-underline active:no-underline">
              Inventory Smart
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 px-2 py-2 rounded-md font-medium no-underline hover:no-underline focus:no-underline active:no-underline">
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md font-medium no-underline hover:no-underline focus:no-underline active:no-underline">
                About
              </Link>
            </div>
            <div className="ml-6 flex items-center">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <img src={avatar} alt={user.name} width={32} height={32} className="h-full w-full object-cover" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                  </div>
                  <button
                    onClick={onLogout}
                    className="flex items-center gap-1 px-2 py-1 bg-red-500 text-white rounded-md text-sm cursor-pointer hover:bg-red-600 transition-all">
                    <FontAwesomeIcon icon={faSignOutAlt} size="18" />
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={onLogin}
                  className="flex items-center gap-1 px-2 py-1 bg-[#2462ea] text-white rounded-md text-sm cursor-pointer hover:bg-blue-600 transition-all">
                  <FontAwesomeIcon icon={faUserCircle} size="18" />
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
