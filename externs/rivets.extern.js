/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rivets/index.d.ts:
/** @const */
var Rivets = {};
/**
 * @record
 * @struct
 */
Rivets.View = function() {};

/**
 * @return {void}
 */
Rivets.View.prototype.build = function() {};

/**
 * @return {void}
 */
Rivets.View.prototype.bind = function() {};

/**
 * @return {void}
 */
Rivets.View.prototype.unbind = function() {};
/**
 * @record
 * @struct
 */
Rivets.Rivets = function() {};
 /** @type {!Object} */
Rivets.Rivets.prototype.binders;
 /** @type {!Object} */
Rivets.Rivets.prototype.components;
 /** @type {!Object} */
Rivets.Rivets.prototype.formatters;
 /** @type {!Object} */
Rivets.Rivets.prototype.adapters;
 /** @type {string} */
Rivets.Rivets.prototype.prefix;
 /** @type {!Array<string>} */
Rivets.Rivets.prototype.templateDelimiters;
 /** @type {string} */
Rivets.Rivets.prototype.rootInterface;
 /** @type {boolean} */
Rivets.Rivets.prototype.preloadData;

/**
 * @param {?} context
 * @param {!Event} ev
 * @param {?} biding
 * @return {void}
 */
Rivets.Rivets.prototype.handler = function(context, ev, biding) {};

/**
 * @param {{prefix: string, preloadData: boolean, rootInterface: string, templateDelimiters: !Array<string>, handler: !Function}=} options
 * @return {void}
 */
Rivets.Rivets.prototype.configure = function(options) {};

/**
 * @param {!HTMLElement|?<!HTMLElement>|!Array<!HTMLElement>} element
 * @param {!Object} models
 * @param {!Object=} options
 * @return {!Rivets.View}
 */
Rivets.Rivets.prototype.bind = function(element, models, options) {};
 /** @type {!Rivets.Rivets} */
var rivets;