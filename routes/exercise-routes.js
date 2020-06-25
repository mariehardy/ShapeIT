const express = require('express');
const mongoose = require('mongoose');
const Exercise = require('../models/exercise-model');
const Day = require('../models/day-model');
 
const router = express.Router();
 
// GET route => to retrieve a specific exercise
router.get('/day/:dayId/exercise/:exerciseId', (req, res, next) => {
  Exercise.findById(req.params.exerciseId)
    .then(exercise => {
      res.json(exercise);
    })
    .catch(error => {
      res.json(error);
    });
});

 
module.exports = router;