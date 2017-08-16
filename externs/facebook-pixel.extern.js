/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/facebook-pixel/index.d.ts:
 /** @type {!facebook.Pixel.Event} */
var fbq;
/** @const */
var facebook = {};
/** @const */
facebook.Pixel = {};
/**
 * @record
 * @struct
 */
facebook.Pixel.Event = function() {};

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */

/* TODO: CallSignature: facebook.Pixel */
/**
 * @record
 * @struct
 */
facebook.Pixel.ViewContentParameters = function() {};
 /** @type {number} */
facebook.Pixel.ViewContentParameters.prototype.value;
 /** @type {string} */
facebook.Pixel.ViewContentParameters.prototype.currency;
 /** @type {string} */
facebook.Pixel.ViewContentParameters.prototype.content_name;
 /** @type {string} */
facebook.Pixel.ViewContentParameters.prototype.content_type;
 /** @type {!Array<string>} */
facebook.Pixel.ViewContentParameters.prototype.content_ids;
 /** @type {string} */
facebook.Pixel.ViewContentParameters.prototype.content_category;
/**
 * @record
 * @struct
 */
facebook.Pixel.SearchParameters = function() {};
 /** @type {number} */
facebook.Pixel.SearchParameters.prototype.value;
 /** @type {string} */
facebook.Pixel.SearchParameters.prototype.currency;
 /** @type {string} */
facebook.Pixel.SearchParameters.prototype.content_category;
 /** @type {!Array<string>} */
facebook.Pixel.SearchParameters.prototype.content_ids;
 /** @type {string} */
facebook.Pixel.SearchParameters.prototype.search_string;
/**
 * @record
 * @struct
 */
facebook.Pixel.AddToCartParameters = function() {};
 /** @type {number} */
facebook.Pixel.AddToCartParameters.prototype.value;
 /** @type {string} */
facebook.Pixel.AddToCartParameters.prototype.currency;
 /** @type {string} */
facebook.Pixel.AddToCartParameters.prototype.content_name;
 /** @type {string} */
facebook.Pixel.AddToCartParameters.prototype.content_type;
 /** @type {!Array<string>} */
facebook.Pixel.AddToCartParameters.prototype.content_ids;
/**
 * @record
 * @struct
 */
facebook.Pixel.AddToWishlistParameters = function() {};
 /** @type {number} */
facebook.Pixel.AddToWishlistParameters.prototype.value;
 /** @type {string} */
facebook.Pixel.AddToWishlistParameters.prototype.currency;
 /** @type {string} */
facebook.Pixel.AddToWishlistParameters.prototype.content_name;
 /** @type {string} */
facebook.Pixel.AddToWishlistParameters.prototype.content_category;
 /** @type {!Array<string>} */
facebook.Pixel.AddToWishlistParameters.prototype.content_ids;
/**
 * @record
 * @struct
 */
facebook.Pixel.InitiateCheckoutParameters = function() {};
 /** @type {number} */
facebook.Pixel.InitiateCheckoutParameters.prototype.value;
 /** @type {string} */
facebook.Pixel.InitiateCheckoutParameters.prototype.currency;
 /** @type {string} */
facebook.Pixel.InitiateCheckoutParameters.prototype.content_name;
 /** @type {string} */
facebook.Pixel.InitiateCheckoutParameters.prototype.content_category;
 /** @type {!Array<string>} */
facebook.Pixel.InitiateCheckoutParameters.prototype.content_ids;
 /** @type {number} */
facebook.Pixel.InitiateCheckoutParameters.prototype.num_items;
/**
 * @record
 * @struct
 */
facebook.Pixel.AddPaymentInfoParameters = function() {};
 /** @type {number} */
facebook.Pixel.AddPaymentInfoParameters.prototype.value;
 /** @type {string} */
facebook.Pixel.AddPaymentInfoParameters.prototype.currency;
 /** @type {string} */
facebook.Pixel.AddPaymentInfoParameters.prototype.content_category;
 /** @type {!Array<string>} */
facebook.Pixel.AddPaymentInfoParameters.prototype.content_ids;
/**
 * @record
 * @struct
 */
facebook.Pixel.PurchaseParameters = function() {};
 /** @type {number} */
facebook.Pixel.PurchaseParameters.prototype.value;
 /** @type {string} */
facebook.Pixel.PurchaseParameters.prototype.currency;
 /** @type {string} */
facebook.Pixel.PurchaseParameters.prototype.content_name;
 /** @type {string} */
facebook.Pixel.PurchaseParameters.prototype.content_type;
 /** @type {!Array<string>} */
facebook.Pixel.PurchaseParameters.prototype.content_ids;
 /** @type {number} */
facebook.Pixel.PurchaseParameters.prototype.num_items;
 /** @type {string} */
facebook.Pixel.PurchaseParameters.prototype.order_id;
/**
 * @record
 * @struct
 */
facebook.Pixel.LeadParameters = function() {};
 /** @type {number} */
facebook.Pixel.LeadParameters.prototype.value;
 /** @type {string} */
facebook.Pixel.LeadParameters.prototype.currency;
 /** @type {string} */
facebook.Pixel.LeadParameters.prototype.content_name;
 /** @type {string} */
facebook.Pixel.LeadParameters.prototype.content_category;
/**
 * @record
 * @struct
 */
facebook.Pixel.CompleteRegistrationParameters = function() {};
 /** @type {number} */
facebook.Pixel.CompleteRegistrationParameters.prototype.value;
 /** @type {string} */
facebook.Pixel.CompleteRegistrationParameters.prototype.currency;
 /** @type {string} */
facebook.Pixel.CompleteRegistrationParameters.prototype.content_name;
 /** @type {string} */
facebook.Pixel.CompleteRegistrationParameters.prototype.status;
/** @const */
facebook.Pixel.DPA = {};
/**
 * @extends {facebook.Pixel.ViewContentParameters}
 * @record
 * @struct
 */
facebook.Pixel.DPA.ViewContentParameters = function() {};
 /** @type {string} */
facebook.Pixel.DPA.ViewContentParameters.prototype.content_type;
 /** @type {!Array<string>} */
facebook.Pixel.DPA.ViewContentParameters.prototype.content_ids;
/**
 * @extends {facebook.Pixel.AddToCartParameters}
 * @record
 * @struct
 */
facebook.Pixel.DPA.AddToCartParameters = function() {};
 /** @type {string} */
facebook.Pixel.DPA.AddToCartParameters.prototype.content_type;
 /** @type {!Array<string>} */
facebook.Pixel.DPA.AddToCartParameters.prototype.content_ids;
/**
 * @extends {facebook.Pixel.PurchaseParameters}
 * @record
 * @struct
 */
facebook.Pixel.DPA.PurchaseParameters = function() {};
 /** @type {string} */
facebook.Pixel.DPA.PurchaseParameters.prototype.content_type;
 /** @type {!Array<string>} */
facebook.Pixel.DPA.PurchaseParameters.prototype.content_ids;