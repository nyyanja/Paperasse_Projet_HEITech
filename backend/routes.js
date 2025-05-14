// backend/routes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('./models');
const { generateToken } = require('./utils');

const router = express.Router();

// INSCRIPTION
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Utilisateur déjà existant' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ name, email, password: hashedPassword });

    const token = generateToken(newUser._id);

    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// OBTENIR TOUS LES UTILISATEURS
router.get('/utilisateurs', async (req, res) => {
  try {
    const utilisateurs = await User.find();
    res.status(200).json(utilisateurs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// CONNEXION
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Mot de passe incorrect' });

    const token = generateToken(user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
