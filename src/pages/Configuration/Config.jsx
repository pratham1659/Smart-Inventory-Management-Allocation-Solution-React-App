// src/components/ConfigurationComponent.js
import React, { useState } from "react";
import ProductConfiguration from "./ProductConfiguration";
import StoreConfiguration from "./StoreConfiguration";
import { FaFilter, FaRedo } from "react-icons/fa";

function Config() {
  const [activeTab, setActiveTab] = useState("Product Configuration");

  return (
    <div className="w-full max-w-[1200px] mx-auto p-1">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Configuration</h1>

      {/* Tabs */}
      <div className="border-b mb-6">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab("Product Configuration")}
            className={`pb-2 px-1 ${
              activeTab === "Product Configuration"
                ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}>
            Product Configuration
          </button>
          <button
            onClick={() => setActiveTab("Store Configuration")}
            className={`pb-2 px-1 ${
              activeTab === "Store Configuration"
                ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
            }`}>
            Store Configuration
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="mb-8">
        {activeTab === "Product Configuration" ? <ProductConfiguration /> : <StoreConfiguration />}
        <div className="flex justify-end gap-4 mt-6">
          <button className="flex items-center gap-2 border p-2 rounded-lg text-gray-700">
            <FaFilter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 border p-2 rounded-lg text-gray-700">
            <FaRedo className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Config;
