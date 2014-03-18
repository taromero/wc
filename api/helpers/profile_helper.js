var q = require('q')
var bcrypt = require('bcrypt')

module.exports.encrypt = function(plain_text) {
  return q.ninvoke(bcrypt, 'hash', plain_text, 8)
}

module.exports.comparePasswords = function(plain_text_password, encrypted_password) {
  return q.ninvoke(bcrypt, 'compare', plain_text_password, encrypted_password)
}