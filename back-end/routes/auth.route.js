/*
  @instructor Name:  Ebere.
  @program : WDI 4 Riyadh
*/

const User = require('../models/User');
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');
const passport = require('passport');

const passportHelper = require('../config/passport')


router.get('/', (request, response, next) => {
  //custom jwt authenticate
  passport.authenticate('jwt', {session: false}, (err, user, info)=>{
      console.log("got here")
      if(err){ return response.status(400).json({ message: err }) }

      if(info !== undefined){
        return response.json({ message: info.message })
      }else{
        User.find({})
        .then((user)=>{
          response.json({ user: user });
        })

      }

      
  })(request, response, next)

  
})
router.post('/register', (request, response) => {
    //how are we gonna asign a user as admin? through postman?
  let userInput = {
   username : request.body.username,
   email: request.body.email,
   phone: request.body.phone,
   password: request.body.password,
   isAdmin: request.body.isAdmin
  }

  


  //instance of data
  let user = new User(userInput)

  console.log(user)
  // //save the data
  user.save()
    .then(()=>{
        return response.json({ message: 'user created' });
    }).catch(e => {
        return response.status(401).json({ error: 'error saving user', msg: e });
    })

  
})
router.post('/login', (request, response) => {

  passport.authenticate('local', {session: false}, (err, user, info) => {

    if (err || !user) {
        return response.status(401).json({
            message: info ? info.message : 'Login failed',
            user   : user
        });
    }

   request.login(user, {session: false}, (err) => {
          if (err) {
              return response.status(401).json({message: err});
          }
          // generate a signed json web token with the contents of user object and return it in the response
          user.password = '' //remove password
          console.log(user)
          const token = jwt.sign(user.toJSON(), 'your_jwt_secret', { expiresIn: 60 * 60 });
          return response.status(200).json({user, token});
        });
    })(request, response);
   
})


module.exports = router