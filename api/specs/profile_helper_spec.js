var profile_helper = require('../helpers/profile_helper')

describe('profile_helper', function() {
  var plain_text_password, attrs

  describe('#encryptPassword', function() {
    beforeEach(function() {
      plain_text_password = '1234'
    })
    it('should encrypt password', function(done) {
      var encrypt = profile_helper.encrypt(plain_text_password)
      encrypt.should.not.become(plain_text_password).notify(done)
    })
  })

  describe('#comparePasswords', function() {

    beforeEach(function() {
      plain_text_password = '1234'
      var hash = bcrypt.hashSync(plain_text_password, 8)
      attrs = { password: hash }
    })

    it('should be return true for matching encrypted/unencrypted passwords', function() {
      var compare_same = profile_helper.comparePasswords(plain_text_password, attrs.password)
      return compare_same.should.become(true)
    })

    it('should be return false for unmatching encrypted/unencrypted passwords', function() {
      var compare_different = profile_helper.comparePasswords(plain_text_password + 1, attrs.password)
      return compare_different.should.become(false)
    })

    it('should return false for null unencrypted password', function() {
      var compare_empty = profile_helper.comparePasswords(null, attrs.password)
      return compare_empty.should.become(false)
    })

  })
})