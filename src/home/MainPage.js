import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Layout from "../pages/Layout";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";

const MainPage = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
