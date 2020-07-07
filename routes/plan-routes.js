const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
 
const Day = require('../models/day-model');
 
 
// GET route => to get all the projects
router.get('/plan', (req, res, next) => {
  Day.find()
    .then(allTheDays => {
      res.json(allTheDays);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;