module.exports = {
  checkUserExists: function(user) {
    return user || q.reject()
  },
  checkPassword: function(password) {
    return curry(_checkPassword)(password)
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