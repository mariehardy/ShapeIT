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



// Exercise.insertMany(exercisesSeed).then(() => { 
//   Day.insertMany(daysSeed).then(() => {
//     mongoose.connection.close();
//   })
// });



Day.deleteMany()
  .then(() => {
    console.log('All days have been deleted')
    return 
      Day.create(dayDocs)
  })
  .then(() => {
    console.log(`${dayDocs.length} days created`)
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

console.log(mongoose);


