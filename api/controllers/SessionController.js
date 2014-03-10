var h = require('../helpers/session_controller_helper')

module.exports = {
  login: function(req, res) {
    User.findOne({ email: req.body.email })
      .then(h.checkUserExists)
      .then(h.checkPassword(req.body.password))
      .then(h.addUserToSession(req, res))
      .then(h.respondWithUser(req, res))
      .fail(h.respondWithAuthError(req, res))
      .done()
  },
  logout: function(req, res) {
    req.session.user = null
    res.send(200, 'successful logout')
  }
}