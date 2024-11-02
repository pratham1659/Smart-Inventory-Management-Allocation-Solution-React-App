import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Button from "@mui/material/Button";
import { useStateContext } from "../contexts/ContextProvider";
import FilterDialog from "./FilterDialog";

const SelectFilter = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { currentColor } = useStateContext();

  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <main className="max-w-7xl mx-auto px-4 py-2">
      <div className="flex justify-end mb-4">
        <Button
          variant="contained"
          onClick={handleDialogOpen}
          sx={{
            backgroundColor: currentColor,
          }}>
          <FaFilter className="h-3 w-3 mr-2" />
          Select Filters
        </Button>
      </div>

      <div className="bg-white shadow rounded-lg p-8 flex flex-col items-center justify-center" style={{ height: "60vh" }}>
        <div className="bg-gray-100 rounded-full p-8 mb-4 overflow-hidden">
          <div className="bg-gray-300 w-24 h-32 rounded-lg relative overflow-hidden">
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
        {/* Render FilterDialog */}
        <FilterDialog isOpen={isDialogOpen} onClose={handleDialogClose} />
      </div>
    </main>
  );
};

export default SelectFilter;
