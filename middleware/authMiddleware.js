// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
  // Implémenter le middleware d'authentification JWT
  // Récupérer le token JWT depuis le header de la requête

  // Vérifier si le token est valide

  // Si le token est valide, décoder le token et ajouter l'objet user à la requête

  // Si le token n'est pas valide, retourner une erreur 401 Unauthorized

  // Passer à l'exécution du middleware suivant

  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = decoded;
    next();
  });
};
