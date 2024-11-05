import React from "react";
import SelectFilter from "../components/SelectFilter";

const Dashboard = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto">
      <div className="p-0 rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-0 ml-4">Dashboard</h1>
        <SelectFilter />
      </div>
    </div>
  );
};

export default Dashboard;
