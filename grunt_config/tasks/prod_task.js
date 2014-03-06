module.exports = function(grunt) {
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
}