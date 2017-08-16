/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rewire/index.d.ts:
/** @const */
var RewireInterfaces = {};
/**
 * @record
 * @struct
 */
RewireInterfaces.RewiredModule = function() {};

/**
 * Takes all enumerable keys of obj as variable names and sets the values respectively. Returns a function which can be called to revert the change.
 * Sets the internal variable name to the given value. Returns a function which can be called to revert the change.
 * @param {!Object<string,?>|string} obj_or_name
 * @param {?=} value
 * @return {function(): void}
 */
RewireInterfaces.RewiredModule.prototype.__set__ = function(obj_or_name, value) {};

/**
 * Returns the private variable with the given name.
 * @template T
 * @param {string} name
 * @return {T}
 */
RewireInterfaces.RewiredModule.prototype.__get__ = function(name) {};

/**
 * Returns a function which - when being called - sets obj, executes the given callback and reverts obj. If callback returns a promise, obj is only reverted after
 * the promise has been resolved or rejected. For your convenience the returned function passes the received promise through.
 * @param {!Object<string,?>} obj
 * @return {function(function(): ?): ?}
 */
RewireInterfaces.RewiredModule.prototype.__with__ = function(obj) {};

/**
 * Returns a rewired version of the module found at filename. Use rewire() exactly like require().
 * @template T
 * @param {string} filename
 * @return {?}
 */
function rewire(filename) {}

/* TODO: ExportAssignment in  */