var profile_helper = require('profile_helper')
var _ = require('underscore')

module.exports = {
  login: function(req, res) {
    User.first({ email: req.body.email })
    .fail(respondInternalError)
    .then(checkUserExists)
    .fail(respondInvalidEmailOrPassword)
    .then(comparePasswords(req))
    .then(checkPasswordMatch)
    .fail(respondInvalidEmailOrPassword)
    .then(addUserToSession)
  }
}

function comparePasswords(req) {
  return _.bind(_comparePasswords, { req: req })
}

function _comparePasswords(user) {
  return profile_helper.comparePasswords(this.req.body.password, user.password)
}

function checkUserExists(user) {
  return user ? user : q.reject()
}

function checkPasswordMatch(rightCredentials) {
  rightCredentials || q.reject()
}

function respondInvalidEmailOrPassword() {
  res.json({ error: 'Invalid email or password' }, 400)
}

function respondInternalError() {
  res.json({ error: 'Internal error' }, 500)
}

function addUserToSession() {
  req.session.user = user.id
  res.json(user, 200)
}