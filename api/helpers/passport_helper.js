module.exports = {
  checkUserExists: function(user) {
    return user || q.reject()
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
      return q.reject()
    } else {
      return user
    }
  })
}

function _respondWithUser(done, user) {
  done(null, user)
}

function _respondWithAuthError(done, err) {
  if (err) {
    done(err)
  } else { //the promise was rejected
    done(null, false, { message: 'Incorrect email or password' })
  }
}