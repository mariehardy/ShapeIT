const mongoose = require('mongoose');
const Day = require('../models/day-model');
const Exercise = require('../models/exercise-model');

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const daysSeed = [
  new Day({
    name: 1,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=V6gyuUyOYhc', 'https://www.youtube.com/watch?v=UYrVa1mNht8','https://www.youtube.com/watch?v=pazqN85Ket8','https://www.youtube.com/watch?v=TVesRKTc9-8','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=Q6xkygxwUzw','https://www.youtube.com/watch?v=wD-MJ5t77So','https://www.youtube.com/watch?v=eseFjzRvDIc','https://www.youtube.com/watch?v=vo7rXUwPYl0','https://www.youtube.com/watch?v=4j6qLd6qgU8','https://www.youtube.com/watch?v=YwTvkI6hB4E']
  }),
  new Day({
    name: 2,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=V6gyuUyOYhc', 'https://www.youtube.com/watch?v=UYrVa1mNht8','https://www.youtube.com/watch?v=pazqN85Ket8','https://www.youtube.com/watch?v=TVesRKTc9-8','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=tbdaU370u0A','https://www.youtube.com/watch?v=zDvkn4XFa8I','https://www.youtube.com/watch?v=QqsgeVg5xRI','https://www.youtube.com/watch?v=MngOYhzh944','https://www.youtube.com/watch?v=sFKyVgwPdFU','https://www.youtube.com/watch?v=_aLQrQQXnKo']
  }),
  new Day({
    name: 3,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=V6gyuUyOYhc', 'https://www.youtube.com/watch?v=UYrVa1mNht8','https://www.youtube.com/watch?v=pazqN85Ket8','https://www.youtube.com/watch?v=TVesRKTc9-8','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=yKCp2Su8qCc','https://www.youtube.com/watch?v=K-6lkr9vcWE','https://www.youtube.com/watch?v=DmuOhSgpQlU','https://www.youtube.com/watch?v=BVeqp7QSVxk','https://www.youtube.com/watch?v=abpy88id_SU','https://www.youtube.com/watch?v=qtTKTc2Cvjg']
  }),
  new Day({
    name: 4,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=V6gyuUyOYhc', 'https://www.youtube.com/watch?v=UYrVa1mNht8','https://www.youtube.com/watch?v=pazqN85Ket8','https://www.youtube.com/watch?v=TVesRKTc9-8','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=tbdaU370u0A','https://www.youtube.com/watch?v=zDvkn4XFa8I','https://www.youtube.com/watch?v=QqsgeVg5xRI','https://www.youtube.com/watch?v=MngOYhzh944','https://www.youtube.com/watch?v=sFKyVgwPdFU','https://www.youtube.com/watch?v=_aLQrQQXnKo']
  }),
  new Day({
    name: 5,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=V6gyuUyOYhc','https://www.youtube.com/watch?v=UYrVa1mNht8','https://www.youtube.com/watch?v=pazqN85Ket8','https://www.youtube.com/watch?v=TVesRKTc9-8','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=JHolccS74y0','https://www.youtube.com/watch?v=qYmtEor_oWM','https://www.youtube.com/watch?v=whnpYuwV3tg','https://www.youtube.com/watch?v=uGeRRZUt35U','https://www.youtube.com/watch?v=EA6aw3GLS1I','https://www.youtube.com/watch?v=EhXpYvW3XEM']
  }),
  new Day({
    name: 6,
    exercises: []
  }),
  new Day({
    name: 7,
    exercises: []
  }),
  new Day({
    name: 8,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=byL1oN5oPF4','https://www.youtube.com/watch?v=d45pPeWAV0M','https://www.youtube.com/watch?v=Sq8pi-UFmHc','https://www.youtube.com/watch?v=yVSvxH6blrE','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=ahmE5zykd9g','https://www.youtube.com/watch?v=g_lKjVmqbsU','https://www.youtube.com/watch?v=a490nTbbbik','https://www.youtube.com/watch?v=DEO4g99GBac','https://www.youtube.com/watch?v=4j6qLd6qgU8','https://www.youtube.com/watch?v=YwTvkI6hB4E']
  }),
  new Day({
    name: 9,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=byL1oN5oPF4','https://www.youtube.com/watch?v=d45pPeWAV0M','https://www.youtube.com/watch?v=Sq8pi-UFmHc','https://www.youtube.com/watch?v=yVSvxH6blrE','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=BB0wJgi7nrg','https://www.youtube.com/watch?v=cp0e3DRxJjY','https://www.youtube.com/watch?v=Hpqrrac1RvQ','https://www.youtube.com/watch?v=I9J28laC2XM','https://www.youtube.com/watch?v=sFKyVgwPdFU','https://www.youtube.com/watch?v=_aLQrQQXnKo']
  }),
  new Day({
    name: 10,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=byL1oN5oPF4','https://www.youtube.com/watch?v=d45pPeWAV0M','https://www.youtube.com/watch?v=Sq8pi-UFmHc','https://www.youtube.com/watch?v=yVSvxH6blrE','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=B6bdlfDhGl0','https://www.youtube.com/watch?v=kmnyJoWaf2A','https://www.youtube.com/watch?v=MaIrJh5NEtM','https://www.youtube.com/watch?v=vUxoJPXT8gM','https://www.youtube.com/watch?v=abpy88id_SU','https://www.youtube.com/watch?v=qtTKTc2Cvjg']
  }),
  new Day({
    name: 11,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=byL1oN5oPF4','https://www.youtube.com/watch?v=d45pPeWAV0M','https://www.youtube.com/watch?v=Sq8pi-UFmHc','https://www.youtube.com/watch?v=yVSvxH6blrE','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=BB0wJgi7nrg','https://www.youtube.com/watch?v=cp0e3DRxJjY','https://www.youtube.com/watch?v=Hpqrrac1RvQ','https://www.youtube.com/watch?v=I9J28laC2XM','https://www.youtube.com/watch?v=sFKyVgwPdFU','https://www.youtube.com/watch?v=_aLQrQQXnKo']
  }),
  new Day({
    name: 12,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=byL1oN5oPF4','https://www.youtube.com/watch?v=d45pPeWAV0M','https://www.youtube.com/watch?v=Sq8pi-UFmHc','https://www.youtube.com/watch?v=yVSvxH6blrE','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=b9NBj9lTQ-4','https://www.youtube.com/watch?v=PIm1cPrB584','https://www.youtube.com/watch?v=kPu1TGl3mmE','https://www.youtube.com/watch?v=jOcE8xMuLPA','https://www.youtube.com/watch?v=EA6aw3GLS1I','https://www.youtube.com/watch?v=EhXpYvW3XEM']
  }),
  new Day({
    name: 13,
    exercises: []
  }),
  new Day({
    name: 14,
    exercises: []
  }),
  new Day({
    name: 15,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=GVRsBySVGhA','https://www.youtube.com/watch?v=bUPqDU91qMA','https://www.youtube.com/watch?v=S6SeMeM-6y0','https://www.youtube.com/watch?v=M_i3-mHskBc','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=Q6xkygxwUzw','https://www.youtube.com/watch?v=wD-MJ5t77So','https://www.youtube.com/watch?v=eseFjzRvDIc','https://www.youtube.com/watch?v=vo7rXUwPYl0','https://www.youtube.com/watch?v=4j6qLd6qgU8','https://www.youtube.com/watch?v=YwTvkI6hB4E']
  }),
  new Day({
    name: 16,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=GVRsBySVGhA','https://www.youtube.com/watch?v=bUPqDU91qMA','https://www.youtube.com/watch?v=S6SeMeM-6y0','https://www.youtube.com/watch?v=M_i3-mHskBc','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=IJbBndR-9II','https://www.youtube.com/watch?v=Ut5kMRBKYRA','https://www.youtube.com/watch?v=fAdAv914-Qc','https://www.youtube.com/watch?v=cNOakzleJvw','https://www.youtube.com/watch?v=sFKyVgwPdFU','https://www.youtube.com/watch?v=_aLQrQQXnKo']
  }),
  new Day({
    name: 17,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=GVRsBySVGhA','https://www.youtube.com/watch?v=bUPqDU91qMA','https://www.youtube.com/watch?v=S6SeMeM-6y0','https://www.youtube.com/watch?v=M_i3-mHskBc','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=yKCp2Su8qCc','https://www.youtube.com/watch?v=K-6lkr9vcWE','https://www.youtube.com/watch?v=DmuOhSgpQlU','https://www.youtube.com/watch?v=BVeqp7QSVxk','https://www.youtube.com/watch?v=abpy88id_SU','https://www.youtube.com/watch?v=qtTKTc2Cvjg']
  }),
  new Day({
    name: 18,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=GVRsBySVGhA','https://www.youtube.com/watch?v=bUPqDU91qMA','https://www.youtube.com/watch?v=S6SeMeM-6y0','https://www.youtube.com/watch?v=M_i3-mHskBc','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=IJbBndR-9II','https://www.youtube.com/watch?v=Ut5kMRBKYRA','https://www.youtube.com/watch?v=fAdAv914-Qc','https://www.youtube.com/watch?v=cNOakzleJvw','https://www.youtube.com/watch?v=sFKyVgwPdFU','https://www.youtube.com/watch?v=_aLQrQQXnKo']
  }),
  new Day({
    name: 19,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=GVRsBySVGhA','https://www.youtube.com/watch?v=bUPqDU91qMA','https://www.youtube.com/watch?v=S6SeMeM-6y0','https://www.youtube.com/watch?v=M_i3-mHskBc','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=JHolccS74y0','https://www.youtube.com/watch?v=JHolccS74y0','https://www.youtube.com/watch?v=qYmtEor_oWM','https://www.youtube.com/watch?v=whnpYuwV3tg','https://www.youtube.com/watch?v=uGeRRZUt35U','https://www.youtube.com/watch?v=EA6aw3GLS1I','https://www.youtube.com/watch?v=EhXpYvW3XEM']
  }),
  new Day({
    name: 20,
    exercises: []
  }),
  new Day({
    name: 21,
    exercises: []
  }),
  new Day({
    name: 22,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=j65nBvmqX-M','https://www.youtube.com/watch?v=526bFSI2RFs','https://www.youtube.com/watch?v=usFo0okZs20','https://www.youtube.com/watch?v=Y-p_Uha7w90','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=ahmE5zykd9g','https://www.youtube.com/watch?v=g_lKjVmqbsU','https://www.youtube.com/watch?v=a490nTbbbik','https://www.youtube.com/watch?v=DEO4g99GBac','https://www.youtube.com/watch?v=4j6qLd6qgU8','https://www.youtube.com/watch?v=YwTvkI6hB4E']
  }),
  new Day({
    name: 23,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=j65nBvmqX-M','https://www.youtube.com/watch?v=526bFSI2RFs','https://www.youtube.com/watch?v=usFo0okZs20','https://www.youtube.com/watch?v=Y-p_Uha7w90','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=9typoS7CQTY','https://www.youtube.com/watch?v=Yb7WO-i6HGI','https://www.youtube.com/watch?v=JXNovknQ6og','https://www.youtube.com/watch?v=xzviTjgFuIk','https://www.youtube.com/watch?v=sFKyVgwPdFU','https://www.youtube.com/watch?v=_aLQrQQXnKo']
  }),
  new Day({
    name: 24,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=j65nBvmqX-M','https://www.youtube.com/watch?v=526bFSI2RFs','https://www.youtube.com/watch?v=usFo0okZs20','https://www.youtube.com/watch?v=Y-p_Uha7w90','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=B6bdlfDhGl0','https://www.youtube.com/watch?v=kmnyJoWaf2A','https://www.youtube.com/watch?v=MaIrJh5NEtM','https://www.youtube.com/watch?v=vUxoJPXT8gM','https://www.youtube.com/watch?v=abpy88id_SU','https://www.youtube.com/watch?v=qtTKTc2Cvjg']
  }),
  new Day({
    name: 25,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=j65nBvmqX-M','https://www.youtube.com/watch?v=526bFSI2RFs','https://www.youtube.com/watch?v=usFo0okZs20','https://www.youtube.com/watch?v=Y-p_Uha7w90','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=9typoS7CQTY','https://www.youtube.com/watch?v=Yb7WO-i6HGI','https://www.youtube.com/watch?v=JXNovknQ6og','https://www.youtube.com/watch?v=xzviTjgFuIk','https://www.youtube.com/watch?v=sFKyVgwPdFU','https://www.youtube.com/watch?v=_aLQrQQXnKo']
  }),
  new Day({
    name: 26,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=j65nBvmqX-M','https://www.youtube.com/watch?v=526bFSI2RFs','https://www.youtube.com/watch?v=usFo0okZs20','https://www.youtube.com/watch?v=Y-p_Uha7w90','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=b9NBj9lTQ-4','https://www.youtube.com/watch?v=PIm1cPrB584','https://www.youtube.com/watch?v=kPu1TGl3mmE','https://www.youtube.com/watch?v=jOcE8xMuLPA','https://www.youtube.com/watch?v=EA6aw3GLS1I','https://www.youtube.com/watch?v=EhXpYvW3XEM']
  }),
  new Day({
    name: 27,
    exercises: []
  }),
  new Day({
    name: 28,
    exercises: []
  }),
  new Day({
    name: 29,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=j65nBvmqX-M','https://www.youtube.com/watch?v=526bFSI2RFs','https://www.youtube.com/watch?v=usFo0okZs20','https://www.youtube.com/watch?v=Y-p_Uha7w90','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=ahmE5zykd9g','https://www.youtube.com/watch?v=g_lKjVmqbsU','https://www.youtube.com/watch?v=a490nTbbbik','https://www.youtube.com/watch?v=DEO4g99GBac','https://www.youtube.com/watch?v=4j6qLd6qgU8','https://www.youtube.com/watch?v=YwTvkI6hB4E']
  }),
  new Day({
    name: 30,
    exercises: ['https://www.youtube.com/watch?v=68Qj_MJfbeQ','https://www.youtube.com/watch?v=j65nBvmqX-M','https://www.youtube.com/watch?v=526bFSI2RFs','https://www.youtube.com/watch?v=usFo0okZs20','https://www.youtube.com/watch?v=Y-p_Uha7w90','https://www.youtube.com/watch?v=rh4hfpofKC4','https://www.youtube.com/watch?v=La50nIO_jH0','https://www.youtube.com/watch?v=9typoS7CQTY','https://www.youtube.com/watch?v=Yb7WO-i6HGI','https://www.youtube.com/watch?v=JXNovknQ6og','https://www.youtube.com/watch?v=xzviTjgFuIk','https://www.youtube.com/watch?v=sFKyVgwPdFU','https://www.youtube.com/watch?v=_aLQrQQXnKo']
  }),
];


// REMINDER: For property 'type' please choose one of the following option:
//   enum: ['Warm-up', 'Cardio', 'Vacuum', 'Isolation', 'Stretching']


const exercisesSeed = [

//WARM-UP

// Warm-up Week 1-4

  new Exercise({
    name: 'Warm-up',
    type: 'Warm-up',
    description: ['Repeat after the Fitness-Trainer'],
    repSec: '5 min',
    thumbnail: 'https://i.ytimg.com/vi/68Qj_MJfbeQ/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=68Qj_MJfbeQ'
  }),

//CARDIO

// Cardio 1st Week

new Exercise({
  name: 'Star Jumps',
  type: 'Cardio',
  description: ['Feet shoulder-width apart', 'Knees slightly bent', 'Jump with power as high as you can', 'Arms and legs fully extended to the sides', 'Form a Star shape with your body'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/V6gyuUyOYhc/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=V6gyuUyOYhc'
}),
new Exercise({
  name: 'Power Punches',
  type: 'Cardio',
  description: ['Feet shoulder-width apart', 'Punch out one arm at a time', 'Twist core into punches', 'Twist one feet at a time into punches', 'Wrist straight', 'Breathe out as you punch'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/UYrVa1mNht8/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=UYrVa1mNht8'
}),
new Exercise({
  name: 'Side-Kick Max',
  type: 'Cardio',
  description: ['Feet shoulder-width apart', 'Arms on guard', 'Exhale forcefully through mouth while kicking out from hip', 'Lean torso slightly in the opposite direction', 'Head follows the leg'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/pazqN85Ket8/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=pazqN85Ket8'
}),
new Exercise({
  name: 'X - Squats',
  type: 'Cardio',
  description: ['Place feet a little wider than shoulder-width apart', 'Drop the hips below the knees', 'Keep back straight', 'Hips bellow knees', 'Keep lowe back tight','Weight on heels - glued to the floor'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/TVesRKTc9-8/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=TVesRKTc9-8'
}),

// Cardio 2nd Week

new Exercise({
  name: 'Power Punches & Uppercut',
  type: 'Cardio',
  description: ['Feet shoulder-width apart', 'Feet shoulder-width apart','Punch out one arm at a time','Twist core into punches','Twist one feet at a time into punches','Wrist straight while punching','Breathe out as you punch','Conduct uppercuts shortly'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/byL1oN5oPF4/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=byL1oN5oPF4'
}),
new Exercise({
  name: 'Reverse Lunge & Kick',
  type: 'Cardio',
  description: ['Take a step back', 'Bend your knees 90°','Your back knee slightly touches the floor','Raise and push your knee to the level of your hips while keeping the weight on the other leg'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/d45pPeWAV0M/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=d45pPeWAV0M'
}),
new Exercise({
  name: 'Burpee(Easy)',
  type: 'Cardio',
  description: ['Start with a wider stand', 'Hands down on the floor - shoulder-width apart','One leg back at a time', '10 reps - each leg','Keep your core engaged'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/Sq8pi-UFmHc/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=Sq8pi-UFmHc'
}),
new Exercise({
  name: 'Mountain climbers',
  type: 'Cardio',
  description: ['Stand next to a wall','Extend your arm along it','Rotate your body to the opposite direction','Stack your hips over your knees','Place your hands on your heels','Lift your chest up while inhaling '],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/yVSvxH6blrE/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=yVSvxH6blrE'
}),

// Cardio 3rd Week

new Exercise({
  name: 'Square Hops',
  type: 'Cardio',
  description: ['Create an imaginary square around you','Hop on both legs to each of the four corners','Do 10 reps and then switch the direction'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/GVRsBySVGhA/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=GVRsBySVGhA'
}),
new Exercise({
  name: 'Squat & kick',
  type: 'Cardio',
  description: ['Stand with your feet a bit wider than hip-width apart','Lower into a squat, while pressing your hips back','Knees in front do not go over the toes','While rising up, lift your knee and do a kick-out','The exercise performed on both sides count as 1 rep'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/bUPqDU91qMA/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=bUPqDU91qMA'
}),
new Exercise({
  name: 'Burpee(Medium)',
  type: 'Cardio',
  description: ['Land on your heels','Jump out and back in','Knees slightly bent while jumping back in','Position knees wider than the shoulder-width apart while landing'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/S6SeMeM-6y0/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=S6SeMeM-6y0'
}),
new Exercise({
  name: 'Jump Squats',
  type: 'Cardio',
  description: ['Stand next to a wall','Extend your arm along it','Rotate your body to the opposite direction','Stack your hips over your knees ','Place your hands on your heels','Lift your chest up while inhaling'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/M_i3-mHskBc/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=M_i3-mHskBc'
}),

// Cardio 4th Week

new Exercise({
  name: 'Jumping Jack',
  type: 'Cardio',
  description: ['Feet shoulder width apart','Arms by your side','Clap over your head','Knees slightly bent while jumping back in','Hopping out and back - is one rep'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/j65nBvmqX-M/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=j65nBvmqX-M'
}),
new Exercise({
  name: 'Runners',
  type: 'Cardio',
  description: ['Stand straight with feet shoulder-width apart','Step to one side and move one leg to the front while boosting the opposite arm','Move intensively in a sprinter fashion with weight on the balls of your feet','Move your feet fast while maintaining the rhythm'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/526bFSI2RFs/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=526bFSI2RFs'
}),
new Exercise({
  name: 'Squat and Sidekick',
  type: 'Cardio',
  description: ['Start in a squat position with feet wider than shoulder-width apart','Draw your hips back','As you stand up, switch your weight to one leg and do a side-kick with another','Return to the initial position and repeat with the other leg','The exercise performed on both sides count as 1 rep','10 reps with each leg'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/usFo0okZs20/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=usFo0okZs20'
}),
new Exercise({
  name: 'Burpee(Advanced)',
  type: 'Cardio',
  description: ['Stand next to a wall','Extend your arm along it','Rotate your body to the opposite direction','Stack your hips over your knees','Place your hands on your heels','Lift your chest up while inhaling '],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/Y-p_Uha7w90/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=Y-p_Uha7w90'
}),

//VACUUM

//Vacuum Week 1-4

new Exercise({
  name: 'Vacuum I',
  type: 'Vacuum',
  description: ['Lie with your back on the floor and join the soles of your feet together','Take a deep breath and blow up your stomach','Exhale completely and hold your breath','Draw your bellybutton inward and start the pulsation - 10 reps','Take a deep breath and repeat the set 3 times'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/rh4hfpofKC4/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=rh4hfpofKC4'
}),

new Exercise({
  name: 'Vacuum II',
  type: 'Vacuum',
  description: ['Get down on your hands and knees','Take a deep breath and blow up your stomach','Exhale completely and hold your breath','Draw your bellybutton inward and start the pulsation - 10 reps','Take a deep breath and repeat the set 3 times'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/La50nIO_jH0/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=La50nIO_jH0'
}),

// ISOLATION

//Isolation 1st Week 1st day

new Exercise({
  name: 'Plank Preparation',
  type: 'Isolation',
  description: ['Face down position','Straight arms in front of you','Curl your forearm to the head','Keep hands close to the chest','Tighten the back and keep it flat','Shoulders directly over hands'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/Q6xkygxwUzw/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=Q6xkygxwUzw'
}),

new Exercise({
  name: 'Plank Walkout',
  type: 'Isolation',
  description: ['Start in a plank position on your forearms with legs straight','Feet shoulder-width apart','Bend forward from hips','Tighten the back and keep it flat','Keep the body in a straight line','Hands under the shoulders'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/wD-MJ5t77So/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=wD-MJ5t77So'
}),

new Exercise({
  name: 'Diamond Push-Up',
  type: 'Isolation',
  description: ['Form a diamond with your hands','Place your hands under the chest','Forefingers and Thumbs together','Keep your back straight','Tense your abs'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/eseFjzRvDIc/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=eseFjzRvDIc'
}),

new Exercise({
  name: 'Knees Push-Up Dive Bombers',
  type: 'Isolation',
  description: ['Hands shoulder - width apart','Head goes down towards the floor','Curve you back','Extend your arms','Your hands should be looking forward','Push your hips up'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/vo7rXUwPYl0/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=vo7rXUwPYl0'
}),

//Isolation 1st Week 2nd day

new Exercise({
  name: 'Crunches',
  type: 'Isolation',
  description: ['Feet flat on the floor','Knees hip distance','Chest is open','Keep elbows out','Exhale as you lift'],
  repSec: '20 rep',
  thumbnail: 'https://i.ytimg.com/vi/tbdaU370u0A/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=tbdaU370u0A'
}),

new Exercise({
  name: 'Abs Bikes',
  type: 'Isolation',
  description: ['Take one full breath on each rotation','Keep elbows out','Come as high as you can','Shoulders cross over to the knee cap','Do not lace your fingers together'],
  repSec: '20 rep',
  thumbnail: 'https://i.ytimg.com/vi/zDvkn4XFa8I/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=zDvkn4XFa8I'
}),

new Exercise({
  name: 'Oblique Twist',
  type: 'Isolation',
  description: ['Start in a boat position','Twist side to side','Look to the side each time you twist','Tap the floor with your hands each time you rotate','One side to another - is one rep'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/QqsgeVg5xRI/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=QqsgeVg5xRI'
}),

new Exercise({
  name: 'Scissor Kicks',
  type: 'Isolation',
  description: ['Place your hands under your glutes','Extend your legs','Alternate your legs','Keep your knees slightly bent'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/MngOYhzh944/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=MngOYhzh944'
}),

//Isolation 1st Week 3rd day

new Exercise({
  name: 'Squat',
  type: 'Isolation',
  description: ['Feet shoulder-width apart','Bend your knees until you reach 90 degrees','Keep your heels on the ground','Pull in your abs','Hips should sink beneath your knees','Inhale as you lower. Exhale as you rise.'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/yKCp2Su8qCc/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=yKCp2Su8qCc'
}),

new Exercise({
  name: 'Reverse Lunges',
  type: 'Isolation',
  description: ['Feet hip-width apart','Step back','Push through the heel','Keep the abs tight','Keep the chest up'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/K-6lkr9vcWE/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=K-6lkr9vcWE'
}),

new Exercise({
  name: 'Single-Leg Bridge',
  type: 'Isolation',
  description: ['Take one leg out','Press hips up and down','Raise your hips off the ground as high as you can','Keep your body stable and centered','Feet flat on mat stacked under the knees','Keep your neck relaxed'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/DmuOhSgpQlU/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=DmuOhSgpQlU'
}),

new Exercise({
  name: 'Ballerina Butt Lifts',
  type: 'Isolation',
  description: ['Lie on your belly','Bend your knees','Pulse your legs to the ceiling','Lift your knees off the floor','Keep feet flat'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/BVeqp7QSVxk/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=BVeqp7QSVxk'
}),

//Isolation 1st Week 4th day = Isolation 1st Week 2nd day

//Isolation 1st Week 5th day

new Exercise({
  name: 'Wide Push-Ups',
  type: 'Isolation',
  description: ['Place your hands farther than shoulder-widths apart','Keep your core tight','Touch floor with your chest','Push against the palms of your hands','Elbows go to the sides'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/JHolccS74y0/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=JHolccS74y0'
}),

new Exercise({
  name: 'Lower Back Extension',
  type: 'Isolation',
  description: ['Flat face-down position','Lift your chest with arms together','Lift your upper body','Make sure that you engage your abdominals too','Head is in line with your spine'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/qYmtEor_oWM/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=qYmtEor_oWM'
}),

new Exercise({
  name: 'Pointers',
  type: 'Isolation',
  description: ['Hands directly underneath your shoulders','Knees directly underneath your hips','Neutral spine position (pull your belly button in towards the spine','Keep hips parallel to the floor','Keep the core tight'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/whnpYuwV3tg/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=whnpYuwV3tg'
}),

new Exercise({
  name: 'Bridge',
  type: 'Isolation',
  description: ['Feet flat on the floor and hip-width apart','Keep your hands down by your side','Squeeze the glutes','Exhale as you come up','Keep your core tight'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/uGeRRZUt35U/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=uGeRRZUt35U'
}),

//Isolation 2nd Week 1st day

new Exercise({
  name: 'Close Push-ups',
  type: 'Isolation',
  description: ['Place your hands inside your shoulder width','Keep your legs together and your body straight','Inhale while lowering yourself','Exhale as you straighten your elbows on the way up','Chest almost touches the floor','Press your upper body back up while exhailing','For the more advanced shapers - extend your legs out'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/ahmE5zykd9g/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=ahmE5zykd9g'
}),

new Exercise({
  name: 'Chair Dips',
  type: 'Isolation',
  description: ['Lower your body onto a chair','Knees are bent to 90 degrees','Feet remain flat on the ground','Keep elbows at around 90 degrees','Keep your upper body straight while going up or down'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/g_lKjVmqbsU/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=g_lKjVmqbsU'
}),

new Exercise({
  name: 'Triceps Dips',
  type: 'Isolation',
  description: ['Sit straight while stretching your legs in front of you','Weight goes to your hands  with fingers facing toward your legs','Push your hips through your hands while exhaling','Push it until your knees bent at 90-degree angles and feet flat on the floor','Inhale, while moving into initial position'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/a490nTbbbik/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=a490nTbbbik'
}),

new Exercise({
  name: 'Plank Walk Up',
  type: 'Isolation',
  description: ['Start off with a plank - both arms extended','Bent one elbow at a time and place your forearms on the floor','Backtrack all the moves until you return to an initial position','Keep core tight while forming a straight line with your body','Do 10 reps starting off with one hand, then switch to another, executing another 10 reps. (20 in total)'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/DEO4g99GBac/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=DEO4g99GBac'
}),

//Isolation 2nd Week 2nd day

new Exercise({
  name: 'Scissor Kicks',
  type: 'Isolation',
  description: ['Lie flat on the floor while placing your arms close to your sides with palms facing down','Draw your knee back up, while straightening another leg','Keep your lower back glued to the floor','It is counted as one rep'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/BB0wJgi7nrg/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=BB0wJgi7nrg'
}),

new Exercise({
  name: 'Lying Leg Raise',
  type: 'Isolation',
  description: ['Lie flat on your back','Place your palms flat on the floor under your glutes','Keep your legs straight while raising your feet to the ceiling','Keep your knees and feet together','Lower your legs back down to the floor in a controlled fashion'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/cp0e3DRxJjY/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=cp0e3DRxJjY'
}),

new Exercise({
  name: 'V-Crunches',
  type: 'Isolation',
  description: ['Lie flat on the floor while extending your arms over your head','Quickly lift your torso into an upright position while pulling your knees to the chest','Lower your body back into initial position','It is counted as one rep'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/Hpqrrac1RvQ/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=Hpqrrac1RvQ'
}),

new Exercise({
  name: 'Plank Straight',
  type: 'Isolation',
  description: ['Hands underneath the shoulders','Crawl your tows into the mat','Shoulders directly over hands','Keep your glutes and abdominals tight','Energy in the core'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/I9J28laC2XM/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=I9J28laC2XM'
}),

//Isolation 2nd Week 3rd day

new Exercise({
  name: 'Wall Sits',
  type: 'Isolation',
  description: ['Walk your feet out about half a meter','Lean against the wall','Slide back until your knees are bent at about a 90 degree angle','Your thighs should be parallel to the ground','Knees do not have to go over the toes','Press your lower back flat against the wall','Hold for 30 seconds'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/B6bdlfDhGl0/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=B6bdlfDhGl0'
}),

new Exercise({
  name: 'Bulgarian Squat',
  type: 'Isolation',
  description: ['Extend your leg to the back and put your foot on top of the chair','Dip down into a lunge','Knee in front does not go over the toes','A squat on the performed on both sides count as 1 rep'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/kmnyJoWaf2A/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=kmnyJoWaf2A'
}),

new Exercise({
  name: 'Fire Hydrante',
  type: 'Isolation',
  description: ['Get down on your hands and knees','Put your hands directly under your shoulders','Raise one straight leg up and out to the side','Move your shoulder towards the leg','Repeat 10 times and then switch legs'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/MaIrJh5NEtM/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=MaIrJh5NEtM'
}),

new Exercise({
  name: 'Prisoner Get-Ups',
  type: 'Isolation',
  description: ['Hands underneath the shoulders','Crawl your tows into the mat','Shoulders directly over hands','Keep your glutes and abdominals tight','Energy in the core'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/vUxoJPXT8gM/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=vUxoJPXT8gM'
}),

//Isolation 2nd Week 4th day = Isolation 2nd Week 2nd day

//Isolation 2nd Week 5th day

new Exercise({
  name: 'Plank 180 degrees',
  type: 'Isolation',
  description: ['Hands underneath the shoulders','Crawl your tows into the mat','Shoulders directly over hands','Keep your glutes and abdominals tight','Energy in the core','Walk with your hands to the left and to the right','The exercise performed on both sides count as 1 rep - 10 in total'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/b9NBj9lTQ-4/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=b9NBj9lTQ-4'
}),

new Exercise({
  name: 'Superman',
  type: 'Isolation',
  description: ['Face down position','Extend your arms above your head and stretch your legs behind you','Lift an opposite hand and leg together','Hold there for a moment','Alternate your legs and arms','10 reps with each arm and opposite leg'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/PIm1cPrB584/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=PIm1cPrB584'
}),

new Exercise({
  name: 'Reverse Crunches',
  type: 'Isolation',
  description: ['Sit down on the floor','Bend your knees with your feet flat on the floor','While rolling back, place your hands beneath your lower back to add to the support','Keep your core tight','Bring your knees closer to the chest'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/kPu1TGl3mmE/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=kPu1TGl3mmE'
}),

new Exercise({
  name: 'Push-Up & Shoulder Touch',
  type: 'Isolation',
  description: ['Start in a push-up position','Tap your shoulder with one hand, while balancing yourself with another','Keep your core tight','10 reps - each arm','Level Up: Extend your legs to the back and keep them straight'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/jOcE8xMuLPA/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=jOcE8xMuLPA'
}),

//Isolation 3rd Week 1st day = 1st Week 1st day

//Isolation 3rd Week 2nd day

new Exercise({
  name: 'Shoulder Stand',
  type: 'Isolation',
  description: ['Inner legs zipped and lifted','Arms flat on the floor','Roll back on to your shoulders','Straighten your legs upward and reach as high as you can','Roll back to the initial position'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/IJbBndR-9II/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=IJbBndR-9II'
}),

new Exercise({
  name: 'Scissor Clap',
  type: 'Isolation',
  description: ['Feet shoulder-width apart','Bring one leg up at a time','Engage your core','Lift up towards the ceiling using your chest','Clap under the knee'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/Ut5kMRBKYRA/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=Ut5kMRBKYRA'
}),

new Exercise({
  name: 'Side Plank',
  type: 'Isolation',
  description: ['Lie on your side with your legs extended','Prop your upper body up on your elbow and forearm','Lift your hips until your body forms a straight line','Lift your arm straight up and look in this direction','One foot in front of the other','Hold this position for 20 seconds'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/fAdAv914-Qc/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=fAdAv914-Qc'
}),

new Exercise({
  name: 'Forearm Plank',
  type: 'Isolation',
  description: ['Place your forearms on the ground','Elbows directly beneath your shoulders','Form a straight line with your body','Keep your head and neck in one line'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/cNOakzleJvw/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=cNOakzleJvw'
}),

//Isolation 3rd Week 3rd day = Isolation 1st Week 3rd day

//Isolation 3rd Week 4th day = Isolation 3rd Week 2nd day

//Isolation 3rd Week 5th day = Isolation 1st Week 5th day

//Isolation 4th Week 1st day = Isolation 2nd Week 1st day

//Isolation 4th Week 2nd day

new Exercise({
  name: 'Leg Circles',
  type: 'Isolation',
  description: ['Lie flat on your back, while putting your palms flat under the glutes','Lift your legs above the hips and start drawing a circle with your feet','Aim to get as high above your body and as low to the ground as possible without touching the ground','Legs are extended and zipped together all the time','Do 10 reps in one direction','Without a stop - reverse a direction and do another 10 reps'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/9typoS7CQTY/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=9typoS7CQTY'
}),

new Exercise({
  name: 'Heel Touch',
  type: 'Isolation',
  description: ['Lie flat on your back','Bend your legs at the knees and set your feet on the floor','Place arms close to your sides','Lift up your trunk','Reach one heel at a time while exhailing','Two sides are counted as one reps'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/Yb7WO-i6HGI/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=Yb7WO-i6HGI'
}),

new Exercise({
  name: 'Ultimate abs',
  type: 'Isolation',
  description: ['Lay down with your arms by your side','Slowly raise one arm and the opposite leg at the same time','Touch the opposite toe','Pull your belly button towards your spine','return to the starting position and repeate it on the alternating side','Two sides are counted as one reps'],
  repSec: '20 rep',
  thumbnail: 'https://i.ytimg.com/vi/JXNovknQ6og/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=JXNovknQ6og'
}),

new Exercise({
  name: 'Side Plank Hip Lift',
  type: 'Isolation',
  description: ['Align your feet in one line','Your legs are fully extended','Place your elbow under the shoulder and align your head with your spine','Keep your core tight and lift your hips off the floor','Return to the starting position - one rep'],
  repSec: '10 rep',
  thumbnail: 'https://i.ytimg.com/vi/xzviTjgFuIk/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=xzviTjgFuIk'
}),

//Isolation 4th Week 3rd day = Isolation 2nd Week 3rd day

//Isolation 4th Week 4th day = Isolation 4th Week 2nd day

//Isolation 4th Week 5th day = Isolation 2nd Week 5th day

//STRETCHING

//Stretching Mondays

new Exercise({
  name: 'Stretching I',
  type: 'Stretching',
  description: ['Align your feet in one line','Your legs are fully extended','Place your elbow under the shoulder and align your head with your spine','Keep your core tight and lift your hips off t1) Stand next to a wall','Extend your arm along it','Rotate your body to the opposite direction'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/4j6qLd6qgU8/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=4j6qLd6qgU8'
}),

new Exercise({
  name: 'Stretching II',
  type: 'Stretching',
  description: ['Stretch for 30 seconds each side'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/YwTvkI6hB4E/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=YwTvkI6hB4E'
}),

//Stretching Tuesdays - Cobra and Camel

new Exercise({
  name: 'Stretching I',
  type: 'Stretching',
  description: ['Lie flat on the floor with the knees and feet placed closer together','Move your body upward slowly while inhaling','Lift your abdominals, chest and head up','Keep inhaling and exhailing while being in the upper position'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/sFKyVgwPdFU/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=sFKyVgwPdFU'
}),

new Exercise({
  name: 'Stretching II',
  type: 'Stretching',
  description: ['Stretch for 30 seconds'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/_aLQrQQXnKo/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=_aLQrQQXnKo'
}),

//Stretching Wednesday - Hurdler Stretch and Quads Stretches

new Exercise({
  name: 'Stretching I',
  type: 'Stretching',
  description: ['Start with a staff pose','Bend the right knee and place the sole of the foot against the left inner thigh','Fold over the leg and hold for 30 seconds'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/abpy88id_SU/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=abpy88id_SU'
}),

new Exercise({
  name: 'Stretching II',
  type: 'Stretching',
  description: ['1) Get into the Plank position','Hands are slightly wider than the shoulder-width apart','Keep your core tight','Draw one knee in at a time while twisting your hips','Knee goes diresctly to the opposite elbow'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/qtTKTc2Cvjg/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=qtTKTc2Cvjg'
}),

//Stretching Wednesday - Hurdler Stretch and Quads Stretches

new Exercise({
  name: 'Stretching I',
  type: 'Stretching',
  description: ['Stand upright and cross one arm across your body','While using the opposite arm, pull the elbow of the arm being stretched towards the opposite shoulder','Hold for 30 seconds'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/EA6aw3GLS1I/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=EA6aw3GLS1I'
}),

new Exercise({
  name: 'Stretching II',
  type: 'Stretching',
  description: ['Start with a staff pose','Bend your right knee and place your foot outside the opposite thigh','Keep zour left leg straight','Turn your torso to the right','Press with your left arm into a right thigh and twist on'],
  repSec: '30 sec',
  thumbnail: 'https://i.ytimg.com/vi/EhXpYvW3XEM/hqdefault.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=EhXpYvW3XEM'
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
    console.log(`${exercisesSeed.length} days created`)
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })

console.log(mongoose);


