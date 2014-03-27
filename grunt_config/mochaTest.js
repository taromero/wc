module.exports = {
  unit: {
    options: {
      reporter: 'spec'
    },
    src: [
          'api/specs/helpers/globals.js',
          'api/specs/rosie_factories/*_rf.js',
          'api/specs/*_spec.js'
          ]
  },
  integration: {
    options: {
      reporter: 'spec'
    },
    src: [
          'api/specs/helpers/globals.js',
          'api/specs/integration/helpers/globals.js',
          'api/specs/integration/*_spec.js'
          ]
  }
}