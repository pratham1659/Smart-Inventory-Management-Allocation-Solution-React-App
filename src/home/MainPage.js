import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import Navbar from "../components/Navbar";

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <LoginPage />
    </div>
  );
};

export default MainPage;
