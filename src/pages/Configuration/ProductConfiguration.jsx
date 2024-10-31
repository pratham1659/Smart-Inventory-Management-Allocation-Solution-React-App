import React from "react";

function ProductConfiguration() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Product Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Channel Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-1">
            Channel
            <span className="text-red-500">*</span>
          </label>
          <select className="w-full p-2 border rounded-lg" defaultValue="retail-store">
            <option value="retail-store">Retail-Store</option>
          </select>
        </div>
        {/* Department Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-1">
            Department
            <span className="text-red-500">*</span>
          </label>
          <select className="w-full p-2 border rounded-lg" defaultValue="d01">
            <option value="d01">D01-Womens Bags</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProductConfiguration;
