import React from "react";
import { Tooltip } from "@mui/material";
import { FiSettings } from "react-icons/fi";
import { Route, Routes } from "react-router-dom";
import {
  Dashboard,
  Configuration,
  Constraints,
  CreateAllocation,
  Grouping,
  OrderBatching,
  ProductProfile,
  Report,
  ViewPastAllocation,
  Settings,
  HelpSupport,
} from "../pages";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ThemeSettings from "../components/ThemeSettings";
import { useStateContext } from "../contexts/ContextProvider";

const HomePage = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <Tooltip title="Settings" placement="top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
              <FiSettings />
            </button>
          </Tooltip>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? " md:ml-72" : " flex-2"}`}>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Dashboard */}
              {/* <Route index element={<Dashboard />} /> */}

              {/* Pages */}
              <Route path="/configuration" element={<Configuration />} />
              <Route path="/constraints" element={<Constraints />} />
              <Route path="/create-allocation" element={<CreateAllocation />} />
              <Route path="/grouping" element={<Grouping />} />
              <Route path="/order-batching" element={<OrderBatching />} />
              <Route path="/product-profile" element={<ProductProfile />} />
              <Route path="/report" element={<Report />} />
              <Route path="/view-past-allocation" element={<ViewPastAllocation />} />

              {/* Settings and Support */}
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<HelpSupport />} />

              {/* Login Logout */}
              <Route path="/login" element="Login and Logout" />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
