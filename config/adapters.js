var local = require('./local')

var getEnvironmentDB = function() {
  if (local.environment == 'test') {
    return {
      module: 'sails-mongo',
      host     : 'localhost',
      port     : 27017,
      database : 'wc_test'
    }
  } else if (local.environment == 'production') {
    return local.production.db
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
