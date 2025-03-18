import React from "react";
import "./CardLogIn.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const CardLogIn = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Login Submitted!");
    };
  
    const handleForgotPassword = () => {
      alert("Forgot Password clicked!");
    };
  
    return (
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Remember Me
            </label>
            <button
              type="button"
              className="forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button>
          </div>
          <button type="submit" className="login-button">
            Submit
          </button>
        </form>
      </div>
    );
  };
export default CardLogIn;
