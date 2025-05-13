import React, { useState } from "react";
import "./DocumentForm.css"; // Tu peux créer ce fichier CSS

export default function DocumentForm() {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    email: "",
    documentType: "",
    address: "",
    phone: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Formulaire soumis avec succès !");
  };

  return (
    <form onSubmit={handleSubmit} className="document-form">
      <h2>Demande de document</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nom Complet"
        required
      />

      <input
        type="date"
        name="birthDate"
        value={formData.birthDate}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />

      <select
        name="documentType"
        value={formData.documentType}
        onChange={handleChange}
        required
      >
        <option value="">-- Sélectionnez un document --</option>
        <option value="naissance">Bulletin de naissance</option>
        <option value="cin">Carte d'identité</option>
        <option value="passeport">Passeport</option>
        <option value="certificat">Certificat de résidence</option>
        <option value="acte_mariage">Acte de mariage</option>
      </select>

      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Adresse"
        required
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Téléphone"
        required
      />

      <input
        type="file"
        name="file"
        onChange={handleFileChange}
        required
      />

      <button type="submit">Envoyer</button>
    </form>
  );
}
