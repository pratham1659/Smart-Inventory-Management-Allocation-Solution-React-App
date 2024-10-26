import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FaFilter } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif", // Replace with your desired font
  },
});

const SelectFilter = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-2">
      <div className="flex justify-end mb-4">
        <ThemeProvider theme={theme}>
          <Button variant="contained" size="small" className="bg-blue-600 hover:bg-blue-00 text-white " disableElevation>
            <FaFilter className="h-3 w-3 mr-2" />
            Select Filters
          </Button>
        </ThemeProvider>
      </div>

      <div className="bg-white shadow rounded-lg p-8 flex flex-col items-center justify-center" style={{ height: "60vh" }}>
        <div className="bg-gray-100 rounded-full p-8 mb-4">
          <div className="bg-gray-300 w-24 h-32 rounded-lg relative">
            <div className="absolute inset-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="h-1 w-12 bg-gray-400 rounded"></div>
                <div className="h-1 w-16 bg-gray-400 rounded"></div>
                <div className="h-1 w-10 bg-gray-400 rounded"></div>
              </div>
            </div>
            <div className="absolute bottom-2 right-2 bg-blue-500 rounded-full p-2">
              <BsSearch className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-lg">Apply mandatory filters to view screen</p>
      </div>
    </main>
  );
};

export default SelectFilter;
