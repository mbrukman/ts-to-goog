/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/intercomjs/index.d.ts:
/** @const */
var intercom = {};
/**
 * @record
 * @struct
 */
intercom.Intercom = function() {};

/**
 * Broadcasts a message to all open windows (including the current window).
 * @param {string} name The string event name
 * @param {?=} message The event data/message
 * @return {void}
 */
intercom.Intercom.prototype.emit = function(name, message) {};

/**
 * Sets up a listener to be invoked when a message with the given name is received.
 * @param {string} name The string event name to listen for.
 * @param {!Function} fn The listener method to invoke.
 * @return {void}
 */
intercom.Intercom.prototype.on = function(name, fn) {};

/**
 * Remove a registered event listener
 * @param {string} name The string event listener name.
 * @param {!Function} fn The listener method to remove.
 * @return {void}
 */
intercom.Intercom.prototype.off = function(name, fn) {};

/**
 * Given a unique key to represent the function, fn will be invoked in only one window. The ttl argument represents the number of seconds before the function can be called again.
 * @param {string} key The unique function identifier key
 * @param {!Function} fn The function to be called once
 * @param {number=} ttl The amount of time in seconds to wait before allowing the function to be invoked again.
 * @return {void}
 */
intercom.Intercom.prototype.once = function(key, fn, ttl) {};

/**
 * Bind to a socket.io socket and forward all received messages to all windows and/or back to the socket.
 * @param {?} socket A socket.io socket to bind to.
 * @param {!intercom.SocketBindingOptions=} options Object with "send" and "receive" keys having values of Boolean or Boolean-producing function to determine whether message(s) should be forwarded to/from the socket.
 * @return {void}
 */
intercom.Intercom.prototype.bind = function(socket, options) {};
/**
 * @record
 * @struct
 */
intercom.SocketBindingOptions = function() {};
 /** @type {?} */
intercom.SocketBindingOptions.prototype.send;
 /** @type {?} */
intercom.SocketBindingOptions.prototype.receive;
/**
 * @record
 * @struct
 */
function IntercomStatic() {}

/**
 * Returns an instance of Intercom. If one doesn't exist, it will be instantiated.
 * @return {!intercom.Intercom} an instance of Intercom.
 */
IntercomStatic.prototype.getInstance = function() {};

/**
 * Removes all data associated with intercom from localStorage.
 * @return {void}
 */
IntercomStatic.prototype.destroy = function() {};
 /** @type {!IntercomStatic} */
var Intercom;
