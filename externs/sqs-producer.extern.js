/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/sqs-producer/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function Options() {}
 /** @type {string} */
Options.prototype.queueUrl;
 /** @type {string} */
Options.prototype.region;
 /** @type {number} */
Options.prototype.batchSize;
 /** @type {!SQS} */
Options.prototype.sqs;

/** @typedef {?} */
var ProducerCallback;
/**
 * @record
 * @struct
 */
function ProducerMessageAttribute() {}
 /** @type {string} */
ProducerMessageAttribute.prototype.DataType;
 /** @type {string} */
ProducerMessageAttribute.prototype.StringValue;
 /** @type {?} */
ProducerMessageAttribute.prototype.BinaryValue;
/**
 * @record
 * @struct
 */
function ProducerMessage() {}
 /** @type {string} */
ProducerMessage.prototype.id;
 /** @type {string} */
ProducerMessage.prototype.body;
 /** @type {?} */
ProducerMessage.prototype.messageAttributes;
 /** @type {number} */
ProducerMessage.prototype.delaySeconds;
/**
 * @record
 * @struct
 */
function Producer() {}

/**
 * @param {(!Array<string>|!Array<?>)} messages
 * @param {?} cb
 * @return {void}
 */
Producer.prototype.send = function(messages, cb) {};

/**
 * @param {?} cb
 * @return {void}
 */
Producer.prototype.queueSize = function(cb) {};

/**
 * @param {?} opts
 * @return {?}
 */
function create(opts) {}
