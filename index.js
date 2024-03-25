// index.js
const express = require('express');
const mongoose = require('mongoose');
const challengeRoutes = require('./routes/challengeRoutes');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://admin:fqDbVdyf9uqOB0v0@databaseapieco.ekieskk.mongodb.net/DefisEco?retryWrites=true&w=majority&appName=DatabaseApiEco';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/challenges', challengeRoutes);
app.use('/auth', authRoutes);
// Middleware pour parser les données de formulaire


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
      console.log(`You can acces to a first random challenge at : http://localhost:${PORT}/challenges`)
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
