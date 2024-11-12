import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaFilter } from "react-icons/fa";
import { LuRotateCcw } from "react-icons/lu";
import { filterOptions } from "../utils/FilterData";
import DataTable2 from "./DataTable2"; // Assuming DataTable is a separate component

const Constraints = () => {
  const [filters, setFilters] = useState({
    channel: "",
    department: "",
    class: "",
    silhouette: "",
    subCollect: "",
    storeGroup: "",
  });
  const [showData, setShowData] = useState(false);

  const resetFilters = () => {
    setFilters({
      channel: "",
      department: "",
      class: "",
      silhouette: "",
      subCollect: "",
      storeGroup: "",
    });
    setShowData(false);
  };

  const applyFilters = () => {
    setShowData(true);
  };

  return (
    <div className="w-full max-w-[1300px] mx-auto p-1">
      <div className="p-6 rounded-lg bg-white">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Constraints</h1>

        {/* Product Profile Filter Section */}
        <div className="mb-8 p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(filterOptions).map((filterKey, index) => (
              <div key={filterKey} className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1">
                  {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
                  {index < 2 && <span className="text-red-500">*</span>}
                </label>
                <Select
                  value={filters[filterKey]}
                  onValueChange={(value) => setFilters((prev) => ({ ...prev, [filterKey]: value }))}
                  required={index < 2} // Make only the first two dropdowns required
                >
                  <SelectTrigger>
                    <SelectValue placeholder={`Select ${filterKey}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {filterOptions[filterKey].map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button variant="outline" className="flex items-center gap-2" onClick={applyFilters}>
              <FaFilter className="w-4 h-4" />
              Apply
            </Button>
            <Button variant="outline" className="flex items-center gap-2" onClick={resetFilters}>
              <LuRotateCcw className="w-4 h-4" />
              Reset
            </Button>
          </div>
        </div>

        {/* Display DataTable Component */}
        {showData ? (
          <div className="p-6 bg-gray-100 rounded-lg mt-4">
            <DataTable2 filters={filters} /> {/* Pass filters as props */}
          </div>
        ) : (
          <p className="text-gray-500">No data available. Select filters and apply.</p>
        )}
      </div>
    </div>
  );
};

export default Constraints;
