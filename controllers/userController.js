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
      let userExist = await User.findOne({email: newUser.email})
      if (!userExist){
        await newUser.save()

        res.render('message', {user: {msg:'You have joined Plogging Ethiopia!'}})
        return;
      }
      res.render('message', {user: {msg:"You're already a family!"}})
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