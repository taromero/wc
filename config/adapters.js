var local = require('./local')

var getEnvironmentDB = function() {
  if(local.environment == 'development') {
    return {
      module: 'sails-mongo',
      host     : 'localhost',
      port     : 27017,
      database : 'wc_dev'
    }
  } else if (local.environment == 'test') {
    return {
      module: 'sails-mongo',
      host     : 'localhost',
      port     : 27017,
      database : 'wc_test'
    }
  } else if (local.environment == 'test') {
    return local.production.db
  }
}

module.exports.adapters = {

  'default': getEnvironmentDB(),

};
