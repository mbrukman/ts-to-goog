/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/mailcheck/index.d.ts:
 /** @type {!MailcheckModule.Static} */
var Mailcheck;
/** @const */
var MailcheckModule = {};
/**
 * @record
 * @struct
 */
MailcheckModule.IDistanceFunction = function() {};

/* TODO: CallSignature: MailcheckModule */
/**
 * @record
 * @struct
 */
MailcheckModule.ISuggestFunction = function() {};

/* TODO: CallSignature: MailcheckModule */
/**
 * @record
 * @struct
 */
MailcheckModule.IJQuerySuggested = function() {};

/* TODO: CallSignature: MailcheckModule */
/**
 * @record
 * @struct
 */
MailcheckModule.IJQueryEmpty = function() {};

/* TODO: CallSignature: MailcheckModule */
/**
 * @record
 * @struct
 */
MailcheckModule.IEmpty = function() {};

/* TODO: CallSignature: MailcheckModule */
/**
 * @record
 * @struct
 */
MailcheckModule.ISuggested = function() {};

/* TODO: CallSignature: MailcheckModule */
/**
 * @record
 * @struct
 */
MailcheckModule.ISplitEmail = function() {};
 /** @type {string} */
MailcheckModule.ISplitEmail.prototype.topLevelDomain;
 /** @type {string} */
MailcheckModule.ISplitEmail.prototype.domain;
 /** @type {string} */
MailcheckModule.ISplitEmail.prototype.address;
/**
 * @record
 * @struct
 */
MailcheckModule.ISuggestion = function() {};
 /** @type {string} */
MailcheckModule.ISuggestion.prototype.address;
 /** @type {string} */
MailcheckModule.ISuggestion.prototype.domain;
 /** @type {string} */
MailcheckModule.ISuggestion.prototype.full;
/**
 * @record
 * @struct
 */
MailcheckModule.IOptions = function() {};
 /** @type {string} */
MailcheckModule.IOptions.prototype.email;
 /** @type {!Array<string>} */
MailcheckModule.IOptions.prototype.domains;
 /** @type {!Array<string>} */
MailcheckModule.IOptions.prototype.secondLevelDomains;
 /** @type {!Array<string>} */
MailcheckModule.IOptions.prototype.topLevelDomains;
 /** @type {!MailcheckModule.IDistanceFunction} */
MailcheckModule.IOptions.prototype.distanceFunction;
 /** @type {(!MailcheckModule.ISuggested|!MailcheckModule.IJQuerySuggested)} */
MailcheckModule.IOptions.prototype.suggested;
 /** @type {(!MailcheckModule.IEmpty|!MailcheckModule.IJQueryEmpty)} */
MailcheckModule.IOptions.prototype.empty;
/**
 * @record
 * @struct
 */
MailcheckModule.Static = function() {};
 /** @type {!Array<string>} */
MailcheckModule.Static.prototype.defaultDomains;
 /** @type {!Array<string>} */
MailcheckModule.Static.prototype.defaultSecondLevelDomains;
 /** @type {!Array<string>} */
MailcheckModule.Static.prototype.defaultTopLevelDomains;
 /** @type {number} */
MailcheckModule.Static.prototype.domainThreshold;
 /** @type {number} */
MailcheckModule.Static.prototype.topLevelThreshold;
 /** @type {!MailcheckModule.ISuggestFunction} */
MailcheckModule.Static.prototype.suggest;

/**
 * @param {!MailcheckModule.IOptions} opts
 * @return {void}
 */
MailcheckModule.Static.prototype.run = function(opts) {};

/**
 * @param {string} email
 * @return {string}
 */
MailcheckModule.Static.prototype.encodeEmail = function(email) {};

/**
 * @param {string} email
 * @return {!MailcheckModule.ISplitEmail}
 */
MailcheckModule.Static.prototype.splitEmail = function(email) {};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
MailcheckModule.Static.prototype.sift3Distance = function(s1, s2) {};

/**
 * @param {string} domain
 * @param {!Array<string>} domains
 * @param {!MailcheckModule.IDistanceFunction=} distanceFunction
 * @param {number=} threshold
 * @return {(string|boolean)}
 */
MailcheckModule.Static.prototype.findClosestDomain = function(domain, domains, distanceFunction, threshold) {};

/**
 * @param {!MailcheckModule.IOptions} opts
 * @return {void}
 */
JQuery.prototype.mailcheck = function(opts) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "mailcheck"
/** @const */
tsickle_declare_module.mailcheck = {};

/* TODO: ExportAssignment in tsickle_declare_module.mailcheck */
