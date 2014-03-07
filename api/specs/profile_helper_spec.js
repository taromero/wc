var profile_helper = require('../helpers/profile_helper')
var chai = require('chai')
var expect = chai.expect
var bcrypt = require('bcrypt')
var q = require('q')

describe('profile_helper', function() {
  describe('#encryptPassword', function() {
    var plain_text_password = '1234'
    var attrs = { password: plain_text_password }
    beforeEach(function(done) {
      profile_helper.encryptPassword(attrs).then(done)
    })
    it('should encrypt password', function() {
      expect(attrs.password).not.to.equal(plain_text_password)
    })
  })
  describe('#comparePasswords', function() {
    var compare
    var plain_text_password = '1234'
    var attrs = { password: plain_text_password }
    beforeEach(function() {
      compare = profile_helper.encryptPassword(attrs).then(function() {
        return q.all([
          profile_helper.comparePasswords(plain_text_password, attrs.password),
          profile_helper.comparePasswords(plain_text_password + 'a', attrs.password)
        ])
      }).then(function(matches) {
        return matches
      })
    })

    it('should be able to compare plain_text_password with encrypted_password', function(done) {
      compare.spread(function(match_equals, match_non_equals) {
        expect(match_equals).to.equal(true)
        expect(match_non_equals).to.equal(false)
      }).then(done)
      .done()
    })

  })
})