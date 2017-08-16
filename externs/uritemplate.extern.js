/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/uritemplate/index.d.ts:
/** @const */
var uritemplate = {};
/**
 * @record
 * @struct
 */
uritemplate.UriTemplate = function() {};

/**
 * Expands template into a string using parameter
 * supplied
 * @param {!Object} data
 * @return {string}
 */
uritemplate.UriTemplate.prototype.expand = function(data) {};
/**
 * @record
 * @struct
 */
uritemplate.UriTemplateErrorOptions = function() {};
 /** @type {string} */
uritemplate.UriTemplateErrorOptions.prototype.expressionText;
 /** @type {string} */
uritemplate.UriTemplateErrorOptions.prototype.message;
 /** @type {number} */
uritemplate.UriTemplateErrorOptions.prototype.position;
/**
 * @record
 * @struct
 */
uritemplate.UriTemplateError = function() {};

/* TODO: ConstructSignature: uritemplate */
/**
 * @record
 * @struct
 */
uritemplate.UriTemplateStatic = function() {};
 /** @type {function(new: (!uritemplate.UriTemplateError), !uritemplate.UriTemplateErrorOptions): ?} */
uritemplate.UriTemplateStatic.prototype.UriTemplateError;

/**
 * parse template text returning instance of UriTemplate
 * \@example 
 *   import UriTemplate = require('uritemplate');
 *   let template = UriTemplate.parse('http://localhost/query{?name,city}');
 *   let result   = template.expand({name: 'Jayden', city: 'Wodonga'});
 *   // returns http://localhost/query?name=Jayden&city=Wodonga
 * @param {string} templateText
 * @return {!uritemplate.UriTemplate} instance of UriTemplate
 */
uritemplate.UriTemplateStatic.prototype.parse = function(templateText) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "uritemplate"
/** @const */
tsickle_declare_module.uritemplate = {};
 /** @type {!uritemplate.UriTemplateStatic} */
tsickle_declare_module.uritemplate.UriTemplate;