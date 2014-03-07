var q = require('q')
var _ = require('underscore')

module.exports = function(req, res) {
  return {
    login: function(user) {
      var defer = q.defer()
      defer.resolve(user)
      return defer.promise.then(checkUserExists)
      .catch(respondInvalidEmailOrPassword)
      .then(comparePasswords(req))
      .then(checkPasswordMatch)
      .catch(respondInvalidEmailOrPassword)
      .then(addUserToSession(user))
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

  function addUserToSession(user) {
    return _.bind(_addUserToSession, { user: user })
  }

  function _addUserToSession() {
    req.session.user = this.user.id
    res.json(this.user, 201)
    debugger
    return res
  }
}