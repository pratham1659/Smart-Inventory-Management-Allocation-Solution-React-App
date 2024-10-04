import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";
import { UserCircle, LogOut } from "lucide-react";

// Home component
const Home = () => <h2>Welcome to the Home Page</h2>;

// About component
const About = () => <h2>About Us</h2>;

// Contact component
const Contact = () => <h2>Contact Us</h2>;

// Breadcrumb component
const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}> / {name}</span>
        ) : (
          <span key={name}>
            {" "}
            / <Link to={routeTo}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

// Sidebar component
const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Navbar component
const Navbar = ({ user, onLogin, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <div className="navbar-menu">
        {user ? (
          <>
            <span className="user-info">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <span className="user-name">{user.name}</span>
            </span>
            <button onClick={onLogout} className="logout-button">
              <LogOut size={18} />
              Logout
            </button>
          </>
        ) : (
          <button onClick={onLogin} className="login-button">
            <UserCircle size={18} />
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

// Main App component
export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    // Simulating a login process
    setUser({
      name: "John Doe",
      avatar: "/placeholder.svg?height=32&width=32",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <div className="app">
        <Navbar user={user} onLogin={handleLogin} onLogout={handleLogout} />
        <div className="main-content">
          <Sidebar />
          <main className="content">
            <Breadcrumb />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

// CSS styles
const styles = `
  .app {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
  }

  .navbar-brand {
    font-size: 1.5em;
    font-weight: bold;
  }

  .navbar-menu {
    display: flex;
    align-items: center;
  }

  .user-info {
    display: flex;
    align-items: center;
    margin-right: 15px;
  }

  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .user-name {
    font-weight: bold;
  }

  .login-button,
  .logout-button {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
  }

  .login-button {
    background-color: #4CAF50;
    color: white;
  }

  .logout-button {
    background-color: #f44336;
    color: white;
  }

  .main-content {
    display: flex;
    flex-grow: 1;
  }

  .sidebar {
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
  }

  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }

  .sidebar li {
    margin-bottom: 10px;
  }

  .sidebar a {
    text-decoration: none;
    color: #333;
  }

  .sidebar a.active {
    font-weight: bold;
    color: #0066cc;
  }

  .content {
    flex-grow: 1;
    padding: 20px;
  }

  .breadcrumb {
    margin-bottom: 20px;
  }

  .breadcrumb a {
    text-decoration: none;
    color: #0066cc;
  }
`;

// Add styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
