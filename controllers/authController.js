// controllers/authController.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Fonction pour générer un token JWT
const generateToken = (user) => {
  return jwt.sign(user, config.secretKey); // Use secretKey instead of secret
};

// Renvoyer le formulaire de connexion HTML
exports.getLoginForm = (req, res) => {
  const formHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Connexion</title>
    </head>
    <body>
      <h1>Connexion</h1>
      <form action="/auth/login" method="post">
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br>
        <label for="password">Mot de passe:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Se connecter">
      </form>
    </body>
    </html>
  `;
  res.send(formHTML);
};

// Fonction de connexion
exports.login = async (req, res) => {
  const { email, password } = req.body;
  // Vérification de l'email et du mot de passe (c'est juste un exemple, vous devrez adapter cela à votre propre logique d'authentification)
  if (email === 'test@gmail.com' && password === 'password') {
    // Création de l'objet utilisateur avec le rôle d'administrateur (vous devez définir votre propre logique pour récupérer les informations utilisateur)
    const user = { email, role: 'admin' };
    
    // Génération du token JWT
    const token = generateToken(user);

    // Envoi du token JWT en réponse sous forme de cookie sécurisé
    res.cookie('token', token, { httpOnly: true, secure: true }); // Vous pouvez ajuster les options selon vos besoins

    console.log("Login effectué");
    res.status(200).json({ message: 'Connecté avec succès' }); // Réponse JSON avec un message de succès
    
  } else {
    // Si l'email ou le mot de passe est incorrect, renvoyer une erreur 401 Unauthorized
    res.status(401).json({ message: 'Email ou mot de passe incorrect' });
  }
};


