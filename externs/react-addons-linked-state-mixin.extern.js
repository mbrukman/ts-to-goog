/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-addons-linked-state-mixin/index.d.ts:

/* TODO: ImportDeclaration in  */
 /** @type {!LinkedStateMixin.LinkedStateMixin} */
var LinkedStateMixin;

/** @typedef {!LinkedStateMixin.LinkedStateMixin} */
var LinkedStateMixin;

/* TODO: ExportAssignment in  */
/**
 * @record
 * @struct
 */
LinkedStateMixin.ReactLink = function() {};
 /** @type {T} */
LinkedStateMixin.ReactLink.prototype.value;

/**
 * @param {T} newValue
 * @return {void}
 */
LinkedStateMixin.ReactLink.prototype.requestChange = function(newValue) {};
/**
 * @extends {Mixin}
 * @record
 * @struct
 */
LinkedStateMixin.LinkedStateMixin = function() {};

/**
 * @template T
 * @param {string} key
 * @return {!LinkedStateMixin.ReactLink<T>}
 */
LinkedStateMixin.LinkedStateMixin.prototype.linkState = function(key) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "react"
 /** @type {!LinkedStateMixin.ReactLink<boolean>} */
tsickle_declare_module.react.HTMLAttributes.prototype.checkedLink;
 /** @type {!LinkedStateMixin.ReactLink<(string|number|boolean)>} */
tsickle_declare_module.react.HTMLAttributes.prototype.valueLink;
