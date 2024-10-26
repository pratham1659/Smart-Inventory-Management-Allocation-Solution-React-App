import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Configuration from "../pages/Configuration";
import Constraints from "../pages/Constraints";
import CreateAllocation from "../pages/CreateAllocation";
import Grouping from "../pages/Grouping";
import OrderBatching from "../pages/OrderBatching";
import ProductProfile from "../pages/ProductProfile";
import Report from "../pages/Report";
import ViewPastAllocation from "../pages/ViewPastAllocation";
import Settings from "../pages/Settings";
import HelpSupport from "../pages/HelpSupport";

const HomePage = () => {
  const activeMenu = true;

  return (
    <div>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <Tooltip title="Settings" placement="top">
            <IconButton type="button" sx={{ padding: "0.5rem", background: "blue", hover: "" }}>
              <SettingsOutlinedIcon
                sx={{
                  fontSize: "2rem",
                  color: "white",
                  "&:hover": {
                    color: "grey",
                  },
                }}
              />
            </IconButton>
          </Tooltip>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">sidebar w-10</div>
        ) : (
          <div className="w-0 bg-secondary-dark-bg">sidebar</div>
        )}
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? " md:ml-72" : " flex-2"}`}>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">Navbar</div>
        </div>
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<Dashboard />}>
            {/* Dashboard */}
            <Route index element={<Dashboard />} />

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
          </Route>

          {/* Login Logout */}
          <Route path="/login" element="Login and Logout" />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
