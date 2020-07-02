const mongoose = require('mongoose');
const Day = require('../models/day-model');
const Exercise = require('../models/exercise-model');

mongoose
  .connect('mongodb://localhost/shapeit-server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const daysSeed = [
  new Day({
    name: 1,
    exercises: ['5efdcb10ffaa210af107850d', '5efdcb10ffaa210af107850e']
  }),
  new Day({
    name: 2,
    // exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  }),
  new Day({
    name: 3,
    // exercises: [{ type: Schema.Types.ObjectId, ref: 'Exercise' }]
  }),
];





Day.deleteMany()
  .then(() => {
    console.log('All days have been deleted')
    return Day.create(daysSeed)
  })
  .then((response) => {
    console.log(`${response.length} days created`)
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

console.log(mongoose);


