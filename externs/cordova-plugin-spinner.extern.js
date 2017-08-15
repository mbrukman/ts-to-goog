/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/cordova-plugin-spinner/index.d.ts:
/** @const */
var SpinnerPlugin = {};
/**
 * @record
 * @struct
 */
SpinnerPlugin.SpinnerPluginStatic = function() {};

/**
 * Blocks user input using an indeterminate spinner.
 * 
 * An optional label can be shown below the spinner.
 * 
 * @param {string=} labelText The optional value to show in a label.
 * @param {function(): void=} successCallback The success callback for this asynchronous function.
 * @param {function(string): void=} failureCallback The failure callback for this asynchronous function; receives an error string.
 * @return {void}
 */
SpinnerPlugin.SpinnerPluginStatic.prototype.activityStart = function(labelText, successCallback, failureCallback) {};

/**
 * Allows user input by hiding the indeterminate spinner.
 * 
 * @param {function(): void=} successCallback The success callback for this asynchronous function.
 * @param {function(string): void=} failureCallback The failure callback for this asynchronous function; receives an error string.
 * @return {void}
 */
SpinnerPlugin.SpinnerPluginStatic.prototype.activityStop = function(successCallback, failureCallback) {};
 /** @type {!SpinnerPlugin.SpinnerPluginStatic} */
var SpinnerPlugin;
