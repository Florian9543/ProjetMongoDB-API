// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Définir la route pour l'authentification via les paramètres d'URL
router.get('/login/:email/:password', authController.loginViaURL);

module.exports = router;
