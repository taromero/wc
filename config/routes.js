/**
 * Sails uses a number of different strategies to route requests.
 * Here they are top-to-bottom, in order of precedence.
 *
 * Middleware included with `app.use` is run first, before the router
 */

/**
 *
 * This object routes static URLs to handler functions--
 * In most cases, these functions are actions inside of your controllers.
 * For convenience, you can also connect routes directly to views or external URLs.
 *
 */

var passport = require('passport')

module.exports.routes = {

  // By default, your root route (aka home page) points to a view
  // located at `views/home/index.ejs`
  //
  // (This would also work if you had a file at: `/views/home.ejs`)
  '/': {
    view: 'home/index'
  }
  , 'post /login': 'SessionController.login'
  , 'post /logout': 'SessionController.logout'
}