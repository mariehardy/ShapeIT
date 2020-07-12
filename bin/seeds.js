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
    exercises: ['https://www.youtube.com/watch?v=9uKVI6_Fm4g',
    'https://www.youtube.com/watch?v=6gmChsPD2N8',
    'https://www.youtube.com/watch?v=lnR_kb5Wjf8',
    'https://www.youtube.com/watch?v=wD-MJ5t77So',
    'https://www.youtube.com/watch?v=3tQs6l4d8hM',
    'https://www.youtube.com/watch?v=Jn09UdSb3aA',
    'https://www.youtube.com/watch?v=vqUuH2ka-xk',
    'https://www.youtube.com/watch?v=tUEJkwA1VI4',
    'https://www.youtube.com/watch?v=uwUt1fVLb3E',
    'https://www.youtube.com/watch?v=N9TT5kO4p7Q'
    ]
  }),
  new Day({
    name: 2,
    exercises: ['https://www.youtube.com/watch?v=lnR_kb5Wjf8']
  }),
  new Day({
    name: 3,
    exercises: ['https://www.youtube.com/watch?v=wD-MJ5t77So']
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


// REMINDER: For property 'type' please choose one of the following option:
//   enum: ['Warm-up', 'Cardio', 'Vacuum', 'Isolation', 'Stretching']


const exercisesSeed = [
  new Exercise({
    name: 'Fantastic Headstand',
    type: 'Stretching',
    description: '1)Blockchain encompasses wide-ranging\n 2)disciplines including economics,3)\n computer science, law, finance, and mathematics.',
    repSec: '10 reps',
    thumbnail: 'https://cdn.shopify.com/s/files/1/1195/1556/products/Frida-white-womens-cycling-jersey_1296x.jpg?v=1552015120',
    videoUrl: 'https://youtu.be/HrDQRFfRMV4'
  }),
  new Exercise({
    name: 'Old-school Push-ups',
    type: 'Cardio',
    description: '1)With the wealth 2)\n of resources out there, it can often be overwhelming 3)\n to figure out where to begin.',
    repSec: '20 sec',
    thumbnail: 'http://upl.stack.com/wp-content/uploads/2012/10/Flex_o001_2_-e1350409352620.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=lnR_kb5Wjf8'
  }),
  new Exercise({
    name: 'roooock',
    type: 'Cardio',
  description: 'aaaaaaaaaaaaaa there, it can often be overwhelming\n to figure out where to begin.',
  repSec: '20 sec',
  thumbnail: '',
  videoUrl: 'https://www.youtube.com/watch?v=wD-MJ5t77So'
}),
  new Exercise({
    name: 'exercise warmup1',
    type: 'Warm-up',
    description: ['With the wealth', '2) of resources out there, it can often be overwhelming', '3) to figure out where to begin.'],
    repSec: '2 sec',
    thumbnail: 'https://i.pinimg.com/originals/27/d8/3a/27d83acb2be3cbcade7403b8b8ca41b4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=9uKVI6_Fm4g'
  }),
  new Exercise({
    name: 'exercise warmup2',
    type: 'Warm-up',
    description: ['With the wealth', '2) of resources out there, it can often be overwhelming', '3) to figure out where to begin.'],
    repSec: '2 sec',
    thumbnail: 'https://i.pinimg.com/originals/27/d8/3a/27d83acb2be3cbcade7403b8b8ca41b4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=6gmChsPD2N8'
  }),
  new Exercise({
    name: 'exercise Vacuum 1',
    type: 'Vacuum',
    description: ['With the wealth', '2) of resources out there, it can often be overwhelming', '3) to figure out where to begin.'],
    repSec: '2 sec',
    thumbnail: 'https://i.pinimg.com/originals/27/d8/3a/27d83acb2be3cbcade7403b8b8ca41b4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=3tQs6l4d8hM'
  }),
  new Exercise({
    name: 'exercise Vacuum 2',
    type: 'Vacuum',
    description: ['With the wealth', '2) of resources out there, it can often be overwhelming', '3) to figure out where to begin.'],
    repSec: '2 sec',
    thumbnail: 'https://i.pinimg.com/originals/27/d8/3a/27d83acb2be3cbcade7403b8b8ca41b4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Jn09UdSb3aA'
  }),
  new Exercise({
    name: 'exercise Isolation 1',
    type: 'Isolation',
    description: ['With the wealth', '2) of resources out there, it can often be overwhelming', '3) to figure out where to begin.'],
    repSec: '2 sec',
    thumbnail: 'https://i.pinimg.com/originals/27/d8/3a/27d83acb2be3cbcade7403b8b8ca41b4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=vqUuH2ka-xk'
  }),
  new Exercise({
    name: 'exercise Isolation 2',
    type: 'Isolation',
    description: ['With the wealth', '2) of resources out there, it can often be overwhelming', '3) to figure out where to begin.'],
    repSec: '2 sec',
    thumbnail: 'https://i.pinimg.com/originals/27/d8/3a/27d83acb2be3cbcade7403b8b8ca41b4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=tUEJkwA1VI4'
  }),
  new Exercise({
    name: 'exercise Stretching 1',
    type: 'Stretching',
    description: ['With the wealth', '2) of resources out there, it can often be overwhelming', '3) to figure out where to begin.'],
    repSec: '2 sec',
    thumbnail: 'https://i.pinimg.com/originals/27/d8/3a/27d83acb2be3cbcade7403b8b8ca41b4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=uwUt1fVLb3E'
  }),
  new Exercise({
    name: 'exercise Stretching 2',
    type: 'Stretching',
    description: ['With the wealth', '2) of resources out there, it can often be overwhelming', '3) to figure out where to begin.'],
    repSec: '2 sec',
    thumbnail: 'https://i.pinimg.com/originals/27/d8/3a/27d83acb2be3cbcade7403b8b8ca41b4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=N9TT5kO4p7Q'
  })
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
    console.log(`${exercisesSeed.length} exercises created`)
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

console.log(mongoose);


