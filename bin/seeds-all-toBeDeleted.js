const mongoose = require('mongoose');
const Day = require('../models/day-model');
const Exercise = require('../models/exercise-model');

mongoose
  .connect('mongodb://localhost', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const daysSeed = [
  {
    name: 1,
    exercises: [{ type: Schema.Types.ObjectId, _id: 1 }]
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
    _id: 1,
    name: "Fantastic Headstand",
    type: "balance",
    reps: 10,
    secs: 0,
    thumbnail: "https://cdn.shopify.com/s/files/1/1195/1556/products/Frida-white-womens-cycling-jersey_1296x.jpg?v=1552015120",
    videoUrl: "https://youtu.be/HrDQRFfRMV4"
  }
];



// Exercise.insertMany(exercisesSeed).then(() => { 
//   Day.insertMany(daysSeed).then(() => {
//     mongoose.connection.close();
//   })
// });



Promise.all(Exercise.deleteMany(), Day.deleteMany()])
  .then(() => {
    console.log('All exercises and days have been deleted')
    return Promise.all([
      Exercise.create(exerciseDocs),
      Day.create(dayDocs),
    ])
  })
  .then(() => {
    console.log(`${exerciseDocs.length} exercises created`)
    console.log(`${dayDocs.length} days created`)
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

console.log(mongoose);


