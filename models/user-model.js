const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Day = require('./day-model')


const userSchema = new Schema({
  // Log-in Data
  email: String,
  password: String,
  instagramID: String,
  googleID: String,
  // Personal Data
  firstName: {
    type: String,
    // required: true,
  },
  lastName: String,
  birthday: Number, //new Date(year, month, day), ??
  country: {
    type: String,
    enum: ['Canada', 'Germany', 'Mexico']
  },
  city: {
    type: String,
    enum: ['Montreal', 'Berlin', 'Mexico City']
  },
  weight: Number, //kg
  height: Number, //cm
  avatarUrl: String,
  // The day user has yet to do
  currentDay: [{ type: Schema.Types.ObjectId, ref: 'Day' }]
}, 
{
  timestamps: true
}   
);

const User = mongoose.model('User', userSchema);
module.exports = User;