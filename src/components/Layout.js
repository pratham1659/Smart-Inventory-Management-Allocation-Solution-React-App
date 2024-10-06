import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="p-4">
        <div className="bg-teal-200">header</div>
        <div>
          <nav className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>Home</span>
                <MdOutlineKeyboardArrowRight className="h-4 w-4" />
                <span>Decision Dashboard</span>
              </div>
            </div>
          </nav>
        </div>
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
