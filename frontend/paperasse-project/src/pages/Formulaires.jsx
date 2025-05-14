import React from 'react';
import { motion } from 'framer-motion';
import { FileText, User, Users, AlertTriangle } from 'lucide-react';
import './Formulaires.css';
import DocumentForm from '../components/DocumentForm';

const Formulaires = () => {
  const formTypes = [
    { 
      id: 'naissance', 
      title: 'Bulletin de naissance', 
      icon: <FileText size={32} />,
      description: 'Demandez une copie de votre acte de naissance'
    },
    { 
      id: 'cin', 
      title: 'Carte d\'identité', 
      icon: <User size={32} />,
      description: 'Renouvelez ou demandez une carte d\'identité nationale'
    },
    { 
      id: 'passeport', 
      title: 'Passeport', 
      icon: <Users size={32} />,
      description: 'Faites une demande ou un renouvellement de passeport'
    },
    { 
      id: 'certificat', 
      title: 'Certificat de résidence', 
      icon: <AlertTriangle size={32} />,
      description: 'Obtenez un certificat attestant de votre lieu de résidence'
    }
  ];

  const [selectedForm, setSelectedForm] = React.useState(null);
  
  return (
    <div className="formulaires-container">
      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Formulaires Administratifs
      </motion.h1>
      
      {!selectedForm ? (
        <>
          <motion.p 
            className="intro-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Sélectionnez le type de document dont vous avez besoin
          </motion.p>
          
          <div className="form-types-grid">
            {formTypes.map((form, index) => (
              <motion.div 
                key={form.id}
                className="form-type-card"
                onClick={() => setSelectedForm(form.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="icon-container">
                  {form.icon}
                </div>
                <h3>{form.title}</h3>
                <p>{form.description}</p>
              </motion.div>
            ))}
          </div>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button 
            className="back-button"
            onClick={() => setSelectedForm(null)}
          >
            ← Retour aux formulaires
          </button>
          <DocumentForm 
            initialDocumentType={selectedForm} 
          />
        </motion.div>
      )}
      
      <motion.div 
        className="help-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h3>Besoin d'aide ?</h3>
        <p>Notre équipe est disponible pour vous assister dans vos démarches administratives.</p>
        <p>Appelez-nous au : <strong>+261 30 00 00 000</strong></p>
      </motion.div>
    </div>
  );
};

export default Formulaires;