const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const exerciseSchema = new Schema({
  name: String,
  type: String,
  reps: Number,
  secs: Number,
  thumbnail: String,
  videoUrl: String
});
 
const Exercise = mongoose.model('Exercise', exerciseSchema);
 
module.exports = Exercise;