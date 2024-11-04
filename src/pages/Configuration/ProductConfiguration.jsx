import React from "react";
import DataTable from "../Datatable";

function ProductConfiguration() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Product Status</h2>
      <div className="p-6 bg-background rounded-lg mt-4">
        <h2 className="text-xl font-semibold text-foreground mb-4">Filtered Data</h2>
        <DataTable />
      </div>
    </div>
  );
}

export default ProductConfiguration;
