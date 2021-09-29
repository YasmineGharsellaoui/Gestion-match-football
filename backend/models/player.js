//import mongoose from node modules
const mongoose = require("mongoose");
// create a schema for Player
const playerSchema = mongoose.Schema({
  name: String,
  poste: String,
  description: String,
  dateOfBirth: String,
  image: String // path de l'image dans le serveur
});

const player = mongoose.model("Player", playerSchema);
module.exports = player;
