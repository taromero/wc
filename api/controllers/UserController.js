var profile_helper = require('profile_helper')
var _ = require('underscore')
var login_service = require('../services/login_service')

module.exports = {
  login: function(req, res) {
    User.first({ email: req.body.email })
    .catch(respondInternalError)
    .then(function(user) {
      login_service.login(req.body.password, user)
    })
    .catch(respondInvalidEmailOrPassword)
    .then(addUserToSession)
    .done()
  }
}

function respondInvalidEmailOrPassword() {
  res.json({ error: 'Invalid email or password' }, 400)
}

function respondInvalidEmailOrPassword() {
  res.json({ error: 'Invalid email or password' }, 400)
}

function addUserToSession(user) {
  req.session.user = user.id
  res.json(user, 201)
}