var user
session_controller = proxyquire('../../controllers/SessionController', {
  '../services/session_service': {
    login: function() { return Q(user) }
  }
})

describe('session_controller', function() {
  var session_service, login, req, res, user_to_session
  describe('successful login', function() {
    beforeEach(function() {
      sinonSandbox.restore()
      user = RosieFactory.build('login_user')
      req = RosieFactory.build('request')
      res = RosieFactory.build('response')
      sinonSandbox.spy(res, 'send')
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
})