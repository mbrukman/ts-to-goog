/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/noble/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/**
 * @param {function(!Error): void|!Array<string>=} callback_or_serviceUUIDs
 * @param {function(!Error): void|boolean=} callback_or_allowDuplicates
 * @param {function(!Error): void=} callback
 * @return {void}
 */
function startScanning(callback_or_serviceUUIDs, callback_or_allowDuplicates, callback) {}

/**
 * @param {function(): void=} callback
 * @return {void}
 */
function stopScanning(callback) {}

/**
 * @param {string} event
 * @param {!Function|function(string): void|function(): void|function(!Peripheral): void} listener
 * @return {!internal.EventEmitter}
 */
function on(event, listener) {}
/**
 * @extends {internal.EventEmitter}
 * @constructor
 * @struct
 */
function Peripheral() {}
 /** @type {string} */
Peripheral.prototype.id;
 /** @type {string} */
Peripheral.prototype.uuid;
 /** @type {string} */
Peripheral.prototype.address;
 /** @type {string} */
Peripheral.prototype.addressType;
 /** @type {boolean} */
Peripheral.prototype.connectable;
 /** @type {?} */
Peripheral.prototype.advertisement;
 /** @type {number} */
Peripheral.prototype.rssi;
 /** @type {!Array<!Service>} */
Peripheral.prototype.services;
 /** @type {string} */
Peripheral.prototype.state;

/**
 * @param {function(string): void=} callback
 * @return {void}
 */
Peripheral.prototype.connect = function(callback) {};

/**
 * @param {function(): void=} callback
 * @return {void}
 */
Peripheral.prototype.disconnect = function(callback) {};

/**
 * @param {function(string, number): void=} callback
 * @return {void}
 */
Peripheral.prototype.updateRssi = function(callback) {};

/**
 * @param {!Array<string>} serviceUUIDs
 * @param {function(string, !Array<!Service>): void=} callback
 * @return {void}
 */
Peripheral.prototype.discoverServices = function(serviceUUIDs, callback) {};

/**
 * @param {function(string, !Array<!Service>, !Array<!Characteristic>): void=} callback
 * @return {void}
 */
Peripheral.prototype.discoverAllServicesAndCharacteristics = function(callback) {};

/**
 * @param {!Array<string>} serviceUUIDs
 * @param {!Array<string>} characteristicUUIDs
 * @param {function(string, !Array<!Service>, !Array<!Characteristic>): void=} callback
 * @return {void}
 */
Peripheral.prototype.discoverSomeServicesAndCharacteristics = function(serviceUUIDs, characteristicUUIDs, callback) {};

/**
 * @param {?} handle
 * @param {function(string, ?): void} callback
 * @return {void}
 */
Peripheral.prototype.readHandle = function(handle, callback) {};

/**
 * @param {?} handle
 * @param {?} data
 * @param {boolean} withoutResponse
 * @param {function(string): void} callback
 * @return {void}
 */
Peripheral.prototype.writeHandle = function(handle, data, withoutResponse, callback) {};

/**
 * @return {string}
 */
Peripheral.prototype.toString = function() {};

/**
 * @param {string} event
 * @param {!Function|function(string): void|function(number): void|function(!Array<!Service>): void} listener
 * @return {Peripheral}
 */
Peripheral.prototype.on = function(event, listener) {};
/**
 * @record
 * @struct
 */
function Advertisement() {}
 /** @type {string} */
Advertisement.prototype.localName;
 /** @type {?} */
Advertisement.prototype.serviceData;
 /** @type {number} */
Advertisement.prototype.txPowerLevel;
 /** @type {?} */
Advertisement.prototype.manufacturerData;
 /** @type {!Array<string>} */
Advertisement.prototype.serviceUuids;
/**
 * @extends {internal.EventEmitter}
 * @constructor
 * @struct
 */
function Service() {}
 /** @type {string} */
Service.prototype.uuid;
 /** @type {string} */
Service.prototype.name;
 /** @type {string} */
Service.prototype.type;
 /** @type {!Array<string>} */
Service.prototype.includedServiceUuids;
 /** @type {!Array<!Characteristic>} */
Service.prototype.characteristics;

/**
 * @param {!Array<string>} serviceUUIDs
 * @param {function(string, !Array<string>): void=} callback
 * @return {void}
 */
Service.prototype.discoverIncludedServices = function(serviceUUIDs, callback) {};

/**
 * @param {!Array<string>} characteristicUUIDs
 * @param {function(string, !Array<!Characteristic>): void=} callback
 * @return {void}
 */
Service.prototype.discoverCharacteristics = function(characteristicUUIDs, callback) {};

/**
 * @return {string}
 */
Service.prototype.toString = function() {};

/**
 * @param {string} event
 * @param {!Function|function(!Array<string>): void|function(!Array<!Characteristic>): void} listener
 * @return {Service}
 */
Service.prototype.on = function(event, listener) {};
/**
 * @extends {internal.EventEmitter}
 * @constructor
 * @struct
 */
function Characteristic() {}
 /** @type {string} */
Characteristic.prototype.uuid;
 /** @type {string} */
Characteristic.prototype.name;
 /** @type {string} */
Characteristic.prototype.type;
 /** @type {!Array<string>} */
Characteristic.prototype.properties;
 /** @type {!Array<!Descriptor>} */
Characteristic.prototype.descriptors;

/**
 * @param {function(string, ?): void=} callback
 * @return {void}
 */
Characteristic.prototype.read = function(callback) {};

/**
 * @param {?} data
 * @param {boolean} notify
 * @param {function(string): void=} callback
 * @return {void}
 */
Characteristic.prototype.write = function(data, notify, callback) {};

/**
 * @param {boolean} broadcast
 * @param {function(string): void=} callback
 * @return {void}
 */
Characteristic.prototype.broadcast = function(broadcast, callback) {};

/**
 * @param {boolean} notify
 * @param {function(string): void=} callback
 * @return {void}
 */
Characteristic.prototype.notify = function(notify, callback) {};

/**
 * @param {function(string, !Array<!Descriptor>): void=} callback
 * @return {void}
 */
Characteristic.prototype.discoverDescriptors = function(callback) {};

/**
 * @return {string}
 */
Characteristic.prototype.toString = function() {};

/**
 * @param {function(string): void=} callback
 * @return {void}
 */
Characteristic.prototype.subscribe = function(callback) {};

/**
 * @param {function(string): void=} callback
 * @return {void}
 */
Characteristic.prototype.unsubscribe = function(callback) {};

/**
 * @param {string} event
 * @param {!Function|boolean|function(?, boolean): void|function(string): void|function(!Array<!Descriptor>): void} listener_or_option_or_withoutResponse
 * @param {!Function|function(string): void=} listener
 * @return {Characteristic}
 */
Characteristic.prototype.on = function(event, listener_or_option_or_withoutResponse, listener) {};
/**
 * @extends {internal.EventEmitter}
 * @constructor
 * @struct
 */
function Descriptor() {}
 /** @type {string} */
Descriptor.prototype.uuid;
 /** @type {string} */
Descriptor.prototype.name;
 /** @type {string} */
Descriptor.prototype.type;

/**
 * @param {function(string, ?): void=} callback
 * @return {void}
 */
Descriptor.prototype.readValue = function(callback) {};

/**
 * @param {?} data
 * @param {function(string): void=} callback
 * @return {void}
 */
Descriptor.prototype.writeValue = function(data, callback) {};

/**
 * @return {string}
 */
Descriptor.prototype.toString = function() {};

/**
 * @param {string} event
 * @param {!Function|function(string, ?): void|function(string): void} listener
 * @return {Descriptor}
 */
Descriptor.prototype.on = function(event, listener) {};