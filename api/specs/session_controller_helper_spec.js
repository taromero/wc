session_controller_helper = require('../helpers/session_controller_helper')()

describe('session_controller_helper', function() {

  describe('#checkUserExists', function() {

    var promise, user

    context('user exists', function() {
      beforeEach(function() {
        user = {}
        promise = q(session_controller_helper.checkUserExists(user))
      })
      it('should return user', function() {
        return promise.should.become(user)
      })
    })

    context('user exists', function() {
      beforeEach(function() {
        user = null
        promise = session_controller_helper.checkUserExists(user)
      })
      it('should reject the promise', function() {
        return promise.should.be.rejected
      })
    })

  })

  describe('#checkPassword', function() {

    var user = {}, password, promise

    context('passwords match', function() {
      beforeEach(function() {
        password = '123'
        user.validatePassword = function() {
          return q(true)
        }
        session_controller_helper = require('../helpers/session_controller_helper')({ body: { password: password } })
        promise = q(session_controller_helper.checkPassword(user))
      })
      it('should return user', function() {
        return promise.should.become(user)
      })
    })

    context('passwords do not match', function() {
      beforeEach(function() {
        password = '123'
        user.validatePassword = function() {
          return q(false)
        }
        session_controller_helper = require('../helpers/session_controller_helper')({ body: { password: password } })
        promise = q(session_controller_helper.checkPassword(user))
      })
      it('should return user', function() {
        return promise.should.be.rejected
      })
    })

  })

})