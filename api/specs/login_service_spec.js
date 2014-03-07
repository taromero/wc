var bcrypt = require('bcrypt')
var q = require('q')
var chai = require('chai')
var expect = chai.expect
var should = chai.should()
require("mocha-as-promised")()
var chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
var login_service = require('../services/login_service')

describe('login_service', function() {
  describe('#login', function() {
    var login
    var user = {}
    context('user with right credentials', function() {
      beforeEach(function() {
        var plain_text_password = 'right_password'
        user.password = bcrypt.hashSync(plain_text_password, 8)
        login = login_service.login(plain_text_password, user)
      })

      it('should respond 201 with the user', function(done) {
        login.should.become(user).notify(done)
      })
    })
    context('user with wrong credentials', function() {
      beforeEach(function() {
        var plain_text_password = 'wrong_password'
        user.password = bcrypt.hashSync(plain_text_password, 8)
        login = login_service.login(plain_text_password + 'a', user)
      })

      it('should reject the promise', function(done) {
        login.should.be.rejected.notify(done)
      })
    })
  })
})