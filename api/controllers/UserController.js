module.exports = {
  create: function(req, res) {
    User.create(req.body)
      .then(function(user) {
        res.send(200, user)
      })
      .fail(function(err) {
        err.ValidationError ? res.send(400, err) : res.send(500, err)
      })
  }
}