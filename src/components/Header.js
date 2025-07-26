import React from 'react';
import './Header.css';
import { FaRegSun } from 'react-icons/fa';

const toggleTheme = () => {
  const root = document.documentElement;
  const current = root.getAttribute('data-theme');
  root.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
};

export default function Header() {
  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="logo-container">
        <div className="logo-diamond">
          <span className="logo-text">AL</span>
        </div>
      </div>

      {/* Center: Navigation */}
      <nav className="nav">
        {['Home', 'Work', 'About', 'Blog', 'Contact', 'More'].map((label, i) => (
          <a key={i} href="#" className={label === 'Home' ? 'active' : ''}>
            {label}
            {i !== 5 && <span className="dot">•</span>}
          </a>
        ))}
      </nav>

      {/* Right: Theme toggle + CTA */}
      <div className="header-actions">
        <button className="gear-button" onClick={toggleTheme}>
          <FaRegSun />
        </button>
        <a href="#" className="buy-button">CONTACT NOW!</a>
      </div>
    </header>
  );
}
