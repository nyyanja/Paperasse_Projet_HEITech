import React, { useState } from "react";
import { motion } from "framer-motion";
import { UploadCloud, User, Clock, Shield, CheckCircle } from "lucide-react";
import "./DocumentForm.css";

export default function DocumentForm({ initialDocumentType = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    email: "",
    documentType: initialDocumentType || "",
    address: "",
    phone: "",
    file: null,
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler une soumission avec un délai
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const documentTypeOptions = [
    { value: "naissance", label: "Bulletin de naissance" },
    { value: "cin", label: "Carte d'identité" },
    { value: "passeport", label: "Passeport" },
    { value: "certificat", label: "Certificat de résidence" },
    { value: "acte_mariage", label: "Acte de mariage" },
  ];

  const renderStepIndicator = () => (
    <div className="step-indicator">
      {[1, 2, 3].map((num) => (
        <div 
          key={num} 
          className={`step ${step === num ? "active" : ""} ${step > num ? "completed" : ""}`}
        >
          <div className="step-number">
            {step > num ? <CheckCircle size={16} /> : num}
          </div>
          <div className="step-label">
            {num === 1 ? "Informations" : num === 2 ? "Document" : "Confirmation"}
          </div>
        </div>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            className="step-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="input-group">
              <label htmlFor="name">Nom Complet</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Entrez votre nom complet"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="birthDate">Date de naissance</label>
              <input
                id="birthDate"
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre adresse email"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone">Téléphone</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Ex: 034 00 000 00"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="address">Adresse complète</label>
              <input
                id="address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Votre adresse physique"
                required
              />
            </div>
            
            <div className="button-container">
              <button type="button" className="next-button" onClick={nextStep}>
                Continuer
              </button>
            </div>
          </motion.div>
        );
      
      case 2:
        return (
          <motion.div 
            className="step-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="input-group">
              <label htmlFor="documentType">Type de document</label>
              <select
                id="documentType"
                name="documentType"
                value={formData.documentType}
                onChange={handleChange}
                required
              >
                <option value="">-- Sélectionnez un document --</option>
                {documentTypeOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="file-upload-container">
              <label htmlFor="file" className="file-upload-label">
                <UploadCloud size={36} />
                <span>
                  {formData.file ? formData.file.name : "Téléverser un document justificatif"}
                </span>
                <span className="file-format">Formats acceptés: PDF, JPG, PNG (max 5MB)</span>
              </label>
              <input
                id="file"
                type="file"
                name="file"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                required
                className="file-input"
              />
            </div>
            
            <div className="form-info-box">
              <h4>Documents requis:</h4>
              <ul>
                <li>Copie de votre carte d'identité</li>
                <li>Justificatif de domicile récent</li>
                <li>Photo d'identité récente (pour CIN et passeport)</li>
              </ul>
            </div>
            
            <div className="button-container">
              <button type="button" className="back-button" onClick={prevStep}>
                Retour
              </button>
              <button type="button" className="next-button" onClick={nextStep}>
                Continuer
              </button>
            </div>
          </motion.div>
        );
      
      case 3:
        return (
          <motion.div 
            className="step-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="summary-container">
              <h3>Récapitulatif de votre demande</h3>
              
              <div className="summary-section">
                <div className="summary-icon">
                  <User size={24} />
                </div>
                <div className="summary-content">
                  <h4>Informations personnelles</h4>
                  <p><strong>Nom:</strong> {formData.name}</p>
                  <p><strong>Date de naissance:</strong> {formData.birthDate}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Téléphone:</strong> {formData.phone}</p>
                  <p><strong>Adresse:</strong> {formData.address}</p>
                </div>
              </div>
              
              <div className="summary-section">
                <div className="summary-icon">
                  <Clock size={24} />
                </div>
                <div className="summary-content">
                  <h4>Détails de la demande</h4>
                  <p><strong>Type de document:</strong> {
                    documentTypeOptions.find(option => option.value === formData.documentType)?.label || ""
                  }</p>
                  <p><strong>Document joint:</strong> {formData.file ? formData.file.name : "Aucun"}</p>
                  <p><strong>Date de la demande:</strong> {new Date().toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="summary-section">
                <div className="summary-icon">
                  <Shield size={24} />
                </div>
                <div className="summary-content">
                  <h4>Confidentialité et sécurité</h4>
                  <p>En soumettant ce formulaire, vous acceptez nos conditions d'utilisation et notre politique de confidentialité. Vos données sont sécurisées et ne seront utilisées que dans le cadre de votre demande.</p>
                </div>
              </div>
            </div>
            
            <div className="button-container">
              <button type="button" className="back-button" onClick={prevStep}>
                Retour
              </button>
              <button 
                type="submit" 
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Traitement en cours..." : "Soumettre la demande"}
              </button>
            </div>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="success-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <CheckCircle size={80} className="success-icon" />
        <h2>Demande soumise avec succès!</h2>
        <p>Votre demande a été enregistrée sous la référence <strong>MAD-{Math.floor(100000 + Math.random() * 900000)}</strong>.</p>
        <p>Vous recevrez un email de confirmation à l'adresse <strong>{formData.email}</strong> avec les détails de suivi.</p>
        <p className="processing-time">Temps de traitement estimé: <strong>3 à 5 jours ouvrables</strong></p>
        <button 
          type="button" 
          className="home-button"
          onClick={() => window.location.href = '/'}
        >
          Retour à l'accueil
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="document-form">
      <h2>Demande de Document Officiel</h2>
      
      {renderStepIndicator()}
      {renderStepContent()}
    </form>
  );
}

