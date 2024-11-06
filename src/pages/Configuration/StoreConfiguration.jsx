// src/components/StoreConfiguration.js
import React from "react";

import DataTable2 from "../DataTable2";

function StoreConfiguration() {
  return (
    <div>
      <div className="p-6 bg-background rounded-lg mt-4">
        <h2 className="text-xl font-semibold text-foreground mb-4">Filtered Data</h2>
        <DataTable2 />
      </div>
    </div>
  );
}

export default StoreConfiguration;
