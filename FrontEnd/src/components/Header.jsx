// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          MyLogo
        </Link>
        <nav className="header-nav">
          <Link to="/" className="header-nav-link">Home</Link>
          <Link to="/about" className="header-nav-link">About</Link>
          <Link to="/services" className="header-nav-link">Services</Link>
          <Link to="/contact" className="header-nav-link">Contact</Link>
          <Link to="/register" className="header-nav-link">Register</Link>
          <Link to="/todo" className="header-nav-link">ToDo</Link>
          <Link to="/SmartDoor" className="header-nav-link">Smart Door</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
