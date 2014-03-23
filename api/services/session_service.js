var _ = require('underscore')

module.exports.login = function(email, password) {
  return User.findOne({ email: email })
          .then(this.checkUserExists)
          .then(this.checkPassword)
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