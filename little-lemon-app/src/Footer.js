// Footer.js
import React from 'react';
import './App.css'

const Footer = () => {
  return (
    <footer className="footer">
            Navigation
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservation</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>

            Contact
        <ul>
            <li>Address</li>
            <li>Phone Number</li>
        </ul>
    </footer>
  );
};

export default Footer;
