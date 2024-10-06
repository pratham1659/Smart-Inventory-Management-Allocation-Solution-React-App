import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>
        <Link to="about" className="underline">
          Go to About
        </Link>
      </p>
      <p>
        <Link to="login" className="underline">
          Go to Login Page
        </Link>
      </p>
    </div>
  );
};

export default Dashboard;
