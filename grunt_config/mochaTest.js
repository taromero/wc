module.exports = {
  test: {
    options: {
      reporter: 'spec'
    },
    src: ['api/specs/helpers/globals.js',
          'api/specs/rosie_factories/*_rf.js',
          'api/specs/*_spec.js']
  }
}