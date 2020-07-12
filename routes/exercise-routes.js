const express = require('express');
const mongoose = require('mongoose');
const Exercise = require('../models/exercise-model');
const Day = require('../models/day-model');
 
const router = express.Router();
 
// GET route => to retrieve a specific exercise
router.get('/exercise/:id', (req, res, next) => {

  Exercise.findById(req.params.id)
    .then(response => {
      // console.log('Exercise Route response is ======== ', response)
      res.json(response);
    })
    .catch(error => {
      res.json(error);
    });
});


router.post('/increaseCurrentDay', (req, res, next) => {
  req.user.currentDay ++
  req.user.save()
  .then(response => {
    res.json(response)
  })
})
 
module.exports = router;