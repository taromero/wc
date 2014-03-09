var LocalStrategy = require('passport-local').Strategy
var ph = require('../api/helpers/passport_helper')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({ email: email })
      .then(ph.checkUserExists)
      .then(ph.checkPassword(password))
      .then(ph.respondWithUser(done))
      .fail(ph.respondWithAuthError(done))
      .done()
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.id)
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