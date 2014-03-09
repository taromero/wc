module.exports = {
  checkUserExists: function(user) {
    if (!user) { throw new Error(null) }
    return user
  },
  checkPassword: function(password) {
    return _.bind(_checkPassword, { password: password })
  },
  respondWithUser: function(done) {
    return _.bind(_respondWithUser, { done: done })
  },
  respondWithAuthError: function(done) {
    return _.bind(_respondWithAuthError, { done: done })
  }
}

function _checkPassword(user) {
  return user.validatePassword(this.password).then(function(match) {
    if (!match) {
      var error = new Error(null)
      error.type = 'auth_error'
      throw error
    } else {
      return user
    }
  })
}

function _respondWithUser(user) {
  this.done(null, user)
}

function _respondWithAuthError(err) {
  if (err.type == 'auth_error') {
    this.done(null, false, { message: 'Incorrect email or password' })
  } else {
    this.done(err)
  }
}