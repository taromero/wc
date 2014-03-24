describe('session_controller', function() {

  var spec_init_promise

  before(function() {
    spec_init_promise = liftSails()
  })
  after(function() {
    aux.lower()
  })

  describe('successful login', function() {

    var user

    beforeEach(function(done) {
      spec_init_promise
        .then(connectToDB)
        .then(clearDB)
        .then(function() {
          return User.create({ email: 'canotto90@gmail.com', password: 'p', role: 'STUDENT' })
        })
        .then(makeSuccessfulLoginPost)
        .then(closeDBConnection)
        .done(function() {
          done()
        })
    })

    it('should return 200', function(done) {
      agent.expect(200, done)
    })

    it('should return user', function(done) {
      agent.expect(function(res) {
        res.body.email.should.eq('canotto90@gmail.com')
      }).end(done)
    })

    // it('should return user', function() {

    // })

  })

  // describe('unsuccessful login', function() {

  //   var spec_init_promise

  //   beforeEach(function() {
  //     liftSails()
  //       .then(connectToDB)
  //       .then(clearDB)
  //       .then(createUser)
  //       .then(makeUnsuccessfulLoginPost)
  //       .then(closeDBConnection)
  //   })

  //   it('should return 400', function() {
  //     spec_init_promise.then(function() {
  //       req.expect(400)
  //     }).fail(console.log)
  //   })

  // })

})

function makeSuccessfulLoginPost() {
  agent = request(app)
          .post('/login')
          .send({ email: 'canotto90@gmail.com', password: 'p'})
  return agent
}

function makeUnsuccessfulLoginPost() {
  var wrong_user_data = user_data
  wrong_user_data.password = wrong_user_data.password + 'a'
  agent = request(app)
          .post('/login')
          .send(wrong_user_data)
  return agent
}