// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { bodyParserMiddleware } = require('../middleware/bodyparser');

// Définir les routes pour l'authentification
router.get('/login', authController.getLoginForm);
router.post('/login', bodyParserMiddleware, authController.login);

module.exports = router;
