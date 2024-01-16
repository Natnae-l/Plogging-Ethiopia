const { checkSchema, validationResult } = require('express-validator');
const User = require('../models/userModel');
const valSchema = require('../validation/validation')


addUser = async (req, res, next) => {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {    
      let newUser = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone
      })
      await newUser.save()
      console.log('new user saved')

      req.flash('user') = 'You have joined Plogging Ethiopia'
    
      return res.redirect('/')
  }

  res.send({ errors: result.array() });
  } catch (err) {
    next(err)
  }
 

    
}
userValidate = checkSchema(valSchema)

module.exports = {
    addUser, userValidate
}