import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FaFilter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <Button variant="contained" size="small" className="bg-blue-600 hover:bg-blue-700 text-white">
            <FaFilter className="h-4 w-4 mr-2" />
            Select Filters
          </Button>
        </div>

        <div className="bg-white shadow rounded-lg p-8 flex flex-col items-center justify-center" style={{ height: "60vh" }}>
          <div className="bg-gray-100 rounded-full p-8 mb-4">
            <div className="bg-gray-300 w-24 h-32 rounded-lg relative">
              <div className="absolute inset-2 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="h-1 w-12 bg-gray-400 rounded"></div>
                  <div className="h-1 w-16 bg-gray-400 rounded"></div>
                  <div className="h-1 w-10 bg-gray-400 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-2">
                <IoSearch className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-lg">Apply mandatory filters to view screen</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
