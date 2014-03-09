module.exports.encrypt = function(plain_text) {
  var defer = q.defer()
  bcrypt.hash(plain_text, 8, function(err, hash) {
    if (err) return defer.reject(err);
    defer.resolve(hash)
  })
  return defer.promise
}

module.exports.comparePasswords = function(encrypted_password, plain_text_password) {
  var defer = q.defer()
  bcrypt.compare(plain_text_password, encrypted_password, function(err, match) {
    if (err) return defer.reject(err);
    defer.resolve(match)
  })
  return defer.promise
}