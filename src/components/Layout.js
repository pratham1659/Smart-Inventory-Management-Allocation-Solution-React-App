import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumb";

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <Breadcrumbs />
        <div className="p-4">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
