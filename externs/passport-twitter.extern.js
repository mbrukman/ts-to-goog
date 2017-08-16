/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/passport-twitter/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */
/**
 * @extends {passport.Profile}
 * @record
 * @struct
 */
function Profile() {}
 /** @type {string} */
Profile.prototype.gender;
 /** @type {string} */
Profile.prototype.username;
 /** @type {string} */
Profile.prototype._raw;
 /** @type {?} */
Profile.prototype._json;
 /** @type {string} */
Profile.prototype._accessLevel;
/**
 * @record
 * @struct
 */
function IStrategyOptionBase() {}
 /** @type {string} */
IStrategyOptionBase.prototype.consumerKey;
 /** @type {string} */
IStrategyOptionBase.prototype.consumerSecret;
 /** @type {string} */
IStrategyOptionBase.prototype.callbackURL;
 /** @type {boolean} */
IStrategyOptionBase.prototype.includeEmail;
 /** @type {string} */
IStrategyOptionBase.prototype.reguestTokenURL;
 /** @type {string} */
IStrategyOptionBase.prototype.accessTokenURL;
 /** @type {string} */
IStrategyOptionBase.prototype.userAuthorizationURL;
 /** @type {string} */
IStrategyOptionBase.prototype.sessionKey;
 /** @type {string} */
IStrategyOptionBase.prototype.userProfileURL;
 /** @type {boolean} */
IStrategyOptionBase.prototype.skipExtendedUserProfile;
/**
 * @extends {IStrategyOptionBase}
 * @record
 * @struct
 */
function IStrategyOption() {}
 /** @type {boolean} */
IStrategyOption.prototype.passReqToCallback;
/**
 * @extends {IStrategyOptionBase}
 * @record
 * @struct
 */
function IStrategyOptionWithRequest() {}
 /** @type {boolean} */
IStrategyOptionWithRequest.prototype.passReqToCallback;

/**
 * @constructor
 * @struct
 * @param {?} options
 * @param {function(string, string, ?, function(?, ?): void): void|function(!e.Request, string, string, ?, function(?, ?): void): void} verify
 */
function Strategy(options, verify) {}
 /** @type {string} */
Strategy.prototype.name;
 /** @type {function(!e.Request, !Object): void} */
Strategy.prototype.authenticate;