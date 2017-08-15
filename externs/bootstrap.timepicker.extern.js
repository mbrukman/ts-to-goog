/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/bootstrap.timepicker/index.d.ts:
/**
 * @record
 * @struct
 */
function TimepickerOptions() {}
 /** @type {(string|boolean)} */
TimepickerOptions.prototype.defaultTime;
 /** @type {boolean} */
TimepickerOptions.prototype.disableFocus;
 /** @type {boolean} */
TimepickerOptions.prototype.disableMousewheel;
 /** @type {boolean} */
TimepickerOptions.prototype.explicitMode;
 /** @type {!TimepickerIconOptions} */
TimepickerOptions.prototype.icons;
 /** @type {boolean} */
TimepickerOptions.prototype.isOpen;
 /** @type {number} */
TimepickerOptions.prototype.minuteStep;
 /** @type {boolean} */
TimepickerOptions.prototype.modalBackdrop;
 /** @type {number} */
TimepickerOptions.prototype.secondStep;
 /** @type {boolean} */
TimepickerOptions.prototype.showSeconds;
 /** @type {boolean} */
TimepickerOptions.prototype.showInputs;
 /** @type {boolean} */
TimepickerOptions.prototype.showMeridian;
 /** @type {(string|boolean)} */
TimepickerOptions.prototype.template;
 /** @type {string} */
TimepickerOptions.prototype.appendWidgetTo;
 /** @type {number} */
TimepickerOptions.prototype.maxHours;
 /** @type {boolean} */
TimepickerOptions.prototype.snapToStep;
/**
 * @record
 * @struct
 */
function TimepickerIconOptions() {}
 /** @type {string} */
TimepickerIconOptions.prototype.up;
 /** @type {string} */
TimepickerIconOptions.prototype.down;
/**
 * @record
 * @struct
 */
function TimepickerTime() {}
 /** @type {string} */
TimepickerTime.prototype.value;
 /** @type {number} */
TimepickerTime.prototype.hours;
 /** @type {number} */
TimepickerTime.prototype.minutes;
 /** @type {number} */
TimepickerTime.prototype.seconds;
 /** @type {string} */
TimepickerTime.prototype.meridian;

/**
 * @param {string|!TimepickerOptions=} methodName_or_options
 * @param {?=} params
 * @return {?<!HTMLElement>}
 */
JQuery.prototype.timepicker = function(methodName_or_options, params) {};
 /** @type {!TimepickerTime} */
JQueryEventObject.prototype.time;