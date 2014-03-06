module.exports = function(options) {
  var js = {
    src: options.jsFilesToInject,
    dest: '.tmp/public/concat/production.js'
  }
  var css =  {
    src: options.cssFilesToInject,
    dest: '.tmp/public/concat/production.css'
  }
  return {
    js: js,
    css: css
  }
}