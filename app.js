local_cfg = require('./config/local')
q = require('q')
bcrypt = require('bcrypt')

if(local_cfg.log_level == 'debug') {
  // Start sails and pass it command line arguments
  require('sails').lift()
} else {
  var pe = require('pretty-error').start(function(){
    require('sails').lift()
  })

  pe.skipPackage('sails')
  pe.skipNodeFiles()
  pe.alias('/home/canotto90/proyectos/wc', 'wc')
}
