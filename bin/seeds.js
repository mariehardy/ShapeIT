const mongoose = require('mongoose');
const Day = require('../models/day-model');
const Exercise = require('../models/exercise-model');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const daysSeed = [
  {
    name: 1,
    exercises: [{ type: Schema.Types.ObjectId, _id: 001 }]
  },
  {
    name: 2,
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  },
  {
    name: 3,
    exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  }
];


const exercisesSeed = [
  {
    _id: 001,
    name: "Fantastic Headstand",
    type: "balance",
    videoUrl: "https://youtu.be/HrDQRFfRMV4"
  }
];

Day.insertMany(daysSeed).then(() => { 
  Exercise.insertMany(exercisesSeed).then(() => {
    mongoose.connection.close();
  })
});

// Movie.insertMany(moviesSeed, function(error, docs){
//   console.log(docs);
//   console.log(error);
//   mongoose.connection.close();
// });

console.log(mongoose);