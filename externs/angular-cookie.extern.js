/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-cookie/index.d.ts:
/** @const */
angular.cookie = {};
/**
 * @record
 * @struct
 */
angular.cookie.CookieService = function() {};

/* TODO: CallSignature: angular.cookie */

/* TODO: CallSignature: angular.cookie */

/* TODO: CallSignature: angular.cookie */

/**
 * Remove a cookie
 * @param {string} key
 * @param {!angular.cookie.CookieOptions=} options
 * @return {void}
 */
angular.cookie.CookieService.prototype.remove = function(key, options) {};
/**
 * @record
 * @struct
 */
angular.cookie.CookieOptions = function() {};
 /** @type {string} */
angular.cookie.CookieOptions.prototype.domain;
 /** @type {string} */
angular.cookie.CookieOptions.prototype.path;
 /** @type {number} */
angular.cookie.CookieOptions.prototype.expires;
 /** @type {string} */
angular.cookie.CookieOptions.prototype.expirationUnit;
 /** @type {boolean} */
angular.cookie.CookieOptions.prototype.secure;
 /** @type {function(?): ?} */
angular.cookie.CookieOptions.prototype.encode;
 /** @type {function(?): ?} */
angular.cookie.CookieOptions.prototype.decode;