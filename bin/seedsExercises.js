const mongoose = require('mongoose');
const Exercise = require('../models/exercise-model');

mongoose
  .connect('mongodb://localhost/shapeit-server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const exercisesSeed = [
  new Exercise({
    name: 'Fantastic Headstand',
    type: 'balance',
    reps: 10,
    secs: 0,
    thumbnail: 'https://cdn.shopify.com/s/files/1/1195/1556/products/Frida-white-womens-cycling-jersey_1296x.jpg?v=1552015120',
    videoUrl: 'https://youtu.be/HrDQRFfRMV4'
  }),
  new Exercise({
    name: 'Old-school Push-ups',
    type: 'endurance',
    reps: 300,
    secs: 0,
    thumbnail: 'http://upl.stack.com/wp-content/uploads/2012/10/Flex_o001_2_-e1350409352620.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=lnR_kb5Wjf8'
  }),
];



// Exercise.insertMany(exercisesSeed).then(() => { 
//     mongoose.connection.close();
// });



Exercise.deleteMany()
  .then(() => {
    console.log('All exercises have been deleted')
    return Exercise.create(exercisesSeed)
  })
  .then((response) => {
    console.log(`${response.length} exercises created`)
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

console.log(mongoose);


