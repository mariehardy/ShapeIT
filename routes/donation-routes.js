// const express = require('express');
// const mongoose = require('mongoose');
// const Exercise = require('../models/exercise-model');
// const Day = require('../models/day-model');
// const axios = require('axios')

// const router = express.Router();

// // GET route => to retrieve a specific exercise
// router.get('/donate', (req, res, next) => { ///:dayId/exercise/:exerciseId
//   console.log('Hello')

//       const access_token = "8b5ba402ac187255730143ddcd085aca"
//       axios.get('https://api.pledgeling.com/v1/organizations', {
//         headers: {
//           'Authorization': `Bearer ${access_token}`
//         }
//       })
//         .then((response) => {
//           console.log(response.data)
//           res.json(res.data)
//         })
//         .catch((error) => {
//           console.error(error)
//         })

//       // res.json(exercise);
//     })
//     // .catch(error => {
//     //   res.json(error);
//     // });




// module.exports = router;