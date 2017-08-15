/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/autobahn/index.d.ts:

/* TODO: ExportAssignment in  */
/** @const */
var autobahn = {};

/**
 * @constructor
 * @struct
 * @param {!autobahn.ITransport} transport
 * @param {function(): !When.Promise<?>} defer
 * @param {function(!autobahn.Session, string, ?): !When.Promise<string>} challenge
 */
autobahn.Session = function(transport, defer, challenge) {};
 /** @type {number} */
autobahn.Session.prototype.id;
 /** @type {string} */
autobahn.Session.prototype.realm;
 /** @type {boolean} */
autobahn.Session.prototype.isOpen;
 /** @type {?} */
autobahn.Session.prototype.features;
 /** @type {boolean} */
autobahn.Session.prototype.caller_disclose_me;
 /** @type {boolean} */
autobahn.Session.prototype.publisher_disclose_me;
 /** @type {!Array<!Array<!autobahn.ISubscription>>} */
autobahn.Session.prototype.subscriptions;
 /** @type {!Array<!autobahn.IRegistration>} */
autobahn.Session.prototype.registrations;
 /** @type {function(?): void} */
autobahn.Session.prototype.onjoin;
 /** @type {function(string, ?): void} */
autobahn.Session.prototype.onleave;

/**
 * @param {string} realm
 * @param {!Array<string>} authmethods
 * @param {string} authid
 * @return {void}
 */
autobahn.Session.prototype.join = function(realm, authmethods, authid) {};

/**
 * @param {string} reason
 * @param {string} message
 * @return {void}
 */
autobahn.Session.prototype.leave = function(reason, message) {};

/**
 * @template TResult
 * @param {string} procedure
 * @param {!Array<?>=} args
 * @param {?=} kwargs
 * @param {!autobahn.ICallOptions=} options
 * @return {!When.Promise<TResult>}
 */
autobahn.Session.prototype.call = function(procedure, args, kwargs, options) {};

/**
 * @param {string} topic
 * @param {!Array<?>=} args
 * @param {?=} kwargs
 * @param {!autobahn.IPublishOptions=} options
 * @return {!When.Promise<!autobahn.IPublication>}
 */
autobahn.Session.prototype.publish = function(topic, args, kwargs, options) {};

/**
 * @param {string} topic
 * @param {function(!Array<?>, ?, !autobahn.IEvent): void} handler
 * @param {!autobahn.ISubscribeOptions=} options
 * @return {!When.Promise<!autobahn.ISubscription>}
 */
autobahn.Session.prototype.subscribe = function(topic, handler, options) {};

/**
 * @param {string} procedure
 * @param {function(!Array<?>, ?, !autobahn.IInvocation): void} endpoint
 * @param {!autobahn.IRegisterOptions=} options
 * @return {!When.Promise<!autobahn.IRegistration>}
 */
autobahn.Session.prototype.register = function(procedure, endpoint, options) {};

/**
 * @param {!autobahn.ISubscription} subscription
 * @return {!When.Promise<?>}
 */
autobahn.Session.prototype.unsubscribe = function(subscription) {};

/**
 * @param {!autobahn.IRegistration} registration
 * @return {!When.Promise<?>}
 */
autobahn.Session.prototype.unregister = function(registration) {};

/**
 * @param {string} prefix
 * @param {string} uri
 * @return {void}
 */
autobahn.Session.prototype.prefix = function(prefix, uri) {};

/**
 * @param {string} curie
 * @return {string}
 */
autobahn.Session.prototype.resolve = function(curie) {};
/**
 * @record
 * @struct
 */
autobahn.IInvocation = function() {};
 /** @type {number} */
autobahn.IInvocation.prototype.caller;
 /** @type {function(!Array<?>, ?): void} */
autobahn.IInvocation.prototype.progress;
 /** @type {string} */
autobahn.IInvocation.prototype.procedure;

/**
 * @constructor
 * @struct
 * @param {number=} caller
 * @param {boolean=} progress
 * @param {string=} procedure
 */
autobahn.Invocation = function(caller, progress, procedure) {};
 /** @type {string} */
autobahn.Invocation.prototype.procedure;
/**
 * @record
 * @struct
 */
autobahn.IEvent = function() {};
 /** @type {number} */
autobahn.IEvent.prototype.publication;
 /** @type {number} */
autobahn.IEvent.prototype.publisher;
 /** @type {string} */
autobahn.IEvent.prototype.topic;

/**
 * @constructor
 * @struct
 * @param {number=} publication
 * @param {string=} publisher
 * @param {string=} topic
 */
autobahn.Event = function(publication, publisher, topic) {};
 /** @type {number} */
autobahn.Event.prototype.publication;
 /** @type {string} */
autobahn.Event.prototype.topic;
/**
 * @record
 * @struct
 */
autobahn.IResult = function() {};
 /** @type {!Array<?>} */
autobahn.IResult.prototype.args;
 /** @type {?} */
autobahn.IResult.prototype.kwargs;

/**
 * @constructor
 * @struct
 * @param {!Array<?>=} args
 * @param {?=} kwargs
 */
autobahn.Result = function(args, kwargs) {};
 /** @type {!Array<?>} */
autobahn.Result.prototype.args;
 /** @type {?} */
autobahn.Result.prototype.kwargs;
/**
 * @record
 * @struct
 */
autobahn.IError = function() {};
 /** @type {string} */
autobahn.IError.prototype.error;
 /** @type {!Array<?>} */
autobahn.IError.prototype.args;
 /** @type {?} */
autobahn.IError.prototype.kwargs;

/**
 * @constructor
 * @struct
 * @param {string=} error
 * @param {!Array<?>=} args
 * @param {?=} kwargs
 */
autobahn.Error = function(error, args, kwargs) {};
 /** @type {string} */
autobahn.Error.prototype.error;
 /** @type {!Array<?>} */
autobahn.Error.prototype.args;
 /** @type {?} */
autobahn.Error.prototype.kwargs;

/** @typedef {function(!Array<?>, ?, !autobahn.IEvent): void} */
autobahn.SubscribeHandler;
/**
 * @record
 * @struct
 */
autobahn.ISubscription = function() {};
 /** @type {string} */
autobahn.ISubscription.prototype.topic;
 /** @type {function(!Array<?>, ?, !autobahn.IEvent): void} */
autobahn.ISubscription.prototype.handler;
 /** @type {!autobahn.ISubscribeOptions} */
autobahn.ISubscription.prototype.options;
 /** @type {!autobahn.Session} */
autobahn.ISubscription.prototype.session;
 /** @type {number} */
autobahn.ISubscription.prototype.id;
 /** @type {boolean} */
autobahn.ISubscription.prototype.active;

/**
 * @return {!When.Promise<?>}
 */
autobahn.ISubscription.prototype.unsubscribe = function() {};

/**
 * @constructor
 * @struct
 * @param {string=} topic
 * @param {function(!Array<?>, ?, !autobahn.IEvent): void=} handler
 * @param {!autobahn.ISubscribeOptions=} options
 * @param {!autobahn.Session=} session
 * @param {number=} id
 */
autobahn.Subscription = function(topic, handler, options, session, id) {};
 /** @type {function(!Array<?>, ?, !autobahn.IEvent): void} */
autobahn.Subscription.prototype.handler;
 /** @type {string} */
autobahn.Subscription.prototype.topic;
 /** @type {!autobahn.ISubscribeOptions} */
autobahn.Subscription.prototype.options;
 /** @type {!autobahn.Session} */
autobahn.Subscription.prototype.session;
 /** @type {number} */
autobahn.Subscription.prototype.id;
 /** @type {boolean} */
autobahn.Subscription.prototype.active;

/**
 * @return {!When.Promise<?>}
 */
autobahn.Subscription.prototype.unsubscribe = function() {};

/** @typedef {function(!Array<?>, ?, !autobahn.IInvocation): void} */
autobahn.RegisterEndpoint;
/**
 * @record
 * @struct
 */
autobahn.IRegistration = function() {};
 /** @type {string} */
autobahn.IRegistration.prototype.procedure;
 /** @type {function(!Array<?>, ?, !autobahn.IInvocation): void} */
autobahn.IRegistration.prototype.endpoint;
 /** @type {!autobahn.IRegisterOptions} */
autobahn.IRegistration.prototype.options;
 /** @type {!autobahn.Session} */
autobahn.IRegistration.prototype.session;
 /** @type {number} */
autobahn.IRegistration.prototype.id;
 /** @type {boolean} */
autobahn.IRegistration.prototype.active;

/**
 * @return {!When.Promise<?>}
 */
autobahn.IRegistration.prototype.unregister = function() {};

/**
 * @constructor
 * @struct
 * @param {string=} procedure
 * @param {function(!Array<?>, ?, !autobahn.IInvocation): void=} endpoint
 * @param {!autobahn.IRegisterOptions=} options
 * @param {!autobahn.Session=} session
 * @param {number=} id
 */
autobahn.Registration = function(procedure, endpoint, options, session, id) {};
 /** @type {function(!Array<?>, ?, !autobahn.IInvocation): void} */
autobahn.Registration.prototype.endpoint;
 /** @type {string} */
autobahn.Registration.prototype.procedure;
 /** @type {!autobahn.IRegisterOptions} */
autobahn.Registration.prototype.options;
 /** @type {!autobahn.Session} */
autobahn.Registration.prototype.session;
 /** @type {number} */
autobahn.Registration.prototype.id;
 /** @type {boolean} */
autobahn.Registration.prototype.active;

/**
 * @return {!When.Promise<?>}
 */
autobahn.Registration.prototype.unregister = function() {};
/**
 * @record
 * @struct
 */
autobahn.IPublication = function() {};
 /** @type {number} */
autobahn.IPublication.prototype.id;

/**
 * @constructor
 * @struct
 * @param {number} id
 */
autobahn.Publication = function(id) {};
 /** @type {number} */
autobahn.Publication.prototype.id;
/**
 * @record
 * @struct
 */
autobahn.ICallOptions = function() {};
 /** @type {number} */
autobahn.ICallOptions.prototype.timeout;
 /** @type {boolean} */
autobahn.ICallOptions.prototype.receive_progress;
 /** @type {boolean} */
autobahn.ICallOptions.prototype.disclose_me;
/**
 * @record
 * @struct
 */
autobahn.IPublishOptions = function() {};
 /** @type {boolean} */
autobahn.IPublishOptions.prototype.acknowledge;
 /** @type {!Array<number>} */
autobahn.IPublishOptions.prototype.exclude;
 /** @type {!Array<string>} */
autobahn.IPublishOptions.prototype.exclude_authid;
 /** @type {!Array<string>} */
autobahn.IPublishOptions.prototype.exclude_authrole;
 /** @type {!Array<number>} */
autobahn.IPublishOptions.prototype.eligible;
 /** @type {!Array<string>} */
autobahn.IPublishOptions.prototype.eligible_authid;
 /** @type {!Array<string>} */
autobahn.IPublishOptions.prototype.eligible_authrole;
 /** @type {boolean} */
autobahn.IPublishOptions.prototype.retain;
 /** @type {boolean} */
autobahn.IPublishOptions.prototype.disclose_me;
 /** @type {boolean} */
autobahn.IPublishOptions.prototype.exclude_me;
/**
 * @record
 * @struct
 */
autobahn.ISubscribeOptions = function() {};
 /** @type {string} */
autobahn.ISubscribeOptions.prototype.match;
/**
 * @record
 * @struct
 */
autobahn.IRegisterOptions = function() {};
 /** @type {boolean} */
autobahn.IRegisterOptions.prototype.disclose_caller;
 /** @type {string} */
autobahn.IRegisterOptions.prototype.invoke;

/**
 * @constructor
 * @struct
 * @param {!autobahn.IConnectionOptions=} options
 */
autobahn.Connection = function(options) {};
 /** @type {function(!autobahn.Session, ?): void} */
autobahn.Connection.prototype.onopen;
 /** @type {function(string, ?): boolean} */
autobahn.Connection.prototype.onclose;

/**
 * @return {void}
 */
autobahn.Connection.prototype.open = function() {};

/**
 * @param {string=} reason
 * @param {string=} message
 * @return {void}
 */
autobahn.Connection.prototype.close = function(reason, message) {};
/**
 * @record
 * @struct
 */
autobahn.ITransportDefinition = function() {};
 /** @type {string} */
autobahn.ITransportDefinition.prototype.url;
 /** @type {!Array<string>} */
autobahn.ITransportDefinition.prototype.protocols;
 /** @type {string} */
autobahn.ITransportDefinition.prototype.type;

/** @typedef {function(): !When.Promise<?>} */
autobahn.DeferFactory;

/** @typedef {function(!autobahn.Session, string, ?): !When.Promise<string>} */
autobahn.OnChallengeHandler;
/**
 * @record
 * @struct
 */
autobahn.IConnectionOptions = function() {};
 /** @type {boolean} */
autobahn.IConnectionOptions.prototype.use_es6_promises;
 /** @type {function(): !When.Promise<?>} */
autobahn.IConnectionOptions.prototype.use_deferred;
 /** @type {!Array<!autobahn.ITransportDefinition>} */
autobahn.IConnectionOptions.prototype.transports;
 /** @type {boolean} */
autobahn.IConnectionOptions.prototype.retry_if_unreachable;
 /** @type {number} */
autobahn.IConnectionOptions.prototype.max_retries;
 /** @type {number} */
autobahn.IConnectionOptions.prototype.initial_retry_delay;
 /** @type {number} */
autobahn.IConnectionOptions.prototype.max_retry_delay;
 /** @type {number} */
autobahn.IConnectionOptions.prototype.retry_delay_growth;
 /** @type {number} */
autobahn.IConnectionOptions.prototype.retry_delay_jitter;
 /** @type {string} */
autobahn.IConnectionOptions.prototype.url;
 /** @type {!Array<string>} */
autobahn.IConnectionOptions.prototype.protocols;
 /** @type {function(!autobahn.Session, string, ?): !When.Promise<string>} */
autobahn.IConnectionOptions.prototype.onchallenge;
 /** @type {string} */
autobahn.IConnectionOptions.prototype.realm;
 /** @type {!Array<string>} */
autobahn.IConnectionOptions.prototype.authmethods;
 /** @type {string} */
autobahn.IConnectionOptions.prototype.authid;
/**
 * @record
 * @struct
 */
autobahn.ICloseEventDetails = function() {};
 /** @type {boolean} */
autobahn.ICloseEventDetails.prototype.wasClean;
 /** @type {string} */
autobahn.ICloseEventDetails.prototype.reason;
 /** @type {number} */
autobahn.ICloseEventDetails.prototype.code;
/**
 * @record
 * @struct
 */
autobahn.ITransport = function() {};
 /** @type {function(): void} */
autobahn.ITransport.prototype.onopen;
 /** @type {function(!Array<?>): void} */
autobahn.ITransport.prototype.onmessage;
 /** @type {function(!autobahn.ICloseEventDetails): void} */
autobahn.ITransport.prototype.onclose;

/**
 * @param {!Array<?>} message
 * @return {void}
 */
autobahn.ITransport.prototype.send = function(message) {};

/**
 * @param {number} errorCode
 * @param {string=} reason
 * @return {void}
 */
autobahn.ITransport.prototype.close = function(errorCode, reason) {};
/**
 * @record
 * @struct
 */
autobahn.ITransportFactory = function() {};
 /** @type {string} */
autobahn.ITransportFactory.prototype.type;

/**
 * @return {!autobahn.ITransport}
 */
autobahn.ITransportFactory.prototype.create = function() {};
/**
 * @record
 * @struct
 */
autobahn.ITransports = function() {};

/**
 * @param {string} name
 * @param {?} factory
 * @return {void}
 */
autobahn.ITransports.prototype.register = function(name, factory) {};

/**
 * @param {string} name
 * @return {boolean}
 */
autobahn.ITransports.prototype.isRegistered = function(name) {};

/**
 * @param {string} name
 * @return {?}
 */
autobahn.ITransports.prototype.get = function(name) {};

/**
 * @return {!Array<string>}
 */
autobahn.ITransports.prototype.list = function() {};
/**
 * @record
 * @struct
 */
autobahn.ILog = function() {};

/**
 * @param {...?} args
 * @return {void}
 */
autobahn.ILog.prototype.debug = function(args) {};
/**
 * @record
 * @struct
 */
autobahn.IUtil = function() {};

/**
 * @param {boolean} condition
 * @param {string} message
 * @return {void}
 */
autobahn.IUtil.prototype.assert = function(condition, message) {};
/**
 * @record
 * @struct
 */
autobahn.IAuthCra = function() {};

/**
 * @param {string} secret
 * @param {string} salt
 * @param {number} iterations
 * @param {number} keylen
 * @return {string}
 */
autobahn.IAuthCra.prototype.derive_key = function(secret, salt, iterations, keylen) {};

/**
 * @param {string} key
 * @param {string} challenge
 * @return {string}
 */
autobahn.IAuthCra.prototype.sign = function(key, challenge) {};
 /** @type {!autobahn.IUtil} */
autobahn.util;
 /** @type {!autobahn.ILog} */
autobahn.log;
 /** @type {!autobahn.ITransports} */
autobahn.transports;
 /** @type {!autobahn.IAuthCra} */
autobahn.auth_cra;
