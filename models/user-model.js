const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const Day = require('./day-model')


const userSchema = new Schema({
  email: String,
  password: String,
  instagramID: "", // (Check it)
  googleID: "",
  firstName: "",
  lastName: "",
  birthday: 0, //new Date(year, month, day),
  country: { type: String },
  city: { type: String },
  weight: 0, //kg
  height: 0, //cm
  avatarUrl: "",
  currentDay: [{ type: Schema.Types.ObjectId, ref: 'Day' }]
}, 
{
  timestamps: true
}   
);

const User = mongoose.model('User', userSchema);
module.exports = User;