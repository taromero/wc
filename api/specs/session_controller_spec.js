var service_login_return
session_controller = proxyquire('../../controllers/SessionController', {
  '../services/session_service': {
    login: function() { return service_login_return }
  }
})

describe('session_controller', function() {

  beforeEach(function() {
    sinonSandbox.restore()
    req = RosieFactory.build('request')
    res = RosieFactory.build('response')
    sinonSandbox.spy(res, 'send')
  })

  var session_service, login, req, res, user

  describe('successful login', function() {

    beforeEach(function() {
      user = RosieFactory.build('login_user')
      service_login_return = Q(user)
      login = session_controller.login(req, res)
    })

    it('should add user to session', function(done) {
      login.then(function() {
        done()
        req.session.user.should.deep.eq(user.toSession())
      }).done()
    })

    it('should response 200 and the user', function(done) {
      login.then(function() {
        done()
        res.send.should.have.been.calledWithExactly(200, user)
      }).done()
    })

  })

  describe('login failure', function() {

    var err

    beforeEach(function() {
      err = { code: 400, message: 'a_message' }
      service_login_return = Q.reject(err)
      login = session_controller.login(req, res)
    })

    it('should not add user to session', function(done) {
      login.then(function() {
        done()
        expect(req.session.user).to.be.undefined
      }).done()
    })

    it('should response error code and message', function(done) {
      login.then(function() {
        done()
        res.send.should.have.been.calledWithExactly(err.code, err)
      }).done()
    })

  })

})