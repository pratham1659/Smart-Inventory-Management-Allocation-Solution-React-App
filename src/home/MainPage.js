import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import Configuration from "../pages/Configuration";
import Constraints from "../pages/Constraints";
import ProductProfile from "../pages/ProductProfile";
import CreateAllocation from "../pages/CreateAllocation";
import Grouping from "../pages/Grouping";
import OrderBatching from "../pages/OrderBatching";
import Report from "../pages/Report";
import ViewPastAllocation from "../pages/ViewPastAllocation";
import Settings from "../pages/Settings";
import HelpSupport from "../pages/HelpSupport";

const MainPage = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="constraints" element={<Constraints />} />
            <Route path="create-allocation" element={<CreateAllocation />} />
            <Route path="grouping" element={<Grouping />} />
            <Route path="order-batching" element={<OrderBatching />} />
            <Route path="product-profile" element={<ProductProfile />} />
            <Route path="report" element={<Report />} />
            <Route path="view-past-allocation" element={<ViewPastAllocation />} />
            <Route path="settings" element={<Settings />} />
            <Route path="support" element={<HelpSupport />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainPage;
