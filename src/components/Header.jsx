// src/components/Header.jsx
import React, { useState } from "react";
import "./Header.css";  // Estilos para o Header

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-brand">
          <div className="logo">
            <span className="logo-text">Logooooo</span>
            <div className="logo-shine"></div>
          </div>

          <div className="nav-links">
          <a href="#" className="nav-link active">
            <span>Home</span>
          </a>
          <a href="#" className="nav-link">
            <span>Products</span>
          </a>
          <a href="#" className="nav-link">
            <span>About</span>
          </a>
          <a href="#" className="nav-link">
            <span>Contact</span>
          </a>
        </div>
        </div>

        <div className="nav-actions">
          <button className="action-btn">
            <div className="btn-text">Download</div>
          </button>
        </div>

        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenu ? "active" : ""}`}>
        <div className="menu-header">
          <button className="close-menu" onClick={toggleMobileMenu}>
          </button>
        </div>
        <div className="menu-links">
          <a href="#" className="menu-link active">
            <span>Home</span>
          </a>
          <a href="#" className="menu-link">
            <span>Products</span>
          </a>
          <a href="#" className="menu-link">
            <span>About</span>
          </a>
          <a href="#" className="menu-link">
            <span>Contact</span>
          </a>
        </div>
        <div className="menu-footer">
          <button className="mobile-action-btn">
            <span>Download</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
