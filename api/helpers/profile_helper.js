var bcrypt = require('bcrypt')
var q = require('q')

var encrypt = function(string) {
  var defer = q.defer()
  bcrypt.hash(string, 8, function(err, hash) {
    if (err) return defer.reject(err);
    defer.resolve(hash)
  })
  return defer.promise
}

module.exports.encryptPassword = function(attrs) {
  return encrypt(attrs.password).then(function(encryptedPassword) {
    attrs.password = encryptedPassword
  })
}

module.exports.comparePasswords = function(plain_text_password, encrypted_password) {
  var defer = q.defer()
  bcrypt.compare(plain_text_password, encrypted_password, function(err, match) {
    if (err) return defer.reject(err);
    defer.resolve(match)
  })
  return defer.promise
}