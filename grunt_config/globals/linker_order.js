/** CSS files to inject in order */
var cssFilesToInject = [
  'bower_components/bootstrap/dist/css/bootstrap.min.css',
  'linker/**/*.css'
];

/** Javascript files to inject in order */
var jsFilesToInject = [
  'bower_components/jquery/jquery.min.js',
  'bower_components/angular/angular.min.js',
  'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'bower_components/angular-resource/angular-resource.min.js',
  'bower_components/angular-ui-router/release/angular-ui-router.min.js',
  'bower_components/localforage/dist/localforage.js',
  'linker/js/app.js',
  'linker/js/services/*.js',
  'linker/js/router.js',
  'linker/js/controllers/*.js',
  'linker/**/*.js'
];

/** Client-side HTML templates are injected using the sources below */
var templateFilesToInject = [
  'linker/**/*.html'
];

// Modify css file injection paths to use
cssFilesToInject = cssFilesToInject.map(function (path) {
  return '.tmp/public/' + path;
});

// Modify js file injection paths to use
jsFilesToInject = jsFilesToInject.map(function (path) {
  return '.tmp/public/' + path;
});


templateFilesToInject = templateFilesToInject.map(function (path) {
  return 'assets/' + path;
});

module.exports.cssFilesToInject = cssFilesToInject
module.exports.jsFilesToInject = jsFilesToInject
module.exports.templateFilesToInject = templateFilesToInject