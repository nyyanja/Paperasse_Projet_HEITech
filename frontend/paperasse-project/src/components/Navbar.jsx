import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">HEITech</div>
      <ul className="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/formulaires">Formulaires</a></li>
        <li><a href="#contact">Contact</a></li>  {/* Lien vers la section Contact */}
      </ul>
    </nav>
  );
}
