/**
 * Policy mappings (ACL)
 *
 * Policies are simply Express middleware functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect just one of its actions.
 *
 * Any policy file (e.g. `authenticated.js`) can be dropped into the `/policies` folder,
 * at which point it can be accessed below by its filename, minus the extension, (e.g. `authenticated`)
 */


module.exports.policies = {

  // '*': 'isAuthenticated',
  '*': true,
  '/': true,
  SessionController: {
    '*': true
  },
  UserController: {
    // '*': 'isAdmin',
    // 'find': 'isAuthenticated'
    'find': true,
  }

}