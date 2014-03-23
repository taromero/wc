describe('session_controller', function() {

  describe('successful login', function() {

    beforeEach(function(done) {
      liftSails()
        .then(connectToDB)
        .then(clearDB)
        .then(createUser)
        .then(makeSuccessFulLoginPost)
        .done(function() {
          done()
        })
    })

    it('should return 200', function(done) {
      req.expect(200, done)
    })

  })

})

function makeSuccessFulLoginPost() {
  req = request(app)
          .post('/login')
          .send(user_data)
  return req
}