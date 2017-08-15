/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/cordova-plugin-device-motion/index.d.ts:
 /** @type {!Accelerometer} */
Navigator.prototype.accelerometer;
/**
 * @record
 * @struct
 */
function Accelerometer() {}

/**
 * Stop watching the Acceleration referenced by the watchID parameter.
 * @param {!WatchHandle} watchID The ID returned by navigator.accelerometer.watchAcceleration.
 * @return {void}
 */
Accelerometer.prototype.clearWatch = function(watchID) {};

/**
 * Get the current acceleration along the x, y, and z axes.
 * These acceleration values are returned to the accelerometerSuccess callback function.
 * @param {function(!Acceleration): void} accelerometerSuccess Success callback that gets the Acceleration object.
 * @param {function(): void} accelerometerError Success callback
 * @return {void}
 */
Accelerometer.prototype.getCurrentAcceleration = function(accelerometerSuccess, accelerometerError) {};

/**
 * Retrieves the device's current Acceleration at a regular interval, executing the
 * accelerometerSuccess callback function each time. Specify the interval in milliseconds
 * via the acceleratorOptions object's frequency parameter.
 * The returned watch ID references the accelerometer's watch interval, and can be used
 * with navigator.accelerometer.clearWatch to stop watching the accelerometer.
 * @param {function(!Acceleration): void} accelerometerSuccess Callback, that called at every time interval and passes an Acceleration object.
 * @param {function(): void} accelerometerError   Error callback.
 * @param {!AccelerometerOptions=} accelerometerOptions Object with options for watchAcceleration
 * @return {!WatchHandle}
 */
Accelerometer.prototype.watchAcceleration = function(accelerometerSuccess, accelerometerError, accelerometerOptions) {};
/**
 * @record
 * @struct
 */
function Acceleration() {}
 /** @type {number} */
Acceleration.prototype.x;
 /** @type {number} */
Acceleration.prototype.y;
 /** @type {number} */
Acceleration.prototype.z;
 /** @type {number} */
Acceleration.prototype.timestamp;
/**
 * @record
 * @struct
 */
function AccelerometerOptions() {}
 /** @type {number} */
AccelerometerOptions.prototype.frequency;
/**
 * @record
 * @struct
 */
function WatchHandle() {}