request = require('supertest')
Sails = require('sails')
DatabaseCleaner = require('database-cleaner')
databaseCleaner = new DatabaseCleaner('mongodb')
connect = require('mongodb').connect

process.env.NODE_ENV = 'test'

closeDBConnection = function() {
  database.close()
}

clearDB = function(db) {
  database = db
  return Q.ninvoke(databaseCleaner, 'clean', db)
}

plain_text_password = 'password'
user_data = { email: 'tomas@zauberlabs.com', password: plain_text_password, role: 'STUDENT' }
createUser = function() {
  return User.create(user_data)
}

liftSails = function() {
  return Q.ninvoke(Sails, 'lift', { log: { level: 'error' } })
          .then(function(sails) {
            aux = sails
            app = sails.express.app
          })
}

connectToDB = function() {
  return Q.nfcall(connect, 'mongodb://localhost/wc_test')
}
