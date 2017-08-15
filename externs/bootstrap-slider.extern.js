/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/bootstrap-slider/index.d.ts:
/**
 * @record
 * @struct
 */
function SliderOptions() {}
 /** @type {string} */
SliderOptions.prototype.id;
 /** @type {number} */
SliderOptions.prototype.min;
 /** @type {number} */
SliderOptions.prototype.max;
 /** @type {number} */
SliderOptions.prototype.step;
 /** @type {number} */
SliderOptions.prototype.precision;
 /** @type {string} */
SliderOptions.prototype.orientation;
 /** @type {(number|!Array<number>)} */
SliderOptions.prototype.value;
 /** @type {boolean} */
SliderOptions.prototype.range;
 /** @type {string} */
SliderOptions.prototype.selection;
 /** @type {string} */
SliderOptions.prototype.tooltip;
 /** @type {boolean} */
SliderOptions.prototype.tooltip_split;
 /** @type {string} */
SliderOptions.prototype.handle;
 /** @type {boolean} */
SliderOptions.prototype.reversed;
 /** @type {boolean} */
SliderOptions.prototype.enabled;
 /** @type {boolean} */
SliderOptions.prototype.natural_arrow_keys;
 /** @type {!Array<number>} */
SliderOptions.prototype.ticks;
 /** @type {!Array<number>} */
SliderOptions.prototype.ticks_positions;
 /** @type {!Array<string>} */
SliderOptions.prototype.ticks_labels;
 /** @type {number} */
SliderOptions.prototype.ticks_snap_bounds;
 /** @type {string} */
SliderOptions.prototype.scale;
 /** @type {boolean} */
SliderOptions.prototype.focus;

/**
 * Default: returns the plain value
 * formatter callback. Return the value wanted to be displayed in the tooltip
 * @param {number} val the current value to display
 * @return {string}
 */
SliderOptions.prototype.formatter = function(val) {};
 /** @type {!SliderPlugin<JQuery>} */
JQuery.prototype.slider;
 /** @type {!SliderPlugin<JQuery>} */
JQuery.prototype.bootstrapSlider;

/**
 * @param {string} event
 * @param {function(!SliderEvent): (boolean|void)} handler
 * @return {JQuery}
 */
JQuery.prototype.on = function(event, handler) {};
/**
 * @record
 * @struct
 */
function SliderPlugin() {}

/* TODO: CallSignature:  */

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function ChangeValue() {}
 /** @type {number} */
ChangeValue.prototype.oldValue;
 /** @type {number} */
ChangeValue.prototype.newValue;
/**
 * @extends {JQuery.Event}
 * @record
 * @struct
 */
function SliderEvent() {}
 /** @type {(number|!ChangeValue)} */
SliderEvent.prototype.value;

/**
 * @constructor
 * @struct
 * @param {string} selector
 * @param {!SliderOptions} opts
 */
function Slider(selector, opts) {}

/**
 * Get the current value from the slider
 * @return {number}
 */
Slider.prototype.getValue = function() {};

/**
 * Set a new value for the slider. If optional triggerSlideEvent parameter is true, 'slide' events will be triggered.
 * If optional triggerChangeEvent parameter is true, 'change' events will be triggered.
 * @param {number} newValue
 * @param {boolean=} triggerSlideEvent
 * @param {boolean=} triggerChangeEvent
 * @return {Slider}
 */
Slider.prototype.setValue = function(newValue, triggerSlideEvent, triggerChangeEvent) {};

/**
 * Properly clean up and remove the slider instance
 * @return {Slider}
 */
Slider.prototype.destroy = function() {};

/**
 * Disables the slider and prevents the user from changing the value
 * @return {Slider}
 */
Slider.prototype.disable = function() {};

/**
 * Enables the slider
 * @return {Slider}
 */
Slider.prototype.enable = function() {};

/**
 * Returns true if enabled, false if disabled
 * @return {boolean}
 */
Slider.prototype.isEnabled = function() {};

/**
 * Updates the slider's attributes
 * @param {string} attribute
 * @param {?} value
 * @return {Slider}
 */
Slider.prototype.setAttribute = function(attribute, value) {};

/**
 * Get the slider's attributes
 * @param {string} attribute
 * @return {?}
 */
Slider.prototype.getAttribute = function(attribute) {};

/**
 * Refreshes the current slider
 * @return {Slider}
 */
Slider.prototype.refresh = function() {};

/**
 * Renders the tooltip again, after initialization. Useful in situations when the slider and tooltip are initially hidden.
 * @return {Slider}
 */
Slider.prototype.relayout = function() {};
