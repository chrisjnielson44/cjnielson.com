import React from "react";
import logo from './logo.png'; // import logo image file
import './Style/Header.css';

function Header() {
  return (
    <header className="header">
       <img src={logo} alt="Logo" />
       <p id="header-name"> Christopher Nielson </p>
      <nav>
        <ul>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
