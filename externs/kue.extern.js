/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/kue/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/**
 * @constructor
 * @struct
 * @param {!Object} options
 */
function Queue(options) {}
 /** @type {string} */
Queue.prototype.name;
 /** @type {string} */
Queue.prototype.id;
 /** @type {?} */
Queue.prototype.promoter;
 /** @type {!Array<!Worker>} */
Queue.prototype.workers;
 /** @type {boolean} */
Queue.prototype.shuttingDown;
 /** @type {?} */
Queue.prototype.client;
 /** @type {?} */
Queue.prototype.testMode;
 /** @type {!Queue} */
Queue.singleton;

/**
 * @param {string} type
 * @param {!Object} data
 * @return {!Job}
 */
Queue.prototype.create = function(type, data) {};

/**
 * @param {string} type
 * @param {!Object} data
 * @return {!Job}
 */
Queue.prototype.createJob = function(type, data) {};

/**
 * @param {number=} ms
 * @return {void}
 */
Queue.prototype.promote = function(ms) {};

/**
 * @return {void}
 */
Queue.prototype.setupTimer = function() {};

/**
 * @param {number} ms
 * @return {void}
 */
Queue.prototype.checkJobPromotion = function(ms) {};

/**
 * @param {!Object} ttlOptions
 * @return {void}
 */
Queue.prototype.checkActiveJobTtl = function(ttlOptions) {};

/**
 * @param {number} ms
 * @return {void}
 */
Queue.prototype.watchStuckJobs = function(ms) {};

/**
 * @param {string} name
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.setting = function(name, fn) {};

/**
 * @param {string} type
 * @param {(number|?)=} n
 * @param {?=} fn
 * @return {void}
 */
Queue.prototype.process = function(type, n, fn) {};

/**
 * @param {number} timeout
 * @param {!Function|string} fn_or_type
 * @param {!Function=} fn
 * @return {!Queue}
 */
Queue.prototype.shutdown = function(timeout, fn_or_type, fn) {};

/**
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.types = function(fn) {};

/**
 * @param {string} string
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.state = function(string, fn) {};

/**
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.workTime = function(fn) {};

/**
 * @param {string} type
 * @param {string} state
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.cardByType = function(type, state, fn) {};

/**
 * @param {string} state
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.card = function(state, fn) {};

/**
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.complete = function(fn) {};

/**
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.failed = function(fn) {};

/**
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.inactive = function(fn) {};

/**
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.active = function(fn) {};

/**
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.delayed = function(fn) {};

/**
 * @param {string} type
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.completeCount = function(type, fn) {};

/**
 * @param {string} type
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.failedCount = function(type, fn) {};

/**
 * @param {string} type
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.inactiveCount = function(type, fn) {};

/**
 * @param {string} type
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.activeCount = function(type, fn) {};

/**
 * @param {string} type
 * @param {!Function} fn
 * @return {!Queue}
 */
Queue.prototype.delayedCount = function(type, fn) {};
/**
 * @record
 * @struct
 */
function Priorities() {}
 /** @type {number} */
Priorities.prototype.low;
 /** @type {number} */
Priorities.prototype.normal;
 /** @type {number} */
Priorities.prototype.medium;
 /** @type {number} */
Priorities.prototype.high;
 /** @type {number} */
Priorities.prototype.critical;

/** @typedef {?} */
var DoneCallback;

/** @typedef {?} */
var JobCallback;

/** @typedef {?} */
var ProcessCallback;

/**
 * @constructor
 * @struct
 * @param {string} type
 * @param {?=} data
 */
function Job(type, data) {}
 /** @type {number} */
Job.prototype.id;
 /** @type {string} */
Job.prototype.type;
 /** @type {?} */
Job.prototype.data;
 /** @type {?} */
Job.prototype.result;
 /** @type {(string|number)} */
Job.prototype.created_at;
 /** @type {?} */
Job.prototype.client;
 /** @type {?} */
Job.prototype._max_attempts;
 /** @type {?} */
Job.priorities;
 /** @type {boolean} */
Job.disableSearch;
 /** @type {boolean} */
Job.jobEvents;

/**
 * @param {number} id
 * @param {(string|?)} type
 * @param {?=} fn
 * @return {void}
 */
Job.get = function(id, type, fn) {};

/**
 * @param {number} id
 * @param {!Function=} fn
 * @return {void}
 */
Job.remove = function(id, fn) {};

/**
 * @param {number} id
 * @return {void}
 */
Job.removeBadJob = function(id) {};

/**
 * @param {number} id
 * @param {!Function} fn
 * @return {void}
 */
Job.log = function(id, fn) {};

/**
 * @param {number} from
 * @param {number} to
 * @param {string} order
 * @param {!Function} fn
 * @return {void}
 */
Job.range = function(from, to, order, fn) {};

/**
 * @param {string} state
 * @param {number} from
 * @param {number} to
 * @param {string} order
 * @param {!Function} fn
 * @return {void}
 */
Job.rangeByState = function(state, from, to, order, fn) {};

/**
 * @param {string} type
 * @param {string} state
 * @param {number} from
 * @param {number} to
 * @param {string} order
 * @param {!Function} fn
 * @return {void}
 */
Job.rangeByType = function(type, state, from, to, order, fn) {};

/**
 * @return {!Object}
 */
Job.prototype.toJSON = function() {};

/**
 * @param {string} str
 * @return {!Job}
 */
Job.prototype.log = function(str) {};

/**
 * @param {string} key
 * @param {string} val
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.set = function(key, val, fn) {};

/**
 * @param {string} key
 * @param {!Function|string=} fn_or_jobType
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.get = function(key, fn_or_jobType, fn) {};

/**
 * @param {number} complete
 * @param {number} total
 * @param {?=} data
 * @return {!Job}
 */
Job.prototype.progress = function(complete, total, data) {};

/**
 * @param {(number|!Date)} ms
 * @return {!Job}
 */
Job.prototype.delay = function(ms) {};

/**
 * @param {?} param
 * @return {!Job}
 */
Job.prototype.removeOnComplete = function(param) {};

/**
 * @param {?} param
 * @return {!Job}
 */
Job.prototype.backoff = function(param) {};

/**
 * @param {?} param
 * @return {!Job}
 */
Job.prototype.ttl = function(param) {};

/**
 * @return {void}
 */
Job.prototype._getBackoffImpl = function() {};

/**
 * @param {(string|number)} level
 * @return {!Job}
 */
Job.prototype.priority = function(level) {};

/**
 * @param {!Function} fn
 * @return {!Job}
 */
Job.prototype.attempt = function(fn) {};

/**
 * @param {number} attempt
 * @param {!Function=} fn
 * @return {void}
 */
Job.prototype.reattempt = function(attempt, fn) {};

/**
 * @param {number} n
 * @return {!Job}
 */
Job.prototype.attempts = function(n) {};

/**
 * @param {(string|!Array<string>)} keys
 * @return {!Job}
 */
Job.prototype.searchKeys = function(keys) {};

/**
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.remove = function(fn) {};

/**
 * @param {string} state
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.state = function(state, fn) {};

/**
 * @param {!Error} err
 * @return {!Job}
 */
Job.prototype.error = function(err) {};

/**
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.complete = function(fn) {};

/**
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.failed = function(fn) {};

/**
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.inactive = function(fn) {};

/**
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.active = function(fn) {};

/**
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.delayed = function(fn) {};

/**
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.save = function(fn) {};

/**
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.update = function(fn) {};

/**
 * @param {!Function=} fn
 * @return {!Job}
 */
Job.prototype.subscribe = function(fn) {};

/**
 * @param {boolean} events
 * @return {!Job}
 */
Job.prototype.events = function(events) {};

/**
 * @constructor
 * @struct
 * @param {!Queue} queue
 * @param {string} type
 */
function Worker(queue, type) {}
 /** @type {!Queue} */
Worker.prototype.queue;
 /** @type {string} */
Worker.prototype.type;
 /** @type {?} */
Worker.prototype.client;
 /** @type {!Job} */
Worker.prototype.job;

/**
 * @param {!Function} fn
 * @return {!Worker}
 */
Worker.prototype.start = function(fn) {};

/**
 * @param {!Error} err
 * @param {!Job} job
 * @return {!Worker}
 */
Worker.prototype.error = function(err, job) {};

/**
 * @param {!Job} job
 * @param {!Object} theErr
 * @param {!Function=} fn
 * @return {!Worker}
 */
Worker.prototype.failed = function(job, theErr, fn) {};

/**
 * @param {!Job} job
 * @param {!Function} fn
 * @return {!Worker}
 */
Worker.prototype.process = function(job, fn) {};

/**
 * @param {string} key
 * @param {!Function} fn
 * @return {void}
 */
Worker.prototype.zpop = function(key, fn) {};

/**
 * @param {!Function} fn
 * @return {void}
 */
Worker.prototype.getJob = function(fn) {};

/**
 * @return {!Worker}
 */
Worker.prototype.idle = function() {};

/**
 * @param {number} timeout
 * @param {!Function} fn
 * @return {void}
 */
Worker.prototype.shutdown = function(timeout, fn) {};

/**
 * @param {!Object} event
 * @param {!Job} job
 * @param {?} arg1
 * @param {?} arg2
 * @return {void}
 */
Worker.prototype.emitJobEvent = function(event, job, arg1, arg2) {};

/**
 * @return {boolean}
 */
Worker.prototype.resume = function() {};
/**
 * @record
 * @struct
 */
function Redis() {}

/**
 * @param {!Object} options
 * @param {!Queue} queue
 * @return {void}
 */
Redis.prototype.configureFactory = function(options, queue) {};

/**
 * @return {?}
 */
Redis.prototype.createClient = function() {};

/**
 * @param {!Object} options
 * @return {?}
 */
Redis.prototype.createClientFactory = function(options) {};

/**
 * @return {?}
 */
Redis.prototype.client = function() {};

/**
 * @return {?}
 */
Redis.prototype.pubsubClient = function() {};

/**
 * @return {void}
 */
Redis.prototype.reset = function() {};
/**
 * @record
 * @struct
 */
function TestMode() {}
 /** @type {!Array<!Job>} */
TestMode.prototype.jobs;

/**
 * @param {!Boolean=} process
 * @return {void}
 */
TestMode.prototype.enter = function(process) {};

/**
 * @return {void}
 */
TestMode.prototype.exit = function() {};

/**
 * @return {void}
 */
TestMode.prototype.clear = function() {};
 /** @type {!e.Application} */
var app;
 /** @type {!Array<!Worker>} */
var workers;

/**
 * @param {!Object=} options
 * @return {!Queue}
 */
function createQueue(options) {}
