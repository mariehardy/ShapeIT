// routes/project-routes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user-model')
const uploadCloud = require('../configs/cloudinary')



// PUT route => to update a specific project
router.put('/profile-edit', (req, res, next)=>{  //,uploadCloud.single('avatarUrl')
  if(!mongoose.Types.ObjectId.isValid(req.user._id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  const {
    email,
    instagramID,
    firstName,
    lastName,
    birthday,
    country,
    city,
    weight,
    height,
    avatarUrl
  } = req.body

  console.log (req.body.avatarUrl)
  
  User.findByIdAndUpdate( req.user._id,{

      email,
      instagramID,
      firstName,
      lastName,
      birthday,
      country,
      city,
      weight,
      height,
      avatarUrl
      
  }, { new: true})
    // .then(() => {
    //   res.json({ message: `Project with ${req.user._id} is updated successfully.` });
    // })
    .then((user) => {
          res.json(user)
          // res.json({ secure_url: req.file.secure_url })
      })
    .catch(err => {
      res.json(err);
    })
})

// uploadCloud = require('../configs/cloudinary');

// this route only stores into cloudinary, not our database -> sends imageURL to React
router.post('/profile-edit', uploadCloud.single("avatarUrl"), (req, res, next) => {

  // send over the cloudinary URL to React
  res.json({ avatarUrl: req.file.path })
})


// ---> Module 2 Project
// router.get('/profile-edit', ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render('auth/ProfileEdit')
// })

// router.post('/profile-edit', (req, res) => {
//   const {
//       email,
//       instagramID,
//       firstName,
//       lastName,
//       birthday,
//       country,
//       city,
//       weight,
//       height

//   } = req.body

//   // const imgPath = req.file.url Edit img at a later point 
//   User.findByIdAndUpdate(req.user._id, {

//     email,
//     instagramID,
//     firstName,
//     lastName,
//     birthday,
//     country,
//     city,
//     weight,
//     height

//   })

//       .then((result) => {
//           res.redirect('/profile')
//       })
//       .catch(() => {
//           console.log('error')
//       })

// })

module.exports = router;