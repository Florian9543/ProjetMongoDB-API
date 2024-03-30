// controllers/challengeController.js
const Challenge = require('../models/challenge');

exports.getRandomChallenge = async (req, res) => {
  const randomChallenge = await Challenge.aggregate([{ $sample: { size: 1 } }]);
  res.status(200).json(randomChallenge[0]);
};

exports.getMultipleRandomChallenges = async (req, res) => {
  const challenges = await Challenge.findRandom();
  res.status(200).json(challenges);
};

// Créer un défi, en récupérant le titre et la description dans l'URL avec des / séparés
exports.createChallenge = async (req, res) => {
  const { title, description } = req.params;
  console.log(title, description);
  const challenge = await Challenge.create({ titre: title, description: description });
  res.status(201).json(challenge);
  console.log("Challenge created");
};

exports.updateChallenge = async (req, res) => {
  const { id } = req.params;
  const challenge = await Challenge.findByIdAndUpdate(id, req.body)
  res.status(200).json(challenge);
};

exports.deleteChallenge = async (req, res) => {
  const { id } = req.params;
  await Challenge.findByIdAndDelete(id);
  res.status(204).send();
};
