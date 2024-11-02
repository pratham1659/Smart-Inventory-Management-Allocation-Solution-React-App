import React, { useEffect } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IconButton, Tooltip } from "@mui/material";
import UserProfile from "./UserProfile";
import Notification from "./Notification";

import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";

const NavButton = ({ title, customFunc, icon, color, dotColor, currentColor }) => (
  <Tooltip title={title} placement="bottom">
    <button type="button" onClick={() => customFunc()} style={{ color }} className="relative text-xl rounded-full p-2 hover:bg-light-gray">
      <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    </button>
  </Tooltip>
);

const Navbar = () => {
  // eslint-disable-next-line
  const { activeMenu, setActiveMenu, handleClick, isClicked, setIsClicked, screenSize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    // eslint-disable-next-line
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex items-center justify-between p-2 relative" style={{ boxShadow: "0 2px 2px -2px rgba(0, 0, 0, 0.2)" }}>
      <div className="flex items-center gap-3">
        <NavButton
          title={activeMenu ? "Collapse Menu" : "Expand Menu"}
          customFunc={handleActiveMenu}
          placement="bottom"
          color={currentColor}
          icon={
            activeMenu ? (
              <MdOutlineMenuOpen
                style={{ color: currentColor, textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
                className="text-3xl transition-transform duration-300"
              />
            ) : (
              <IoMenu
                style={{ color: currentColor, textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
                className="text-3xl transition-transform duration-300 rotate-180"
              />
            )
          }
        />
        <Link
          to="/"
          className="items-center gap-3 pl-2 ml-1 mt-2 pb-2 flex  lg:text-2xl xs:text-base xs:pl-0 font-extrabold tracking-tight dark:text-white text-gray-800">
          <span>Inventory Insight</span>
        </Link>
      </div>

      <div className="flex">
        <div>
          <IconButton size="large" aria-label="show 2 new notifications" color={currentColor} onClick={() => handleClick("notification")}>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
        <Tooltip content="Profile" placement="bottom">
          <div
            className="flex items-center gap-3 pl-2 cursor-pointer p-1 hover:bg-light-gray 
            dark:hover:bg-gray-800 rounded-lg"
            onClick={() => handleClick("userProfile")}>
            <p>
              <span className="text-gray-500 text-20 dark:text-white"> Hi, </span>
              <span className="text-gray-500 font-bold ml-1 text-20 dark:text-white">Pratham</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-20 dark:text-white" />
          </div>
        </Tooltip>
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
