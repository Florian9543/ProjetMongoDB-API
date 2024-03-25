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

// Renvoyer le formulaire HTML pour créer un défi
exports.getCreateForm = async (req, res) => {
  const formHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Créer un défi</title>
    </head>
    <body>
      <h1>Créer un défi</h1>
      <form action="/challenges/create" method="post">
        <label for="title">Titre du défi:</label><br>
        <input type="text" id="title" name="title" required><br>
        <label for="description">Description du défi:</label><br>
        <textarea id="description" name="description" required></textarea><br><br>
        <input type="submit" value="Créer le défi">
      </form>
    </body>
    </html>
  `;
  res.send(formHTML);
};

// Créer un défi
exports.createChallenge = async (req, res) => {
  const { title, description } = req.body;
  const challenge = new Challenge({ title, description });
  await challenge.save();
  res.status(201).json(challenge);
  console.log("Challenge créé");
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
