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
});

const Challenge = mongoose.model('DefisEcos', challengeSchema);

module.exports = Challenge;