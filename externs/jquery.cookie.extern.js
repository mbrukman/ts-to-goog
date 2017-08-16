/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery.cookie/index.d.ts:
/**
 * @record
 * @struct
 */
function JQueryCookieOptions() {}
 /** @type {?} */
JQueryCookieOptions.prototype.expires;
 /** @type {string} */
JQueryCookieOptions.prototype.path;
 /** @type {string} */
JQueryCookieOptions.prototype.domain;
 /** @type {boolean} */
JQueryCookieOptions.prototype.secure;
/**
 * @record
 * @struct
 */
function JQueryCookieStatic() {}
 /** @type {boolean} */
JQueryCookieStatic.prototype.raw;
 /** @type {boolean} */
JQueryCookieStatic.prototype.json;
 /** @type {!JQueryCookieOptions} */
JQueryCookieStatic.prototype.defaults;

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
 /** @type {!JQueryCookieStatic} */
JQueryStatic.prototype.cookie;

/**
 * Deletes a cookie
 * Deletes a cookie
 * @param {string} name Name of cookie to delete
 * @param {!JQueryCookieOptions=} options The same attributes (path, domain) as what the cookie was written with
 * @return {boolean}
 */
JQueryStatic.prototype.removeCookie = function(name, options) {};