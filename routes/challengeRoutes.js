// routes/challengeRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const challengeController = require('../controllers/challengeController');
const { bodyParserMiddleware } = require('../middleware/bodyparser');


// Définir les routes pour les défis
router.get('/', challengeController.getRandomChallenge);
router.get('/multiple', challengeController.getMultipleRandomChallenges);
router.get('/create/:title/:description', authMiddleware, challengeController.createChallenge);
router.put('/:id', authMiddleware, challengeController.updateChallenge);
router.delete('/:id', authMiddleware, challengeController.deleteChallenge);

module.exports = router;
