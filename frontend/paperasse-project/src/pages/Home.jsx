import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import imgUtilisation from "../assets/images/delivery.jpg";
import imgProcessus from "../assets/images/9796305.jpg";
import imgSecurite from "../assets/images/3811343.jpg";


export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé avec succès !");
    console.log(formData);
    // Ici tu peux envoyer les données à un serveur ou une API
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="home-container">
      {/* HERO */}
      <section className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenue sur Paperasse
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Simplifiez vos démarches administratives avec notre plateforme moderne et intuitive.
        </motion.p>
      </section>

      {/* INFO */}
      <section className="info-section">
        <motion.div
          className="info-card"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={imgUtilisation} alt="Image plateforme" />
          <h2>Facilité d'utilisation</h2>
          <p>Une interface claire et simple pour accomplir toutes vos démarches en quelques clics.</p>
        </motion.div>
        <motion.div
          className="info-card"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={imgProcessus} alt="Image processus" />
          <h2>Processus rapide</h2>
          <p>Suivez l'état de vos demandes en temps réel grâce à notre système de tickets et notifications.</p>
        </motion.div>
        <motion.div
          className="info-card"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img src={imgSecurite} alt="Image sécurité" />
          <h2>Sécurité renforcée</h2>
          <p>Vos données sont protégées grâce à des protocoles de sécurité de pointe.</p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Commencez maintenant
        </motion.button>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contactez-nous
        </motion.h2>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Envoyer</button>
        </motion.form>
      </section>
    </div>
  );
}
