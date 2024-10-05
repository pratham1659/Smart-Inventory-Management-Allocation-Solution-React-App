import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import About from "../pages/About";
import "./main.css";

const MainPage = () => {
  return (
    <div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
