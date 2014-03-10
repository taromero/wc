module.exports = {
  test: {
    options: {
      reporter: 'spec'
    },
    src: ['api/specs/helpers/globals.js',
          'api/specs/profile_helper_spec.js',
          'api/specs/session_controller_helper_spec.js']
  }
}