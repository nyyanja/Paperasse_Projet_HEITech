// File: src/pages/Home.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiCheck } from 'react-icons/fi';
import './Home.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = ['Témoignage 1', 'Témoignage 2', 'Témoignage 3'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1>Paperasse Madagascar</h1>
        <p>Simplifiez vos démarches administratives à Madagascar</p>
      </section>

      {/* TESTIMONIAL INDICATORS */}
      <section className="testimonial-section">
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(index)}
            />
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Notre impact en chiffres
        </motion.h2>
        <div className="stats-container">
          <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Utilisateurs actifs</div>
          </motion.div>
          <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
            <div className="stat-number">50,000+</div>
            <div className="stat-label">Documents traités</div>
          </motion.div>
          <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }}>
            <div className="stat-number">98%</div>
            <div className="stat-label">Taux de satisfaction</div>
          </motion.div>
          <motion.div className="stat-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.4 }}>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support disponible</div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-content">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Prêt à simplifier vos démarches administratives ?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
            Rejoignez des milliers de Malgaches qui gagnent déjà du temps et évitent les tracas administratifs.
          </motion.p>
          <motion.button className="cta-button" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Démarrer maintenant
          </motion.button>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          Contactez-nous
        </motion.h2>
        <div className="contact-container">
          <div className="contact-info">
            <motion.h3 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>Nos coordonnées</motion.h3>
            <motion.div className="contact-detail" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }}>
              <FiMail size={20} color="#007e3a" />
              <div><h4>Email</h4><p>contact@paperasse-madagascar.com</p></div>
            </motion.div>
            <motion.div className="contact-detail" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }}>
              <FiPhone size={20} color="#007e3a" />
              <div><h4>Téléphone</h4><p>+261 34 12 345 67</p></div>
            </motion.div>
            <motion.div className="contact-detail" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }}>
              <FiMapPin size={20} color="#007e3a" />
              <div><h4>Adresse</h4><p>67 Rue Patrice Lumumba, Antananarivo 101, Madagascar</p></div>
            </motion.div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <AnimatePresence>
              {isFormSubmitted ? (
                <motion.div className="form-success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <FiCheck size={30} color="#007e3a" />
                  <h3>Message envoyé avec succès !</h3>
                  <p>Nous vous répondrons dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <>
                  <motion.input type="text" name="name" placeholder="Votre nom complet" value={formData.name} onChange={handleChange} className="form-control" required initial="hidden" whileInView="visible" variants={fadeInUp} />
                  <motion.input type="email" name="email" placeholder="Votre adresse email" value={formData.email} onChange={handleChange} className="form-control" required initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ delay: 0.1 }} />
                  <motion.input type="text" name="subject" placeholder="Sujet" value={formData.subject} onChange={handleChange} className="form-control" required initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ delay: 0.2 }} />
                  <motion.textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} className="form-control" required initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ delay: 0.3 }} />
                  <motion.button type="submit" className="cta-button" initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ delay: 0.4 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Envoyer</motion.button>
                </>
              )}
            </AnimatePresence>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Paperasse Madagascar. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
