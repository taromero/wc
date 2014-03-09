var curry = require('curry')

module.exports = {
  checkUserExists: function(user) {
    if (!user) { throw new Error(null) }
    return user
  },
  checkPassword: function(password) {
    return curry(_checkPassword)(password)
  },
  respondWithUser: function(done) {
    return curry(_respondWithUser)(done)
  },
  respondWithAuthError: function(done) {
    return curry(_respondWithAuthError)(done)
  }
}

function _checkPassword(password, user) {
  return user.validatePassword(password).then(function(match) {
    if (!match) {
      var error = new Error(null)
      error.type = 'auth_error'
      throw error
    } else {
      return user
    }
  })
}

function _respondWithUser(done, user) {
  done(null, user)
}

function _respondWithAuthError(done, err) {
  if (err.type == 'auth_error') {
    done(null, false, { message: 'Incorrect email or password' })
  } else {
    done(err)
  }
}