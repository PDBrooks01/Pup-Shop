const express = require('express')
const router = express.Router()
const { body } = require('express-validator')//If check fails, the rest of the routes will not execute
const User = require('../models/users')
const authController = require('../controllers/auth')
router.post('/signup',
  [
    body('first_name').trim().not().isEmpty(),
    body('last_name').trim().not().isEmpty(),
    body('email').isEmail().withMessage('Please enter a valid email.')
    .custom(async (email)=>{
      const user = await User.find(email);
      if(user[0].length >0){
        return Promise.reject('Email address already exist!')
      }
    }).normalizeEmail(),
    body('password').trim().isLength({min:6})
  ],authController.signup
)
router.post('/login', authController.login)
module.exports = router
