import React from "react";
import "./App.css";
import HomePage from "./home/HomePage";
import MaintenanceModal from "./components/MaintenanceModal";

function App() {
  return (
    <div className="App">
      <MaintenanceModal />
      <HomePage />
    </div>
  );
}

export default App;
