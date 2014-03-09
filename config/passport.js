var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var profile_helper = require('../api/helpers/profile_helper')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({ email: email })
    .then(checkUserExists)
    .then(checkPasswordMatch)
    .fail(function(err) {
      if (err) {
        done(err)
      } else {
        done(null, false, { message: 'Incorrect email or password' })
      }
    }).done()
  }
))

function checkUserExists(user) {
  if (!user) { throw new Error(null) }
  return [password, user.password]
}

function checkPasswordMatch(user, password) {
  return profile_helper.comparePasswords(user.password, password).then(function(match) {
    debugger
    if (!match) {
      throw new Error(null)
    } else {
      done(null, user)
    }
  })
}

passport.serializeUser(function(user, done) {
  done(null, user[0].id)
})

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user)
  })
})

module.exports = {
 express: {
    customMiddleware: function(app){
      app.use(passport.initialize())
    }
  }
}