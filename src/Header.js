import React from "react";
import logo from './logo.png'; // import logo image file
import './Style/Header.css';


function Header() {
  return (
    <header className="header">
       <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
