/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/sax/index.d.ts:
 /** @type {!Array<string>} */
var EVENTS;
/**
 * @record
 * @struct
 */
function SAXOptions() {}
 /** @type {boolean} */
SAXOptions.prototype.trim;
 /** @type {boolean} */
SAXOptions.prototype.normalize;
 /** @type {boolean} */
SAXOptions.prototype.lowercase;
 /** @type {boolean} */
SAXOptions.prototype.xmlns;
 /** @type {boolean} */
SAXOptions.prototype.noscript;
 /** @type {boolean} */
SAXOptions.prototype.position;
/**
 * @record
 * @struct
 */
function QualifiedName() {}
 /** @type {string} */
QualifiedName.prototype.name;
 /** @type {string} */
QualifiedName.prototype.prefix;
 /** @type {string} */
QualifiedName.prototype.local;
 /** @type {string} */
QualifiedName.prototype.uri;
/**
 * @extends {QualifiedName}
 * @record
 * @struct
 */
function QualifiedAttribute() {}
 /** @type {string} */
QualifiedAttribute.prototype.value;
/**
 * @record
 * @struct
 */
function BaseTag() {}
 /** @type {string} */
BaseTag.prototype.name;
 /** @type {boolean} */
BaseTag.prototype.isSelfClosing;
/**
 * @extends {QualifiedName}
 * @extends {BaseTag}
 * @record
 * @struct
 */
function QualifiedTag() {}
 /** @type {?} */
QualifiedTag.prototype.ns;
 /** @type {?} */
QualifiedTag.prototype.attributes;
/**
 * @extends {BaseTag}
 * @record
 * @struct
 */
function Tag() {}
 /** @type {?} */
Tag.prototype.attributes;

/**
 * @param {boolean} strict
 * @param {?} opt
 * @return {!SAXParser}
 */
function parser(strict, opt) {}

/**
 * @constructor
 * @struct
 * @param {boolean} strict
 * @param {?} opt
 */
function SAXParser(strict, opt) {}
 /** @type {number} */
SAXParser.prototype.line;
 /** @type {number} */
SAXParser.prototype.column;
 /** @type {!Error} */
SAXParser.prototype.error;
 /** @type {number} */
SAXParser.prototype.position;
 /** @type {number} */
SAXParser.prototype.startTagPosition;
 /** @type {boolean} */
SAXParser.prototype.closed;
 /** @type {boolean} */
SAXParser.prototype.strict;
 /** @type {?} */
SAXParser.prototype.opt;
 /** @type {string} */
SAXParser.prototype.tag;
 /** @type {!Object<string,string>} */
SAXParser.prototype.ENTITIES;

/**
 * @return {void}
 */
SAXParser.prototype.end = function() {};

/**
 * @param {string} s
 * @return {!SAXParser}
 */
SAXParser.prototype.write = function(s) {};

/**
 * @return {!SAXParser}
 */
SAXParser.prototype.resume = function() {};

/**
 * @return {!SAXParser}
 */
SAXParser.prototype.close = function() {};

/**
 * @return {void}
 */
SAXParser.prototype.flush = function() {};

/**
 * @param {!Error} e
 * @return {void}
 */
SAXParser.prototype.onerror = function(e) {};

/**
 * @param {string} t
 * @return {void}
 */
SAXParser.prototype.ontext = function(t) {};

/**
 * @param {string} doctype
 * @return {void}
 */
SAXParser.prototype.ondoctype = function(doctype) {};

/**
 * @param {{name: string, body: string}} node
 * @return {void}
 */
SAXParser.prototype.onprocessinginstruction = function(node) {};

/**
 * @param {?} tag
 * @return {void}
 */
SAXParser.prototype.onopentag = function(tag) {};

/**
 * @param {string} tagName
 * @return {void}
 */
SAXParser.prototype.onclosetag = function(tagName) {};

/**
 * @param {{name: string, value: string}} attr
 * @return {void}
 */
SAXParser.prototype.onattribute = function(attr) {};

/**
 * @param {string} comment
 * @return {void}
 */
SAXParser.prototype.oncomment = function(comment) {};

/**
 * @return {void}
 */
SAXParser.prototype.onopencdata = function() {};

/**
 * @param {string} cdata
 * @return {void}
 */
SAXParser.prototype.oncdata = function(cdata) {};

/**
 * @return {void}
 */
SAXParser.prototype.onclosecdata = function() {};

/**
 * @param {{prefix: string, uri: string}} ns
 * @return {void}
 */
SAXParser.prototype.onopennamespace = function(ns) {};

/**
 * @param {{prefix: string, uri: string}} ns
 * @return {void}
 */
SAXParser.prototype.onclosenamespace = function(ns) {};

/**
 * @return {void}
 */
SAXParser.prototype.onend = function() {};

/**
 * @return {void}
 */
SAXParser.prototype.onready = function() {};

/**
 * @param {string} script
 * @return {void}
 */
SAXParser.prototype.onscript = function(script) {};

/* TODO: ImportEqualsDeclaration in  */

/**
 * @param {boolean} strict
 * @param {?} opt
 * @return {!SAXStream}
 */
function createStream(strict, opt) {}

/**
 * @constructor
 * @struct
 * @param {boolean} strict
 * @param {?} opt
 */
function SAXStream(strict, opt) {}
 /** @type {!SAXParser} */
SAXStream.prototype._parser;
