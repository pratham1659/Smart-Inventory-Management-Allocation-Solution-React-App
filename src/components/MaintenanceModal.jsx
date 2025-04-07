import React from "react";

const MaintenanceModal = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white dark:bg-gray-800 text-center p-8 rounded-xl shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold text-red-600 mb-4">🚧 Under Maintenance</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Our backend server is currently undergoing maintenance.
          <br />
          Please check back later.
        </p>
      </div>
    </div>
  );
};

export default MaintenanceModal;
