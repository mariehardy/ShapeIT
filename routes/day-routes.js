const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
 
const Day = require('../models/day-model');
const Exercise = require('../models/exercise-model'); // <== !!!
 
 
// GET route => to get all the projects
// router.get('/plan', (req, res, next) => {
//   Day.find()
//     .then(allTheDays => {
//       res.json(allTheDays);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// GET route => to get a specific day/detailed view
router.get('/day/:id', (req, res, next) => {
  // ***** IS THIS IMPORTANT???******
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) { // BUT HERE I WANT ***NAME*** AS :ID...
  //   res.status(400).json({ message: 'Specified id is not valid' });
  //   return;
  // }
 
  // Our days have array of exercises' ids and
  // we can use .populate() method to get the whole exercise objects  
  Day.findOne({name: req.params.id})
    // Populate only works when populating an ID
    // .populate('exercises')
    .then(day => {
      Exercise.find({ videoUrl: { $in: day.exercises }})
      .then(response => {
        res.json(response)
      })
    })

    .catch(error => {
      res.json(error);
    });
});


module.exports = router;