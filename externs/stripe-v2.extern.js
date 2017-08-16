/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/stripe-v2/index.d.ts:
 /** @type {!stripe.StripeStatic} */
var Stripe;
/** @const */
var stripe = {};
/**
 * @record
 * @struct
 */
stripe.StripeStatic = function() {};
 /** @type {!stripe.StripeApplePay} */
stripe.StripeStatic.prototype.applePay;
 /** @type {!stripe.StripeCard} */
stripe.StripeStatic.prototype.card;
 /** @type {!stripe.StripeBankAccount} */
stripe.StripeStatic.prototype.bankAccount;

/**
 * @param {string} key
 * @return {void}
 */
stripe.StripeStatic.prototype.setPublishableKey = function(key) {};

/**
 * @param {string} cardNumber
 * @return {boolean}
 */
stripe.StripeStatic.prototype.validateCardNumber = function(cardNumber) {};

/**
 * @param {string} month
 * @param {string} year
 * @return {boolean}
 */
stripe.StripeStatic.prototype.validateExpiry = function(month, year) {};

/**
 * @param {string} cardCVC
 * @return {boolean}
 */
stripe.StripeStatic.prototype.validateCVC = function(cardCVC) {};

/**
 * @param {string} cardNumber
 * @return {string}
 */
stripe.StripeStatic.prototype.cardType = function(cardNumber) {};

/**
 * @param {string} token
 * @param {function(number, !stripe.StripeCardTokenResponse): void} responseHandler
 * @return {void}
 */
stripe.StripeStatic.prototype.getToken = function(token, responseHandler) {};

/**
 * @param {!stripe.StripeCardTokenData} data
 * @param {function(number, !stripe.StripeCardTokenResponse): void} responseHandler
 * @return {void}
 */
stripe.StripeStatic.prototype.createToken = function(data, responseHandler) {};
/**
 * @record
 * @struct
 */
stripe.StripeCardTokenData = function() {};
 /** @type {string} */
stripe.StripeCardTokenData.prototype.number;
 /** @type {number} */
stripe.StripeCardTokenData.prototype.exp_month;
 /** @type {number} */
stripe.StripeCardTokenData.prototype.exp_year;
 /** @type {string} */
stripe.StripeCardTokenData.prototype.exp;
 /** @type {string} */
stripe.StripeCardTokenData.prototype.cvc;
 /** @type {string} */
stripe.StripeCardTokenData.prototype.name;
 /** @type {string} */
stripe.StripeCardTokenData.prototype.address_line1;
 /** @type {string} */
stripe.StripeCardTokenData.prototype.address_line2;
 /** @type {string} */
stripe.StripeCardTokenData.prototype.address_city;
 /** @type {string} */
stripe.StripeCardTokenData.prototype.address_state;
 /** @type {string} */
stripe.StripeCardTokenData.prototype.address_zip;
 /** @type {string} */
stripe.StripeCardTokenData.prototype.address_country;
/**
 * @record
 * @struct
 */
stripe.StripeTokenResponse = function() {};
 /** @type {string} */
stripe.StripeTokenResponse.prototype.id;
 /** @type {string} */
stripe.StripeTokenResponse.prototype.client_ip;
 /** @type {number} */
stripe.StripeTokenResponse.prototype.created;
 /** @type {boolean} */
stripe.StripeTokenResponse.prototype.livemode;
 /** @type {string} */
stripe.StripeTokenResponse.prototype.object;
 /** @type {string} */
stripe.StripeTokenResponse.prototype.type;
 /** @type {boolean} */
stripe.StripeTokenResponse.prototype.used;
 /** @type {!stripe.StripeError} */
stripe.StripeTokenResponse.prototype.error;
/**
 * @extends {stripe.StripeTokenResponse}
 * @record
 * @struct
 */
stripe.StripeCardTokenResponse = function() {};
 /** @type {!stripe.StripeCard} */
stripe.StripeCardTokenResponse.prototype.card;
/**
 * @record
 * @struct
 */
stripe.StripeError = function() {};
 /** @type {string} */
stripe.StripeError.prototype.type;
 /** @type {string} */
stripe.StripeError.prototype.code;
 /** @type {string} */
stripe.StripeError.prototype.message;
 /** @type {string} */
stripe.StripeError.prototype.param;

/** @typedef {string} */
stripe.StripeCardDataBrand;

/** @typedef {string} */
stripe.StripeCardDataFunding;
/**
 * @record
 * @struct
 */
stripe.StripeCard = function() {};
 /** @type {string} */
stripe.StripeCard.prototype.object;
 /** @type {string} */
stripe.StripeCard.prototype.last4;
 /** @type {number} */
stripe.StripeCard.prototype.exp_month;
 /** @type {number} */
stripe.StripeCard.prototype.exp_year;
 /** @type {string} */
stripe.StripeCard.prototype.country;
 /** @type {string} */
stripe.StripeCard.prototype.name;
 /** @type {string} */
stripe.StripeCard.prototype.address_line1;
 /** @type {string} */
stripe.StripeCard.prototype.address_line2;
 /** @type {string} */
stripe.StripeCard.prototype.address_city;
 /** @type {string} */
stripe.StripeCard.prototype.address_state;
 /** @type {string} */
stripe.StripeCard.prototype.address_zip;
 /** @type {string} */
stripe.StripeCard.prototype.address_country;
 /** @type {string} */
stripe.StripeCard.prototype.brand;
 /** @type {string} */
stripe.StripeCard.prototype.funding;

/**
 * @param {!stripe.StripeCardTokenData} data
 * @param {function(number, !stripe.StripeCardTokenResponse): void} responseHandler
 * @return {void}
 */
stripe.StripeCard.prototype.createToken = function(data, responseHandler) {};

/**
 * @param {string} cardNumber
 * @return {boolean}
 */
stripe.StripeCard.prototype.validateCardNumber = function(cardNumber) {};

/**
 * @param {string} month
 * @param {string} year
 * @return {boolean}
 */
stripe.StripeCard.prototype.validateExpiry = function(month, year) {};

/**
 * @param {string} cardCVC
 * @return {boolean}
 */
stripe.StripeCard.prototype.validateCVC = function(cardCVC) {};
/**
 * @record
 * @struct
 */
stripe.StripeBankAccount = function() {};

/**
 * @param {!stripe.StripeBankTokenParams} params
 * @param {function(number, !stripe.StripeBankTokenResponse): void} stripeResponseHandler
 * @return {void}
 */
stripe.StripeBankAccount.prototype.createToken = function(params, stripeResponseHandler) {};

/**
 * @param {(string|number)} routingNumber
 * @param {string} countryCode
 * @return {boolean}
 */
stripe.StripeBankAccount.prototype.validateRoutingNumber = function(routingNumber, countryCode) {};

/**
 * @param {(string|number)} accountNumber
 * @param {string} countryCode
 * @return {boolean}
 */
stripe.StripeBankAccount.prototype.validateAccountNumber = function(accountNumber, countryCode) {};
/**
 * @record
 * @struct
 */
stripe.StripeBankTokenParams = function() {};
 /** @type {string} */
stripe.StripeBankTokenParams.prototype.country;
 /** @type {string} */
stripe.StripeBankTokenParams.prototype.currency;
 /** @type {(string|number)} */
stripe.StripeBankTokenParams.prototype.account_number;
 /** @type {(string|number)} */
stripe.StripeBankTokenParams.prototype.routing_number;
 /** @type {string} */
stripe.StripeBankTokenParams.prototype.account_holder_name;
 /** @type {string} */
stripe.StripeBankTokenParams.prototype.account_holder_type;
/**
 * @extends {stripe.StripeTokenResponse}
 * @record
 * @struct
 */
stripe.StripeBankTokenResponse = function() {};
 /** @type {{country: string, bank_name: string, last4: number, validated: boolean, object: string}} */
stripe.StripeBankTokenResponse.prototype.bank_account;
/**
 * @record
 * @struct
 */
stripe.StripeApplePay = function() {};

/**
 * @param {function(boolean): void} resopnseHandler
 * @return {void}
 */
stripe.StripeApplePay.prototype.checkAvailability = function(resopnseHandler) {};

/**
 * @param {!stripe.StripeApplePayPaymentRequest} data
 * @param {function(!stripe.StripeApplePaySessionResult, function(?): void): void} onSuccessHandler
 * @param {function({message: string}): void} onErrorHanlder
 * @return {?}
 */
stripe.StripeApplePay.prototype.buildSession = function(data, onSuccessHandler, onErrorHanlder) {};

/** @typedef {string} */
stripe.StripeApplePayBillingContactField;

/** @typedef {string} */
stripe.StripeApplePayShippingContactField;

/** @typedef {string} */
stripe.StripeApplePayShipping;
/**
 * @record
 * @struct
 */
stripe.StripeApplePayPaymentRequest = function() {};
 /** @type {!stripe.StripeApplePayPaymentContact} */
stripe.StripeApplePayPaymentRequest.prototype.billingContact;
 /** @type {string} */
stripe.StripeApplePayPaymentRequest.prototype.countryCode;
 /** @type {string} */
stripe.StripeApplePayPaymentRequest.prototype.currencyCode;
 /** @type {!stripe.StripeApplePayLineItem} */
stripe.StripeApplePayPaymentRequest.prototype.total;
 /** @type {!Array<!stripe.StripeApplePayLineItem>} */
stripe.StripeApplePayPaymentRequest.prototype.lineItems;
 /** @type {!Array<string>} */
stripe.StripeApplePayPaymentRequest.prototype.requiredBillingContactFields;
 /** @type {!Array<string>} */
stripe.StripeApplePayPaymentRequest.prototype.requiredShippingContactFields;
 /** @type {!stripe.StripeApplePayPaymentContact} */
stripe.StripeApplePayPaymentRequest.prototype.shippingContact;
 /** @type {!Array<!stripe.StripeApplePayShippingMethod>} */
stripe.StripeApplePayPaymentRequest.prototype.shippingMethods;
 /** @type {!Array<string>} */
stripe.StripeApplePayPaymentRequest.prototype.shippingType;
/**
 * @record
 * @struct
 */
stripe.StripeApplePayLineItem = function() {};
 /** @type {string} */
stripe.StripeApplePayLineItem.prototype.type;
 /** @type {string} */
stripe.StripeApplePayLineItem.prototype.label;
 /** @type {number} */
stripe.StripeApplePayLineItem.prototype.amount;
/**
 * @record
 * @struct
 */
stripe.StripeApplePaySessionResult = function() {};
 /** @type {!stripe.StripeCardTokenResponse} */
stripe.StripeApplePaySessionResult.prototype.token;
 /** @type {!stripe.StripeApplePayPaymentContact} */
stripe.StripeApplePaySessionResult.prototype.shippingContact;
 /** @type {!stripe.StripeApplePayShippingMethod} */
stripe.StripeApplePaySessionResult.prototype.shippingMethod;
/**
 * @record
 * @struct
 */
stripe.StripeApplePayShippingMethod = function() {};
 /** @type {string} */
stripe.StripeApplePayShippingMethod.prototype.label;
 /** @type {string} */
stripe.StripeApplePayShippingMethod.prototype.detail;
 /** @type {number} */
stripe.StripeApplePayShippingMethod.prototype.amount;
 /** @type {string} */
stripe.StripeApplePayShippingMethod.prototype.identifier;
/**
 * @record
 * @struct
 */
stripe.StripeApplePayPaymentContact = function() {};
 /** @type {string} */
stripe.StripeApplePayPaymentContact.prototype.emailAddress;
 /** @type {string} */
stripe.StripeApplePayPaymentContact.prototype.phoneNumber;
 /** @type {string} */
stripe.StripeApplePayPaymentContact.prototype.givenName;
 /** @type {string} */
stripe.StripeApplePayPaymentContact.prototype.familyName;
 /** @type {!Array<string>} */
stripe.StripeApplePayPaymentContact.prototype.addressLines;
 /** @type {string} */
stripe.StripeApplePayPaymentContact.prototype.locality;
 /** @type {string} */
stripe.StripeApplePayPaymentContact.prototype.administrativeArea;
 /** @type {string} */
stripe.StripeApplePayPaymentContact.prototype.postalCode;
 /** @type {string} */
stripe.StripeApplePayPaymentContact.prototype.countryCode;