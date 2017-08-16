/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/koa-generic-session/index.d.ts:

/* TODO: ImportDeclaration in  */
/** @const */
var koaSession = {};
/**
 * @record
 * @struct
 */
koaSession.Session = function() {};
 /** @type {?} */
koaSession.Session.prototype.cookie;

/* TODO: IndexSignature: koaSession */
/**
 * @record
 * @struct
 */
koaSession.SessionIdStore = function() {};

/**
 * @return {?}
 */
koaSession.SessionIdStore.prototype.get = function() {};

/**
 * @param {string} sid
 * @param {!koaSession.Session} session
 * @return {void}
 */
koaSession.SessionIdStore.prototype.set = function(sid, session) {};

/**
 * @return {void}
 */
koaSession.SessionIdStore.prototype.reset = function() {};
/**
 * @record
 * @struct
 */
koaSession.SessionStore = function() {};

/* TODO: CallSignature: koaSession */

/**
 * @param {string} sid
 * @return {?}
 */
koaSession.SessionStore.prototype.get = function(sid) {};

/**
 * @param {string} sid
 * @param {!koaSession.Session} session
 * @param {number} ttl
 * @return {void}
 */
koaSession.SessionStore.prototype.set = function(sid, session, ttl) {};

/**
 * @param {string} sid
 * @return {void}
 */
koaSession.SessionStore.prototype.destroy = function(sid) {};
/**
 * @record
 * @struct
 */
koaSession.SessionOptions = function() {};
 /** @type {string} */
koaSession.SessionOptions.prototype.key;
 /** @type {!koaSession.SessionStore} */
koaSession.SessionOptions.prototype.store;
 /** @type {number} */
koaSession.SessionOptions.prototype.ttl;
 /** @type {string} */
koaSession.SessionOptions.prototype.prefix;
 /** @type {{path: string, rewrite: boolean, signed: boolean, maxAge: number, secure: boolean, httpOnly: boolean}} */
koaSession.SessionOptions.prototype.cookie;
 /** @type {boolean} */
koaSession.SessionOptions.prototype.allowEmpty;
 /** @type {boolean} */
koaSession.SessionOptions.prototype.defer;
 /** @type {number} */
koaSession.SessionOptions.prototype.reconnectTimeout;
 /** @type {boolean} */
koaSession.SessionOptions.prototype.rolling;
 /** @type {!koaSession.SessionIdStore} */
koaSession.SessionOptions.prototype.sessionIdStore;

/**
 * @param {number} length
 * @return {string}
 */
koaSession.SessionOptions.prototype.genSid = function(length) {};

/**
 * @param {!Error} error
 * @param {string} type
 * @param {!Application.Context} ctx
 * @return {void}
 */
koaSession.SessionOptions.prototype.errorHandler = function(error, type, ctx) {};

/**
 * @param {!Application.Context} ctx
 * @param {!koaSession.Session} session
 * @return {boolean}
 */
koaSession.SessionOptions.prototype.valid = function(ctx, session) {};

/**
 * @param {!Application.Context} ctx
 * @param {!koaSession.Session} session
 * @return {void}
 */
koaSession.SessionOptions.prototype.beforeSave = function(ctx, session) {};
 /** @type {!koaSession.SessionStore} */
koaSession.MemoryStore;
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "koa"
 /** @type {!koaSession.Session} */
tsickle_declare_module.koa.Context.prototype.session;
 /** @type {boolean} */
tsickle_declare_module.koa.Context.prototype.sessionSave;

/**
 * @return {!Generator}
 */
tsickle_declare_module.koa.Context.prototype.regenerateSession = function() {};

/**
 * @param {!koaSession.SessionOptions} options
 * @return {function(!Application.Context, function(): !Promise<?>): ?}
 */
function koaSession(options) {}

/* TODO: ExportAssignment in  */
