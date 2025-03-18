// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="footer-social-link"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" className="footer-social-link"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" className="footer-social-link"><i className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" className="footer-social-link"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="footer-copy">
          <p>&copy; 2024 simulab.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
