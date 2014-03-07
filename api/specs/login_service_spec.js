var bcrypt = require('bcrypt')
var q = require('q')
var chai = require('chai')
var expect = chai.expect
var login_service = require('../services/login_service')

describe('login_service', function() {
  describe('#login', function() {
    context('user with right credentials', function() {
      var login
      var user = {}
      beforeEach(function() {
        var plain_text_password = 'right_password'
        user.password = bcrypt.hashSync(plain_text_password, 8)
        login = login_service.login(plain_text_password, user)
      })

      it('should respond 201 with the user', function(done) {
        login.then(function(_user) {
          expect(_user).to.equal(user)
        }).then(done)
        .done()
      })
    })
    context('user with wrong credentials', function() {

    })
  })
})