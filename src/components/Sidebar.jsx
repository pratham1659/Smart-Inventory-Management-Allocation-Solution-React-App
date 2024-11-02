import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Tooltip } from "@mui/material";

import { SIDEBAR_LINKS } from "../utils/data";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const sidebarRef = useRef(null);

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActiveMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setActiveMenu]);

  const activeLink = `flex items-center gap-6 pl-4 pt-3 pb-3 text-white text-md ${activeMenu ? "rounded-l-lg rounded-r-lg" : ""}`;
  // const normalLink = `flex items-center gap-6 pl-4 pt-3 pb-3 text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray ${
  //   activeMenu ? "rounded-l-lg rounded-r-lg" : ""
  // }`;

  const normalLink = `flex items-center gap-6 pl-4 pt-3 pb-3 text-md text-gray-200 hover:text-black hover:bg-light-gray ${
    activeMenu ? "rounded-l-lg rounded-r-lg" : ""
  }`;

  return (
    <div
      ref={sidebarRef}
      className={`${
        activeMenu
          ? "ml-3 mr-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10"
          : "ml-0 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10"
      }`}>
      <div className="flex justify-between items-center">
        {activeMenu && (
          <Link
            to="/"
            onClick={handleCloseSidebar}
            // className="items-center gap-3 pl-0 ml-1 mt-4 flex text-2xl font-extrabold tracking-tight dark:text-white text-slate-900">
            className="items-center gap-3 pl-0 ml-1 mt-4 flex text-2xl font-extrabold tracking-tight dark:text-white text-white">
            <MdDashboard fontSize={30} />
            <span>Navigation</span>
          </Link>
        )}
        <Tooltip title="collapse Menu" placement="bottom">
          <button
            type="button"
            onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            className={`${
              !activeMenu ? "ml-3 mr-3" : ""
            } text-4xl rounded-full p-2 mt-1 block hover:shadow-xl transition-shadow duration-300`}>
            <MdOutlineMenuOpen
              style={{ color: currentColor, textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
              className={`${!activeMenu ? "rotate-180" : ""} transition-transform duration-300`}
            />
          </button>
        </Tooltip>
      </div>
      <div className="mt-8">
        {SIDEBAR_LINKS.map((item) => (
          <div key={item.key} className="relative group">
            <NavLink
              to={item.path}
              onClick={handleCloseSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              <Tooltip
                title={item.label}
                placement="right"
                arrow
                slotProps={{
                  popper: {
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [0, 20],
                        },
                      },
                    ],
                  },
                }}>
                <span className="lg:text-2xl md:text-xl ml-3"> {item.icon}</span>
              </Tooltip>
              {activeMenu && <span style={{ whiteSpace: "noWrap" }}>{item.label}</span>}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
