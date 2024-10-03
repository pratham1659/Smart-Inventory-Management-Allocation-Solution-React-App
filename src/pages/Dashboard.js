import React from "react";
import "style.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav>
          <ul>
            <li className="active">
              <a href="#">
                <i className="icon-dashboard"></i> Dashboard
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-product"></i> Product Profile
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-allocation"></i> Create New Allocation
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-grouping"></i> Grouping
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-configuration"></i> Configuration
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-constraints"></i> Constraints
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-report"></i> Report
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-ada"></i> ADA Visual
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-past"></i> View Past Allocation
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-batching"></i> Order Batching
              </a>
            </li>
          </ul>
        </nav>
        <div className="logout">
          <a href="#">
            <i className="icon-logout"></i> Logout
          </a>
        </div>
      </aside>
      <main className="main-content">
        <header className="top-bar">
          <h1>[UAT] IA Smart Platform</h1>
          <div className="top-bar-right">
            <button className="icon-button">
              <i className="icon-question"></i>
            </button>
            <button className="icon-button">
              <i className="icon-notification"></i>
            </button>
            <span className="user-greeting">Hi, Carteruat1</span>
          </div>
        </header>
        <nav className="breadcrumb">
          <span>Home</span> / <span>Decision Dashboard</span>
        </nav>
        <div className="content">
          <button className="filter-button">Select Filters</button>
          <div className="empty-state">
            <img src="/placeholder.svg?height=100&width=100" alt="Empty state illustration" />
            <p>Apply mandatory filters to view screen</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
