/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/connect-mongo/index.d.ts:

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/**
 * @param {function(!session.SessionOptions): !e.RequestHandler} connect
 * @return {!connectMongo.MongoStoreFactory}
 */
function connectMongo(connect) {}
/**
 * @record
 * @struct
 */
connectMongo.DefaultOptions = function() {};
 /** @type {string} */
connectMongo.DefaultOptions.prototype.host;
 /** @type {string} */
connectMongo.DefaultOptions.prototype.port;
 /** @type {boolean} */
connectMongo.DefaultOptions.prototype.autoReconnect;
 /** @type {boolean} */
connectMongo.DefaultOptions.prototype.ssl;
 /** @type {number} */
connectMongo.DefaultOptions.prototype.w;
 /** @type {string} */
connectMongo.DefaultOptions.prototype.collection;
 /** @type {boolean} */
connectMongo.DefaultOptions.prototype.stringify;
 /** @type {boolean} */
connectMongo.DefaultOptions.prototype.hash;
 /** @type {number} */
connectMongo.DefaultOptions.prototype.ttl;
 /** @type {string} */
connectMongo.DefaultOptions.prototype.autoRemove;
 /** @type {number} */
connectMongo.DefaultOptions.prototype.autoRemoveInterval;
 /** @type {number} */
connectMongo.DefaultOptions.prototype.touchAfter;
/**
 * @extends {connectMongo.DefaultOptions}
 * @record
 * @struct
 */
connectMongo.MongoUrlOptions = function() {};
 /** @type {string} */
connectMongo.MongoUrlOptions.prototype.url;
 /** @type {!ConnectionOptions} */
connectMongo.MongoUrlOptions.prototype.mongoOptions;
/**
 * @extends {connectMongo.DefaultOptions}
 * @record
 * @struct
 */
connectMongo.MogooseConnectionOptions = function() {};
 /** @type {!Connection} */
connectMongo.MogooseConnectionOptions.prototype.mongooseConnection;
/**
 * @extends {connectMongo.DefaultOptions}
 * @record
 * @struct
 */
connectMongo.NaitiveMongoOptions = function() {};
 /** @type {?} */
connectMongo.NaitiveMongoOptions.prototype.db;
/**
 * @record
 * @struct
 */
connectMongo.MongoStoreFactory = function() {};

/* TODO: ConstructSignature: connectMongo */

/* TODO: ConstructSignature: connectMongo */

/* TODO: ConstructSignature: connectMongo */
/**
 * @extends {session.Store}
 * @constructor
 * @struct
 */
connectMongo.MongoStore = function() {};
 /** @type {function(string, function(?, !Express.Session): void): void} */
connectMongo.MongoStore.prototype.get;
 /** @type {function(string, !Express.Session, function(?): void): void} */
connectMongo.MongoStore.prototype.set;
 /** @type {function(string, function(?): void): void} */
connectMongo.MongoStore.prototype.destroy;
 /** @type {function(function(?, number): void): void} */
connectMongo.MongoStore.prototype.length;
 /** @type {function(function(?): void): void} */
connectMongo.MongoStore.prototype.clear;
 /** @type {function(string, !Express.Session, function(?): void): void} */
connectMongo.MongoStore.prototype.touch;

/* TODO: ExportAssignment in  */
