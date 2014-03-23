request = require('supertest')
Sails = require('sails')
DatabaseCleaner = require('database-cleaner')
databaseCleaner = new DatabaseCleaner('mongodb')
connect = require('mongodb').connect

process.env.NODE_ENV = 'test'

clearDB = function(db) {
  return Q.ninvoke(databaseCleaner, 'clean', db)
}

user_data = { email: 'tomas@zauberlabs.com', password: 'right_password', role: 'STUDENT' }
createUser = function() {
  return User.create(user_data)
}

liftSails = function() {
  return Q.ninvoke(Sails, 'lift', { log: { level: 'error' } })
          .then(function(sails) {
            app = sails.express.app
          })
}

connectToDB = function() {
  return Q.nfcall(connect, 'mongodb://localhost/wc_test')
}
