const mongoose = require('mongoose');

// Définir le schéma des posts
const postSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  contenu: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Créer un modèle à partir du schéma
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
