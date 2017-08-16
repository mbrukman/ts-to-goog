/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/rrc/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function ScrollIntoViewProps() {}
 /** @type {boolean} */
ScrollIntoViewProps.prototype.alignToTop;
 /** @type {string} */
ScrollIntoViewProps.prototype.id;
/**
 * @constructor
 * @struct
 */
function ScrollIntoView() {}

/** @typedef {?} */
var PropIdCallback;
/**
 * @record
 * @struct
 */
function WithScrollOptions() {}
 /** @type {?} */
WithScrollOptions.prototype.propId;
 /** @type {boolean} */
WithScrollOptions.prototype.alignToTop;

/** @typedef {(!React.ComponentClass<?>|!React.StatelessComponent<?>)} */
var ComponentConstructor;

/**
 * @param {(!React.ComponentClass<(!Object|?)>|!React.StatelessComponent<?>)} component
 * @param {?=} options
 * @return {(!React.ComponentClass<(!Object|?)>|!React.StatelessComponent<?>)}
 */
function withScroll(component, options) {}

/** @typedef {?} */
var RouteConfiguration;
/**
 * @record
 * @struct
 */
function SwitchProps() {}
 /** @type {!Array<?>} */
SwitchProps.prototype.routes;
 /** @type {?} */
SwitchProps.prototype.location;
/**
 * @constructor
 * @struct
 */
function ConfigSwitch() {}

/** @typedef {?} */
var OnUpdateCall;
/**
 * @record
 * @struct
 */
function OnUpdateProps() {}
 /** @type {?} */
OnUpdateProps.prototype.call;
 /** @type {boolean} */
OnUpdateProps.prototype.immediate;
/**
 * @constructor
 * @struct
 */
function OnUpdate() {}

/** @typedef {?} */
var IsActiveCallback;
/**
 * @record
 * @struct
 */
function WhenActiveOptions() {}
 /** @type {boolean} */
WhenActiveOptions.prototype.exact;
 /** @type {boolean} */
WhenActiveOptions.prototype.strict;
 /** @type {string} */
WhenActiveOptions.prototype.pathProp;
 /** @type {string} */
WhenActiveOptions.prototype.className;
 /** @type {!React.CSSProperties} */
WhenActiveOptions.prototype.style;
 /** @type {?} */
WhenActiveOptions.prototype.isActive;

/** @typedef {?} */
var WhenActiveReturnType;

/**
 * @template Props
 * @param {?=} options
 * @return {?}
 */
function whenActive(options) {}
/**
 * @record
 * @struct
 */
function StatusProps() {}
 /** @type {string} */
StatusProps.prototype.code;
/**
 * @constructor
 * @struct
 */
function Status() {}

/** @typedef {?} */
var GetKeyFunction;
/**
 * @extends {SwitchProps}
 * @record
 * @struct
 */
function WrapSwitchProps() {}
 /** @type {?} */
WrapSwitchProps.prototype.getKey;

/**
 * @template WrapperProps, Params
 * @param {(!React.ComponentClass<?>|!React.StatelessComponent<?>)} Wrapper
 * @return {(!React.ComponentClass<?>|!React.StatelessComponent<?>)}
 */
function wrapSwitch(Wrapper) {}