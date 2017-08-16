/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/kafka-node/index.d.ts:

/**
 * @constructor
 * @struct
 * @param {string} connectionString
 * @param {string=} clientId
 * @param {?=} options
 * @param {?=} noBatchOptions
 * @param {?=} sslOptions
 */
function Client(connectionString, clientId, options, noBatchOptions, sslOptions) {}

/**
 * @param {?=} cb
 * @return {void}
 */
Client.prototype.close = function(cb) {};

/**
 * @param {!Array<string>} topics
 * @param {?} cb
 * @return {void}
 */
Client.prototype.topicExists = function(topics, cb) {};

/**
 * @param {!Array<string>} topics
 * @param {?=} cb
 * @return {void}
 */
Client.prototype.refreshMetadata = function(topics, cb) {};

/**
 * @param {string} group
 * @param {number} generationId
 * @param {string} memberId
 * @param {!Array<?>} commits
 * @param {?} cb
 * @return {void}
 */
Client.prototype.sendOffsetCommitV2Request = function(group, generationId, memberId, commits, cb) {};

/**
 * @constructor
 * @struct
 * @param {?=} options
 */
function KafkaClient(options) {}

/**
 * @param {string} eventName
 * @param {?} cb
 * @return {?}
 */
KafkaClient.prototype.on = function(eventName, cb) {};

/**
 * @return {void}
 */
KafkaClient.prototype.connect = function() {};

/**
 * @constructor
 * @struct
 * @param {?} client
 * @param {?=} options
 * @param {?=} customPartitioner
 */
function Producer(client, options, customPartitioner) {}

/**
 * @param {string} eventName
 * @param {?} cb
 * @return {void}
 */
Producer.prototype.on = function(eventName, cb) {};

/**
 * @param {!Array<?>} payloads
 * @param {?} cb
 * @return {void}
 */
Producer.prototype.send = function(payloads, cb) {};

/**
 * @param {!Array<string>} topics
 * @param {boolean|?} async_or_cb
 * @param {?=} cb
 * @return {void}
 */
Producer.prototype.createTopics = function(topics, async_or_cb, cb) {};

/**
 * @param {?=} cb
 * @return {void}
 */
Producer.prototype.close = function(cb) {};
/**
 * @constructor
 * @struct
 */
function HighLevelProducer() {}

/**
 * @constructor
 * @struct
 * @param {?} client
 * @param {!Array<(string|?)>} fetchRequests
 * @param {?} options
 */
function Consumer(client, fetchRequests, options) {}
 /** @type {?} */
Consumer.prototype.client;

/**
 * @param {string} eventName
 * @param {?} cb
 * @return {void}
 */
Consumer.prototype.on = function(eventName, cb) {};

/**
 * @param {(!Array<string>|!Array<?>)} topics
 * @param {?} cb
 * @param {boolean=} fromOffset
 * @return {void}
 */
Consumer.prototype.addTopics = function(topics, cb, fromOffset) {};

/**
 * @param {(string|!Array<string>)} topics
 * @param {?} cb
 * @return {void}
 */
Consumer.prototype.removeTopics = function(topics, cb) {};

/**
 * @param {?|boolean} cb_or_force
 * @param {?=} cb
 * @return {void}
 */
Consumer.prototype.commit = function(cb_or_force, cb) {};

/**
 * @param {string} topic
 * @param {number} partition
 * @param {number} offset
 * @return {void}
 */
Consumer.prototype.setOffset = function(topic, partition, offset) {};

/**
 * @return {void}
 */
Consumer.prototype.pause = function() {};

/**
 * @return {void}
 */
Consumer.prototype.resume = function() {};

/**
 * @param {!Array<?>} topics
 * @return {void}
 */
Consumer.prototype.pauseTopics = function(topics) {};

/**
 * @param {!Array<?>} topics
 * @return {void}
 */
Consumer.prototype.resumeTopics = function(topics) {};

/**
 * @param {boolean|?} force_or_cb
 * @param {?=} cb
 * @return {void}
 */
Consumer.prototype.close = function(force_or_cb, cb) {};

/**
 * @constructor
 * @struct
 * @param {?} client
 * @param {!Array<?>} payloads
 * @param {?} options
 */
function HighLevelConsumer(client, payloads, options) {}
 /** @type {?} */
HighLevelConsumer.prototype.client;

/**
 * @param {string} eventName
 * @param {?} cb
 * @return {void}
 */
HighLevelConsumer.prototype.on = function(eventName, cb) {};

/**
 * @param {(!Array<string>|!Array<?>)} topics
 * @param {?=} cb
 * @return {void}
 */
HighLevelConsumer.prototype.addTopics = function(topics, cb) {};

/**
 * @param {(string|!Array<string>)} topics
 * @param {?} cb
 * @return {void}
 */
HighLevelConsumer.prototype.removeTopics = function(topics, cb) {};

/**
 * @param {?|boolean} cb_or_force
 * @param {?=} cb
 * @return {void}
 */
HighLevelConsumer.prototype.commit = function(cb_or_force, cb) {};

/**
 * @param {!Array<?>} commits
 * @param {?} cb
 * @return {void}
 */
HighLevelConsumer.prototype.sendOffsetCommitRequest = function(commits, cb) {};

/**
 * @param {string} topic
 * @param {number} partition
 * @param {number} offset
 * @return {void}
 */
HighLevelConsumer.prototype.setOffset = function(topic, partition, offset) {};

/**
 * @return {void}
 */
HighLevelConsumer.prototype.pause = function() {};

/**
 * @return {void}
 */
HighLevelConsumer.prototype.resume = function() {};

/**
 * @param {boolean|?} force_or_cb
 * @param {?=} cb
 * @return {void}
 */
HighLevelConsumer.prototype.close = function(force_or_cb, cb) {};

/**
 * @constructor
 * @struct
 * @param {?} options
 * @param {(string|!Array<string>)} topics
 */
function ConsumerGroup(options, topics) {}
 /** @type {number} */
ConsumerGroup.prototype.generationId;
 /** @type {string} */
ConsumerGroup.prototype.memberId;
 /** @type {?} */
ConsumerGroup.prototype.client;

/**
 * @constructor
 * @struct
 * @param {?} client
 */
function Offset(client) {}

/**
 * @param {string} eventName
 * @param {?} cb
 * @return {void}
 */
Offset.prototype.on = function(eventName, cb) {};

/**
 * @param {!Array<?>} payloads
 * @param {?} cb
 * @return {void}
 */
Offset.prototype.fetch = function(payloads, cb) {};

/**
 * @param {string} groupId
 * @param {!Array<?>} payloads
 * @param {?} cb
 * @return {void}
 */
Offset.prototype.commit = function(groupId, payloads, cb) {};

/**
 * @param {string} groupId
 * @param {!Array<?>} payloads
 * @param {?} cb
 * @return {void}
 */
Offset.prototype.fetchCommits = function(groupId, payloads, cb) {};

/**
 * @param {!Array<string>} topics
 * @param {?} cb
 * @return {void}
 */
Offset.prototype.fetchLatestOffsets = function(topics, cb) {};

/**
 * @param {!Array<string>} topics
 * @param {?} cb
 * @return {void}
 */
Offset.prototype.fetchEarliestOffsets = function(topics, cb) {};

/**
 * @constructor
 * @struct
 * @param {string} key
 * @param {string} message
 */
function KeyedMessage(key, message) {}
/**
 * @record
 * @struct
 */
function Message() {}
 /** @type {string} */
Message.prototype.topic;
 /** @type {string} */
Message.prototype.value;
 /** @type {number} */
Message.prototype.offset;
 /** @type {number} */
Message.prototype.partition;
 /** @type {number} */
Message.prototype.highWaterOffset;
 /** @type {number} */
Message.prototype.key;
/**
 * @record
 * @struct
 */
function ProducerOptions() {}
 /** @type {number} */
ProducerOptions.prototype.requireAcks;
 /** @type {number} */
ProducerOptions.prototype.ackTimeoutMs;
 /** @type {number} */
ProducerOptions.prototype.partitionerType;
/**
 * @record
 * @struct
 */
function KafkaClientOptions() {}
 /** @type {string} */
KafkaClientOptions.prototype.kafkaHost;
 /** @type {number} */
KafkaClientOptions.prototype.connectTimeout;
 /** @type {number} */
KafkaClientOptions.prototype.requestTimeout;
 /** @type {boolean} */
KafkaClientOptions.prototype.autoConnect;
 /** @type {?} */
KafkaClientOptions.prototype.connectRetryOptions;
 /** @type {?} */
KafkaClientOptions.prototype.sslOptions;
 /** @type {string} */
KafkaClientOptions.prototype.clientId;
/**
 * @record
 * @struct
 */
function RetryOptions() {}
 /** @type {number} */
RetryOptions.prototype.retries;
 /** @type {number} */
RetryOptions.prototype.factor;
 /** @type {number} */
RetryOptions.prototype.minTimeout;
 /** @type {number} */
RetryOptions.prototype.maxTimeout;
 /** @type {boolean} */
RetryOptions.prototype.randomize;
/**
 * @record
 * @struct
 */
function AckBatchOptions() {}
 /** @type {number} */
AckBatchOptions.prototype.noAckBatchSize;
 /** @type {number} */
AckBatchOptions.prototype.noAckBatchAge;
/**
 * @record
 * @struct
 */
function ZKOptions() {}
 /** @type {number} */
ZKOptions.prototype.sessionTimeout;
 /** @type {number} */
ZKOptions.prototype.spinDelay;
 /** @type {number} */
ZKOptions.prototype.retries;
/**
 * @record
 * @struct
 */
function ProduceRequest() {}
 /** @type {string} */
ProduceRequest.prototype.topic;
 /** @type {?} */
ProduceRequest.prototype.messages;
 /** @type {?} */
ProduceRequest.prototype.key;
 /** @type {number} */
ProduceRequest.prototype.partition;
 /** @type {number} */
ProduceRequest.prototype.attributes;
/**
 * @record
 * @struct
 */
function ConsumerOptions() {}
 /** @type {string} */
ConsumerOptions.prototype.groupId;
 /** @type {boolean} */
ConsumerOptions.prototype.autoCommit;
 /** @type {number} */
ConsumerOptions.prototype.autoCommitIntervalMs;
 /** @type {number} */
ConsumerOptions.prototype.fetchMaxWaitMs;
 /** @type {number} */
ConsumerOptions.prototype.fetchMinBytes;
 /** @type {number} */
ConsumerOptions.prototype.fetchMaxBytes;
 /** @type {boolean} */
ConsumerOptions.prototype.fromOffset;
 /** @type {string} */
ConsumerOptions.prototype.encoding;
 /** @type {string} */
ConsumerOptions.prototype.keyEncoding;
/**
 * @extends {ConsumerOptions}
 * @record
 * @struct
 */
function HighLevelConsumerOptions() {}
 /** @type {string} */
HighLevelConsumerOptions.prototype.id;
 /** @type {number} */
HighLevelConsumerOptions.prototype.maxNumSegments;
 /** @type {number} */
HighLevelConsumerOptions.prototype.maxTickMessages;
 /** @type {?} */
HighLevelConsumerOptions.prototype.rebalanceRetry;
/**
 * @record
 * @struct
 */
function CustomPartitionAssignmentProtocol() {}
 /** @type {string} */
CustomPartitionAssignmentProtocol.prototype.name;
 /** @type {number} */
CustomPartitionAssignmentProtocol.prototype.version;
 /** @type {!Object} */
CustomPartitionAssignmentProtocol.prototype.userData;

/**
 * @param {?} topicPattern
 * @param {?} groupMembers
 * @param {?} cb
 * @return {void}
 */
CustomPartitionAssignmentProtocol.prototype.assign = function(topicPattern, groupMembers, cb) {};
/**
 * @record
 * @struct
 */
function ConsumerGroupOptions() {}
 /** @type {string} */
ConsumerGroupOptions.prototype.kafkaHost;
 /** @type {string} */
ConsumerGroupOptions.prototype.host;
 /** @type {?} */
ConsumerGroupOptions.prototype.zk;
 /** @type {?} */
ConsumerGroupOptions.prototype.batch;
 /** @type {boolean} */
ConsumerGroupOptions.prototype.ssl;
 /** @type {string} */
ConsumerGroupOptions.prototype.id;
 /** @type {string} */
ConsumerGroupOptions.prototype.groupId;
 /** @type {number} */
ConsumerGroupOptions.prototype.sessionTimeout;
 /** @type {!Array<(string|?)>} */
ConsumerGroupOptions.prototype.protocol;
 /** @type {string} */
ConsumerGroupOptions.prototype.fromOffset;
 /** @type {string} */
ConsumerGroupOptions.prototype.outOfRangeOffset;
 /** @type {boolean} */
ConsumerGroupOptions.prototype.migrateHLC;
 /** @type {boolean} */
ConsumerGroupOptions.prototype.migrateRolling;
 /** @type {boolean} */
ConsumerGroupOptions.prototype.autoCommit;
 /** @type {number} */
ConsumerGroupOptions.prototype.autoCommitIntervalMs;
 /** @type {number} */
ConsumerGroupOptions.prototype.fetchMaxWaitMs;
 /** @type {number} */
ConsumerGroupOptions.prototype.maxNumSegments;
 /** @type {number} */
ConsumerGroupOptions.prototype.maxTickMessages;
 /** @type {number} */
ConsumerGroupOptions.prototype.fetchMinBytes;
 /** @type {number} */
ConsumerGroupOptions.prototype.fetchMaxBytes;
 /** @type {number} */
ConsumerGroupOptions.prototype.retries;
 /** @type {number} */
ConsumerGroupOptions.prototype.retryFactor;
 /** @type {number} */
ConsumerGroupOptions.prototype.retryMinTimeout;
 /** @type {boolean} */
ConsumerGroupOptions.prototype.connectOnReady;
/**
 * @record
 * @struct
 */
function Topic() {}
 /** @type {string} */
Topic.prototype.topic;
 /** @type {number} */
Topic.prototype.offset;
 /** @type {string} */
Topic.prototype.encoding;
 /** @type {boolean} */
Topic.prototype.autoCommit;
/**
 * @record
 * @struct
 */
function OffsetRequest() {}
 /** @type {string} */
OffsetRequest.prototype.topic;
 /** @type {number} */
OffsetRequest.prototype.partition;
 /** @type {number} */
OffsetRequest.prototype.time;
 /** @type {number} */
OffsetRequest.prototype.maxNum;
/**
 * @record
 * @struct
 */
function OffsetCommitRequest() {}
 /** @type {string} */
OffsetCommitRequest.prototype.topic;
 /** @type {number} */
OffsetCommitRequest.prototype.partition;
 /** @type {number} */
OffsetCommitRequest.prototype.offset;
 /** @type {string} */
OffsetCommitRequest.prototype.metadata;
/**
 * @record
 * @struct
 */
function OffsetFetchRequest() {}
 /** @type {string} */
OffsetFetchRequest.prototype.topic;
 /** @type {number} */
OffsetFetchRequest.prototype.partition;
 /** @type {number} */
OffsetFetchRequest.prototype.offset;
/**
 * @constructor
 * @struct
 */
function TopicsNotExistError() {}
 /** @type {(string|!Array<string>)} */
TopicsNotExistError.prototype.topics;

/** @typedef {?} */
var CustomPartitioner;