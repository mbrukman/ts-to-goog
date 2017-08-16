/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/stripe-checkout/index.d.ts:
/**
 * @record
 * @struct
 */
function StripeCheckoutStatic() {}

/**
 * @param {!StripeCheckoutOptions} options
 * @return {!StripeCheckoutHandler}
 */
StripeCheckoutStatic.prototype.configure = function(options) {};
/**
 * @record
 * @struct
 */
function StripeCheckoutHandler() {}

/**
 * @param {!StripeCheckoutOptions=} options
 * @return {void}
 */
StripeCheckoutHandler.prototype.open = function(options) {};

/**
 * @return {void}
 */
StripeCheckoutHandler.prototype.close = function() {};
/**
 * @record
 * @struct
 */
function StripeCheckoutOptions() {}
 /** @type {string} */
StripeCheckoutOptions.prototype.key;
 /** @type {string} */
StripeCheckoutOptions.prototype.image;
 /** @type {string} */
StripeCheckoutOptions.prototype.name;
 /** @type {string} */
StripeCheckoutOptions.prototype.description;
 /** @type {number} */
StripeCheckoutOptions.prototype.amount;
 /** @type {string} */
StripeCheckoutOptions.prototype.locale;
 /** @type {string} */
StripeCheckoutOptions.prototype.currency;
 /** @type {string} */
StripeCheckoutOptions.prototype.panelLabel;
 /** @type {boolean} */
StripeCheckoutOptions.prototype.zipCode;
 /** @type {boolean} */
StripeCheckoutOptions.prototype.billingAddress;
 /** @type {string} */
StripeCheckoutOptions.prototype.email;
 /** @type {boolean} */
StripeCheckoutOptions.prototype.shippingAddress;
 /** @type {string} */
StripeCheckoutOptions.prototype.label;
 /** @type {boolean} */
StripeCheckoutOptions.prototype.allowRememberMe;
 /** @type {boolean} */
StripeCheckoutOptions.prototype.bitcoin;
 /** @type {(boolean|string)} */
StripeCheckoutOptions.prototype.alipay;
 /** @type {boolean} */
StripeCheckoutOptions.prototype.alipayReusable;

/**
 * @param {!stripe.StripeTokenResponse} token
 * @return {void}
 */
StripeCheckoutOptions.prototype.token = function(token) {};

/**
 * @return {void}
 */
StripeCheckoutOptions.prototype.opened = function() {};

/**
 * @return {void}
 */
StripeCheckoutOptions.prototype.closed = function() {};
 /** @type {!StripeCheckoutStatic} */
var StripeCheckout;
