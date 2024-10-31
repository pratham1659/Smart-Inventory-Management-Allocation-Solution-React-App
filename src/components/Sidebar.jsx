import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Tooltip } from "@mui/material";

import { SIDEBAR_LINKS } from "../utils/data";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = "flex items-center gap-6 pl-4 pt-3 pb-3 rounded-l-lg text-white text-md";
  const normalLink =
    "flex items-center gap-6 pl-4 pt-3 pb-3 rounded-l-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray";

  const animateEffect = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      <div className="flex justify-between items-center">
        <AnimatePresence>
          {activeMenu && (
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 pl-0 ml-1 mt-4 flex text-2xl font-extrabold tracking-tight dark:text-white text-slate-900">
              <MdDashboard fontSize={30} />
              <span>Navigation</span>
            </Link>
          )}
        </AnimatePresence>
        <Tooltip title="collapse Menu" placement="bottom">
          <button
            type="button"
            onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            className="text-4xl rounded-full p-2 mr-1.5 hover:bg-light-gray mt-1 block">
            <MdOutlineMenuOpen
              style={{ color: currentColor, textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
              className={`${!activeMenu ? "rotate-180" : ""} transition-transform duration-300`}
            />
          </button>
        </Tooltip>
      </div>
      <div className="mt-4">
        {SIDEBAR_LINKS.map((item) => (
          <div key={item.key}>
            <NavLink
              to={item.path}
              onClick={handleCloseSidebar}
              style={({ isActive }) => ({
                backgroundColor: isActive ? currentColor : "",
              })}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}>
              <span className="lg:text-2xl md:text-xl"> {item.icon}</span>
              <AnimatePresence>
                {activeMenu && (
                  <motion.span variants={animateEffect} initial="hidden" animate="show" exit="hidden" style={{ whiteSpace: "noWrap" }}>
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
