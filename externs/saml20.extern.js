/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/saml20/index.d.ts:
/**
 * @record
 * @struct
 */
function Profile() {}
 /** @type {string} */
Profile.prototype.issuer;
 /** @type {?} */
Profile.prototype.claims;
 /** @type {string} */
Profile.prototype.audience;
 /** @type {string} */
Profile.prototype.sessionIndex;

/** @typedef {?} */
var ValidationOptions;
/**
 * @record
 * @struct
 */
function ValidationOptionsWithKey() {}
 /** @type {string} */
ValidationOptionsWithKey.prototype.publicKey;
 /** @type {boolean} */
ValidationOptionsWithKey.prototype.bypassExpiration;
 /** @type {?} */
ValidationOptionsWithKey.prototype.audience;
/**
 * @record
 * @struct
 */
function ValidationOptionsWithPrint() {}
 /** @type {string} */
ValidationOptionsWithPrint.prototype.thumbprint;
 /** @type {boolean} */
ValidationOptionsWithPrint.prototype.bypassExpiration;
 /** @type {?} */
ValidationOptionsWithPrint.prototype.audience;

/** @typedef {?} */
var ParseCallback;

/**
 * @param {string} rawAssertion
 * @param {?} cb
 * @return {void}
 */
function parse(rawAssertion, cb) {}

/**
 * @param {string} rawAssertion
 * @param {?} options
 * @param {?} cb
 * @return {void}
 */
function validate(rawAssertion, options, cb) {}
