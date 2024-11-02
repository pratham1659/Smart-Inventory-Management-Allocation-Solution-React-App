import React from "react";
import SelectFilter from "../components/SelectFilter";

const CreateAllocation = () => {
  return (
    <div>
      <div className="min-h-screen">
        <span className="text-2xl mx-4 ml-3 font-semibold">Create New Allocation</span>
        <SelectFilter />
      </div>
    </div>
  );
};

export default CreateAllocation;
