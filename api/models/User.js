var profile_helper = require('../helpers/profile_helper')
var Q = require('q')

module.exports = {

  attributes: {
    email: { type: 'email', required: true },
    password: { type: 'string', required: true },
    name: { type: 'string', required: true },
    surname: { type: 'string', required: true },
    gender: { type: 'string', required: true },
    birth_date: 'date',
    address: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    role: { type: 'string', required: true,
            in: ['ADMIN', 'PRECEPTOR', 'PROFESSOR', 'STUDENT', 'PARENT'] },
    //Student
    course_id: 'string',
    //Profesor
    subjects_ids: 'array', //array of subject_ids
    //Person In Charge
    courses_in_charge_of_ids: 'array',

    validatePassword: function(password) {
      return profile_helper.comparePasswords(password, this.password)
    },
    toJSON: function() {
      var obj = this.toObject()
      delete obj.password // Remove the password object value
      return obj
    },
    toSession: function() {
      return { id: this.id, role: this.role }
    }
  },

  beforeCreate: function(attrs, next) {
    profile_helper.encrypt(attrs.password)
      .then(assignEncryptedPasswordToUser)
      .catch(next)
      .done(next)

    function assignEncryptedPasswordToUser(encrypted_password) {
      attrs.password = encrypted_password
    }
  }

}