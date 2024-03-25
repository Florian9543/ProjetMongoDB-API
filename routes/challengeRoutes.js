// routes/challengeRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware'); // Importez le middleware d'authentification
const challengeController = require('../controllers/challengeController');

// Définir les routes pour les défis
router.get('/', challengeController.getRandomChallenge);
router.get('/multiple', challengeController.getMultipleRandomChallenges);
router.post('/', authMiddleware, challengeController.createChallenge);
router.put('/:id', authMiddleware, challengeController.updateChallenge);
router.delete('/:id', authMiddleware, challengeController.deleteChallenge);

module.exports = router;
