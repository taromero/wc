var Q = require('q')
var bcrypt = require('bcrypt')

module.exports.encrypt = function(plain_text) {
  return Q.ninvoke(bcrypt, 'hash', plain_text, 8)
}

module.exports.comparePasswords = function(plain_text_password, encrypted_password) {
  return Q.ninvoke(bcrypt, 'compare', plain_text_password, encrypted_password)
}