import React from "react";
import SelectFilter from "../components/SelectFilter";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <span className="text-2xl mx-4 ml-3 font-semibold">Dashboard</span>
      <SelectFilter />
    </div>
  );
};

export default Dashboard;
