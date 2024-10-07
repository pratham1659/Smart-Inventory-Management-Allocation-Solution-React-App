import React from "react";
import Button from "@mui/material/Button";
import { BsBell } from "react-icons/bs";

const Header = () => {
  const username = "John Doe"; // Replace with your username variable
  const firstLetter = username.charAt(0).toUpperCase();

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Inventory Insight</h1>
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon">
            <BsBell className="h-5 w-5 text-gray-500" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">{firstLetter}</div>
            <span className="text-sm font-medium text-gray-700">Hi, {username}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
