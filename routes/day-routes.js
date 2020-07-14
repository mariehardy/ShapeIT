const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
 
const Day = require('../models/day-model');
const Exercise = require('../models/exercise-model'); // <== !!!


// GET route => to get a specific day/detailed view
router.get('/day/:id', (req, res, next) => {
  // ***** IS THIS IMPORTANT???******
  // if (!mongoose.Types.ObjectId.isValid(req.params.id)) { // BUT HERE I WANT ***NAME*** AS :ID...
  //   res.status(400).json({ message: 'Specified id is not valid' });
  //   return;
  // }
  Day.findOne({name: req.params.id})
    // Populate only works when populating an ID
    // .populate('exercises')
    .then(day => {
      Exercise.find({ videoUrl: { $in: day.exercises }})
      .then(response => {
        console.log('Day Route response is ======== ', response)

        let warmups =response.filter(e=> e.type == "Warm-up")
        let cardio =response.filter(e=> e.type == "Cardio")
        let vacuum =response.filter(e=> e.type == "Vacuum")
        let isolation =response.filter(e=> e.type == "Isolation")
        let stretching =response.filter(e=> e.type == "Stretching")
        console.log("resss====>>>> MMiirr => ",response)
        data = [...warmups,...cardio,...vacuum,...isolation,...stretching]
        // console.log(data)
        res.json(data)
      })
    })
    .catch(error => {
      res.json(error);
    });
});


module.exports = router;