module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt)

  var grunt_config = {}
  var loadCfg = function(cfgName, options) {
    if(options) {
      grunt_config[cfgName] = require('./grunt_config/' + cfgName + '.js')(options)
    } else {
      debugger
      grunt_config[cfgName] = require('./grunt_config/' + cfgName + '.js')
    }
  }

  var linker_order = require('./grunt_config/globals/linker_order')

  loadCfg('mochaTest')
  loadCfg('copy')
  loadCfg('concat', linker_order)
  loadCfg('clean')
  loadCfg('cssmin')
  loadCfg('uglify')
  loadCfg('sails-linker', linker_order)
  loadCfg('watch')

  // Project configuration.
  grunt.initConfig(grunt_config);
  console.log('grunt_config ' , grunt_config);

  grunt.registerTask('mocha', 'mochaTest')

  // When Sails is lifted:
  grunt.registerTask('default', [
    'compileAssets',
    'linkAssets',
    'watch'
  ]);

  grunt.registerTask('compileAssets', [
    'clean:dev',
    'copy:dev',
  ]);

  grunt.registerTask('linkAssets', [

    // Update link/script/template references in `assets` index.html
    'sails-linker:devJs',
    'sails-linker:devStyles',
  ]);


  // Build the assets into a web accessible folder.
  // (handy for phone gap apps, chrome extensions, etc.)
  grunt.registerTask('build', [
    'compileAssets',
    'linkAssets',
    'clean:build',
    'copy:build'
  ]);

  // When sails is lifted in production
  grunt.registerTask('prod', [
    'clean:dev',
    'copy:dev',
    'concat',
    'uglify',
    'cssmin',
    'sails-linker:prodJs',
    'sails-linker:prodStyles',
  ]);

};
