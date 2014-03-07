var bcrypt = require('bcrypt')
var q = require('q')
var chai = require('chai')
var expect = chai.expect

describe('login_service', function() {
  describe('#login', function() {
    context('user with right credentials', function() {
      var login
      var user = {}
      beforeEach(function() {
        var req = {
          session: {},
          body: {
            user: 'right_user',
            password: 'right_password'
          }
        }
        var res = {
          json: function(user, code) {
            res.obj = user
            res.code = code
          }
        }
        var defer = q.defer()
        bcrypt.hash(req.body.password, 8, function(err, hash) {
          defer.resolve(hash)
        })
        var login_service = require('../services/login_service')(req, res)
        login = defer.promise.then(function(hash) {
          user.password = hash
          return user
        }).then(login_service.login)
      })

      it('should respond 201 with the user', function(done) {
        login.then(function(res) {
          expect(res.obj).to.equal(user)
          expect(res.code).to.equal(201)
        }).then(done)
        .done()
      })
    })
    context('user with wrong credentials', function() {

    })
  })
})