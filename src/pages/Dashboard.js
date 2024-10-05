import React, { useState } from "react";
import "./style/dashboard.css";
import PrivateNavbar from "../components/PrivateNavbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({
      name: "John Doe",
      // avatar: "../temp/images/avatar512.png",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div className="dashboard">
      <div className="main-content">
        <PrivateNavbar user={user} onLogin={handleLogin} onLogout={handleLogout} />
        <Sidebar>
          <div>
            <nav className="breadcrumb">
              <span>Home</span> / <span>Decision Dashboard</span>
            </nav>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default Dashboard;
