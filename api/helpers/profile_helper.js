var bcrypt = require('bcrypt')
var q = require('q')

var encrypt = function(string) {
  var defer = q.defer
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return defer.reject(err);
    bcrypt.hash(string, salt, function(err, hash) {
      if (err) return defer.reject(err);
      defer.resolve(hash)
    })
  })
  return defer.promise
}


module.exports.encryptPassword = function(attrs) {
  return encrypt(attrs.password)
    .then(function(encryptedPassword) {
      attrs.password = encryptedPassword
    })
}