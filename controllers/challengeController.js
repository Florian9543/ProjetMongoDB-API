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
  const { titre, nouveauTitre, nouvelleDescription } = req.params;

  try {
    const updatedChallenge = await Challenge.findOneAndUpdate(
      { titre: titre },
      { titre: nouveauTitre, description: nouvelleDescription },
      { new: true }
    );

    if (!updatedChallenge) {
      return res.status(404).json({ message: "Défi non trouvé" });
    }

    res.status(200).json(updatedChallenge);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur lors de la mise à jour du défi" });
  }
};

exports.deleteChallenge = async (req, res) => {
  const { titre } = req.params;
  try {
    const deletedChallenge = await Challenge.findOneAndDelete({ titre: titre });
    console.log(deletedChallenge);
    if (!deletedChallenge) {
      return res.status(404).json({ message: "Défi non trouvé" });
    }
    res.status(204).json({ message: "Défi supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression du défi :", error);
    res.status(500).json({ message: "Erreur lors de la suppression du défi" });
  }
};

