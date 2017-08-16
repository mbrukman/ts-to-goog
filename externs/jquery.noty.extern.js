/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/jquery.noty/index.d.ts:
/**
 * @record
 * @struct
 */
function NotyOptions() {}
 /** @type {string} */
NotyOptions.prototype.layout;
 /** @type {string} */
NotyOptions.prototype.theme;
 /** @type {string} */
NotyOptions.prototype.type;
 /** @type {string} */
NotyOptions.prototype.text;
 /** @type {boolean} */
NotyOptions.prototype.dismissQueue;
 /** @type {boolean} */
NotyOptions.prototype.force;
 /** @type {number} */
NotyOptions.prototype.maxVisible;
 /** @type {string} */
NotyOptions.prototype.template;
 /** @type {?} */
NotyOptions.prototype.timeout;
 /** @type {boolean} */
NotyOptions.prototype.progressBar;
 /** @type {!NotyAnimationOptions} */
NotyOptions.prototype.animation;
 /** @type {!Array<string>} */
NotyOptions.prototype.closeWith;
 /** @type {boolean} */
NotyOptions.prototype.modal;
 /** @type {boolean} */
NotyOptions.prototype.killer;
 /** @type {!NotyCallbackOptions} */
NotyOptions.prototype.callback;
 /** @type {?} */
NotyOptions.prototype.buttons;
/**
 * @record
 * @struct
 */
function NotyAnimationOptions() {}
 /** @type {?} */
NotyAnimationOptions.prototype.open;
 /** @type {?} */
NotyAnimationOptions.prototype.close;
 /** @type {string} */
NotyAnimationOptions.prototype.easing;
 /** @type {number} */
NotyAnimationOptions.prototype.speed;
/**
 * @record
 * @struct
 */
function NotyCallbackOptions() {}
 /** @type {!Function} */
NotyCallbackOptions.prototype.onShow;
 /** @type {!Function} */
NotyCallbackOptions.prototype.afterShow;
 /** @type {!Function} */
NotyCallbackOptions.prototype.onClose;
 /** @type {!Function} */
NotyCallbackOptions.prototype.afterClose;
 /** @type {!Function} */
NotyCallbackOptions.prototype.onCloseClick;
/**
 * @record
 * @struct
 */
function NotyStatic() {}

/* TODO: CallSignature:  */
 /** @type {!NotyOptions} */
NotyStatic.prototype.defaults;

/**
 * @param {?} id
 * @return {?}
 */
NotyStatic.prototype.get = function(id) {};

/**
 * @param {?} id
 * @return {?}
 */
NotyStatic.prototype.close = function(id) {};

/**
 * @return {?}
 */
NotyStatic.prototype.clearQueue = function() {};

/**
 * @return {?}
 */
NotyStatic.prototype.closeAll = function() {};

/**
 * @param {?} id
 * @param {string} text
 * @return {?}
 */
NotyStatic.prototype.setText = function(id, text) {};

/**
 * @param {?} id
 * @param {string} type
 * @return {?}
 */
NotyStatic.prototype.setType = function(id, type) {};
/**
 * @record
 * @struct
 */
function Noty() {}

/* TODO: CallSignature:  */
 /** @type {boolean} */
Noty.prototype.closed;
 /** @type {boolean} */
Noty.prototype.shown;

/**
 * @return {?}
 */
Noty.prototype.show = function() {};

/**
 * @return {?}
 */
Noty.prototype.close = function() {};

/**
 * @param {string} text
 * @return {?}
 */
Noty.prototype.setText = function(text) {};

/**
 * @param {string} type
 * @return {?}
 */
Noty.prototype.setType = function(type) {};

/**
 * @param {number} timeout
 * @return {?}
 */
Noty.prototype.setTimeout = function(timeout) {};
 /** @type {!NotyStatic} */
JQueryStatic.prototype.noty;
 /** @type {!Noty} */
JQuery.prototype.noty;
 /** @type {!Noty} */
var noty;
