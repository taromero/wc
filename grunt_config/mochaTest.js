module.exports = {
  test: {
    options: {
      reporter: 'spec'
    },
    src: ['api/specs/helpers/globals.js',
          'api/specs/*_spec.js']
  }
}