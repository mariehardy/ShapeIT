const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const exerciseSchema = new Schema({
  _id: 0,
  name: "",
  type: "",
  videoUrl: ""
});
 
const Exercise = mongoose.model('Exercise', exerciseSchema);
 
module.exports = Exercise;