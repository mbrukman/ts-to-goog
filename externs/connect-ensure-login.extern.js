/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/connect-ensure-login/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function LoggedInOptions() {}
 /** @type {string} */
LoggedInOptions.prototype.redirectTo;
 /** @type {boolean} */
LoggedInOptions.prototype.setRedirectTo;
/**
 * @record
 * @struct
 */
function LoggedOutOptions() {}
 /** @type {string} */
LoggedOutOptions.prototype.redirectTo;

/**
 * Ensure that a user is logged in before proceeding to next route middleware.
 * 
 * This middleware ensures that a user is logged in.  If a request is received
 * that is unauthenticated, the request will be redirected to a login page (by
 * default to `/login`).
 * 
 * Additionally, `returnTo` will be be set in the session to the URL of the
 * current request.  After authentication, this value can be used to redirect
 * the user to the page that was originally requested.
 * 
 * Examples:
 * 
 *     app.get('/profile',
 *       ensureLoggedIn(),
 *       function(req, res) { ... });
 * 
 *     app.get('/profile',
 *       ensureLoggedIn('/signin'),
 *       function(req, res) { ... });
 * 
 *     app.get('/profile',
 *       ensureLoggedIn({ redirectTo: '/session/new', setReturnTo: false }),
 *       function(req, res) { ... });
 * @param {(string|?)=} options
 * @return {!e.RequestHandler}
 */
function ensureLoggedIn(options) {}

/**
 * Ensure that no user is logged in before proceeding to next route middleware.
 * 
 * This middleware ensures that no user is logged in.  If a request is received
 * that is authenticated, the request will be redirected to another page (by
 * default to `/`).
 * 
 * Examples:
 * 
 *     app.get('/login',
 *       ensureLoggedOut(),
 *       function(req, res) { ... });
 * 
 *     app.get('/login',
 *       ensureLoggedOut('/home'),
 *       function(req, res) { ... });
 * 
 *     app.get('/login',
 *       ensureLoggedOut({ redirectTo: '/home' }),
 *       function(req, res) { ... });
 * @param {(string|?)=} options
 * @return {!e.RequestHandler}
 */
function ensureLoggedOut(options) {}
