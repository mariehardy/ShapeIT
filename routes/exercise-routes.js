const express = require('express');
const mongoose = require('mongoose');
const Exercise = require('../models/exercise-model');
const Day = require('../models/day-model');
 
const router = express.Router();
 
// GET route => to retrieve a specific exercise
// router.get('/day/:dayId/exercise/:exerciseId', (req, res, next) => {
router.get('/exercise/:id', (req, res, next) => {
  console.log('I am in Exercise route')

  Exercise.findById(req.params.id)
    .then(response => {
      console.log('Exercise Route response is ======== ', response)
      res.json(response);
    })
    .catch(error => {
      res.json(error);
    });
});

 
module.exports = router;