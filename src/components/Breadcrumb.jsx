// src/components/Breadcrumbs.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { breadcrumbData } from "../utils/data";

export default function Breadcrumbs() {
  const location = useLocation();

  // Get the current path and split it into segments
  const currentPath = location.pathname;
  const pathSegments = currentPath.split("/").filter((segment) => segment); // Filter out empty segments

  // Create an array for the breadcrumbs based on the current path
  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const breadcrumb = breadcrumbData.find((item) => item.path === path);

    return breadcrumb || { label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "), path }; // Fallback for unrecognized paths
  });

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex items-center space-x-1 text-sm text-gray-600">
          <Link to="/" className={`text-gray-600 hover:text-gray-800 ${location.pathname === "/" ? "font-bold" : ""}`}>
            {location.pathname === "/" ? "Dashboard" : "Home"}
          </Link>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.path}>
              {index > 0 && <FaChevronRight className="text-gray-600 h-2 w-2" />}
              <FaChevronRight className="text-gray-600 h-2 w-3 mt-0.5" />
              <Link
                to={item.path}
                className={`text-gray-600 hover:text-gray-800 no-underline ${currentPath === item.path ? "font-bold no-underline" : ""}`}>
                {item.label}
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
