var q = require('q')

module.exports = function(grunt) {
  grunt.registerTask('clear_db', 'clean db', function() {
    var Sails = require('sails');
    var done = this.async();
    Sails.lift({ log: { level: 'error' } }, function(err, sails) {
      User.find()
        .then(destroyAll)
        .fail(console.log)
        .done(done)
    })
  })
}

function destroyAll(collection) {
  var promises = []
  console.log(collection)
  collection.forEach(function(item) {
    promises.push(User.destroy({ id: item.id }))
  })
  return q.all(promises).done()
}