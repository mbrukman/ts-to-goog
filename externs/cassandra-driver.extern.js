/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/cassandra-driver/index.d.ts:

/** @typedef {!Function} */
var Callback;

/** @typedef {?} */
var ResultCallback;

/* TODO: ImportDeclaration in  */

/* TODO: ImportDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */
/** @const */
var policies = {};
/** @const */
policies.addressResolution = {};
 /** @type {?} */
policies.addressResolution.EC2MultiRegionTranslator;
/**
 * @record
 * @struct
 */
policies.addressResolution.AddressTranslator = function() {};

/**
 * @param {string} address
 * @param {number} port
 * @param {!Function} callback
 * @return {void}
 */
policies.addressResolution.AddressTranslator.prototype.translate = function(address, port, callback) {};
/**
 * @record
 * @struct
 */
policies.addressResolution.EC2MultiRegionTranslatorStatic = function() {};

/* TODO: ConstructSignature: policies.addressResolution */

/**
 * @param {string} address
 * @param {!Error} err
 * @return {void}
 */
policies.addressResolution.EC2MultiRegionTranslator.prototype.logError = function(address, err) {};
/** @const */
policies.loadBalancing = {};
 /** @type {?} */
policies.loadBalancing.DCAwareRoundRobinPolicy;
 /** @type {?} */
policies.loadBalancing.RoundRobinPolicy;
 /** @type {?} */
policies.loadBalancing.TokenAwarePolicy;
 /** @type {?} */
policies.loadBalancing.WhiteListPolicy;
/**
 * @record
 * @struct
 */
policies.loadBalancing.LoadBalancingPolicy = function() {};

/**
 * @param {?} client
 * @param {?} hosts
 * @param {!Function} callback
 * @return {void}
 */
policies.loadBalancing.LoadBalancingPolicy.prototype.init = function(client, hosts, callback) {};

/**
 * @param {?} host
 * @return {?}
 */
policies.loadBalancing.LoadBalancingPolicy.prototype.getDistance = function(host) {};

/**
 * @param {string} keyspace
 * @param {?} queryOptions
 * @param {!Function} callback
 * @return {void}
 */
policies.loadBalancing.LoadBalancingPolicy.prototype.newQueryPlan = function(keyspace, queryOptions, callback) {};
/**
 * @record
 * @struct
 */
policies.loadBalancing.DCAwareRoundRobinPolicyStatic = function() {};

/* TODO: ConstructSignature: policies.loadBalancing */
 /** @type {!Array<?>} */
policies.loadBalancing.DCAwareRoundRobinPolicy.prototype.localHostsArray;
 /** @type {!Array<?>} */
policies.loadBalancing.DCAwareRoundRobinPolicy.prototype.remoteHostsArray;
/**
 * @record
 * @struct
 */
policies.loadBalancing.RoundRobinPolicyStatic = function() {};

/* TODO: ConstructSignature: policies.loadBalancing */
/**
 * @record
 * @struct
 */
policies.loadBalancing.TokenAwarePolicyStatic = function() {};

/* TODO: ConstructSignature: policies.loadBalancing */
/**
 * @record
 * @struct
 */
policies.loadBalancing.WhiteListPolicyStatic = function() {};

/* TODO: ConstructSignature: policies.loadBalancing */
/** @const */
policies.reconnection = {};
 /** @type {?} */
policies.reconnection.ConstantReconnectionPolicy;
 /** @type {?} */
policies.reconnection.ExponentialReconnectionPolicy;
/**
 * @record
 * @struct
 */
policies.reconnection.ReconnectionPolicy = function() {};

/**
 * @return {?}
 */
policies.reconnection.ReconnectionPolicy.prototype.newSchedule = function() {};
/**
 * @record
 * @struct
 */
policies.reconnection.ConstantReconnectionPolicyStatic = function() {};

/* TODO: ConstructSignature: policies.reconnection */
/**
 * @record
 * @struct
 */
policies.reconnection.ExponentialReconnectionPolicyStatic = function() {};

/* TODO: ConstructSignature: policies.reconnection */
/** @const */
policies.retry = {};
 /** @type {?} */
policies.retry.RetryPolicy;
/**
 * @record
 * @struct
 */
policies.retry.DecisionInfo = function() {};
 /** @type {number} */
policies.retry.DecisionInfo.prototype.decision;
 /** @type {number} */
policies.retry.DecisionInfo.prototype.consistency;
/**
 * @record
 * @struct
 */
policies.retry.RequestInfo = function() {};
 /** @type {?} */
policies.retry.RequestInfo.prototype.request;
 /** @type {number} */
policies.retry.RequestInfo.prototype.nbRetry;

/** @const */
policies.retry.retryDecision = {};
/** @const {number} */
policies.retry.retryDecision.rethrow;
/** @const {number} */
policies.retry.retryDecision.retry;
/** @const {number} */
policies.retry.retryDecision.ignore;
/**
 * @record
 * @struct
 */
policies.retry.RetryPolicyStatic = function() {};

/* TODO: ConstructSignature: policies.retry */
 /** @type {?} */
policies.retry.RetryPolicyStatic.prototype.retryDecision;

/**
 * @param {?} requestInfo
 * @param {?} consistency
 * @param {number} received
 * @param {number} blockFor
 * @param {boolean} isDataPresent
 * @return {?}
 */
policies.retry.RetryPolicy.prototype.onReadTimeout = function(requestInfo, consistency, received, blockFor, isDataPresent) {};

/**
 * @param {?} requestInfo
 * @param {?} consistency
 * @param {number} required
 * @param {number} alive
 * @return {?}
 */
policies.retry.RetryPolicy.prototype.onUnavailable = function(requestInfo, consistency, required, alive) {};

/**
 * @param {?} requestInfo
 * @param {?} consistency
 * @param {number} received
 * @param {number} blockFor
 * @param {string} writeType
 * @return {?}
 */
policies.retry.RetryPolicy.prototype.onWriteTimeout = function(requestInfo, consistency, received, blockFor, writeType) {};

/**
 * @return {?}
 */
policies.retry.RetryPolicy.prototype.rethrowResult = function() {};

/**
 * @return {?}
 */
policies.retry.RetryPolicy.prototype.retryResult = function() {};
/** @const */
var types = {};
 /** @type {?} */
types.BigDecimal;
 /** @type {?} */
types.InetAddress;
 /** @type {?} */
types.Integer;
 /** @type {?} */
types.LocalDate;
 /** @type {?} */
types.LocalTime;
 /** @type {!Long} */
types.Long;
 /** @type {?} */
types.ResultSet;
 /** @type {?} */
types.Row;
 /** @type {?} */
types.TimeUuid;
 /** @type {?} */
types.Tuple;
 /** @type {?} */
types.Uuid;

/** @const */
types.consistencies = {};
/** @const {number} */
types.consistencies.any;
/** @const {number} */
types.consistencies.one;
/** @const {number} */
types.consistencies.two;
/** @const {number} */
types.consistencies.three;
/** @const {number} */
types.consistencies.quorum;
/** @const {number} */
types.consistencies.all;
/** @const {number} */
types.consistencies.localQuorum;
/** @const {number} */
types.consistencies.eachQuorum;
/** @const {number} */
types.consistencies.serial;
/** @const {number} */
types.consistencies.localSerial;
/** @const {number} */
types.consistencies.localOne;

/** @const */
types.dataTypes = {};
/** @const {number} */
types.dataTypes.custom;
/** @const {number} */
types.dataTypes.ascii;
/** @const {number} */
types.dataTypes.bigint;
/** @const {number} */
types.dataTypes.blob;
/** @const {number} */
types.dataTypes.boolean;
/** @const {number} */
types.dataTypes.counter;
/** @const {number} */
types.dataTypes.decimal;
/** @const {number} */
types.dataTypes.double;
/** @const {number} */
types.dataTypes.float;
/** @const {number} */
types.dataTypes.int;
/** @const {number} */
types.dataTypes.text;
/** @const {number} */
types.dataTypes.timestamp;
/** @const {number} */
types.dataTypes.uuid;
/** @const {number} */
types.dataTypes.varchar;
/** @const {number} */
types.dataTypes.varint;
/** @const {number} */
types.dataTypes.timeuuid;
/** @const {number} */
types.dataTypes.inet;
/** @const {number} */
types.dataTypes.date;
/** @const {number} */
types.dataTypes.time;
/** @const {number} */
types.dataTypes.smallint;
/** @const {number} */
types.dataTypes.tinyint;
/** @const {number} */
types.dataTypes.list;
/** @const {number} */
types.dataTypes.map;
/** @const {number} */
types.dataTypes.set;
/** @const {number} */
types.dataTypes.udt;
/** @const {number} */
types.dataTypes.tuple;

/** @const */
types.distance = {};
/** @const {number} */
types.distance.local;
/** @const {number} */
types.distance.remote;
/** @const {number} */
types.distance.ignored;
/**
 * @record
 * @struct
 */
types.responseErrorCodes = function() {};

/* TODO: IndexSignature: types */
/**
 * @record
 * @struct
 */
types.unset = function() {};
 /** @type {boolean} */
types.unset.prototype.unset;

/**
 * @param {!Date=} date
 * @param {number=} microseconds
 * @return {!Long}
 */
types.generateTimestamp = function(date, microseconds) {};

/**
 * @param {?=} options
 * @param {?=} buffer
 * @param {number=} offset
 * @return {string}
 */
types.timeuuid = function(options, buffer, offset) {};
/**
 * @record
 * @struct
 */
types.BigDecimalStatic = function() {};

/* TODO: ConstructSignature: types */

/**
 * @param {?} buf
 * @return {?}
 */
types.BigDecimalStatic.prototype.fromBuffer = function(buf) {};

/**
 * @param {?} value
 * @return {?}
 */
types.BigDecimalStatic.prototype.toBuffer = function(value) {};

/**
 * @param {string} value
 * @return {?}
 */
types.BigDecimalStatic.prototype.fromString = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
types.BigDecimalStatic.prototype.fromNumber = function(value) {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.BigDecimal.prototype.equals = function(other) {};

/**
 * @return {string}
 */
types.BigDecimal.prototype.inspect = function() {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.BigDecimal.prototype.notEquals = function(other) {};

/**
 * @param {?} other
 * @return {number}
 */
types.BigDecimal.prototype.compare = function(other) {};

/**
 * @param {?} other
 * @return {?}
 */
types.BigDecimal.prototype.subtract = function(other) {};

/**
 * @param {?} other
 * @return {?}
 */
types.BigDecimal.prototype.add = function(other) {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.BigDecimal.prototype.greaterThan = function(other) {};

/**
 * @return {boolean}
 */
types.BigDecimal.prototype.isNegative = function() {};

/**
 * @return {boolean}
 */
types.BigDecimal.prototype.isZero = function() {};

/**
 * @return {string}
 */
types.BigDecimal.prototype.toString = function() {};

/**
 * @return {number}
 */
types.BigDecimal.prototype.toNumber = function() {};

/**
 * @return {string}
 */
types.BigDecimal.prototype.toJSON = function() {};
/**
 * @record
 * @struct
 */
types.InetAddressStatic = function() {};

/* TODO: ConstructSignature: types */

/**
 * @param {string} value
 * @return {?}
 */
types.InetAddressStatic.prototype.fromString = function(value) {};
 /** @type {number} */
types.InetAddress.prototype.length;
 /** @type {number} */
types.InetAddress.prototype.version;

/**
 * @param {?} other
 * @return {boolean}
 */
types.InetAddress.prototype.equals = function(other) {};

/**
 * @return {?}
 */
types.InetAddress.prototype.getBuffer = function() {};

/**
 * @return {string}
 */
types.InetAddress.prototype.inspect = function() {};

/**
 * @return {string}
 */
types.InetAddress.prototype.toString = function() {};

/**
 * @return {string}
 */
types.InetAddress.prototype.toJSON = function() {};
/**
 * @record
 * @struct
 */
types.IntegerStatic = function() {};

/* TODO: ConstructSignature: types */
 /** @type {?} */
types.IntegerStatic.prototype.ZERO;
 /** @type {?} */
types.IntegerStatic.prototype.ONE;

/**
 * @param {number} value
 * @return {?}
 */
types.IntegerStatic.prototype.fromInt = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
types.IntegerStatic.prototype.fromNumber = function(value) {};

/**
 * @param {!Array<number>} bits
 * @return {?}
 */
types.IntegerStatic.prototype.fromBits = function(bits) {};

/**
 * @param {string} str
 * @param {number=} opt_radix
 * @return {?}
 */
types.IntegerStatic.prototype.fromString = function(str, opt_radix) {};

/**
 * @param {?} bits
 * @return {?}
 */
types.IntegerStatic.prototype.fromBuffer = function(bits) {};

/**
 * @param {?} value
 * @return {?}
 */
types.IntegerStatic.prototype.toBuffer = function(value) {};

/**
 * @return {number}
 */
types.Integer.prototype.toInt = function() {};

/**
 * @return {number}
 */
types.Integer.prototype.toNumber = function() {};

/**
 * @param {number=} opt_radix
 * @return {string}
 */
types.Integer.prototype.toString = function(opt_radix) {};

/**
 * @param {number} index
 * @return {number}
 */
types.Integer.prototype.getBits = function(index) {};

/**
 * @param {number} index
 * @return {number}
 */
types.Integer.prototype.getBitsUnsigned = function(index) {};

/**
 * @return {number}
 */
types.Integer.prototype.getSign = function() {};

/**
 * @return {boolean}
 */
types.Integer.prototype.isZero = function() {};

/**
 * @return {boolean}
 */
types.Integer.prototype.isNegative = function() {};

/**
 * @return {boolean}
 */
types.Integer.prototype.isOdd = function() {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.Integer.prototype.equals = function(other) {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.Integer.prototype.notEquals = function(other) {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.Integer.prototype.greaterThan = function(other) {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.Integer.prototype.greaterThanOrEqual = function(other) {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.Integer.prototype.lessThan = function(other) {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.Integer.prototype.lessThanOrEqual = function(other) {};

/**
 * @param {?} other
 * @return {number}
 */
types.Integer.prototype.compare = function(other) {};

/**
 * @param {number} numBits
 * @return {?}
 */
types.Integer.prototype.shorten = function(numBits) {};

/**
 * @return {?}
 */
types.Integer.prototype.negate = function() {};

/**
 * @param {?} other
 * @return {?}
 */
types.Integer.prototype.add = function(other) {};

/**
 * @param {?} other
 * @return {?}
 */
types.Integer.prototype.subtract = function(other) {};

/**
 * @param {?} other
 * @return {?}
 */
types.Integer.prototype.multiply = function(other) {};

/**
 * @param {?} other
 * @return {?}
 */
types.Integer.prototype.divide = function(other) {};

/**
 * @param {?} other
 * @return {?}
 */
types.Integer.prototype.modulo = function(other) {};

/**
 * @return {?}
 */
types.Integer.prototype.not = function() {};

/**
 * @param {?} other
 * @return {?}
 */
types.Integer.prototype.and = function(other) {};

/**
 * @param {?} other
 * @return {?}
 */
types.Integer.prototype.or = function(other) {};

/**
 * @param {?} other
 * @return {?}
 */
types.Integer.prototype.xor = function(other) {};

/**
 * @param {number} numBits
 * @return {?}
 */
types.Integer.prototype.shiftLeft = function(numBits) {};

/**
 * @param {number} numBits
 * @return {?}
 */
types.Integer.prototype.shiftRight = function(numBits) {};

/**
 * @return {string}
 */
types.Integer.prototype.inspect = function() {};

/**
 * @return {?}
 */
types.Integer.prototype.abs = function() {};

/**
 * @return {string}
 */
types.Integer.prototype.toJSON = function() {};
/**
 * @record
 * @struct
 */
types.LocalDateStatic = function() {};

/* TODO: ConstructSignature: types */

/**
 * @return {?}
 */
types.LocalDateStatic.prototype.now = function() {};

/**
 * @return {?}
 */
types.LocalDateStatic.prototype.utcNow = function() {};

/**
 * @param {!Date} date
 * @return {?}
 */
types.LocalDateStatic.prototype.fromDate = function(date) {};

/**
 * @param {string} value
 * @return {?}
 */
types.LocalDateStatic.prototype.fromString = function(value) {};

/**
 * @param {?} buffer
 * @return {?}
 */
types.LocalDateStatic.prototype.fromBuffer = function(buffer) {};
 /** @type {number} */
types.LocalDate.prototype._value;
 /** @type {number} */
types.LocalDate.prototype.year;
 /** @type {number} */
types.LocalDate.prototype.month;
 /** @type {number} */
types.LocalDate.prototype.day;

/**
 * @param {?} other
 * @return {boolean}
 */
types.LocalDate.prototype.equals = function(other) {};

/**
 * @return {string}
 */
types.LocalDate.prototype.inspect = function() {};

/**
 * @return {?}
 */
types.LocalDate.prototype.toBuffer = function() {};

/**
 * @return {string}
 */
types.LocalDate.prototype.toString = function() {};

/**
 * @return {string}
 */
types.LocalDate.prototype.toJSON = function() {};
/**
 * @record
 * @struct
 */
types.LocalTimeStatic = function() {};

/* TODO: ConstructSignature: types */

/**
 * @param {string} value
 * @return {?}
 */
types.LocalTimeStatic.prototype.fromString = function(value) {};

/**
 * @param {number=} nanoseconds
 * @return {?}
 */
types.LocalTimeStatic.prototype.now = function(nanoseconds) {};

/**
 * @param {!Date} date
 * @param {number} nanoseconds
 * @return {?}
 */
types.LocalTimeStatic.prototype.fromDate = function(date, nanoseconds) {};

/**
 * @param {number} milliseconds
 * @param {number=} nanoseconds
 * @return {?}
 */
types.LocalTimeStatic.prototype.fromMilliseconds = function(milliseconds, nanoseconds) {};

/**
 * @param {?} value
 * @return {?}
 */
types.LocalTimeStatic.prototype.fromBuffer = function(value) {};
 /** @type {number} */
types.LocalTime.prototype.hour;
 /** @type {number} */
types.LocalTime.prototype.minute;
 /** @type {number} */
types.LocalTime.prototype.second;
 /** @type {number} */
types.LocalTime.prototype.nanosecond;

/**
 * @param {?} other
 * @return {boolean}
 */
types.LocalTime.prototype.compare = function(other) {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.LocalTime.prototype.equals = function(other) {};

/**
 * @return {!Long}
 */
types.LocalTime.prototype.getTotalNanoseconds = function() {};

/**
 * @return {string}
 */
types.LocalTime.prototype.inspect = function() {};

/**
 * @return {?}
 */
types.LocalTime.prototype.toBuffer = function() {};

/**
 * @return {string}
 */
types.LocalTime.prototype.toString = function() {};

/**
 * @return {string}
 */
types.LocalTime.prototype.toJSON = function() {};
/**
 * @record
 * @struct
 */
types.ResultSetStatic = function() {};

/* TODO: ConstructSignature: types */
 /** @type {?} */
types.ResultSet.prototype.info;
 /** @type {!Array<?>} */
types.ResultSet.prototype.rows;
 /** @type {number} */
types.ResultSet.prototype.rowLength;
 /** @type {!Array<?>} */
types.ResultSet.prototype.columns;
 /** @type {string} */
types.ResultSet.prototype.pageState;
 /** @type {?} */
types.ResultSet.prototype.nextPage;

/**
 * @return {?}
 */
types.ResultSet.prototype.first = function() {};

/**
 * @return {string}
 */
types.ResultSet.prototype.getPageState = function() {};

/**
 * @return {!Array<?>}
 */
types.ResultSet.prototype.getColumns = function() {};
/**
 * @record
 * @struct
 */
types.ResultStreamStatic = function() {};

/* TODO: ConstructSignature: types */
/**
 * @record
 * @struct
 */
types.ResultStream = function() {};
 /** @type {?} */
types.ResultStream.prototype.buffer;
 /** @type {boolean} */
types.ResultStream.prototype.paused;

/**
 * @param {!Function} readNext
 * @return {void}
 */
types.ResultStream.prototype._valve = function(readNext) {};

/**
 * @param {?} chunk
 * @return {void}
 */
types.ResultStream.prototype.add = function(chunk) {};
/**
 * @record
 * @struct
 */
types.RowStatic = function() {};

/* TODO: ConstructSignature: types */

/**
 * @param {(string|number)} columnName
 * @return {?}
 */
types.Row.prototype.get = function(columnName) {};

/**
 * @return {!Array<?>}
 */
types.Row.prototype.values = function() {};

/**
 * @return {!Array<string>}
 */
types.Row.prototype.keys = function() {};

/**
 * @param {!Function} callback
 * @return {void}
 */
types.Row.prototype.forEach = function(callback) {};
/**
 * @record
 * @struct
 */
types.TimeUuidStatic = function() {};

/* TODO: ConstructSignature: types */

/**
 * @param {!Date} date
 * @param {number=} ticks
 * @param {(string|?)=} nodeId
 * @param {(string|?)=} clockId
 * @return {?}
 */
types.TimeUuidStatic.prototype.fromDate = function(date, ticks, nodeId, clockId) {};

/**
 * @param {string} value
 * @return {?}
 */
types.TimeUuidStatic.prototype.fromString = function(value) {};

/**
 * @param {!Date} date
 * @param {number=} ticks
 * @return {?}
 */
types.TimeUuidStatic.prototype.min = function(date, ticks) {};

/**
 * @param {!Date} date
 * @param {number=} ticks
 * @return {?}
 */
types.TimeUuidStatic.prototype.max = function(date, ticks) {};

/**
 * @param {(string|?)=} nodeId
 * @param {(string|?)=} clockId
 * @return {?}
 */
types.TimeUuidStatic.prototype.now = function(nodeId, clockId) {};

/**
 * @return {?}
 */
types.TimeUuid.prototype.getDatePrecision = function() {};

/**
 * @return {!Date}
 */
types.TimeUuid.prototype.getDate = function() {};

/**
 * @return {?}
 */
types.TimeUuid.prototype.getNodeId = function() {};

/**
 * @return {string}
 */
types.TimeUuid.prototype.getNodeIdString = function() {};
/**
 * @record
 * @struct
 */
types.TupleStatic = function() {};

/* TODO: ConstructSignature: types */

/**
 * @param {!Array<?>} elements
 * @return {?}
 */
types.TupleStatic.prototype.fromArray = function(elements) {};
 /** @type {!Array<?>} */
types.Tuple.prototype.elements;
 /** @type {number} */
types.Tuple.prototype.length;

/**
 * @param {number} index
 * @return {?}
 */
types.Tuple.prototype.get = function(index) {};

/**
 * @return {string}
 */
types.Tuple.prototype.toString = function() {};

/**
 * @return {string}
 */
types.Tuple.prototype.toJSON = function() {};

/**
 * @return {!Array<?>}
 */
types.Tuple.prototype.values = function() {};
/**
 * @record
 * @struct
 */
types.UuidStatic = function() {};

/* TODO: ConstructSignature: types */

/**
 * @param {string} value
 * @return {?}
 */
types.UuidStatic.prototype.fromString = function(value) {};

/**
 * @return {?}
 */
types.UuidStatic.prototype.random = function() {};
 /** @type {?} */
types.Uuid.prototype.buffer;

/**
 * @return {?}
 */
types.Uuid.prototype.getBuffer = function() {};

/**
 * @param {?} other
 * @return {boolean}
 */
types.Uuid.prototype.equals = function(other) {};

/**
 * @return {string}
 */
types.Uuid.prototype.toString = function() {};

/**
 * @return {string}
 */
types.Uuid.prototype.inspect = function() {};

/**
 * @return {string}
 */
types.Uuid.prototype.toJSON = function() {};
 /** @type {?} */
var Client;
 /** @type {?} */
var Host;
 /** @type {?} */
var HostMap;
 /** @type {?} */
var Encoder;
/**
 * @record
 * @struct
 */
function ClientOptions() {}
 /** @type {!Array<string>} */
ClientOptions.prototype.contactPoints;
 /** @type {string} */
ClientOptions.prototype.keyspace;
 /** @type {?} */
ClientOptions.prototype.policies;
 /** @type {?} */
ClientOptions.prototype.queryOptions;
 /** @type {?} */
ClientOptions.prototype.pooling;
 /** @type {?} */
ClientOptions.prototype.protocolOptions;
 /** @type {?} */
ClientOptions.prototype.socketOptions;
 /** @type {?} */
ClientOptions.prototype.authProvider;
 /** @type {?} */
ClientOptions.prototype.sslOptions;
 /** @type {?} */
ClientOptions.prototype.encoding;
/**
 * @record
 * @struct
 */
function QueryOptions() {}
 /** @type {boolean} */
QueryOptions.prototype.autoPage;
 /** @type {boolean} */
QueryOptions.prototype.captureStackTrace;
 /** @type {number} */
QueryOptions.prototype.consistency;
 /** @type {?} */
QueryOptions.prototype.customPayload;
 /** @type {number} */
QueryOptions.prototype.fetchSize;
 /** @type {(!Array<string>|!Array<!Array<string>>)} */
QueryOptions.prototype.hints;
 /** @type {boolean} */
QueryOptions.prototype.logged;
 /** @type {(string|?)} */
QueryOptions.prototype.pageState;
 /** @type {boolean} */
QueryOptions.prototype.prepare;
 /** @type {number} */
QueryOptions.prototype.readTimeout;
 /** @type {?} */
QueryOptions.prototype.retry;
 /** @type {boolean} */
QueryOptions.prototype.retryOnTimeout;
 /** @type {!Array<number>} */
QueryOptions.prototype.routingIndexes;
 /** @type {(?|!Array<?>)} */
QueryOptions.prototype.routingKey;
 /** @type {!Array<string>} */
QueryOptions.prototype.routingNames;
 /** @type {number} */
QueryOptions.prototype.serialConsistency;
 /** @type {(number|!Long)} */
QueryOptions.prototype.timestamp;
 /** @type {boolean} */
QueryOptions.prototype.traceQuery;
/**
 * @record
 * @struct
 */
function ClientStatic() {}

/* TODO: ConstructSignature:  */
 /** @type {?} */
Client.prototype.hosts;
 /** @type {string} */
Client.prototype.keyspace;
 /** @type {?} */
Client.prototype.metadata;

/**
 * @param {(!Array<string>|!Array<?>)} queries
 * @param {?} options
 * @param {?} callback
 * @return {void}
 */
Client.prototype.batch = function(queries, options, callback) {};

/**
 * @param {!Function} callback
 * @return {void}
 */
Client.prototype.connect = function(callback) {};

/**
 * @param {string} query
 * @param {?=} params
 * @param {?=} options
 * @param {!Function=} rowCallback
 * @param {!Function=} callback
 * @return {void}
 */
Client.prototype.eachRow = function(query, params, options, rowCallback, callback) {};

/**
 * @param {string} query
 * @param {?=} params
 * @param {?=} options
 * @param {?=} callback
 * @return {void}
 */
Client.prototype.execute = function(query, params, options, callback) {};

/**
 * @param {string} keyspace
 * @param {?} token
 * @return {!Array<?>}
 */
Client.prototype.getReplicas = function(keyspace, token) {};

/**
 * @param {!Function=} callback
 * @return {void}
 */
Client.prototype.shutdown = function(callback) {};

/**
 * @param {string} query
 * @param {?=} params
 * @param {?=} options
 * @param {!Function=} callback
 * @return {!NodeJS.ReadableStream}
 */
Client.prototype.stream = function(query, params, options, callback) {};
/**
 * @record
 * @struct
 */
function HostStatic() {}

/* TODO: ConstructSignature:  */
 /** @type {string} */
Host.prototype.address;
 /** @type {string} */
Host.prototype.cassandraVersion;
 /** @type {string} */
Host.prototype.dataCenter;
 /** @type {string} */
Host.prototype.rack;
 /** @type {!Array<string>} */
Host.prototype.tokens;

/**
 * @return {boolean}
 */
Host.prototype.canBeConsideredAsUp = function() {};

/**
 * @return {!Array<number>}
 */
Host.prototype.getCassandraVersion = function() {};

/**
 * @return {boolean}
 */
Host.prototype.isUp = function() {};
/**
 * @record
 * @struct
 */
function HostMapStatic() {}

/* TODO: ConstructSignature:  */
 /** @type {number} */
HostMap.prototype.length;

/**
 * @param {!Function} callback
 * @return {void}
 */
HostMap.prototype.forEach = function(callback) {};

/**
 * @param {string} key
 * @return {?}
 */
HostMap.prototype.get = function(key) {};

/**
 * @return {!Array<string>}
 */
HostMap.prototype.keys = function() {};

/**
 * @param {string} key
 * @return {void}
 */
HostMap.prototype.remove = function(key) {};

/**
 * @param {!Array<string>} keys
 * @return {void}
 */
HostMap.prototype.removeMultiple = function(keys) {};

/**
 * @param {string} key
 * @param {?} value
 * @return {void}
 */
HostMap.prototype.set = function(key, value) {};

/**
 * @return {!Array<?>}
 */
HostMap.prototype.values = function() {};
/**
 * @record
 * @struct
 */
function EncoderStatic() {}

/* TODO: ConstructSignature:  */

/**
 * @param {?} buffer
 * @param {?} type
 * @return {void}
 */
Encoder.prototype.decode = function(buffer, type) {};

/**
 * @param {?} value
 * @param {(string|number|?)=} typeInfo
 * @return {?}
 */
Encoder.prototype.encode = function(value, typeInfo) {};
/** @const */
var auth = {};
 /** @type {?} */
auth.Authenticator;
 /** @type {?} */
auth.PlainTextAuthProvider;
/**
 * @record
 * @struct
 */
auth.AuthenticatorStatic = function() {};

/* TODO: ConstructSignature: auth */

/**
 * @param {?} challenge
 * @param {!Function} callback
 * @return {void}
 */
auth.Authenticator.prototype.evaluateChallenge = function(challenge, callback) {};

/**
 * @param {!Function} callback
 * @return {void}
 */
auth.Authenticator.prototype.initialResponse = function(callback) {};

/**
 * @param {?=} token
 * @return {void}
 */
auth.Authenticator.prototype.onAuthenticationSuccess = function(token) {};
/**
 * @record
 * @struct
 */
auth.AuthProvider = function() {};

/**
 * @param {string} endpoint
 * @param {string} name
 * @return {void}
 */
auth.AuthProvider.prototype.newAuthenticator = function(endpoint, name) {};
/**
 * @record
 * @struct
 */
auth.PlainTextAuthProviderStatic = function() {};

/* TODO: ConstructSignature: auth */

/**
 * @param {string} endpoint
 * @param {string} name
 * @return {void}
 */
auth.PlainTextAuthProvider.prototype.newAuthenticator = function(endpoint, name) {};
/** @const */
var errors = {};

/**
 * @constructor
 * @struct
 * @param {string} message
 * @param {?=} constructor
 */
errors.DriverError = function(message, constructor) {};

/**
 * @constructor
 * @struct
 * @param {string} message
 */
errors.ArgumentError = function(message) {};

/**
 * @constructor
 * @struct
 * @param {string} message
 */
errors.AuthenticationError = function(message) {};

/**
 * @constructor
 * @struct
 * @param {string} message
 */
errors.DriverInternalError = function(message) {};

/**
 * @constructor
 * @struct
 * @param {?} innerErrors
 * @param {string=} message
 */
errors.NoHostAvailableError = function(innerErrors, message) {};

/**
 * @constructor
 * @struct
 * @param {string} message
 */
errors.NotSupportedError = function(message) {};
/**
 * @constructor
 * @struct
 */
errors.OperationTimedOutError = function() {};

/**
 * @constructor
 * @struct
 * @param {number} code
 * @param {string} message
 */
errors.ResponseError = function(code, message) {};
/** @const */
var metadata = {};
 /** @type {?} */
metadata.Aggregate;
 /** @type {?} */
metadata.Index;
 /** @type {?} */
metadata.MaterializedView;
 /** @type {?} */
metadata.Metadata;
 /** @type {?} */
metadata.SchemaFunction;
 /** @type {?} */
metadata.TableMetadata;

/** @typedef {string} */
metadata.caching;
/**
 * @record
 * @struct
 */
metadata.AggregateStatic = function() {};

/* TODO: ConstructSignature: metadata */
 /** @type {!Array<?>} */
metadata.Aggregate.prototype.argumentTypes;
 /** @type {string} */
metadata.Aggregate.prototype.finalFunction;
 /** @type {string} */
metadata.Aggregate.prototype.initCondition;
 /** @type {string} */
metadata.Aggregate.prototype.keyspaceName;
 /** @type {string} */
metadata.Aggregate.prototype.returnType;
 /** @type {!Array<string>} */
metadata.Aggregate.prototype.signature;
 /** @type {string} */
metadata.Aggregate.prototype.stateFunction;
 /** @type {string} */
metadata.Aggregate.prototype.stateType;
/**
 * @record
 * @struct
 */
metadata.DataTypeInfo = function() {};
 /** @type {number} */
metadata.DataTypeInfo.prototype.code;
 /** @type {(string|?|!Array<?>)} */
metadata.DataTypeInfo.prototype.info;
 /** @type {?} */
metadata.DataTypeInfo.prototype.options;
/**
 * @record
 * @struct
 */
metadata.ColumnInfo = function() {};
 /** @type {string} */
metadata.ColumnInfo.prototype.name;
 /** @type {?} */
metadata.ColumnInfo.prototype.type;
/**
 * @record
 * @struct
 */
metadata.DataCollection = function() {};
 /** @type {number} */
metadata.DataCollection.prototype.bloomFilterFalsePositiveChance;
 /** @type {string} */
metadata.DataCollection.prototype.caching;
 /** @type {!Array<?>} */
metadata.DataCollection.prototype.clusterKeys;
 /** @type {!Array<string>} */
metadata.DataCollection.prototype.clusteringOrder;
 /** @type {!Array<?>} */
metadata.DataCollection.prototype.columns;
 /** @type {?} */
metadata.DataCollection.prototype.columnsByName;
 /** @type {string} */
metadata.DataCollection.prototype.comment;
 /** @type {string} */
metadata.DataCollection.prototype.compactionClass;
 /** @type {?} */
metadata.DataCollection.prototype.compactionOptions;
 /** @type {?} */
metadata.DataCollection.prototype.compression;
 /** @type {number} */
metadata.DataCollection.prototype.crcCheckChange;
 /** @type {number} */
metadata.DataCollection.prototype.defaultTtl;
 /** @type {?} */
metadata.DataCollection.prototype.extensions;
 /** @type {number} */
metadata.DataCollection.prototype.gcGraceSeconds;
 /** @type {number} */
metadata.DataCollection.prototype.localReadRepairChance;
 /** @type {number} */
metadata.DataCollection.prototype.maxIndexInterval;
 /** @type {number} */
metadata.DataCollection.prototype.minIndexInterval;
 /** @type {string} */
metadata.DataCollection.prototype.name;
 /** @type {!Array<?>} */
metadata.DataCollection.prototype.partitionKeys;
 /** @type {boolean} */
metadata.DataCollection.prototype.populateCacheOnFlush;
 /** @type {number} */
metadata.DataCollection.prototype.readRepairChance;
 /** @type {string} */
metadata.DataCollection.prototype.speculateRetry;

/** @const */
metadata.IndexType = {};
/** @const {number} */
metadata.IndexType.custom;
/** @const {number} */
metadata.IndexType.keys;
/** @const {number} */
metadata.IndexType.composites;
/**
 * @record
 * @struct
 */
metadata.IndexStatic = function() {};

/* TODO: ConstructSignature: metadata */

/**
 * @param {!Array<?>} indexRows
 * @return {!Array<?>}
 */
metadata.IndexStatic.prototype.fromRows = function(indexRows) {};

/**
 * @param {!Array<?>} columnRows
 * @param {?} columnsByName
 * @return {!Array<?>}
 */
metadata.IndexStatic.prototype.fromColumnRows = function(columnRows, columnsByName) {};
 /** @type {?} */
metadata.Index.prototype.kind;
 /** @type {string} */
metadata.Index.prototype.name;
 /** @type {!Object} */
metadata.Index.prototype.options;
 /** @type {string} */
metadata.Index.prototype.target;

/**
 * @return {boolean}
 */
metadata.Index.prototype.isCompositesKind = function() {};

/**
 * @return {boolean}
 */
metadata.Index.prototype.isCustomKind = function() {};

/**
 * @return {boolean}
 */
metadata.Index.prototype.isKeysKind = function() {};
/**
 * @record
 * @struct
 */
metadata.MaterializedViewStatic = function() {};

/* TODO: ConstructSignature: metadata */
/**
 * @record
 * @struct
 */
metadata.MetadataStatic = function() {};

/* TODO: ConstructSignature: metadata */

/**
 * @return {void}
 */
metadata.Metadata.prototype.clearPrepared = function() {};

/**
 * @param {string} keyspaceName
 * @param {string} name
 * @param {(!Array<string>|!Array<?>)} signature
 * @param {!Function} callback
 * @return {void}
 */
metadata.Metadata.prototype.getAggregate = function(keyspaceName, name, signature, callback) {};

/**
 * @param {string} keyspaceName
 * @param {string} name
 * @param {!Function} callback
 * @return {void}
 */
metadata.Metadata.prototype.getAggregates = function(keyspaceName, name, callback) {};

/**
 * @param {string} keyspaceName
 * @param {string} name
 * @param {(!Array<string>|!Array<?>)} signature
 * @param {!Function} callback
 * @return {void}
 */
metadata.Metadata.prototype.getFunction = function(keyspaceName, name, signature, callback) {};

/**
 * @param {string} keyspaceName
 * @param {string} name
 * @param {!Function} callback
 * @return {void}
 */
metadata.Metadata.prototype.getFunctions = function(keyspaceName, name, callback) {};

/**
 * @param {string} keyspaceName
 * @param {string} name
 * @param {!Function} callback
 * @return {void}
 */
metadata.Metadata.prototype.getMaterializedView = function(keyspaceName, name, callback) {};

/**
 * @param {string} keyspaceName
 * @param {?} tokenBuffer
 * @return {!Array<?>}
 */
metadata.Metadata.prototype.getReplicas = function(keyspaceName, tokenBuffer) {};

/**
 * @param {string} keyspaceName
 * @param {string} name
 * @param {!Function} callback
 * @return {void}
 */
metadata.Metadata.prototype.getTable = function(keyspaceName, name, callback) {};

/**
 * @param {?} traceId
 * @param {!Function} callback
 * @return {void}
 */
metadata.Metadata.prototype.getTrace = function(traceId, callback) {};

/**
 * @param {string} keyspaceName
 * @param {string} name
 * @param {!Function} callback
 * @return {void}
 */
metadata.Metadata.prototype.getUdt = function(keyspaceName, name, callback) {};

/**
 * @param {string} name
 * @param {!Function=} callback
 * @return {void}
 */
metadata.Metadata.prototype.refreshKeyspace = function(name, callback) {};

/**
 * @param {!Function=} callback
 * @return {void}
 */
metadata.Metadata.prototype.refreshKeyspaces = function(callback) {};
/**
 * @record
 * @struct
 */
metadata.SchemaFunctionStatic = function() {};

/* TODO: ConstructSignature: metadata */
 /** @type {!Array<string>} */
metadata.SchemaFunction.prototype.argumentNames;
 /** @type {!Array<?>} */
metadata.SchemaFunction.prototype.argumentTypes;
 /** @type {string} */
metadata.SchemaFunction.prototype.body;
 /** @type {boolean} */
metadata.SchemaFunction.prototype.calledOnNullInput;
 /** @type {string} */
metadata.SchemaFunction.prototype.keyspaceName;
 /** @type {string} */
metadata.SchemaFunction.prototype.language;
 /** @type {string} */
metadata.SchemaFunction.prototype.name;
 /** @type {string} */
metadata.SchemaFunction.prototype.returnType;
 /** @type {!Array<string>} */
metadata.SchemaFunction.prototype.signature;
/**
 * @record
 * @struct
 */
metadata.TableMetadataStatic = function() {};

/* TODO: ConstructSignature: metadata */
 /** @type {!Array<?>} */
metadata.TableMetadata.prototype.indexes;
 /** @type {number} */
metadata.TableMetadata.prototype.indexInterval;
 /** @type {boolean} */
metadata.TableMetadata.prototype.isCompact;
 /** @type {number} */
metadata.TableMetadata.prototype.memtableFlushPeriod;
 /** @type {boolean} */
metadata.TableMetadata.prototype.replicateOnWrite;