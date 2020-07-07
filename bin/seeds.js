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
    exercises: ['https://youtu.be/HrDQRFfRMV4', 'https://www.youtube.com/watch?v=lnR_kb5Wjf8']
  }),
  new Day({
    name: 2,
    exercises: ['https://www.youtube.com/watch?v=lnR_kb5Wjf8']
  }),
  new Day({
    name: 3,
    exercises: ['']
  }),
  new Day({
    name: 4,
    exercises: ['']
  }),
  new Day({
    name: 5,
    exercises: ['']
  }),
  new Day({
    name: 6,
    exercises: ['']
  }),
  new Day({
    name: 7,
    exercises: ['']
  }),
  new Day({
    name: 8,
    exercises: ['']
  }),
  new Day({
    name: 9,
    exercises: ['']
  }),
  new Day({
    name: 10,
    exercises: ['']
  }),
  new Day({
    name: 11,
    exercises: ['']
  }),
  new Day({
    name: 12,
    exercises: ['']
  }),
  new Day({
    name: 13,
    exercises: ['']
  }),
  new Day({
    name: 14,
    exercises: ['']
  }),
  new Day({
    name: 15,
    exercises: ['']
  }),
  new Day({
    name: 16,
    exercises: ['']
  }),
  new Day({
    name: 17,
    exercises: ['']
  }),
  new Day({
    name: 18,
    exercises: ['']
  }),
  new Day({
    name: 19,
    exercises: ['']
  }),
  new Day({
    name: 20,
    exercises: ['']
  }),
  new Day({
    name: 21,
    exercises: ['']
  }),
  new Day({
    name: 22,
    exercises: ['']
  }),
  new Day({
    name: 23,
    exercises: ['']
  }),
  new Day({
    name: 24,
    exercises: ['']
  }),
  new Day({
    name: 25,
    exercises: ['']
  }),
  new Day({
    name: 26,
    exercises: ['']
  }),
  new Day({
    name: 27,
    exercises: ['']
  }),
  new Day({
    name: 28,
    exercises: ['']
  }),
  new Day({
    name: 29,
    exercises: ['']
  }),
  new Day({
    name: 30,
    exercises: ['']
  }),
];

const exercisesSeed = [
  new Exercise({
    name: 'Fantastic Headstand',
    type: 'balance',
    description: 'Blockchain encompasses wide-ranging disciplines including economics, computer science, law, finance, and mathematics.',
    repSec: '10 reps',
    thumbnail: 'https://cdn.shopify.com/s/files/1/1195/1556/products/Frida-white-womens-cycling-jersey_1296x.jpg?v=1552015120',
    videoUrl: 'https://youtu.be/HrDQRFfRMV4'
  }),
  new Exercise({
    name: 'Old-school Push-ups',
    type: 'cardio',
    description: 'With the wealth of resources out there, it can often be overwhelming to figure out where to begin.',
    repSec: '20 sec',
    thumbnail: 'http://upl.stack.com/wp-content/uploads/2012/10/Flex_o001_2_-e1350409352620.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=lnR_kb5Wjf8'
  }),
];



Promise.all([Day.deleteMany(), Exercise.deleteMany()])
  .then(() => {
    console.log('All days and exercises have been deleted')
    return Promise.all([
      Day.create(daysSeed),
      Exercise.create(exercisesSeed)
    ])
  })
  .then(() => {
    console.log(`${daysSeed.length} days created`)
    console.log(`${exercisesSeed.length} days created`)
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

console.log(mongoose);


