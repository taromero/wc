var session_service = require('../services/session_service')

module.exports = {
  login: function(req, res) {
    session_service.login(req.email, req.password)
      .then(addUserToSession)
      .then(respondWithUser)
      .fail(respondWithError)

    addUserToSession: function(user) {
      req.session.user = user.toSession()
      return user
    },
    respondWithUser: function(response) {
      return res.send(200, user)
    },
    respondWithError: function(err) {
      return res.send(err.code || 200, err)
    }
  },
  logout: function(req, res) {
    req.session.user = null
    res.send(200, 'successful logout')
  }
}