request = require('supertest')
Sails = require('sails')
DatabaseCleaner = require('database-cleaner')
databaseCleaner = new DatabaseCleaner('mongodb')
connect = require('mongodb').connect

process.env.NODE_ENV = 'test'

global.sails_lift_promise = liftSails()

clearDB = function(db) {
  return Q.ninvoke(databaseCleaner, 'clean', db)
}

function liftSails() {
  return Q.ninvoke(Sails, 'lift', { log: { level: 'error' } })
          .then(function(sails) {
            aux = sails
            app = sails.express.app
          })
}

connectToDB = function() {
  return Q.nfcall(connect, 'mongodb://localhost/wc_test')
}
