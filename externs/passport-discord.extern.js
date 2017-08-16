/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/passport-discord/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/**
 * @constructor
 * @struct
 * @param {?} options
 * @param {?} verify
 */
function Strategy(options, verify) {}
 /** @type {string} */
Strategy.prototype.name;
 /** @type {?} */
Strategy.prototype.authenticate;

/**
 * @param {?} options
 * @return {?}
 */
Strategy.prototype.authorizationParams = function(options) {};

/**
 * @param {?} scope
 * @param {?} accessToken
 * @param {?} cb
 * @return {?}
 */
Strategy.prototype.checkScope = function(scope, accessToken, cb) {};

/**
 * @param {?} body
 * @param {?} status
 * @return {?}
 */
Strategy.prototype.parseErrorResponse = function(body, status) {};

/**
 * @param {?} options
 * @return {?}
 */
Strategy.prototype.tokenParams = function(options) {};

/**
 * @param {?} accessToken
 * @param {?} done
 * @return {?}
 */
Strategy.prototype.userProfile = function(accessToken, done) {};
/**
 * @record
 * @struct
 */
Strategy.StrategyOption = function() {};
 /** @type {string} */
Strategy.StrategyOption.prototype.clientID;
 /** @type {string} */
Strategy.StrategyOption.prototype.clientSecret;
 /** @type {string} */
Strategy.StrategyOption.prototype.callbackURL;
 /** @type {!Array<string>} */
Strategy.StrategyOption.prototype.scope;
/**
 * @extends {passport.Profile}
 * @record
 * @struct
 */
Strategy.Profile = function() {};
 /** @type {string} */
Strategy.Profile.prototype.profileUrl;
 /** @type {?} */
Strategy.Profile.prototype.id;
 /** @type {string} */
Strategy.Profile.prototype.username;
 /** @type {string} */
Strategy.Profile.prototype.discriminator;
 /** @type {string} */
Strategy.Profile.prototype.avatar;
 /** @type {boolean} */
Strategy.Profile.prototype.verified;
 /** @type {string} */
Strategy.Profile.prototype.email;
 /** @type {?} */
Strategy.Profile.prototype._raw;
 /** @type {?} */
Strategy.Profile.prototype._json;
