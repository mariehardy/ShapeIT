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

  // console.log('profile-routes req.body.birthday ==== ', req.body.birthday)
  
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
    .then((user) => {
          res.json(user)
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



module.exports = router;