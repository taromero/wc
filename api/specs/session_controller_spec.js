describe('session_controller', function() {
  var session_service, login, user, req, res, user_to_session
  describe('successful login', function() {
    beforeEach(function() {
      sinonSandbox.restore()
      user_to_session = 'abc'
      user = { email: 'a', password: 'b', toSession: function() { return user_to_session } }
      req = { body: { email: 'a', password: 'b' }, session: {} }
      res = { send: function(code, obj) { this.code = code; this.obj = obj } }
      sinonSandbox.spy(res, 'send')
      session_controller = proxyquire('../../controllers/SessionController', {
        '../services/session_service': {
          login: function() { return Q(user) }
        }
      })
      login = session_controller.login(req, res)
    })
    it('should add user to session', function(done) {
      login.then(function() {
        done()
        req.session.user.should.eq(user_to_session)
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