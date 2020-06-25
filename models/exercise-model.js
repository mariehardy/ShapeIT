const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const exerciseSchema = new Schema({
  name: "",
  type: "",
  videoUrl: ""
});
 
const Exercise = mongoose.model('Exercise', exerciseSchema);
 
module.exports = Exercise;