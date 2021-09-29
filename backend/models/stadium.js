//import mongoose from node modules
const mongoose = require('mongoose');
// create a schema for Match
const stadiumSchema = mongoose.Schema({
    name:String,
    category:String,
    capacity:String,

});

const stadium = mongoose.model('Stadium', stadiumSchema);
module.exports = stadium;
