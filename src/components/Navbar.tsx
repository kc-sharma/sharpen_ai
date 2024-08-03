// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Logo</div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">What Does it Do?</a>
        <a href="/about">How It Works</a>
        <a href="/services">ho is Sharpen For?</a>
        <a href="/contact">Trusted & Secure</a>
        <a href="/contact">Common Questions</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;