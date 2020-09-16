const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
 
const Day = require('../models/day-model');
 
 
// GET route => to get all the projects
router.get('/plan', (req, res, next) => {
  Day.find()
    .then(allTheDays => {
    // SORT DAYS IN ORDER
    let copiedListOfDays = [...allTheDays]
    let sortedListOfDays = copiedListOfDays.sort(function (a, b) {
       if (a.name > b.name) {
         return 1;
     } else {
         return -1;
     }
     })
      res.json(sortedListOfDays);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;