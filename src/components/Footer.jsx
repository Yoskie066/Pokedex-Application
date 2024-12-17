import React from "react";
import "../css/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Einon Cris O.Alcantara </p>
        <p>
          Data sourced from <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

