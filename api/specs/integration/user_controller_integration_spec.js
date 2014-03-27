describe('user_controller', function() {

  describe('create', function() {

    var agent

    context('invalid user', function() {

      beforeEach(function(done) {
        sails_lift_promise.then(function postInvalidUser() {
          agent = request(app).post('/user').send({})
        }).done(done)
      })

      it('should return 400', function(done) {
        agent.expect(400, done)
      })

    })

    context('valid user', function() {

      beforeEach(function(done) {
        sails_lift_promise.then(function postInvalidUser() {
          agent = request(app).post('/user').send({
            email: 'canotto90@gmail.com',
            password: 'password',
            role: 'STUDENT'
          })
        })
        .done(done)
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

  })

})