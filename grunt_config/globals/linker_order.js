/** CSS files to inject in order */
var cssFilesToInject = [
  'linker/**/*.css'
];

/** Javascript files to inject in order */
var jsFilesToInject = [
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