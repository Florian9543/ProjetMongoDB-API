// controllers/authController.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.register = async (req, res) => {
  // Implémenter la logique d'inscription
  const { email, password } = req.body;
  const user = { email, password };
  const token = jwt.sign(user, config.secret);
  res.status(201).json({ token });

};

exports.login = async (req, res) => {
  // Implémenter la logique de connexion
  const { email, password } = req.body;
  const user = { email, password };
  const token = jwt.sign(user, config.secret);
  res.status(200).json({ token });
};
