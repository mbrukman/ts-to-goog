/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/redux-actions/index.d.ts:

/* TODO: NamespaceExportDeclaration in  */
/**
 * @record
 * @struct
 */
function BaseAction() {}
 /** @type {string} */
BaseAction.prototype.type;
/**
 * @extends {BaseAction}
 * @record
 * @struct
 */
function Action() {}
 /** @type {?} */
Action.prototype.payload;
 /** @type {boolean} */
Action.prototype.error;
/**
 * @extends {Action}
 * @record
 * @struct
 */
function ActionMeta() {}
 /** @type {?} */
ActionMeta.prototype.meta;
/**
 * @record
 * @struct
 */
function ReducerMap() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function ReducerMapMeta() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function ReducerNextThrow() {}

/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
ReducerNextThrow.prototype.next = function(state, action) {};

/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
ReducerNextThrow.prototype.throw = function(state, action) {};
/**
 * @record
 * @struct
 */
function ReducerNextThrowMeta() {}

/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
ReducerNextThrowMeta.prototype.next = function(state, action) {};

/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
ReducerNextThrowMeta.prototype.throw = function(state, action) {};

/** @typedef {?} */
var ActionFunctions;

/** @typedef {?} */
var Reducer;

/** @typedef {?} */
var ReducerMeta;

/** @typedef {?} */
var ActionFunction0;

/** @typedef {?} */
var ActionFunction1;

/** @typedef {?} */
var ActionFunction2;

/** @typedef {?} */
var ActionFunction3;

/** @typedef {?} */
var ActionFunction4;

/** @typedef {?} */
var ActionFunctionAny;

/**
 * @template Payload, Arg1, Arg2, Arg3, Arg4, Meta
 * @param {string} actionType
 * @param {?=} payloadCreator
 * @param {?=} metaCreator
 * @return {?}
 */
function createAction(actionType, payloadCreator, metaCreator) {}

/**
 * @template State, Payload, Meta
 * @param {(string|?)|?} actionType
 * @param {?} reducer
 * @param {?} initialState
 * @return {?}
 */
function handleAction(actionType, reducer, initialState) {}

/**
 * @template StateAndPayload, State, Payload
 * @param {?} reducerMap
 * @param {?} initialState
 * @return {?}
 */
function handleActions(reducerMap, initialState) {}

/**
 * @param {...(string|?)} actionTypes
 * @return {string}
 */
function combineActions(actionTypes) {}
/**
 * @record
 * @struct
 */
function ActionMap() {}

/* TODO: IndexSignature:  */

/**
 * @template Payload, Meta
 * @param {?} actionMap
 * @param {...string} identityActions
 * @return {?}
 */
function createActions(actionMap, identityActions) {}