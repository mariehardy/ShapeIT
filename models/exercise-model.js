const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 

const exerciseSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['Warm-up', 'Cardio', 'Vacuum', 'Isolation', 'Stretching']
  },
  description: [String],
  repSec: String,
  thumbnail: String,
  videoUrl: String
});
 
const Exercise = mongoose.model('Exercise', exerciseSchema);
 
module.exports = Exercise;