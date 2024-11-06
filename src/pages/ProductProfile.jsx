import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaFilter } from "react-icons/fa";
import { LuRotateCcw } from "react-icons/lu";
import { fetchItems } from "../utils/apiService";

const ProductProfile = () => {
  const [filters, setFilters] = useState({
    brand: "",
    channel: "",
    department: "",
    class: "",
    sub_class: "",
    style_id: "",
  });
  const [showData, setShowData] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const resetFilters = () => {
    setFilters({
      brand: "",
      channel: "",
      department: "",
      class: "",
      sub_class: "",
      style_id: "",
    });
    setShowData(false);
    setData([]);
    setError(null);
  };

  const applyFilters = async () => {
    try {
      const response = await axios.get("http://localhost:8000/items", {
        params: { ...filters },
      });
      setData(response.data);
      setShowData(true);
      setError(null);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      setError("Failed to load data. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-[1300px] mx-auto p-1">
      <div className="p-6 rounded-lg bg-white">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Product Profile</h1>

        {/* Product Profile Filter Section */}
        <div className="mb-8 p-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(filters).map((filterKey, index) => (
              <div key={filterKey} className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-1">
                  {filterKey.charAt(0).toUpperCase() + filterKey.slice(1).replace("_", " ")}
                  {index < 3 && <span className="text-red-500">*</span>}
                </label>
                <Select
                  value={filters[filterKey]}
                  onValueChange={(value) => setFilters((prev) => ({ ...prev, [filterKey]: value }))}
                  required={index < 2}>
                  <SelectTrigger>
                    <SelectValue placeholder={`Select ${filterKey}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {fetchItems[filterKey]?.map((option) => (
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

        {/* Display Table with Data or No Data Message */}
        <div className="p-6 bg-gray-100 rounded-lg mt-4">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Filtered Data</h2>
          {error && <p className="text-red-500">{error}</p>}
          {showData ? (
            <table className="w-full border border-gray-200">
              <thead>
                <tr>
                  <th className="border-b p-2 text-left">Brand</th>
                  <th className="border-b p-2 text-left">Channel</th>
                  <th className="border-b p-2 text-left">Department</th>
                  <th className="border-b p-2 text-left">Class</th>
                  <th className="border-b p-2 text-left">Sub Class</th>
                  <th className="border-b p-2 text-left">Style Group</th>
                  <th className="border-b p-2 text-left">Store Group</th>
                  <th className="border-b p-2 text-left">Sales Units</th>
                  <th className="border-b p-2 text-left">Revenue</th>
                  <th className="border-b p-2 text-left">Margin</th>
                  <th className="border-b p-2 text-left">Bulk Remaining</th>
                  <th className="border-b p-2 text-left">Stock Out</th>
                  <th className="border-b p-2 text-left">Shortfall</th>
                  <th className="border-b p-2 text-left">Normal</th>
                  <th className="border-b p-2 text-left">Excess</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map((item) => (
                    <tr key={item.id}>
                      <td className="border-b p-2">{item.brand || "-"}</td>
                      <td className="border-b p-2">{item.channel || "-"}</td>
                      <td className="border-b p-2">{item.department || "-"}</td>
                      <td className="border-b p-2">{item.class || "-"}</td>
                      <td className="border-b p-2">{item.sub_class || "-"}</td>
                      <td className="border-b p-2">{item.style_group || "-"}</td>
                      <td className="border-b p-2">{item.store_group || "-"}</td>
                      <td className="border-b p-2">{item.sales_units || "-"}</td>
                      <td className="border-b p-2">{item.revenue || "-"}</td>
                      <td className="border-b p-2">{item.margin || "-"}</td>
                      <td className="border-b p-2">{item.bulk_remaining || "-"}</td>
                      <td className="border-b p-2">{item.stock_out || "-"}</td>
                      <td className="border-b p-2">{item.shortfall || "-"}</td>
                      <td className="border-b p-2">{item.normal || "-"}</td>
                      <td className="border-b p-2">{item.excess || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="border-b p-2 text-center text-gray-500">
                      No data available. Select filters and apply.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No data available. Select filters and apply.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductProfile;
