var lh = require('../helpers/login_helper')

module.exports = {
  login: function(req, res) {
    User.findOne({ email: req.body.email })
      .then(lh.checkUserExists)
      .then(lh.checkPassword(req.body.password))
      .then(lh.respondWithUser(req, res))
      .fail(lh.respondWithAuthError(res))
      .done()
  },
  logout: function(req, res) {
    req.logout()
    res.respond(200, 'successful logout')
  }
}