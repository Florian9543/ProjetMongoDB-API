// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
  console.log("Authentication Middleware");
  
  // Récupérer le token JWT depuis les cookies de la requête
  const token = req.cookies.token;

  // Vérifier si le token est présent dans les cookies de la requête
  if (!token) {
    return res.status(401).json({ message: 'Aucun Token' });
  }

  // Vérifier la validité du token en utilisant la clé secrète de la configuration
  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      // Si la vérification échoue, retourner Unauthorized
      return res.status(401).json({ message: 'Mauvais token' });
    }
    // Si le token est valide, le décoder et attacher l'objet utilisateur à la requête
    req.user = decoded;
    next(); // Passer au middleware suivant
  });
};
