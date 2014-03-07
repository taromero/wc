var profile_helper = require('../helpers/profile_helper')

module.exports = {

  attributes: {
    email: 'email',
    password: 'string',
    name: 'string',
    surname: 'string',
    gender: 'string',
    birth_date: 'date'
  },

  beforeCreate: function(attrs, next) {
    profile_helper.encryptPassword(attrs)
    .catch(function(err) {
      next(err)
    }).done(function() {
      next()
    })
  }

};
