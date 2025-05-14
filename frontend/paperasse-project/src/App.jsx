import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register'; // Ajout du composant d'inscription
import Login from './components/Login'; // Ajout du composant de connexion
import UsersList from './components/UsersList'; // Ajout du composant des utilisateurs
import Home from './pages/Home';
import DocumentForm from './components/DocumentForm';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulaires" element={<DocumentForm />} />
        
        {/* Routes pour l'inscription et la connexion */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Route pour afficher la liste des utilisateurs */}
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
  );
}
