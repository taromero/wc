var session_service = require('../services/session_service')

module.exports = {
  login: function(req, res) {
    return session_service.login(req.body.email, req.body.password)
      .then(function(user) {
        return addUserToSession(req, user)
      })
      .then(function(user) {
        return respondWithUser(res, user)
      })
      .fail(function(err) {
        return respondWithError(res, err)
      })
  },
  logout: function(req, res) {
    req.session.user = null
    res.send(200, 'successful logout')
  }
}

function addUserToSession(req, user) {
  req.session.user = user.toSession()
  return user
}

function respondWithUser(res, user) {
  res.send(200, user)
}

function respondWithError(res, err) {
  console.log(err)
  res.send(err.code || 200, err)
}