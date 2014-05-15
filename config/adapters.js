var getEnvironmentDB = function() {
  if (process.env.NODE_ENV == 'test') {
    return {
      module: 'sails-mongo',
      host     : 'localhost',
      port     : 27017,
      database : 'wc_test'
    }
  } else if (process.env.NODE_ENV == 'production') {
  var secrets = require('./secrets')
    return secrets.production.db
  } else {
    return {
      module: 'sails-mongo',
      host     : 'localhost',
      port     : 27017,
      database : 'wc_dev'
    }
  }
}

module.exports.adapters = {

  'default': getEnvironmentDB(),

};
