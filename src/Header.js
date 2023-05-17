import React from "react";
import logo from './logo.png'; // import logo image file
import './Style/Header.css';

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

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
