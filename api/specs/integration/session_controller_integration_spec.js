var request = require('supertest')
var Sails = require('sails')
var DatabaseCleaner = require('database-cleaner')
var databaseCleaner = new DatabaseCleaner('mongodb')


var connect = require('mongodb').connect

process.env.NODE_ENV = 'test'

var user_data = { email: 'tomas@zauberlabs.com', password: 'rigth_password', role: 'STUDENT' }

describe('session_controller', function() {

  describe('successful login', function() {

    var req

    beforeEach(function(done) {
      Sails.lift({log: {
            level: 'error'
        }}, function(err, sails) {
        connect('mongodb://localhost/wc_test', function(err, db) {
          clearDB(db)
            .then(createUser)
            .then(makeSuccessFulLoginPost)
            .fail(function(err) {
              console.log(err)
            })
            .done(function() {
              done()
            })
        })
        function makeSuccessFulLoginPost() {
          req = request(sails.express.app).post('/login')
                  .send(user_data)
          return req
        }
      })
    })

    it('should return 200', function(done) {
      req.expect(200, done)
    })

  })

})

function clearDB(db) {
  return Q.ninvoke(databaseCleaner, 'clean', db)
}

function createUser() {
  return User.create(user_data)
}
