// Header.js
import React from 'react';
import './Header.css';
import logoImage from '../Assets/logo.jpg';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={logoImage} alt="Little Lemon Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;