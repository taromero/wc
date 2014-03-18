module.exports = {
  login: function(req, res) {
    var h = require('../helpers/session_controller_helper')(req, res)
    User.findOne({ email: req.body.email })
      .then(h.checkUserExists)
      .then(h.checkPassword)
      .then(h.addUserToSession)
      .then(h.respondWithUser)
      .fail(h.respondWithAuthError)
      .done()
  },
  logout: function(req, res) {
    req.session.user = null
    res.send(200, 'successful logout')
  }
}