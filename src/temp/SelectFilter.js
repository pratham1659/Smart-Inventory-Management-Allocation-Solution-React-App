import React from "react";
import { FaFilter } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";

const SelectFilter = () => {
  const { currentColor } = useStateContext();
  return (
    <main className="max-w-7xl mx-auto px-4 py-2">
      <div className="flex justify-end mb-4">
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white hover:bg-blue-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          style={{ backgroundColor: currentColor }}>
          <FaFilter className="h-3 w-3 mr-2" />
          Select Filters
        </button>
      </div>

      <div
        className="bg-white dark:bg-secondary-dark-bg shadow rounded-lg p-8 flex flex-col items-center justify-center"
        style={{ height: "60vh" }}>
        <div className="bg-gray-100 rounded-full p-8 mb-4">
          <div className="bg-gray-300 w-24 h-32 rounded-lg relative">
            <div className="absolute inset-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="h-1 w-12 bg-gray-400 rounded"></div>
                <div className="h-1 w-16 bg-gray-400 rounded"></div>
                <div className="h-1 w-10 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 rounded-full p-2" style={{ backgroundColor: currentColor }}>
              <BsSearch className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-white text-lg">Apply mandatory filters to view screen</p>
      </div>
    </main>
  );
};

export default SelectFilter;
