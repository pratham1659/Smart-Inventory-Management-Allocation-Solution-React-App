import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

import { themeColors } from "../utils/data";
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-90">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-2xl">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-3xl hover:bg-light-gray">
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl ">Theme Option</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="Light"
              className="appearance-none w-[18px] h-[18px] border-2 border-gray-300 rounded-full checked:border-[#3b82f6] checked:border-[5px] transition-all duration-200 cursor-pointer"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="Dark"
              disabled
              onChange={setMode}
              className="appearance-none w-[18px] h-[18px] border-2 border-gray-300 rounded-full checked:border-[#3b82f6] checked:border-[5px] transition-all duration-200 cursor-pointer"
              checked={currentMode === "Dark"}
            />

            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              Dark
              <span className="text-red-600 text-sm font-bold"> * disabled</span>
            </label>
          </div>
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl ">Theme Colors</p>
          <div className="flex gap-1">
            {themeColors.map((item, index) => (
              <Tooltip key={index} title={item.name} placement="top">
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center" key={item.name}>
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}>
                    <BsCheckLg className={`ml-2 text-2xl text-white ${item.color === currentColor ? "block" : "hidden"}`} />
                  </button>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
