module.exports = function(grunt) {
  grunt.registerTask('linkAssets', [
    // Update link/script/template references in `assets` index.html
    'sails-linker:devJs',
    'sails-linker:devStyles',
  ]);
}