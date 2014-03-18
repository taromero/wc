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

    it('should be return true for matching encrypted/unencrypted passwords', function(done) {
      var compare_same = profile_helper.comparePasswords(plain_text_password, attrs.password)
      compare_same.should.become(true).notify(done)
    })

    it('should be return false for unmatching encrypted/unencrypted passwords', function(done) {
      var compare_different = profile_helper.comparePasswords(plain_text_password + 1, attrs.password)
      compare_different.should.become(false).notify(done)
    })

  })
})