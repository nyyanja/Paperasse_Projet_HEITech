import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DocumentForm from './components/DocumentForm';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulaires" element={<DocumentForm />} />
      </Routes>
    </Router>
  );
}
