// src/components/Navbar.jsx - Redesign moderne
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react'; // Importation de l'icône du menu
import './Navbar.css';
import logoImg from '../assets/images/logo-madagascar.jpg'; // Assurez-vous d'avoir un logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  // Fonction pour vérifier si le lien est actif
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Fonction pour basculer le menu sur mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo-container">
        <img src={logoImg} alt="Logo Paperasse Madagascar" className="logo" />
        <span className="brand-name">Paperasse</span>
        
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Menu">
          <Menu size={24} />
        </button>
      </div>
      
      <ul className={menuOpen ? 'open' : ''}>
        <li><Link to="/" className={isActive('/')}>Accueil</Link></li>
        <li><Link to="/formulaires" className={isActive('/formulaires')}>Formulaires</Link></li>
        <li><Link to="/services" className={isActive('/services')}>Services</Link></li>
        <li><Link to="/register" className={isActive('/register')}>S'inscrire</Link></li>
        <li><Link to="/login" className={isActive('/login')}>Se connecter</Link></li>
        <li><Link to="/users" className={isActive('/users')}>Utilisateurs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;