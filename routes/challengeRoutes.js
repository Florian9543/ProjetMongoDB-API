// routes/challengeRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const challengeController = require('../controllers/challengeController');

// Définir les routes pour les défis
router.get('/', challengeController.getRandomChallenge);
router.get('/multiple', challengeController.getMultipleRandomChallenges);
router.get('/create/:title/:description', authMiddleware, challengeController.createChallenge);
router.get('/update/:titre/:nouveauTitre/:nouvelleDescription', authMiddleware, challengeController.updateChallenge);
router.delete('/delete/:titre', authMiddleware, challengeController.deleteChallenge);

module.exports = router;
