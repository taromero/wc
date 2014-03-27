var session_service = require('../services/session_service')
var User = require('../models/User')

describe('session_service', function() {

  var generic_failed_login_message = { code: 400, message: "Wrong email/password" }

  describe('#checkUserExists with', function() {

    var checkUserExists

    context('null user', function() {

      beforeEach(function() {
        checkUserExists = session_service.checkUserExists(null)
      })

      it('should reject the promise with a 400 error and a generic failed login message', function() {
        return checkUserExists.should.be.rejected.and.become(generic_failed_login_message)
      })

    })

    context('empty user object', function() {

      beforeEach(function() {
        checkUserExists = session_service.checkUserExists({})
      })

      it('should reject the promise with a 400 error and a generic failed login message', function() {
        return checkUserExists.should.be.rejected.and.become(generic_failed_login_message)
      })

    })

    context('user filled object', function() {

      var user = { email: 'a' }

      beforeEach(function() {
        checkUserExists = session_service.checkUserExists(user)
      })

      it('should return user object', function() {
        return checkUserExists.should.become(user)
      })

    })

  })

  describe('#checkPassword', function() {

    var user, checkPassword

    context('wrong passowrd', function() {

      beforeEach(function(){
        user = {
          validatePassword: function(password) { return Q(false) }
        }
        checkPassword = session_service.checkPassword(user)
      })

      it('should reject the promise with a 400 error and a generic failed login message', function() {
        return checkPassword.should.be.rejected.and.become(generic_failed_login_message)
      })

    })

    context('right password', function() {

      beforeEach(function(){
        user = {
          validatePassword: function(password) { return Q(true) }
        }
        checkPassword = session_service.checkPassword(user)
      })

      it('should return user', function() {
        return checkPassword.should.become(user)
      })

    })

  })

})