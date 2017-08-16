/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/iso-3166-2/index.d.ts:

/** @typedef {(!Object|?)} */
var InfoOrEmptyRecord;
/** @const */
var CountryInfo = {};
/**
 * @record
 * @struct
 */
CountryInfo.Partial = function() {};
 /** @type {string} */
CountryInfo.Partial.prototype.name;
 /** @type {?} */
CountryInfo.Partial.prototype.sub;
/**
 * @extends {CountryInfo.Partial}
 * @record
 * @struct
 */
CountryInfo.Full = function() {};
 /** @type {string} */
CountryInfo.Full.prototype.code;
/**
 * @record
 * @struct
 */
CountryInfo.Map = function() {};

/* TODO: IndexSignature: CountryInfo */

/** @typedef {?} */
var CountryInfo;
/** @const */
var SubdivisionInfo = {};
/**
 * @record
 * @struct
 */
SubdivisionInfo.Partial = function() {};
 /** @type {string} */
SubdivisionInfo.Partial.prototype.type;
 /** @type {string} */
SubdivisionInfo.Partial.prototype.name;
/**
 * @extends {SubdivisionInfo.Partial}
 * @record
 * @struct
 */
SubdivisionInfo.Full = function() {};
 /** @type {string} */
SubdivisionInfo.Full.prototype.countryName;
 /** @type {string} */
SubdivisionInfo.Full.prototype.countryCode;
 /** @type {string} */
SubdivisionInfo.Full.prototype.code;
 /** @type {string} */
SubdivisionInfo.Full.prototype.regionCode;
/**
 * @record
 * @struct
 */
SubdivisionInfo.Map = function() {};

/* TODO: IndexSignature: SubdivisionInfo */

/** @typedef {?} */
var SubdivisionInfo;

/**
 * @param {string} countryCodeOrFullSubdivisionCode
 * @param {string=} subdivisionCodeOrName
 * @return {(!Object|?)}
 */
function subdivision(countryCodeOrFullSubdivisionCode, subdivisionCodeOrName) {}

/**
 * @param {string} countryCodeOrName
 * @return {(!Object|?)}
 */
function country(countryCodeOrName) {}
 /** @type {?} */
var data;
 /** @type {?} */
var codes;
