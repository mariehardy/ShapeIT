const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
 
const Day = require('../models/day-model');
const Exercise = require('../models/exercise-model'); // <== !!!
 
 
// GET route => to get all the projects
router.get('/day', (req, res, next) => {
  Day.find()
    .populate('exercises')  // puts the whole task array in the project instead of only the task id
    .then(allTheDays => {
      res.json(allTheDays);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET route => to get a specific day/detailed view
router.get('/day/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  // Our days have array of exercises' ids and
  // we can use .populate() method to get the whole exercise objects
  Day.findById(req.params.id)
    .populate('exercises')
    .then(day => {
      res.status(200).json(day);
    })
    .catch(error => {
      res.json(error);
    });
});


module.exports = router;