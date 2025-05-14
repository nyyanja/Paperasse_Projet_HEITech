import React from 'react';
import './Home.css';

// Import des images depuis src/assets/image
import heroImage from '../assets/images/heroImage.jpg';
import service1 from '../assets/images/service1.jpg';
import service2 from "../assets/images/service2.jpg";
import service3 from '../assets/images/service3.jpg';
import service4 from '../assets/images/service4.jpg';

const Home = () => {
  return (
    <div className="home-container">
      {/* Section Héro */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Bienvenue sur Paperasse Madagascar</h1>
          <p>Des services administratifs simplifiés, à portée de clic.</p>
          <a href="#services" className="cta-button">Voir nos services</a>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Présentation Paperasse Madagascar" />
        </div>
      </section>

      {/* Section Services */}
      <section className="services-section" id="services">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={service1} alt="Création d’entreprise" />
            <h3>Création d’entreprise</h3>
            <p>Nous vous accompagnons dans toutes les étapes.</p>
          </div>
          <div className="service-card">
            <img src={service2} alt="Obtention de documents" />
            <h3>Obtention de documents</h3>
            <p>Actes de naissance, CIN, passeports, et plus encore.</p>
          </div>
          <div className="service-card">
            <img src={service3} alt="Assistance administrative" />
            <h3>Assistance administrative</h3>
            <p>Support personnalisé pour vos démarches.</p>
          </div>
          <div className="service-card">
            <img src={service4} alt="Consultation juridique" />
            <h3>Consultation juridique</h3>
            <p>Nos experts à votre écoute pour vous conseiller.</p>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="about-section">
        <h2>À propos de nous</h2>
        <p>
          Paperasse Madagascar est une entreprise spécialisée dans les services administratifs. Nous mettons un point d’honneur à simplifier la vie de nos clients en prenant en charge leurs démarches administratives.
        </p>
      </section>
    </div>
  );
};

export default Home;
