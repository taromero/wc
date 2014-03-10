var profile_helper = require('../helpers/profile_helper')

module.exports = {

  attributes: {
    email: 'email',
    password: 'string',
    name: 'string',
    surname: 'string',
    gender: 'string',
    birth_date: 'date',
    //Student
    course_id: 'string',
    //Profesor
    subjects_ids: 'array', //array of subject_ids
    //Person In Charge
    courses_in_charge_of_ids: 'array',

    validatePassword: function(password) {
      return profile_helper.comparePasswords(this.password, password)
    },
    toJSON: function() {
      var obj = this.toObject()
      delete obj.password // Remove the password object value
      return obj
    }
  },

  beforeCreate: function(attrs, next) {
    profile_helper.encrypt(attrs.password)
    .then(function assignEncryptedPasswordToUser(encrypted_password) {
      attrs.password = encrypted_password
    })
    .catch(function(err) {
      next(err)
    }).done(function() {
      next()
    })
  }

}