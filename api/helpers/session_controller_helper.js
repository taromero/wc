module.exports = {
  checkUserExists: function(user) {
    return user || q.reject()
  },
  checkPassword: function(password) {
    return curry(_checkPassword)(password)
  },
  addUserToSession: function(req, res) {
    return curry(_addUserToSession)(req, res)
  },
  respondWithUser: function(req, res) {
    return curry(_respondWithUser)(req, res)
  },
  respondWithAuthError: function(req, res) {
    return curry(_respondWithAuthError)(req, res)
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

function _addUserToSession(req, res, user) {
  req.session.user = user.toSession()
}

function _respondWithUser(req, res, user) {
  res.send(200, user)
}

function _respondWithAuthError(req, res, err) {
  if (err) {
    res.send(500, err)
    throw err
  } else { //the promise was rejected
    res.send(401, 'Incorrect email or password')
  }
}