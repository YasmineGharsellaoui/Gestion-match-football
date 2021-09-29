//import mongoose from node modules
const mongoose = require('mongoose');
// create a schema for Match
const matchSchema = mongoose.Schema({
    teamOne:String,
    teamTwo:String,
    scoreOne:String,
    scoreTwo:String,
    logoOne:String,
    logoTwo:String
});

const match = mongoose.model('Match', matchSchema);
module.exports = match;
