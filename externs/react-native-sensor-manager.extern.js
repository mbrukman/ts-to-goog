/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-native-sensor-manager/index.d.ts:

/* TODO: ExportDeclaration in  */
/**
 * @record
 * @struct
 */
function SensorManager() {}

/**
 * @param {number} delay
 * @return {void}
 */
SensorManager.prototype.startAccelerometer = function(delay) {};

/**
 * @return {void}
 */
SensorManager.prototype.stopAccelerometer = function() {};

/**
 * @param {number} delay
 * @return {void}
 */
SensorManager.prototype.startGyroscope = function(delay) {};

/**
 * @return {void}
 */
SensorManager.prototype.stopGyroscope = function() {};

/**
 * @param {number} delay
 * @return {void}
 */
SensorManager.prototype.startMagnetometer = function(delay) {};

/**
 * @return {void}
 */
SensorManager.prototype.stopMagnetometer = function() {};

/**
 * @param {number} delay
 * @return {void}
 */
SensorManager.prototype.startStepCounter = function(delay) {};

/**
 * @return {void}
 */
SensorManager.prototype.stopStepCounter = function() {};

/**
 * @param {number} delay
 * @return {void}
 */
SensorManager.prototype.startThermometer = function(delay) {};

/**
 * @return {void}
 */
SensorManager.prototype.stopThermometer = function() {};

/**
 * @param {number} delay
 * @return {void}
 */
SensorManager.prototype.startMotionValue = function(delay) {};

/**
 * @return {void}
 */
SensorManager.prototype.stopMotionValue = function() {};

/**
 * @param {number} delay
 * @return {void}
 */
SensorManager.prototype.startOrientation = function(delay) {};

/**
 * @return {void}
 */
SensorManager.prototype.stopOrientation = function() {};

/**
 * @param {number} delay
 * @return {void}
 */
SensorManager.prototype.startProximity = function(delay) {};

/**
 * @return {void}
 */
SensorManager.prototype.stopProximity = function() {};

/**
 * @param {number} delay
 * @return {void}
 */
SensorManager.prototype.startLightSensor = function(delay) {};

/**
 * @return {void}
 */
SensorManager.prototype.stopLightSensor = function() {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "react-native"

/**
 * @param {string} event
 * @param {function({x: number, y: number, z: number}): void|function({azimuth: number, pitch: number, roll: number}): void|function({steps: number}): void|function({temp: number}): void|function({light: number}): void|function({isNear: boolean, value: number, maxRange: number}): void} callback
 * @return {?}
 */
tsickle_declare_module.react_native.DeviceEventEmitterStatic.prototype.addListener = function(event, callback) {};
 /** @type {?} */
tsickle_declare_module.react_native.NativeModulesStatic.prototype.SensorManager;
