import React from "react";
import DataTable from "../Datatable";

function ProductConfiguration() {
  return (
    <div>
      <div className="p-6 bg-background rounded-lg mt-2">
        <h2 className="text-xl font-semibold text-foreground mb-1">Filtered Data</h2>
        <DataTable />
      </div>
    </div>
  );
}

export default ProductConfiguration;
