/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-faux-dom/index.d.ts:

/* TODO: ImportDeclaration in  */

/**
 * @constructor
 * @struct
 * @param {string} nodeName
 * @param {?=} parentNode
 */
function Element(nodeName, parentNode) {}
 /** @type {?} */
Element.prototype.style;

/**
 * @return {!React.ReactElement<?>}
 */
Element.prototype.toReact = function() {};
 /** @type {?} */
var defaultView;
/** @const */
var mixins = {};
 /** @type {?} */
mixins.core;
 /** @type {?} */
mixins.anim;

/**
 * @param {string} nodeName
 * @return {?}
 */
function createElement(nodeName) {}

/**
 * @param {string} namespace
 * @param {string} nodeName
 * @return {?}
 */
function createElementNS(namespace, nodeName) {}

/**
 * @return {number}
 */
function compareDocumentPosition() {}
/**
 * @record
 * @struct
 */
function ReactFauxDomProps() {}

/**
 * @param {string} node
 * @param {string} name
 * @param {?=} discardNode
 * @return {?}
 */
ReactFauxDomProps.prototype.connectFauxDOM = function(node, name, discardNode) {};

/**
 * @param {number} duration
 * @return {void}
 */
ReactFauxDomProps.prototype.animateFauxDOM = function(duration) {};

/**
 * @template P
 * @param {?} WrappedComponent
 * @return {!React.ClassicComponentClass<?>}
 */
function withFauxDOM(WrappedComponent) {}
