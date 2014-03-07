describe('profile_helper', function() {
  var plain_text_password, attrs

  describe('#encryptPassword', function() {
    beforeEach(function(done) {
      plain_text_password = '1234'
      attrs = { password: plain_text_password }
      profile_helper.encryptPassword(attrs).then(done)
    })
    it('should encrypt password', function() {
      expect(attrs.password).not.to.equal(plain_text_password)
    })
  })
  describe('#comparePasswords', function() {

    beforeEach(function() {
      plain_text_password = '1234'
      var hash = bcrypt.hashSync(plain_text_password, 8)
      attrs = { password: hash }
    })

    it('should be return true for matching encrypted/unencrypted passwords', function(done) {
      var compare = profile_helper.comparePasswords(plain_text_password, attrs.password)
      compare.should.become(true).notify(done)
    })

    it('should be return false for unmatching encrypted/unencrypted passwords', function(done) {
      var compare = profile_helper.comparePasswords(plain_text_password + 1, attrs.password)
      compare.should.become(false).notify(done)
    })

  })
})