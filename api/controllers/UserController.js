var profile_helper = require('profile_helper')
var _ = require('underscore')

module.exports = {
  login: function(req, res) {
    var login_service = require('../services/login_service')(req, res)
    User.first({ email: req.body.email })
    .catch(respondInternalError)
    .then(login_service.login)
  }
}