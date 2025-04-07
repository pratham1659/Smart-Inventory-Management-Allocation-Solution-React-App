import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import Button from "./Button";
import { useStateContext } from "../contexts/ContextProvider";

// eslint-disable-next-line react/prop-types
const Notification = ({ onClose }) => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 shadow-xl z-50">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <p className="font-semibold text-lg dark:text-gray-200">Notifications</p>
          <button
            type="button"
            className="text-white text-xs rounded px-3 py-1 bg-orange-500 hover:bg-orange-600 transition-colors duration-200">
            Coming Soon
          </button>
        </div>

        {/* Cancel Button */}
        <button
          type="button"
          onClick={onClose}
          className="text-gray-400 hover:text-red-500 p-2 rounded-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          title="Close">
          <MdOutlineCancel className="text-xl" />
        </button>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-center h-40 flex-col gap-2">
          <span role="img" aria-label="construction" className="text-3xl">
            🚧
          </span>
          <p className="text-gray-500 dark:text-gray-400 text-center text-sm">
            This feature will be available in upcoming updates!
            <br />
            Stay tuned for new notification capabilities. 🚀
            <br />
            <span className="mt-2 inline-block">✨ Exciting things are on the way!</span>
          </p>
        </div>

        <div className="mt-5">
          <Button color="white" bgColor={currentColor} text="See all notifications" borderRadius="10px" width="full" />
        </div>
      </div>
    </div>
  );
};

export default Notification;
