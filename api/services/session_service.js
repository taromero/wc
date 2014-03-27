var _ = require('underscore')

var checkUserExists
var checkPassword

module.exports.login = function(email, password) {
  var _this = this
  return User.findOne({ email: email })
          .then(this.checkUserExists)
          .then(function(user) {
            return _this.checkPassword(user, password)
          })
}

module.exports.checkUserExists = function(user) {
  if (_.isEmpty(user)) {
    return Q.reject({ code: 400, message: "Wrong email/password" })
  } else {
    return Q(user)
  }
}

module.exports.checkPassword = function(user, password) {
  return user.validatePassword(password).then(function(match) {
    return (match ? user : Q.reject({ code: 400, message: "Wrong email/password" }))
  })
}