const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
 
const Day = require('../models/day-model');
const Exercise = require('../models/exercise-model'); // <== !!!


// GET route => to get a specific day/detailed view
router.get('/day/:id', (req, res, next) => {
  Day.findOne({name: req.params.id})
    // Populate only works when populating an ID
    // .populate('exercises')
    .then(day => {
      Exercise.find({ videoUrl: { $in: day.exercises }})
      .then(response => {
        // console.log('Day Route response is ======== ', response)
        
        // Here I tell the API in which order I want the different
        // types of exercises to be loaded, otherwise they are 
        // added in random order
        let warmups = response.filter(e=> e.type == "Warm-up")
        let cardio = response.filter(e=> e.type == "Cardio")
        let vacuum = response.filter(e=> e.type == "Vacuum")
        let isolation = response.filter(e=> e.type == "Isolation")
        let stretching = response.filter(e=> e.type == "Stretching")

        data = [...warmups, ...cardio, ...vacuum, ...isolation, ...stretching]

        res.json(data)
      })
    })
    .catch(error => {
      res.json(error);
    });
});


module.exports = router;