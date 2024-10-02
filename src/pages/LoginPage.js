import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./style.css";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <Navbar />
      <div>
        <h1>Login for Inventory Smart</h1>
      </div>
      <div className="login-card">
        <h1>Sign in to your accounts</h1>
        <form>
          <div className="form-group">
            <label className="text-align" htmlFor="name">
              Email
            </label>
            <input type="text" id="name" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <label className="text-align" htmlFor="password">
              Password
            </label>
            <div className="password-input">
              <input type={showPassword ? "text" : "password"} id="password" placeholder="Password" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="forgot-password">
            <a href="/">Forgot Password?</a>
          </div>
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
        <div className="divider">
          <span>or continue with</span>
        </div>
        <div className="social-buttons">
          <button className="google-button">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </button>
          <button className="sso-button">Login with SSO</button>
        </div>
        <div className="help-text">
          Need any help? <a href="/">Contact now</a>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
