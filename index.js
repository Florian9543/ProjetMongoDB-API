// index.js
const express = require('express');
const mongoose = require('mongoose');
const challengeRoutes = require('./routes/challengeRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'votre_url_de_connexion_mongodb';

app.use(express.json());
app.use('/challenges', challengeRoutes);
app.use('/auth', authRoutes);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
