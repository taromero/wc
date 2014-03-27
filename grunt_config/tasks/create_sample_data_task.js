var q = require('q')

module.exports = function(grunt) {
  grunt.registerTask('create_sample_data', 'create sample data', function() {
    var Sails = require('sails');
    var done = this.async();
    Sails.lift({ log: { level: 'error' } }, function(err, sails) {
      q.all([
        User.create({ email: 'canotto90@gmail.com', password: '123', role: 'STUDENT' }),
        User.create({ email: 'canotto90+1@gmail.com', password: '123', role: 'PROFESSOR' })
      ])
      .then(console.log)
      .fail(console.log)
      .done(done)
    })
  })
}