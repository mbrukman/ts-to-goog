/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-xmpp-core/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ExportDeclaration in  */

/**
 * @constructor
 * @struct
 * @param {?=} opts
 */
function Connection(opts) {}
/** @const */
var SRV = {};

/**
 * returns a lazy iterator which can be restarted via connection.connect()
 * @param {?=} opts
 * @return {?}
 */
SRV.connect = function(opts) {};

/**
 * @constructor
 * @struct
 * @param {string} name
 * @param {?=} attrs
 */
function Stanza(name, attrs) {}
 /** @type {string} */
Stanza.prototype.from;
 /** @type {string} */
Stanza.prototype.to;
 /** @type {string} */
Stanza.prototype.id;
 /** @type {string} */
Stanza.prototype.type;

/**
 * JSX compatible API, use this function as pragma
 * https://facebook.github.io/jsx/
 * Returns a Stanza if name is presence, message or iq an ltx Element otherwise.
 * 
 * @param {string} name
 * @param {?=} attrs
 * @return {!Element}
 */
function createStanza(name, attrs) {}

/**
 * @constructor
 * @struct
 * @param {?=} attrs
 */
function IQ(attrs) {}

/**
 * @constructor
 * @struct
 * @param {?=} attrs
 */
function Message(attrs) {}

/**
 * @constructor
 * @struct
 * @param {?=} attrs
 */
function Presence(attrs) {}

/**
 * @constructor
 * @struct
 * @param {string} local
 * @param {string=} domain
 * @param {string=} resource
 */
function JID(local, domain, resource) {}
 /** @type {string} */
JID.prototype.local;
 /** @type {string} */
JID.prototype.domain;
 /** @type {string} */
JID.prototype.resource;

/**
 * @param {string} jid
 * @return {void}
 */
JID.prototype.parseJID = function(jid) {};

/**
 * @param {?=} unescape
 * @return {string}
 */
JID.prototype.toString = function(unescape) {};

/**
 * Convenience method to distinguish users
 * @return {?}
 */
JID.prototype.bare = function() {};

/**
 * Comparison function
 * @param {?} other
 * @return {boolean}
 */
JID.prototype.equals = function(other) {};

/**
 * http://xmpp.org/rfcs/rfc6122.html#addressing-localpart
 * @param {string} local
 * @param {?=} escape
 * @return {void}
 */
JID.prototype.setLocal = function(local, escape) {};

/**
 * @param {?=} unescape
 * @return {string}
 */
JID.prototype.getLocal = function(unescape) {};

/**
 * http://xmpp.org/rfcs/rfc6122.html#addressing-domain
 * @param {string} value
 * @return {void}
 */
JID.prototype.setDomain = function(value) {};

/**
 * @return {string}
 */
JID.prototype.getDomain = function() {};

/**
 * http://xmpp.org/rfcs/rfc6122.html#addressing-resourcepart
 * @param {string} value
 * @return {void}
 */
JID.prototype.setResource = function(value) {};

/**
 * @return {string}
 */
JID.prototype.getResource = function() {};
