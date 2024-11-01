import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../pages/Dashboard";
import Configuration from "../pages/Configuration";
import Constraints from "../pages/Constraints";

const MainPage = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="constraints" element={<Constraints />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
