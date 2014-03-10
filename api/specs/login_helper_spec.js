describe('login_helper', function() {

  describe('#checkUserExists', function() {

    var promise, user

    context('user exists', function() {
      beforeEach(function() {
        user = {}
        promise = q(login_helper.checkUserExists(user))
      })
      it('should return user', function(done) {
        promise.should.become(user).notify(done)
      })
    })

    context('user exists', function() {
      beforeEach(function() {
        user = null
        promise = login_helper.checkUserExists(user)
      })
      it('should reject the promise', function(done) {
        promise.should.be.rejected.notify(done)
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
        promise = q(login_helper.checkPassword(password)(user))
      })
      it('should return user', function(done) {
        promise.should.become(user).notify(done)
      })
    })

    context('passwords do not match', function() {
      beforeEach(function() {
        password = '123'
        user.validatePassword = function() {
          return q(false)
        }
        promise = q(login_helper.checkPassword(password)(user))
      })
      it('should return user', function(done) {
        promise.should.be.rejected.notify(done)
      })
    })

  })

})