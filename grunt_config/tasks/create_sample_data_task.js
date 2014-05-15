var q = require('q')

var sampleUser = (function() {
  var counter = 0
  return function() {
    counter++
    return {
      email: 'canotto90' + counter + '@gmail.com',
      password: '123',
      name: 'Tomas',
      surname: 'Romero',
      gender: 'Male',
      address: 'A Direction 123',
      phone: '1234-5678',
      role: 'STUDENT'
    }
  }
})()

function customUser(customMap) {
  var sample_user = sampleUser()
  for(var key in customMap) {
    sample_user[key] = customMap[key]
  }
  return sample_user
}

module.exports = function(grunt) {
  grunt.registerTask('create_sample_data', 'create sample data', function() {
    var Sails = require('sails');
    var done = this.async();
    Sails.lift({ log: { level: 'error' } }, function(err, sails) {
      q.all([
        User.create(sampleUser()),
        User.create(customUser({role: 'ADMIN'}))
      ])
      .then(console.log)
      .fail(console.log)
      .done(done)
    })
  })
}