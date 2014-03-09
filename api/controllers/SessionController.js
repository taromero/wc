var passport = require('passport')

module.exports = {
  login: function(req, res) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      failureFlash: true
    })(req, res)
  },
  logout: function(req, res) {
    req.logout()
    res.redirect('/')
  }
}