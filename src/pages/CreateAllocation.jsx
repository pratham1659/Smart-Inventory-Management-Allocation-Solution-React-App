import React from "react";
import SelectFilter from "../components/SelectFilter";

const CreateAllocation = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100">
        <span className="text-center">Constraints</span>
        <SelectFilter />
      </div>
    </div>
  );
};

export default CreateAllocation;
