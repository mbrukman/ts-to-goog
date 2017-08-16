/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/stamplay-js-sdk/index.d.ts:
/** @const */
var Stamplay = {};

/**
 * @param {string} appId
 * @return {void}
 */
Stamplay.init = function(appId) {};

/**
 * @return {!Stamplay.StamplayObject}
 */
Stamplay.User = function() {};

/**
 * @param {string} object
 * @return {!Stamplay.StamplayObject}
 */
Stamplay.Cobject = function(object) {};
/**
 * @record
 * @struct
 */
Stamplay.Model = function() {};

/* TODO: ConstructSignature: Stamplay */

/**
 * @param {?} arg
 * @return {!Promise<?>}
 */
Stamplay.Model.prototype.signup = function(arg) {};

/**
 * @param {string} property
 * @return {?}
 */
Stamplay.Model.prototype.get = function(property) {};

/**
 * @param {string} property
 * @param {?} value
 * @return {void}
 */
Stamplay.Model.prototype.set = function(property, value) {};

/**
 * @param {string} property
 * @return {void}
 */
Stamplay.Model.prototype.unset = function(property) {};

/**
 * @param {?} id
 * @return {!Promise<?>}
 */
Stamplay.Model.prototype.fetch = function(id) {};

/**
 * @return {!Promise<?>}
 */
Stamplay.Model.prototype.destroy = function() {};

/**
 * @param {?=} arg
 * @return {!Promise<?>}
 */
Stamplay.Model.prototype.save = function(arg) {};

/**
 * @return {!Promise<?>}
 */
Stamplay.Model.prototype.upVote = function() {};
/**
 * @record
 * @struct
 */
Stamplay.StamplayObject = function() {};
 /** @type {!Stamplay.Model} */
Stamplay.StamplayObject.prototype.Model;
 /** @type {?} */
Stamplay.StamplayObject.prototype.Collection;
