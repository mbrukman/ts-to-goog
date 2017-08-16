/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/realm/index.d.ts:
/** @const */
var Realm = {};

/** @typedef {string} */
Realm.PropertyType;
/**
 * @record
 * @struct
 */
Realm.ObjectSchemaProperty = function() {};
 /** @type {string} */
Realm.ObjectSchemaProperty.prototype.type;
 /** @type {string} */
Realm.ObjectSchemaProperty.prototype.objectType;
 /** @type {?} */
Realm.ObjectSchemaProperty.prototype.default;
 /** @type {boolean} */
Realm.ObjectSchemaProperty.prototype.optional;
 /** @type {boolean} */
Realm.ObjectSchemaProperty.prototype.indexed;
/**
 * @record
 * @struct
 */
Realm.PropertiesTypes = function() {};

/* TODO: IndexSignature: Realm */
/**
 * @record
 * @struct
 */
Realm.ObjectSchema = function() {};
 /** @type {string} */
Realm.ObjectSchema.prototype.name;
 /** @type {string} */
Realm.ObjectSchema.prototype.primaryKey;
 /** @type {!Realm.PropertiesTypes} */
Realm.ObjectSchema.prototype.properties;
/**
 * @record
 * @struct
 */
Realm.ObjectClass = function() {};
 /** @type {!Realm.ObjectSchema} */
Realm.ObjectClass.prototype.schema;
/**
 * @record
 * @struct
 */
Realm.ObjectType = function() {};
 /** @type {!Realm.ObjectClass} */
Realm.ObjectType.prototype.type;
/**
 * @record
 * @struct
 */
Realm.SyncConfiguration = function() {};
 /** @type {!Realm.User} */
Realm.SyncConfiguration.prototype.user;
 /** @type {string} */
Realm.SyncConfiguration.prototype.url;
/**
 * @record
 * @struct
 */
Realm.Configuration = function() {};
 /** @type {?} */
Realm.Configuration.prototype.encryptionKey;
 /** @type {?} */
Realm.Configuration.prototype.migration;
 /** @type {string} */
Realm.Configuration.prototype.path;
 /** @type {boolean} */
Realm.Configuration.prototype.readOnly;
 /** @type {(!Array<!Realm.ObjectClass>|!Array<!Realm.ObjectSchema>)} */
Realm.Configuration.prototype.schema;
 /** @type {number} */
Realm.Configuration.prototype.schemaVersion;
 /** @type {!Realm.SyncConfiguration} */
Realm.Configuration.prototype.sync;
/**
 * @record
 * @struct
 */
Realm.ObjectPropsType = function() {};

/* TODO: IndexSignature: Realm */

/** @typedef {(string|!Array<?>)} */
Realm.SortDescriptor;
/**
 * @record
 * @struct
 */
Realm.IteratorResult = function() {};
 /** @type {boolean} */
Realm.IteratorResult.prototype.done;
 /** @type {T} */
Realm.IteratorResult.prototype.value;
/**
 * @record
 * @struct
 */
Realm.Iterator = function() {};

/**
 * @param {boolean} done
 * @param {?=} value
 * @return {!Realm.IteratorResult<T>}
 */
Realm.Iterator.prototype.next = function(done, value) {};

/**
 * @return {?}
 */
Realm.Iterator.prototype[Symbol.iterator] = function() {};
/**
 * @record
 * @struct
 */
Realm.Collection = function() {};
 /** @type {number} */
Realm.Collection.prototype.length;

/**
 * @return {boolean} boolean
 */
Realm.Collection.prototype.isValid = function() {};

/**
 * @param {string} query
 * @param {...?} arg
 * @return {!Realm.Collection} Results
 */
Realm.Collection.prototype.filtered = function(query, arg) {};

/**
 * @param {(string|!Array<?>)} descriptor
 * @param {boolean=} reverse
 * @return {!Realm.Collection} Results
 */
Realm.Collection.prototype.sorted = function(descriptor, reverse) {};

/**
 * @return {!Realm.Iterator<T>} Iterator
 */
Realm.Collection.prototype[Symbol.iterator] = function() {};

/**
 * @return {!Realm.Collection} Results
 */
Realm.Collection.prototype.snapshot = function() {};

/**
 * @return {!Realm.Iterator<?>} Iterator<any>
 */
Realm.Collection.prototype.entries = function() {};

/**
 * @return {!Realm.Iterator<?>} Iterator<any>
 */
Realm.Collection.prototype.keys = function() {};

/**
 * @return {!Realm.Iterator<?>} Iterator<any>
 */
Realm.Collection.prototype.values = function() {};

/**
 * @param {!Array<string>=} separator
 * @return {string} string
 */
Realm.Collection.prototype.join = function(separator) {};

/**
 * @param {number=} start
 * @param {number=} end
 * @return {!Array<T>} T
 */
Realm.Collection.prototype.slice = function(start, end) {};

/**
 * @param {function(?, ?, ?): void} callback
 * @param {?=} thisArg
 * @return {T} T
 */
Realm.Collection.prototype.find = function(callback, thisArg) {};

/**
 * @param {function(?, number, ?): void} callback
 * @param {?=} thisArg
 * @return {number} number
 */
Realm.Collection.prototype.findIndex = function(callback, thisArg) {};

/**
 * @param {function(T, number, ?): void} callback
 * @param {?=} thisArg
 * @return {void} void
 */
Realm.Collection.prototype.forEach = function(callback, thisArg) {};

/**
 * @param {function(T, number, ?): void} callback
 * @param {?=} thisArg
 * @return {boolean} boolean
 */
Realm.Collection.prototype.every = function(callback, thisArg) {};

/**
 * @param {function(T, number, ?): void} callback
 * @param {?=} thisArg
 * @return {boolean} boolean
 */
Realm.Collection.prototype.some = function(callback, thisArg) {};

/**
 * @param {function(T, number, ?): void} callback
 * @param {?=} thisArg
 * @return {!Array<?>} any
 */
Realm.Collection.prototype.map = function(callback, thisArg) {};

/**
 * @param {function(T, T, number, ?): void} callback
 * @param {?=} initialValue
 * @return {?} any
 */
Realm.Collection.prototype.reduce = function(callback, initialValue) {};

/**
 * @param {function(T, T, ?, ?): void} callback
 * @param {?=} initialValue
 * @return {?} any
 */
Realm.Collection.prototype.reduceRight = function(callback, initialValue) {};

/**
 * @param {function(?, ?): void} callback
 * @return {void} void
 */
Realm.Collection.prototype.addListener = function(callback) {};

/**
 * @return {void} void
 */
Realm.Collection.prototype.removeAllListeners = function() {};

/**
 * @param {function(): void} callback
 * @return {void} void
 */
Realm.Collection.prototype.removeListener = function(callback) {};
/**
 * @record
 * @struct
 */
Realm.Object = function() {};

/**
 * @return {boolean} boolean
 */
Realm.Object.prototype.isValid = function() {};
/**
 * @extends {Realm.Collection}
 * @record
 * @struct
 */
Realm.List = function() {};

/**
 * @return {T} T
 */
Realm.List.prototype.pop = function() {};

/**
 * @param {T} object
 * @return {number} number
 */
Realm.List.prototype.push = function(object) {};

/**
 * @return {T} T
 */
Realm.List.prototype.shift = function() {};

/**
 * @param {number} index
 * @param {number=} count
 * @param {?=} object
 * @return {!Array<T>} T
 */
Realm.List.prototype.splice = function(index, count, object) {};

/**
 * @param {T} object
 * @return {number} number
 */
Realm.List.prototype.unshift = function(object) {};

/** @typedef {!Realm.Collection<T>} */
Realm.Results;
/**
 * @record
 * @struct
 */
Realm.User = function() {};
 /** @type {?} */
Realm.User.prototype.all;
 /** @type {!Realm.User} */
Realm.User.prototype.current;
 /** @type {string} */
Realm.User.prototype.identity;
 /** @type {boolean} */
Realm.User.prototype.isAdmin;
 /** @type {string} */
Realm.User.prototype.server;
 /** @type {string} */
Realm.User.prototype.token;

/**
 * @param {string} adminToken
 * @return {!Realm.User}
 */
Realm.User.prototype.adminUser = function(adminToken) {};

/**
 * @param {string} server
 * @param {string} username
 * @param {string} password
 * @param {function(?, ?): void} callback
 * @return {void}
 */
Realm.User.prototype.login = function(server, username, password, callback) {};

/**
 * @param {string} server
 * @param {string} provider
 * @param {string} providerToken
 * @param {function(?, ?): void} callback
 * @return {void}
 */
Realm.User.prototype.loginWithProvider = function(server, provider, providerToken, callback) {};

/**
 * @param {string} server
 * @param {string} username
 * @param {string} password
 * @param {function(?, ?): void} callback
 * @return {void}
 */
Realm.User.prototype.register = function(server, username, password, callback) {};

/**
 * @param {string} server
 * @param {string} provider
 * @param {string} providerToken
 * @param {function(?, ?): void} callback
 * @return {void}
 */
Realm.User.prototype.registerWithProvider = function(server, provider, providerToken, callback) {};

/**
 * @return {void}
 */
Realm.User.prototype.logout = function() {};

/**
 * @return {!Realm}
 */
Realm.User.prototype.openManagementRealm = function() {};
/**
 * @record
 * @struct
 */
Realm.Session = function() {};
 /** @type {?} */
Realm.Session.prototype.config;
 /** @type {string} */
Realm.Session.prototype.state;
 /** @type {string} */
Realm.Session.prototype.url;
 /** @type {!Realm.User} */
Realm.Session.prototype.user;
/**
 * @record
 * @struct
 */
Realm.AuthError = function() {};
 /** @type {number} */
Realm.AuthError.prototype.code;
 /** @type {string} */
Realm.AuthError.prototype.type;
/**
 * @record
 * @struct
 */
Realm.ChangeEvent = function() {};
 /** @type {?} */
Realm.ChangeEvent.prototype.changes;
 /** @type {!Realm} */
Realm.ChangeEvent.prototype.oldRealm;
 /** @type {string} */
Realm.ChangeEvent.prototype.path;
 /** @type {!Realm} */
Realm.ChangeEvent.prototype.realm;

/** @typedef {string} */
Realm.LogLevelType;
/**
 * @record
 * @struct
 */
Realm.Sync = function() {};
 /** @type {!Realm.User} */
Realm.Sync.prototype.User;
 /** @type {!Realm.Session} */
Realm.Sync.prototype.Session;
 /** @type {!Realm.AuthError} */
Realm.Sync.prototype.AuthError;
 /** @type {!Realm.ChangeEvent} */
Realm.Sync.prototype.ChangeEvent;

/**
 * @param {string} serverURL
 * @param {!Realm.User} adminUser
 * @param {string} regex
 * @param {string} name
 * @param {function(): void} changeCallback
 * @return {void}
 */
Realm.Sync.prototype.addListener = function(serverURL, adminUser, regex, name, changeCallback) {};

/**
 * @param {!Array<string>=} name
 * @return {void}
 */
Realm.Sync.prototype.removeAllListeners = function(name) {};

/**
 * @param {string} regex
 * @param {string} name
 * @param {function(): void} changeCallback
 * @return {void}
 */
Realm.Sync.prototype.removeListener = function(regex, name, changeCallback) {};

/**
 * @param {string} logLevel
 * @return {void}
 */
Realm.Sync.prototype.setLogLevel = function(logLevel) {};
 /** @type {string} */
Realm.defaultPath;
 /** @type {string} */
Realm.prototype.path;
 /** @type {boolean} */
Realm.prototype.readOnly;
 /** @type {!Array<!Realm.ObjectSchema>} */
Realm.prototype.schema;
 /** @type {number} */
Realm.prototype.schemaVersion;
 /** @type {?} */
Realm.Sync;
 /** @type {!Realm.Session} */
Realm.prototype.syncSession;

/**
 * @param {string} path
 * @param {?=} encryptionKey
 * @return {number} number
 */
Realm.schemaVersion = function(path, encryptionKey) {};

/**
 * @return {void} void
 */
Realm.prototype.close = function() {};

/**
 * @template T
 * @param {(string|!Realm.ObjectType)} type
 * @param {?} properties
 * @param {boolean=} update
 * @return {T} T
 */
Realm.prototype.create = function(type, properties, update) {};

/**
 * @param {?} object
 * @return {void} void
 */
Realm.prototype.delete = function(object) {};

/**
 * @return {void} void
 */
Realm.prototype.deleteAll = function() {};

/**
 * @template T
 * @param {(string|!Realm.ObjectType)} type
 * @param {(string|number)} key
 * @return {(void|T)} T
 */
Realm.prototype.objectForPrimaryKey = function(type, key) {};

/**
 * @template T
 * @param {(string|!Realm.ObjectType)} type
 * @return {?} Realm
 */
Realm.prototype.objects = function(type) {};

/**
 * @param {string} name
 * @param {function(): void} callback
 * @return {void} void
 */
Realm.prototype.addListener = function(name, callback) {};

/**
 * @param {string} name
 * @param {function(): void} callback
 * @return {void} void
 */
Realm.prototype.removeListener = function(name, callback) {};

/**
 * @param {!Array<string>=} name
 * @return {void} void
 */
Realm.prototype.removeAllListeners = function(name) {};

/**
 * @param {function(): void} callback
 * @return {void} void
 */
Realm.prototype.write = function(callback) {};

/* TODO: ExportAssignment in  */
