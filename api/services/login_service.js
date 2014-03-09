var q = require('q')
var _ = require('underscore')
var profile_helper = require('../helpers/profile_helper')

module.exports = {
  // output: rigthCredentials ? user : promise_rejection
  login: function(plain_text_password, user) {
    var defer = q.defer()
    defer.resolve([plain_text_password, user])
    return defer.promise
    .spread(checkUserExists)
    .spread(comparePasswords)
    .spread(checkPasswordMatch)
  }
}

function comparePasswords(plain_text_password, user) {
  var match = profile_helper.comparePasswords(user.password, plain_text_password)
  return [match, user]
}

function checkUserExists(plain_text_password, user) {
  if(!user) throw new Error()
  return [plain_text_password, user]
}

function checkPasswordMatch(rightCredentials, user) {
  if(!rightCredentials) throw new Error()
  return user
}