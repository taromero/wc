var bcrypt = require('bcrypt')
var q = require('q')

var encrypt =

module.exports.encrypt = function(plain_text) {
  var defer = q.defer()
  bcrypt.hash(plain_text, 8, function(err, hash) {
    if (err) return defer.reject(err);
    defer.resolve(hash)
  })
  return defer.promise
}

module.exports.comparePasswords = function(plain_text_password, encrypted_password) {
  var defer = q.defer()
  bcrypt.compare(plain_text_password, encrypted_password, function(err, match) {
    if (err) return defer.reject(err);
    defer.resolve(match)
  })
  return defer.promise
}