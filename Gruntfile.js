module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt)

  var grunt_config = {}
  var config_helper = require('./grunt_config_helper')(grunt, grunt_config)

  var loadCfg = config_helper.loadCfg
  var registerTask = config_helper.registerTask

  var linker_order = require('./grunt_config/globals/linker_order')

  loadCfg('mochaTest')
  loadCfg('copy')
  loadCfg('concat', linker_order)
  loadCfg('clean')
  loadCfg('cssmin')
  loadCfg('uglify')
  loadCfg('sails-linker', linker_order)
  loadCfg('watch')

  grunt.initConfig(grunt_config);

  registerTask('default')
  registerTask('compileAssets')
  registerTask('linkAssets')
  registerTask('build')
  registerTask('prod')
  registerTask('create_sample_data')
  registerTask('clear_db')

};