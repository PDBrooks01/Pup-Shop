const { validationResult } = require ('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/users')

exports.signup = async (req,res,next)=>{
  const err = validationResult(req)

  if (!err.isEmpty()) return

  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const email= req.body.email
  const password = req.body.password

  try{
    const hashedPassword = await bcrypt.hash(password,12)
    const userDetails = {
      first_name: first_name,
      last_name:last_name,
      email:email,
      password:hashedPassword
    }
    const result = await User.save(userDetails)
    res.status(201).json({message:'User registered!'})
  } catch(err){
      if(!err.statusCode){
        err.statusCode = 500;
      }
    next(err)
  }
}
exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.find(email);

    if (user[0].length !== 1) {
      const error = new Error('Invalid Email or Password');
      error.statusCode = 401;
      throw error;
    }

    const storedUser = user[0][0];

    const isEqual = await bcrypt.compare(password, storedUser.password);

    if (!isEqual) {
      const error = new Error('Invalid Email or Password');
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: storedUser.email,
        userId: storedUser.customer_id,
      },
      'secretfortoken',
      { expiresIn: '1h' }
    );
    res.status(200).json({ token: token, userId: storedUser.customer_id });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
