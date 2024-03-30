// controllers/challengeController.js
const Challenge = require('../models/challenge');

const maxsize = 100;

// Définir les fonctions de contrôle pour les défis
exports.getRandomChallenge = async (req, res) => {
  // Implémenter la logique pour récupérer un défi aléatoire
  const randomChallenge = await Challenge.aggregate([{ $sample: { size: 1 } }]);
  console.log(randomChallenge)
  res.status(200).json(randomChallenge);
  
};

exports.getMultipleRandomChallenges = async (req, res) => {
  // Implémenter la logique pour récupérer plusieurs défis aléatoires
  var { nb } = (req.params);
  nb = parseInt(nb);
  if (nb > maxsize)
  {
    nb = maxsize;
  }
  
  const randomChallenge = await Challenge.aggregate([{ $sample: { size: nb } }]);
  res.status(200).json(randomChallenge);
};

exports.createChallenge = async (req, res) => {
  // Implémenter la logique pour créer un défi
  const challenge = new Challenge(req.body);
  await challenge.save();
  res.status(201).json(challenge);
  console.log("Challenge créé")
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
