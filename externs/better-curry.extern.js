/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/better-curry/index.d.ts:
 /** @type {!BetterCurryModule.BetterCurry} */
var BetterCurry;
/** @const */
var BetterCurryModule = {};
/**
 * @record
 * @struct
 */
BetterCurryModule.DelegateOptions = function() {};
 /** @type {string} */
BetterCurryModule.DelegateOptions.prototype.as;
 /** @type {number} */
BetterCurryModule.DelegateOptions.prototype.len;
 /** @type {!Array<?>} */
BetterCurryModule.DelegateOptions.prototype.args;
 /** @type {string} */
BetterCurryModule.DelegateOptions.prototype.name;

/**
 * @constructor
 * @struct
 * @param {T} proto
 * @param {string} target
 */
BetterCurryModule.Delegate = function(proto, target) {};
 /** @type {T} */
BetterCurryModule.Delegate.prototype.proto;
 /** @type {string} */
BetterCurryModule.Delegate.prototype.target;
 /** @type {!Array<?>} */
BetterCurryModule.Delegate.prototype.methods;
 /** @type {!Array<?>} */
BetterCurryModule.Delegate.prototype.getters;
 /** @type {!Array<?>} */
BetterCurryModule.Delegate.prototype.setters;
 /** @type {function(!Array<string>): void} */
BetterCurryModule.Delegate.prototype.all;
 /** @type {function((string|!BetterCurryModule.DelegateOptions)): !BetterCurryModule.Delegate} */
BetterCurryModule.Delegate.prototype.method;
 /** @type {function((string|!BetterCurryModule.DelegateOptions)): !BetterCurryModule.Delegate} */
BetterCurryModule.Delegate.prototype.getter;
 /** @type {function((string|!BetterCurryModule.DelegateOptions)): !BetterCurryModule.Delegate} */
BetterCurryModule.Delegate.prototype.setter;
 /** @type {function((string|!BetterCurryModule.DelegateOptions)): !BetterCurryModule.Delegate} */
BetterCurryModule.Delegate.prototype.access;
 /** @type {function(string): !BetterCurryModule.Delegate} */
BetterCurryModule.Delegate.prototype.revoke;
/**
 * @record
 * @struct
 */
BetterCurryModule.OriginalFunctionReminder = function() {};
 /** @type {number} */
BetterCurryModule.OriginalFunctionReminder.prototype.__length;
/**
 * @record
 * @struct
 */
BetterCurryModule.BetterCurry = function() {};
 /** @type {function(T, !Array<?>, !Object, number, boolean): !BetterCurryModule.OriginalFunctionReminder<T>} */
BetterCurryModule.BetterCurry.prototype.predefine;
 /** @type {function(T, !Object, number, boolean): !BetterCurryModule.OriginalFunctionReminder<T>} */
BetterCurryModule.BetterCurry.prototype.wrap;
 /** @type {function(!Array<?>): !Array<?>} */
BetterCurryModule.BetterCurry.prototype.flatten;
 /** @type {function(T, string): !BetterCurryModule.Delegate<T>} */
BetterCurryModule.BetterCurry.prototype.delegate;
 /** @type {number} */
BetterCurryModule.BetterCurry.prototype.MAX_OPTIMIZED;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "better-curry"
/** @const */
tsickle_declare_module.better_curry = {};
 /** @type {!BetterCurryModule.BetterCurry} */
tsickle_declare_module.better_curry.bc;

/* TODO: ExportAssignment in tsickle_declare_module.better_curry */