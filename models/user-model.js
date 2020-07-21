const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Day = require('./day-model')


const userSchema = new Schema({
  // Log-in Data
  email: String,
  password: String,
  instagramID: String,
  googleID: String,
  verifiedEmail: {
    type: Boolean,
    default: false,
  },
  // Personal Data
  firstName: String,
  lastName: String,
  birthday: {
    type: Date,
  }, //new Date(year, month, day), ??
  country: String,
  city: String,
  weight: Number, //kg
  height: Number, //cm
  avatarUrl: String,
  currentDay: {
    type: Number,
    default: 1,
    max: 30
  }
},
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);
module.exports = User;