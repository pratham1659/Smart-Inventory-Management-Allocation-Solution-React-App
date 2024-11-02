import React from "react";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
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
import Breadcrumbs from "../components/Breadcrumb";
import Sidebar from "../components/Sidebar";
import ThemeSettings from "../components/ThemeSettings";
import { useStateContext } from "../contexts/ContextProvider";

const HomePage = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={`bg-gray-100 ${currentMode === "Dark" ? "dark" : ""}`}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-2 bottom-3" style={{ zIndex: "1000" }}>
          <Tooltip title="Settings" placement="top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray">
              <FiSettings className="text-xl" />
            </button>
          </Tooltip>
        </div>

        {/* Sidebar */}
        <motion.div
          animate={{ width: activeMenu ? "18rem" : "5rem" }}
          className={`fixed sidebar bg-main-dark-bg ${activeMenu ? "w-72 " : "w-20"} dark:bg-secondary-dark-bg`}>
          <Sidebar />
        </motion.div>

        {/* Main Content Wrapper */}
        <div className={`flex-1 min-h-screen transition-all duration-300 ease-in-out`}>
          {/* Navbar */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-main-bg navbar dark:bg-main-dark-bg shadow-md">
            <Navbar />
          </div>

          {/* Main Scrollable Content */}

          <div className="mt-20 ml-20 px-4 pb-4 overflow-y-auto bg-gray-100 ">
            <Breadcrumbs />
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
