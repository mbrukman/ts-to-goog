/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/mqtt/index.d.ts:
/** @const */
var mqtt = {};

/* TODO: ImportEqualsDeclaration in mqtt */

/* TODO: ImportEqualsDeclaration in mqtt */
/**
 * @record
 * @struct
 */
mqtt.Packet = function() {};
 /** @type {number} */
mqtt.Packet.prototype.messageId;

/* TODO: IndexSignature: mqtt */
/**
 * @record
 * @struct
 */
mqtt.Granted = function() {};
 /** @type {string} */
mqtt.Granted.prototype.topic;
 /** @type {number} */
mqtt.Granted.prototype.qos;
/**
 * @record
 * @struct
 */
mqtt.Topic = function() {};

/* TODO: IndexSignature: mqtt */
/**
 * @extends {mqtt.SecureClientOptions}
 * @record
 * @struct
 */
mqtt.ClientOptions = function() {};
 /** @type {number} */
mqtt.ClientOptions.prototype.keepalive;
 /** @type {string} */
mqtt.ClientOptions.prototype.clientId;
 /** @type {string} */
mqtt.ClientOptions.prototype.protocolId;
 /** @type {number} */
mqtt.ClientOptions.prototype.protocolVersion;
 /** @type {boolean} */
mqtt.ClientOptions.prototype.clean;
 /** @type {number} */
mqtt.ClientOptions.prototype.reconnectPeriod;
 /** @type {number} */
mqtt.ClientOptions.prototype.connectTimeout;
 /** @type {string} */
mqtt.ClientOptions.prototype.username;
 /** @type {string} */
mqtt.ClientOptions.prototype.password;
 /** @type {!mqtt.Store} */
mqtt.ClientOptions.prototype.incomingStore;
 /** @type {!mqtt.Store} */
mqtt.ClientOptions.prototype.outgoingStore;
 /** @type {{topic: string, payload: string, qos: number, retain: boolean}} */
mqtt.ClientOptions.prototype.will;
/**
 * @record
 * @struct
 */
mqtt.SecureClientOptions = function() {};
 /** @type {string} */
mqtt.SecureClientOptions.prototype.keyPath;
 /** @type {string} */
mqtt.SecureClientOptions.prototype.certPath;
 /** @type {boolean} */
mqtt.SecureClientOptions.prototype.rejectUnauthorized;
/**
 * @record
 * @struct
 */
mqtt.ClientPublishOptions = function() {};
 /** @type {number} */
mqtt.ClientPublishOptions.prototype.qos;
 /** @type {boolean} */
mqtt.ClientPublishOptions.prototype.retain;
/**
 * @record
 * @struct
 */
mqtt.ClientSubscribeOptions = function() {};
 /** @type {number} */
mqtt.ClientSubscribeOptions.prototype.qos;
/**
 * @record
 * @struct
 */
mqtt.ClientSubscribeCallback = function() {};

/* TODO: CallSignature: mqtt */

/**
 * @deprecated use connect() instead
 * Create a new IClient (see: IClient)
 * 
 * @param {number=} port - broker port (default: 1883)
 * @param {string=} host  - broker host (default: localhost)
 * @param {!mqtt.ClientOptions=} options - connect options
 * @return {!mqtt.Client}
 */
mqtt.createClient = function(port, host, options) {};

/**
 * @deprecated use connect() instead
 * Create a new secure IClient
 * 
 * @param {number=} port
 * @param {string=} host
 * @param {!mqtt.SecureClientOptions=} options - connection options, must include keys.
 * @return {!mqtt.Client}
 */
mqtt.createSecureClient = function(port, host, options) {};

/**
 * Create a new MqttClient (see: IClient)
 * 
 * The brokerUrl supports normal connections using mqtt:// or tcp:// and secure connections using mqtts:// or ssl://.
 * 
 *  Passing the clientId is also supported, for example mqtt://user\@localhost?clientId=123abc.
 * 
 * @param {string} brokerUrl
 * @param {!mqtt.ClientOptions=} options
 * @return {!mqtt.Client}
 */
mqtt.connect = function(brokerUrl, options) {};
/**
 * @record
 * @struct
 */
mqtt.Client = function() {};

/* TODO: CallSignature: mqtt */

/**
 * Publish a message to a topic
 * 
 * @param {string} topic
 * @param {?|string} message
 * @param {!mqtt.ClientPublishOptions=} options
 * @param {!Function=} callback
 * @return {!mqtt.Client}
 */
mqtt.Client.prototype.publish = function(topic, message, options, callback) {};

/**
 * Subscribe to a topic or topics
 * @param {string|!Array<string>|!mqtt.Topic} topic to subscribe to or an Array of topics to subscribe to. It can also be an object.
 * @param {!mqtt.ClientSubscribeOptions=} options
 * @param {!mqtt.ClientSubscribeCallback=} callback fired on suback
 * @return {!mqtt.Client}
 */
mqtt.Client.prototype.subscribe = function(topic, options, callback) {};

/**
 * Unsubscribe from a topic or topics
 * 
 * @param {string|!Array<string>} topic  is a String topic or an array of topics to unsubscribe from
 * @param {!mqtt.ClientSubscribeOptions=} options
 * @param {!mqtt.ClientSubscribeCallback=} callback  fired on unsuback
 * @return {!mqtt.Client}
 */
mqtt.Client.prototype.unsubscribe = function(topic, options, callback) {};

/**
 * end - close connection
 * 
 * @param {boolean=} force passing it to true will close the client right away, without waiting for the in-flight messages to be acked.
 *     This parameter is optional.
 * @param {!Function=} callback
 * @return {!mqtt.Client}
 */
mqtt.Client.prototype.end = function(force, callback) {};

/**
 * Handle messages with backpressure support, one at a time. Override at will, but always call callback, or the client will
 * hang.
 * 
 * @param {!mqtt.Packet} packet
 * @param {!Function} callback
 * @return {!mqtt.Client}
 */
mqtt.Client.prototype.handleMessage = function(packet, callback) {};

/**
 * get last message id. This is for sent messages only.
 * @return {number}
 */
mqtt.Client.prototype.getLastMessageId = function() {};
/**
 * @record
 * @struct
 */
mqtt.Store = function() {};

/**
 * Adds a packet to the store, a packet is anything that has a messageId property. The callback is called when the packet has
 * been stored.
 * @param {!mqtt.Packet} packet
 * @param {!Function} callback
 * @return {!mqtt.Store}
 */
mqtt.Store.prototype.put = function(packet, callback) {};

/**
 * get a packet from the store
 * 
 * @param {!mqtt.Packet} packet
 * @param {!Function} callback
 * @return {!mqtt.Store}
 */
mqtt.Store.prototype.get = function(packet, callback) {};

/**
 * Creates a stream with all the packets in the store.
 * @return {!NodeJS.ReadableStream}
 */
mqtt.Store.prototype.createStream = function() {};

/**
 * Removes a packet from the store, a packet is anything that has a messageId property. The callback is called when the packet
 * has been removed.
 * @param {!mqtt.Packet} packet
 * @param {!Function} callback
 * @return {!mqtt.Store}
 */
mqtt.Store.prototype.del = function(packet, callback) {};

/**
 * Closes the Store.
 * @param {!Function} callback
 * @return {void}
 */
mqtt.Store.prototype.close = function(callback) {};

/**
 * @deprecated use mqtt-connect instead
 * Create a new MqttConnection (see: MqttConnection)
 * 
 * @param {number=} port - broker port (default: 1883)
 * @param {string=} host - broker host (default: localhost)
 * @param {!Function=} callback - fired on underlying stream connect
 * @return {!mqtt.Connection}
 */
mqtt.createConnection = function(port, host, callback) {};
/**
 * @record
 * @struct
 */
mqtt.ConnectOptions = function() {};
 /** @type {string} */
mqtt.ConnectOptions.prototype.protocolId;
 /** @type {number} */
mqtt.ConnectOptions.prototype.protocolVersion;
 /** @type {number} */
mqtt.ConnectOptions.prototype.keepalive;
 /** @type {string} */
mqtt.ConnectOptions.prototype.clientId;
 /** @type {{topic: string, payload: string, qos: number, retain: boolean}} */
mqtt.ConnectOptions.prototype.will;
 /** @type {boolean} */
mqtt.ConnectOptions.prototype.clean;
 /** @type {string} */
mqtt.ConnectOptions.prototype.username;
 /** @type {string} */
mqtt.ConnectOptions.prototype.password;
/**
 * @record
 * @struct
 */
mqtt.ConnectionPublishOptions = function() {};
 /** @type {number} */
mqtt.ConnectionPublishOptions.prototype.messageId;
 /** @type {string} */
mqtt.ConnectionPublishOptions.prototype.topic;
 /** @type {string} */
mqtt.ConnectionPublishOptions.prototype.payload;
 /** @type {number} */
mqtt.ConnectionPublishOptions.prototype.qos;
 /** @type {boolean} */
mqtt.ConnectionPublishOptions.prototype.retain;
/**
 * @record
 * @struct
 */
mqtt.Connection = function() {};

/**
 * Send an MQTT connect packet.
 * @param {!mqtt.ConnectOptions=} options
 * @return {!mqtt.Connection}
 */
mqtt.Connection.prototype.connect = function(options) {};

/**
 * Send an MQTT connack packet.
 * @param {{returnCode: number}=} options
 * @return {!mqtt.Connection}
 */
mqtt.Connection.prototype.connack = function(options) {};

/**
 * Send an MQTT publish packet.
 * @param {!mqtt.ConnectionPublishOptions=} options
 * @return {!mqtt.Connection}
 */
mqtt.Connection.prototype.publish = function(options) {};

/**
 * @deprecated use connect instead
 * Create a new MqttServer (see : IServer)
 * 
 * @param {!Function=} listener - callback called on server client event
 * @return {!mqtt.Server}
 */
mqtt.createServer = function(listener) {};

/**
 * @deprecated use connect instead
 * Create a new MqttSecureServer
 * @param {string} keyPath - path to private key file
 * @param {string} certPath - path to corresponding public cert
 * @param {!Function=} listener - callback called on server client event
 * @return {!mqtt.Server}
 */
mqtt.createSecureServer = function(keyPath, certPath, listener) {};
/**
 * @record
 * @struct
 */
mqtt.Server = function() {};

/* TODO: ExportAssignment in  */
