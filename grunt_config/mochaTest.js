module.exports = {
  test: {
    options: {
      reporter: 'spec'
    },
    src: ['api/specs/helpers/libs.js', 'api/specs/helpers/chai_setup.js',
          'api/specs/helpers/factory_stub.js', 'api/specs/helpers/rosie_factories.js',
          'api/specs/rosie_factories/sails_model_rf.js', 'api/specs/rosie_factories/*',
          'api/specs/helpers/stubs.js',
          'api/specs/user_spec.js']
  }
}