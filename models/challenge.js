// models/challenge.js
const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // Autres champs pour les défis
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;
