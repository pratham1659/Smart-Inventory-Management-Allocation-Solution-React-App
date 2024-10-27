import React from "react";
import SelectFilter from "../temp/SelectFilter";

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
