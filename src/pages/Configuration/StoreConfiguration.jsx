// src/components/StoreConfiguration.js
import React from "react";

function StoreConfiguration() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Store Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Store Name</label>
          <input type="text" className="w-full p-2 border rounded-lg" placeholder="Enter store name" />
        </div>
      </div>
    </div>
  );
}

export default StoreConfiguration;
