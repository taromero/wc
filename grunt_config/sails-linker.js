module.exports = function(options) {
  return {
    devJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public'
      },
      files: {
        '.tmp/public/**/*.html': options.jsFilesToInject,
        'views/**/*.html': options.jsFilesToInject,
        'views/**/*.ejs': options.jsFilesToInject
      }
    },

    prodJs: {
      options: {
        startTag: '<!--SCRIPTS-->',
        endTag: '<!--SCRIPTS END-->',
        fileTmpl: '<script src="%s"></script>',
        appRoot: '.tmp/public'
      },
      files: {
        '.tmp/public/**/*.html': ['.tmp/public/min/production.js'],
        'views/**/*.html': ['.tmp/public/min/production.js'],
        'views/**/*.ejs': ['.tmp/public/min/production.js']
      }
    },

    devStyles: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public'
      },

      // cssFilesToInject defined up top
      files: {
        '.tmp/public/**/*.html': options.cssFilesToInject,
        'views/**/*.html': options.cssFilesToInject,
        'views/**/*.ejs': options.cssFilesToInject
      }
    },

    prodStyles: {
      options: {
        startTag: '<!--STYLES-->',
        endTag: '<!--STYLES END-->',
        fileTmpl: '<link rel="stylesheet" href="%s">',
        appRoot: '.tmp/public'
      },
      files: {
        '.tmp/public/index.html': ['.tmp/public/min/production.css'],
        'views/**/*.html': ['.tmp/public/min/production.css'],
        'views/**/*.ejs': ['.tmp/public/min/production.css']
      }
    }
  }
}