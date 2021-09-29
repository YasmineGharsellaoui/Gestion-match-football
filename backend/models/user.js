//import mongoose from node modules
const mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

// create a schema for User
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String, unique: true},
  pwd: String,
  tel: String,
  role:String
});
userSchema.plugin(uniqueValidator);
const user = mongoose.model("User", userSchema);
module.exports = user;
