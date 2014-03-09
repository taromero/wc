var local = require('./local')

var getEnvironmentDB = function() {
  if(local.environment == 'development') {
    return {
      module: 'sails-mongo',
      host     : 'localhost',
      port     : 27017,
      database : 'test'
    }
  } else {
    return local.production.db
  }
}

module.exports.adapters = {

  'default': getEnvironmentDB(),

};
