module.exports = {
  checkUserExists: function(user) {
    return user || q.reject()
  },
  checkPassword: function(password) {
    return curry(_checkPassword)(password)
  },
  respondWithUser: function(req, res) {
    return curry(_respondWithUser)(req, res)
  },
  respondWithAuthError: function(res) {
    return curry(_respondWithAuthError)(res)
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

function _respondWithUser(req, res, user) {
  req.session.user = { id: user.id, role: user.role }
  res.send(200, 'successful login')
}

function _respondWithAuthError(res, err) {
  if (err) {
    res.send(500, err)
    throw err
  } else { //the promise was rejected
    res.send(401, 'Incorrect email or password')
  }
}