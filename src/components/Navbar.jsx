import React, { useEffect } from "react";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Tooltip } from "@mui/material";
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

  return (
    <div className="flex justify-between p-2 relative" style={{ boxShadow: "0 2px 2px -2px rgba(0, 0, 0, 0.2)" }}>
      <Link
        to="/"
        className="items-center gap-3 pl-2 ml-1 mt-2 pb-2 flex text-2xl font-extrabold tracking-tight dark:text-white text-slate-900">
        <span>Inventory Insight</span>
      </Link>

      <div className="flex">
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <Tooltip content="Profile" placement="bottom">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray 
            dark:hover:bg-gray-800 rounded-lg"
            onClick={() => handleClick("userProfile")}>
            <p>
              <span className="text-gray-500 text-20 dark:text-white"> Hi, </span>
              <span className="text-gray-500 font-bold ml-1 text-20 dark:text-white">Michael</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14 dark:text-white" />
          </div>
        </Tooltip>
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
