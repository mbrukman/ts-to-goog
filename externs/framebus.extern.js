/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/framebus/index.d.ts:

/* TODO: NamespaceExportDeclaration in  */
/**
 * @record
 * @struct
 */
function FrameBus() {}

/**
 * @param {string} event
 * @param {...?} args
 * @return {boolean}
 */
FrameBus.prototype.publish = function(event, args) {};

/**
 * @param {string} event
 * @param {...?} args
 * @return {boolean}
 */
FrameBus.prototype.pub = function(event, args) {};

/**
 * @param {string} event
 * @param {...?} args
 * @return {boolean}
 */
FrameBus.prototype.trigger = function(event, args) {};

/**
 * @param {string} event
 * @param {...?} args
 * @return {boolean}
 */
FrameBus.prototype.emit = function(event, args) {};

/**
 * @param {string} event
 * @param {?} fn
 * @return {boolean}
 */
FrameBus.prototype.subscribe = function(event, fn) {};

/**
 * @param {string} event
 * @param {?} fn
 * @return {boolean}
 */
FrameBus.prototype.sub = function(event, fn) {};

/**
 * @param {string} event
 * @param {?} fn
 * @return {boolean}
 */
FrameBus.prototype.on = function(event, fn) {};

/**
 * @param {string} event
 * @param {?} fn
 * @return {boolean}
 */
FrameBus.prototype.unsubscribe = function(event, fn) {};

/**
 * @param {string} event
 * @param {?} fn
 * @return {boolean}
 */
FrameBus.prototype.unsub = function(event, fn) {};

/**
 * @param {string} event
 * @param {?} fn
 * @return {boolean}
 */
FrameBus.prototype.off = function(event, fn) {};

/**
 * let popup = window.open('https://example.com');
 * framebus.include(popup);
 * framebus.emit('hello popup and friends!');
 * @param {!Window} popup
 * @return {boolean}
 */
function include(popup) {}

/**
 * framebus.target('https://example.com').on('my cool event', function () {});
 * // will ignore all incoming 'my cool event' NOT from 'https://example.com'
 * @param {string} origin {string}
 * @return {?}
 */
function target(origin) {}

/**
 * let callback = (data: any) => {
 *    console.log('Got back %s as a reply!', data)
 * }
 * framebus.publish('Marco!', callback, 'http://listener.example.com');
 * @param {string} event {string} The name of the event
 * @param {...?} args  {...any[]} The data to give to subscribers
 * // \@param last{callback(data)} Give subscribers a function for easy, direct replies
 * @return {boolean}
 */
function publish(event, args) {}

/**
 * publish = pub = trigger = emit
 * framebus.publish('Marco!', callback, 'http://listener.example.com');
 * @param {string} event {string} The name of the event
 * @param {...?} args  {...any[]} The data to give to subscribers
 * // \@param last{callback(data)} Give subscribers a function for easy, direct replies
 * @return {boolean}
 */
function pub(event, args) {}

/**
 * publish = pub = trigger = emit
 * @param {string} event {string} The name of the event
 * @param {...?} args  {...any[]} The data to give to subscribers
 * // \@param last{callback(data)} Give subscribers a function for easy, direct replies
 * @return {boolean}
 */
function trigger(event, args) {}

/**
 * publish = pub = trigger = emit
 * @param {string} event {string} The name of the event
 * @param {...?} args  {...any[]} The data to give to subscribers
 * // \@param last{callback(data)} Give subscribers a function for easy, direct replies
 * @return {boolean}
 */
function emit(event, args) {}

/**
 * **this** scope is the MessageEvent object from the underlying postMessage
 * @param {string} event {string} The name of the event
 * @param {?} fn  {Callback} ([arg...] [, callback]) Event handler. Arguments are from the publish invocation
 * @return {boolean}
 */
function subscribe(event, fn) {}

/**
 * **this** scope is the MessageEvent object from the underlying postMessage
 * @param {string} event {string} The name of the event
 * @param {?} fn  {Callback} ([arg...] [, callback]) Event handler. Arguments are from the publish invocation
 * @return {boolean}
 */
function sub(event, fn) {}

/**
 * **this** scope is the MessageEvent object from the underlying postMessage
 * @param {string} event {string} The name of the event
 * @param {?} fn  {Callback} ([arg...] [, callback]) Event handler. Arguments are from the publish invocation
 * @return {boolean}
 */
function on(event, fn) {}

/**
 * @param {string} event {string} The name of the event
 * @param {?} fn {Callback} The function that was subscribed
 * @return {boolean}
 */
function unsubscribe(event, fn) {}

/**
 * @param {string} event {string} The name of the event
 * @param {?} fn {Callback} The function that was subscribed
 * @return {boolean}
 */
function unsub(event, fn) {}

/**
 * @param {string} event {string} The name of the event
 * @param {?} fn {Callback} The function that was subscribed
 * @return {boolean}
 */
function off(event, fn) {}
