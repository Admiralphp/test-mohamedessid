const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialisation du serveur Express
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Importer les routes
const postRoutes = require('./backend/routes/postRoutes');
app.use('/api/posts', postRoutes);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
