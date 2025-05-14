// src/components/Register.jsx - Design moderne
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Calcul de la force du mot de passe
    if (name === 'password') {
      let strength = 0;
      if (value.length >= 6) strength += 1;
      if (value.match(/[A-Z]/)) strength += 1;
      if (value.match(/[0-9]/)) strength += 1;
      if (value.match(/[^A-Za-z0-9]/)) strength += 1;
      setPasswordStrength(strength);
    }
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return false;
    }
    
    if (formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Simuler une requête API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Pour simuler un succès
      setSuccess('Inscription réussie! Vous pouvez maintenant vous connecter.');
    } catch (err) {
      setError('Erreur lors de l\'inscription. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="register-container">
      <motion.div 
        className="register-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="register-header">
          <motion.div 
            className="logo-animation"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="logo-circle">
              <div className="madagascar-flag">
                <div className="flag-vertical"></div>
                <div className="flag-horizontal"></div>
              </div>
            </div>
          </motion.div>
          <h2>Inscription</h2>
          <p>Créez votre compte pour accéder à nos services</p>
        </div>

        {error && (
          <motion.div 
            className="message error"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <AlertCircle size={18} />
            <span>{error}</span>
          </motion.div>
        )}
        
        {success && (
          <motion.div 
            className="message success"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
          >
            <CheckCircle size={18} />
            <span>{success}</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="input-container">
            <label htmlFor="name">Nom complet</label>
            <div className="input-wrapper">
              <User size={20} className="input-icon" />
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom complet"
                required
              />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <Mail size={20} className="input-icon" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre adresse email"
                required
              />
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="password">Mot de passe</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Au moins 6 caractères"
                required
                minLength={6}
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="password-strength">
              <div className="strength-meter">
                <div 
                  className={`strength-level ${
                    passwordStrength === 0 ? 'none' :
                    passwordStrength <= 1 ? 'weak' :
                    passwordStrength <= 2 ? 'medium' :
                    'strong'
                  }`} 
                  style={{ width: `${passwordStrength * 25}%` }}
                ></div>
              </div>
              <span className="strength-text">
                {passwordStrength === 0 ? 'Force du mot de passe' :
                 passwordStrength <= 1 ? 'Faible' :
                 passwordStrength <= 2 ? 'Moyen' :
                 'Fort'}
              </span>
            </div>
          </div>
          
          <div className="input-container">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <div className="input-wrapper">
              <Lock size={20} className="input-icon" />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirmer votre mot de passe"
                required
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="terms-agreement">
            <label className="checkbox-container">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              <span className="label-text">J'accepte les <Link to="/terms">conditions d'utilisation</Link> et la <Link to="/privacy">politique de confidentialité</Link></span>
            </label>
          </div>

          <motion.button 
            type="submit" 
            className={`register-button ${loading ? 'loading' : ''}`}
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                <span>Inscription en cours...</span>
              </>
            ) : 'S\'inscrire'}
          </motion.button>
        </form>

        <div className="login-link">
          <p>Vous avez déjà un compte?</p>
          <Link to="/login">Se connecter</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;