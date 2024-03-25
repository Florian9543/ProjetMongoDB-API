// controllers/challengeController.js
const Challenge = require('../models/challenge');

// Définir les fonctions de contrôle pour les défis
exports.getRandomChallenge = async (req, res) => {
  // Implémenter la logique pour récupérer un défi aléatoire
  const challenge = await Challenge.findOneRandom();
  res.status(200).json(challenge);
  
};

exports.getMultipleRandomChallenges = async (req, res) => {
  // Implémenter la logique pour récupérer plusieurs défis aléatoires
  const challenges = await Challenge.findRandom();
  res.status(200).json(challenges);
};

exports.createChallenge = async (req, res) => {
  // Implémenter la logique pour créer un défi
  const challenge = new Challenge(req.body);
  await challenge.save();
  res.status(201).json(challenge);

};

exports.updateChallenge = async (req, res) => {
  // Implémenter la logique pour mettre à jour un défi
  const { id } = req.params;
  const challenge = await Challenge.findByIdAndUpdate(id, req.body)
  res.status(200).json(challenge);
};

exports.deleteChallenge = async (req, res) => {
  // Implémenter la logique pour supprimer un défi
  const { id } = req.params;
  await Challenge.findByIdAndDelete(id);
  res.status(204).send();
};
