// models/challenge.js
const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
}, { versionKey: false });


const Challenge = mongoose.model('DefisEcos', challengeSchema);

module.exports = Challenge;