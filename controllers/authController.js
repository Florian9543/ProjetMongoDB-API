// controllers/authController.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.login = async (req, res) => {
  // Implémenter la logique de connexion
  const { email, password } = req.body;
  const user = { admin, fqDbVdyf9uqOB0v0 };
  const token = jwt.sign(user, config.secret);
  res.status(200).json({ token });
  console.log("Login effectué")
};
