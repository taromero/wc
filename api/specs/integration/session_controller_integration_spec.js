describe('session_controller', function() {

  var create_context_promise, agent

  beforeEach(function() {
    create_context_promise = sails_lift_promise
      .then(connectToDB)
      .then(clearDB)
      .then(createUser)
  })

  describe('successful login', function() {

    var user

    beforeEach(function(done) {
      create_context_promise
        .then(makeSuccessfulLoginPost)
        .then(function() { done() })
    })

    it('should return 200', function(done) {
      agent.expect(200, done)
    })

    it('should return user', function(done) {
      agent.expect(function(res) {
        res.body.email.should.eq('canotto90@gmail.com')
      }).end(done)
    })

  })

  describe('unsuccessful login', function() {

    beforeEach(function(done) {
      create_context_promise
        .then(makeUnsuccessfulLoginPost)
        .then(function() { done() })
    })

    it('should return 400', function(done) {
      agent.expect(400, done)
    })

  })

  function createUser() {
    return User.create({ email: 'canotto90@gmail.com', password: 'password', role: 'STUDENT' })
  }

  function makeSuccessfulLoginPost() {
    agent = request(app)
            .post('/login')
            .send({ email: 'canotto90@gmail.com', password: 'password'})
    return agent
  }

  function makeUnsuccessfulLoginPost() {
    agent = request(app)
            .post('/login')
            .send({ email: 'canotto90@gmail.com', password: 'wrong_password'})
    return agent
  }

})