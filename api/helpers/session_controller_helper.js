module.exports = function(req, res) {
  var password = req ? req.body.password : null
  return {
    checkUserExists: function(user) {
      return user || q.reject()
    },
    checkPassword: function(user) {
      return user.validatePassword(password).then(function(match) {
        if (!match) {
          return q.reject()
        } else {
          return user
        }
      })
    },
    addUserToSession: function(user) {
      req.session.user = user.toSession()
      return user
    },
    respondWithUser: function() {
      return res.send(200, user)
    },
    respondWithAuthError: function(err) {
      if (err) {
        res.send(500, err)
        throw err
      } else { //the promise was rejected
        res.send(401, 'Incorrect email or password')
      }
    }
  }
}