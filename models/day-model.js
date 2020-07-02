const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Exercise = require('./exercise-model');

 
const daySchema = new Schema({
  name: Number,
  exercises: [{ type: String }]
});
 
const Day = mongoose.model('Day', daySchema);
 
module.exports = Day;
