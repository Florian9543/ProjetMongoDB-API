// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Définir les routes pour l'authentification
router.post('/login', authController.login);

module.exports = router;
