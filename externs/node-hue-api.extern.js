/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/node-hue-api/index.d.ts:

/**
 * Will locate the Philips Hue Devices on the network. Depending upon the speed and size of the network the timeout
 * may need to be adjusted to locate the Hue Bridge.
 * 
 * @param {number} timeout The maximum time to wait for Hue Devices to be located. If not specified will use the default of 5 seconds.
 * @return {!Array<?>} A promise that will resolve the Hue Bridges as an Array of {"id": {String}, "ipaddress": {String}} objects.
 */
function upnpSearch(timeout) {}

/**
 * Uses the http://www.meethue.com/api/nupnp call to search for any bridges locally on the network. This lookup can be
 * significantly faster than issuing search requests in the {locateBridges} function.
 * 
 * @return {!Promise<!Array<?>>}
 */
function nupnpSearch() {}

/**
 * @constructor
 * @struct
 * @param {!Object} error
 */
function ApiError(error) {}
 /** @type {string} */
ApiError.prototype.name;
 /** @type {string} */
ApiError.prototype.message;
 /** @type {?} */
ApiError.prototype.type;
 /** @type {string} */
ApiError.prototype.address;

/**
 * @constructor
 * @struct
 * Creates an instance of HueApi.
 * @param {string=} host
 * @param {string=} username
 * @param {number=} timeout
 * @param {number=} port
 */
function HueApi(host, username, timeout, port) {}

/**
 * Gets the version data for the Philips Hue Bridge.
 * 
 * @return {!Promise<?>}
 */
HueApi.prototype.getVersion = function() {};

/**
 * @return {!Promise<?>}
 */
HueApi.prototype.version = function() {};

/**
 * Loads the description for the Philips Hue.
 * 
 * @return {!Promise<?>}
 */
HueApi.prototype.description = function() {};

/**
 * @return {!Promise<?>}
 */
HueApi.prototype.getDescription = function() {};

/**
 * Reads the bridge configuration and returns it as a JSON object.
 * 
 * @return {!Promise<?>}
 */
HueApi.prototype.config = function() {};

/**
 * @return {!Promise<?>}
 */
HueApi.prototype.getConfig = function() {};

/**
 * Obtains the complete state for the Bridge. This is considered to be a very expensive operation and should not be invoked
 * frequently. The results detail all config, users, groups, schedules and lights for the system.
 * 
 * @return {!Promise<?>}
 */
HueApi.prototype.getFullState = function() {};

/**
 * @return {!Promise<?>}
 */
HueApi.prototype.fullState = function() {};

/**
 * Allows a new user/device to be registered with the Philips Hue Bridge. This will return the name of the user that was
 * created by the function call.
 * 
 * This function does not require the HueApi to have been initialized with a host or username. It does however require
 * the end user to have pressed the link button on the bridge, before invoking this function.
 * 
 * @param {string} host The hostname or IP Address of the Hue Bridge.
 * @param {string=} deviceDescription The description for the user/device that is being registered. This is a human readable
 * description of the user/device. If one is not provided then a default will be set.
 * @return {!Promise<string>}
 */
HueApi.prototype.registerUser = function(host, deviceDescription) {};

/**
 * @param {string} host
 * @param {string=} deviceDescription
 * @return {!Promise<string>}
 */
HueApi.prototype.createUser = function(host, deviceDescription) {};

/**
 * Presses the Link Button on the Bridge (without the user actually having to do it). If successful then {true} will be
 * returned as the result.
 * 
 * @return {!Promise<boolean>}
 */
HueApi.prototype.pressLinkButton = function() {};

/**
 * Deletes an existing user from the Phillips Hue Bridge.
 * 
 * @param {string} username The username of the user to delete.
 * @return {!Promise<boolean>}
 */
HueApi.prototype.deleteUser = function(username) {};

/**
 * @param {string} username
 * @return {!Promise<boolean>}
 */
HueApi.prototype.unregisterUser = function(username) {};

/**
 * Obtain a list of registered "users" or "devices" that can interact with the Philips Hue.
 * 
 * @return {!Promise<?>} A promise that will provide the results of registered users, or <null> if a callback was provided.
 */
HueApi.prototype.registeredUsers = function() {};

/**
 * @return {!Promise<?>}
 */
HueApi.prototype.getRegisteredUsers = function() {};

/**
 * Obtains the details of the individual sensors that are attached to the Philips Hue.
 * 
 * @return {!Promise<?>} A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
HueApi.prototype.sensors = function() {};

/**
 * @return {!Promise<?>}
 */
HueApi.prototype.getSensors = function() {};

/**
 * Obtains the details of the individual lights that are attached to the Philips Hue.
 * 
 * @return {!Promise<?>} A promise that will be provided with the lights object, or {null} if a callback function was provided.
 */
HueApi.prototype.lights = function() {};

/**
 * @return {!Promise<?>}
 */
HueApi.prototype.getLights = function() {};

/**
 * Obtains the status of the specified light.
 * 
 * @param {(string|number)} id The id of the light as an integer, this value will be parsed into an integer value so can be a {String} or
 * {Number} value.
 * @return {!Promise<?>} A promise that will be provided with the light status, or {null} if a callback function was provided.
 */
HueApi.prototype.lightStatus = function(id) {};

/**
 * @param {(string|number)} id
 * @return {!Promise<?>}
 */
HueApi.prototype.getLightStatus = function(id) {};

/**
 * @param {(string|number)} id
 * @return {!Promise<?>}
 */
HueApi.prototype.lightStatusWithRGB = function(id) {};

/**
 * @param {(string|number)} id
 * @return {!Promise<?>}
 */
HueApi.prototype.getLightStatusWithRGB = function(id) {};

/**
 * Obtains the new lights found by the bridge, dependant upon the last search.
 * 
 * @return {!Promise<?>} A promise that will be provided with the new lights search result, or {null} if a callback function was provided.
 */
HueApi.prototype.newLights = function() {};

/**
 * @return {!Promise<?>}
 */
HueApi.prototype.getNewLights = function() {};

/**
 * Starts a search for new lights.
 * 
 * @return {!Promise<boolean>} A promise that will be provided with the new lights, or {null} if a callback function was provided.
 */
HueApi.prototype.searchForNewLights = function() {};

/**
 * Sets the name of a light on the Bridge.
 * 
 * @param {(string|number)} id The ID of the light to set the name for.
 * @param {string} name The name to apply to the light.
 * @return {!Promise<boolean>} A promise that will be provided with the results of setting the name, or {null} if a callback function was provided.
 */
HueApi.prototype.setLightName = function(id, name) {};

/**
 * Sets the light state to the provided values.
 * 
 * @param {(string|number)} id The id of the light which is an integer or a value that can be parsed into an integer value.
 * @param {(!Object|?)} stateValues {lightState.State} containing the properties and values to set on the light.
 * @return {!Promise<boolean>} A promise that will set the specified state on the light, or {null} if a callback was provided.
 */
HueApi.prototype.setLightState = function(id, stateValues) {};

/**
 * Sets the light state to the provided values for an entire group.
 * 
 * @param {(string|number)} id The id of the group which is an integer or a value that can be parsed into an integer value.
 * @param {(!Object|?)} stateValues {lightState.State} containing the properties and values to set on the light.
 * @return {!Promise<boolean>}
 */
HueApi.prototype.setGroupLightState = function(id, stateValues) {};

/**
 * Obtains all the groups from the Hue Bridge as an Array of {id: {*}, name: {*}} objects.
 * 
 * @return {!Promise<!Array<?>>} A promise that will obtain the groups, or {null} if a callback was provided.
 */
HueApi.prototype.groups = function() {};

/**
 * @return {!Promise<!Array<?>>}
 */
HueApi.prototype.getGroups = function() {};

/**
 * @return {!Promise<!Array<?>>}
 */
HueApi.prototype.getAllGroups = function() {};

/**
 * Obtains all the Luminaires from the Hue Bridge as an Array of {id: {*}, name: {*}} objects.
 * 
 * @return {!Promise<!Array<?>>} A promise that will obtain the luminaires, or {null} if a callback was provided.
 */
HueApi.prototype.luminaires = function() {};

/**
 * @return {!Promise<!Array<?>>}
 */
HueApi.prototype.getLuminaires = function() {};

/**
 * Obtains all the LightSources from the Hue Bridge as an Array of {id: {*}, name: {*}} objects.
 * 
 * @return {!Promise<!Array<?>>} A promise that will obtain the lightsources, or {null} if a callback was provided.
 */
HueApi.prototype.lightSources = function() {};

/**
 * @return {!Promise<!Array<?>>}
 */
HueApi.prototype.getLightSources = function() {};

/**
 * Obtains all the LightGroups from the Hue Bridge as an Array of {id: {*}, name: {*}} objects.
 * 
 * @return {!Promise<!Array<?>>} A promise that will obtain the LightGroups, or {null} if a callback was provided.
 */
HueApi.prototype.lightGroups = function() {};

/**
 * @return {!Promise<!Array<?>>}
 */
HueApi.prototype.getLightGroups = function() {};

/**
 * Obtains the details for a specified group in a format of {id: {*}, name: {*}, lights: [], lastAction: {*}}.
 * 
 * @param {(string|number)} id {Number} or {String} which is the id of the group to get the details for.
 * @return {!Promise<?>} A promise that will set the specified state on the light, or {null} if a callback was provided.
 */
HueApi.prototype.getGroup = function(id) {};

/**
 * @param {(string|number)} id
 * @return {!Promise<?>}
 */
HueApi.prototype.group = function(id) {};

/**
 * Updates a light group to the specified name and/or lights ids. The name and light ids can be specified independently or
 * together when calling this function.
 * 
 * @param {(string|number)} id The id of the group to update the name and/or light ids associated with it.
 * @param {string} name {String} The name of the group
 * @param {!Array<string>} lightIds {Array} An array of light ids to be assigned to the group. If any of the ids are not present in the
 * bridge the creation will fail with an error being produced.
 * @param {?=} cb
 * @return {!Promise<boolean>|void} A promise with a result of <true> if the update was successful, or null if a callback was provided.
 */
HueApi.prototype.updateGroup = function(id, name, lightIds, cb) {};

/**
 * Creates a new light Group.
 * 
 * @param {string} name The name of the group that we are creating, limited to 16 characters.
 * @param {!Array<string>} lightIds {Array} of ids for the lights to be included in the group.
 * @return {!Promise<string>}
 */
HueApi.prototype.createGroup = function(name, lightIds) {};

/**
 * Deletes a group with the specified id, returning <true> if the action was successful.
 * 
 * @param {(string|number)} id The id of the group to delete.
 * @return {!Promise<boolean>}
 */
HueApi.prototype.deleteGroup = function(id) {};

/**
 * Gets the schedules on the Bridge, as an array of {"id": {String}, "name": {String}} objects.
 * 
 * @return {!Promise<!Array<?>>} A promise that will return the results or <null> if a callback was provided.
 */
HueApi.prototype.schedules = function() {};

/**
 * @return {!Promise<!Array<?>>}
 */
HueApi.prototype.getSchedules = function() {};

/**
 * Gets the specified schedule by id, which is in an identical format the the Hue API documentation, with the addition
 * of an "id" value for the schedule.
 * 
 * @param {(string|number)} id The id of the schedule to retrieve.
 * @return {!Promise<?>} A promise that will return the results or <null> if a callback was provided.
 */
HueApi.prototype.schedule = function(id) {};

/**
 * @param {(string|number)} id
 * @return {!Promise<?>}
 */
HueApi.prototype.getSchedule = function(id) {};

/**
 * Creates a one time scheduled event. The results from this function is the id of the created schedule. The bridge only
 * supports 100 schedules, so once they are triggered, they are removed from the bridge.
 * 
 * @param {?} schedule {ScheduledEvent}
 * @return {!Promise<string>} A promise that will return the id value of the schedule that was created, or <null> if a callback was provided.
 */
HueApi.prototype.scheduleEvent = function(schedule) {};

/**
 * @param {?} schedule
 * @return {!Promise<string>}
 */
HueApi.prototype.createSchedule = function(schedule) {};

/**
 * Deletes a schedule by id, returning {true} if the deletion was successful.
 * 
 * @param {(string|number)} id of the schedule
 * @return {!Promise<!Object>}
 */
HueApi.prototype.deleteSchedule = function(id) {};

/**
 * Updates an existing schedule event with the provided details.
 * 
 * @param {(string|number)} id The id of the schedule being updated.
 * @param {?} schedule The object containing the details to update for the existing schedule event.
 * @return {!Promise<?>}
 */
HueApi.prototype.updateSchedule = function(id, schedule) {};

/**
 * Gets the scenes on the Bridge, as an array of {"id": {String}, "name": {String}, "lights": {Array}, "active": {Boolean}}
 * objects.
 * 
 * @return {!Promise<!Array<?>>} A promise that will return the results or <null> if a callback was provided.
 */
HueApi.prototype.scenes = function() {};

/**
 * @return {!Promise<!Array<?>>}
 */
HueApi.prototype.getScenes = function() {};

/**
 * Obtains a scene by a given id.
 * @param {(string|number)} id
 * @return {!Promise<?>} A promise that will return the scene or <null> if a callback was provided.
 */
HueApi.prototype.scene = function(id) {};

/**
 * @param {(string|number)} id
 * @return {!Promise<?>}
 */
HueApi.prototype.getScene = function(id) {};

/**
 * Deletes a Scene (that is stored inside the bridge, not in the lights).
 * @param {(string|number)} id
 * @return {!Promise<!Object>}
 */
HueApi.prototype.deleteScene = function(id) {};

/**
 * Creates a new Scene.
 * When the scene is created, it will store the current state of the lights and will use those "current" settings
 * when the scene is recalled/activated later.
 * 
 * There are two variants to this function, one that accepts lightIds and a name and another that takes a Scene object.
 * The former is to maintain backwards compatibility with the 1.2.x version of this library.
 * 
 * @param {?|(!Array<string>|!Array<number>)} scene_or_lightIds Scene configuration to create
 * @param {string=} name
 * @return {!Promise<?>}
 */
HueApi.prototype.createScene = function(scene_or_lightIds, name) {};

/**
 * Provides backwards compatibility for < 1.11.x versions of the Hue Bridge Firmware.
 * @param {(!Array<string>|!Array<number>)} lightIds Lights to include in the scene
 * @param {string} name Name to use for the scene
 * @return {!Promise<?>}
 */
HueApi.prototype.createBasicScene = function(lightIds, name) {};

/**
 * Provides scene creation for >= 1.11.x firmware versions of the Hue Bridge.
 * @param {?} scene The Scene object containing the details of the scene to be created.
 * @return {!Promise<?>}
 */
HueApi.prototype.createAdvancedScene = function(scene) {};

/**
 * Update the lights and/or name associated with a scene (or will create a new one if the
 * sceneId is not present in the bridge).
 * 
 * @param {(string|number)} sceneId {String} The id for the scene in the bridge
 * @param {?} scene The configuration of the scene with the details to modify, which can be either a name or an array of
 * light ids.
 * @param {boolean} storeLightState {Boolean} flag to save the current light state of the lights in the scene.
 * 
 * @return {!Promise<?>}
 */
HueApi.prototype.updateScene = function(sceneId, scene, storeLightState) {};

/**
 * @param {(string|number)} sceneId
 * @param {?} scene
 * @param {boolean} storeLightState
 * @return {!Promise<?>}
 */
HueApi.prototype.modifyScene = function(sceneId, scene, storeLightState) {};

/**
 * Modifies the light state of one of the lights in a scene.
 * 
 * @param {(string|number)} sceneId The scene id, which if it does not exist a new scene will be created.
 * @param {(string|number)} lightId integer The id of light that is having the state values set.
 * @param {(!Object|?)} stateValues {IState} containing the properties and values to set on the light.
 * 
 * @return {!Promise<?>} A promise that will return the state values on the light, or {null} if a callback was provided.
 */
HueApi.prototype.setSceneLightState = function(sceneId, lightId, stateValues) {};

/**
 * @param {(string|number)} sceneId
 * @param {(string|number)} lightId
 * @param {(!Object|?)} stateValues
 * @return {!Promise<?>}
 */
HueApi.prototype.updateSceneLightState = function(sceneId, lightId, stateValues) {};

/**
 * @param {(string|number)} sceneId
 * @param {(string|number)} lightId
 * @param {(!Object|?)} stateValues
 * @return {!Promise<?>}
 */
HueApi.prototype.modifySceneLightState = function(sceneId, lightId, stateValues) {};

/**
 * Helper-function that recalls a scene for a group using setGroupLightState. Reason for existence is simplicity for
 * user.
 * 
 * @param {(string|number)} sceneId The id of the scene to activate, which is an integer or a value that can be parsed into an integer value.
 * @param {(string|number)=} groupIdFilter An optional group filter to apply to the scene, to select a sub set of the lights in the scene. This can
 * be {null} or {undefined} to not apply a filter.
 * @return {!Promise<boolean>} A promise that will set activate the scene, or {null} if a callback was provided.
 */
HueApi.prototype.activateScene = function(sceneId, groupIdFilter) {};

/**
 * @param {(string|number)} sceneId
 * @param {(string|number)=} groupIdFilter
 * @return {!Promise<boolean>}
 */
HueApi.prototype.recallScene = function(sceneId, groupIdFilter) {};

/**
 * Obtains all the allowed timezones from the bridge.
 * 
 * @return {!Promise<!Array<string>>}
 */
HueApi.prototype.getTimezones = function() {};

/**
 * @return {!Promise<!Array<string>>}
 */
HueApi.prototype.timezones = function() {};

/** @typedef {?} */
var BridgeApi;

/** @typedef {?} */
var api;
/**
 * @record
 * @struct
 */
function IBridgeVersion() {}
 /** @type {string} */
IBridgeVersion.prototype.name;
 /** @type {?} */
IBridgeVersion.prototype.version;
/**
 * @record
 * @struct
 */
function IUpnpSearchResultItem() {}
 /** @type {string} */
IUpnpSearchResultItem.prototype.id;
 /** @type {string} */
IUpnpSearchResultItem.prototype.ipaddress;
/**
 * @record
 * @struct
 */
function IBridgeIcon() {}
 /** @type {string} */
IBridgeIcon.prototype.mimetype;
 /** @type {string} */
IBridgeIcon.prototype.height;
 /** @type {string} */
IBridgeIcon.prototype.width;
 /** @type {string} */
IBridgeIcon.prototype.depth;
 /** @type {string} */
IBridgeIcon.prototype.url;
/**
 * @record
 * @struct
 */
function IBridgeDescription() {}
 /** @type {?} */
IBridgeDescription.prototype.version;
 /** @type {string} */
IBridgeDescription.prototype.url;
 /** @type {string} */
IBridgeDescription.prototype.name;
 /** @type {string} */
IBridgeDescription.prototype.manufacturer;
 /** @type {?} */
IBridgeDescription.prototype.model;
 /** @type {!Array<?>} */
IBridgeDescription.prototype.icons;

/** @typedef {string} */
var BackupStatus;
/**
 * @record
 * @struct
 */
function IBridgeConfig() {}
 /** @type {string} */
IBridgeConfig.prototype.name;
 /** @type {number} */
IBridgeConfig.prototype.zigbeechannel;
 /** @type {string} */
IBridgeConfig.prototype.bridgeid;
 /** @type {string} */
IBridgeConfig.prototype.mac;
 /** @type {boolean} */
IBridgeConfig.prototype.dhcp;
 /** @type {string} */
IBridgeConfig.prototype.ipaddress;
 /** @type {string} */
IBridgeConfig.prototype.netmask;
 /** @type {string} */
IBridgeConfig.prototype.gateway;
 /** @type {string} */
IBridgeConfig.prototype.proxyaddress;
 /** @type {number} */
IBridgeConfig.prototype.proxyport;
 /** @type {!Date} */
IBridgeConfig.prototype.UTC;
 /** @type {!Date} */
IBridgeConfig.prototype.localtime;
 /** @type {string} */
IBridgeConfig.prototype.timezone;
 /** @type {string} */
IBridgeConfig.prototype.modelid;
 /** @type {string} */
IBridgeConfig.prototype.swversion;
 /** @type {string} */
IBridgeConfig.prototype.apiversion;
 /** @type {?} */
IBridgeConfig.prototype.swupdate;
 /** @type {boolean} */
IBridgeConfig.prototype.linkbutton;
 /** @type {boolean} */
IBridgeConfig.prototype.portalservices;
 /** @type {string} */
IBridgeConfig.prototype.portalconnection;
 /** @type {?} */
IBridgeConfig.prototype.portalstate;
 /** @type {boolean} */
IBridgeConfig.prototype.factorynew;
 /** @type {string} */
IBridgeConfig.prototype.replacesbridgeid;
 /** @type {?} */
IBridgeConfig.prototype.backup;
 /** @type {?} */
IBridgeConfig.prototype.whitelist;

/** @typedef {string} */
var ColorMode;

/** @typedef {string} */
var LightAlert;

/** @typedef {string} */
var LightEffect;

/** @typedef {string} */
var LightGroupType;

/** @typedef {string} */
var RoomType;
/**
 * @record
 * @struct
 */
function IScene() {}
 /** @type {string} */
IScene.prototype.id;
 /** @type {string} */
IScene.prototype.name;
 /** @type {!Array<number>} */
IScene.prototype.lights;
/**
 * @record
 * @struct
 */
function ILightGroup() {}
 /** @type {string} */
ILightGroup.prototype.id;
 /** @type {string} */
ILightGroup.prototype.name;
 /** @type {string} */
ILightGroup.prototype.type;
 /** @type {string} */
ILightGroup.prototype.class;
 /** @type {?} */
ILightGroup.prototype.action;
 /** @type {!Array<string>} */
ILightGroup.prototype.lights;
/**
 * @record
 * @struct
 */
function ILight() {}
 /** @type {string} */
ILight.prototype.id;
 /** @type {string} */
ILight.prototype.manufacturername;
 /** @type {string} */
ILight.prototype.uniqueid;
 /** @type {?} */
ILight.prototype.state;
 /** @type {string} */
ILight.prototype.type;
 /** @type {string} */
ILight.prototype.name;
 /** @type {string} */
ILight.prototype.modelid;
 /** @type {string} */
ILight.prototype.swversion;
 /** @type {?} */
ILight.prototype.pointsymbol;
/**
 * @record
 * @struct
 */
function ILightsApiResponse() {}
 /** @type {!Array<?>} */
ILightsApiResponse.prototype.lights;
/**
 * @record
 * @struct
 */
function ISensor() {}
 /** @type {string} */
ISensor.prototype.id;
 /** @type {string} */
ISensor.prototype.manufacturername;
 /** @type {string} */
ISensor.prototype.uniqueid;
 /** @type {?} */
ISensor.prototype.state;
 /** @type {?} */
ISensor.prototype.config;
 /** @type {string} */
ISensor.prototype.type;
 /** @type {string} */
ISensor.prototype.name;
 /** @type {string} */
ISensor.prototype.modelid;
 /** @type {string} */
ISensor.prototype.swversion;
/**
 * @record
 * @struct
 */
function ISensorsApiResponse() {}
 /** @type {!Array<?>} */
ISensorsApiResponse.prototype.sensors;
/**
 * @record
 * @struct
 */
function ISchedule() {}
 /** @type {string} */
ISchedule.prototype.name;
 /** @type {string} */
ISchedule.prototype.description;
 /** @type {?} */
ISchedule.prototype.command;
 /** @type {!Date} */
ISchedule.prototype.time;
/**
 * @record
 * @struct
 */
function IState() {}
 /** @type {?} */
IState.prototype.lights;
 /** @type {?} */
IState.prototype.groups;
 /** @type {?} */
IState.prototype.config;
 /** @type {?} */
IState.prototype.schedules;
/**
 * @record
 * @struct
 */
function IRegisteredUser() {}
 /** @type {string} */
IRegisteredUser.prototype.name;
 /** @type {string} */
IRegisteredUser.prototype.username;
 /** @type {!Date} */
IRegisteredUser.prototype.created;
 /** @type {!Date} */
IRegisteredUser.prototype.accessed;
/**
 * @record
 * @struct
 */
function INewLightsResponse() {}
 /** @type {string} */
INewLightsResponse.prototype.lastscan;

/* TODO: IndexSignature:  */
/** @const */
var lightState = {};
/**
 * @constructor
 * @struct
 */
lightState.State = function() {};

/**
 * @return {!Object}
 */
lightState.State.prototype.payload = function() {};

/**
 * Resets/Clears the properties that have been set in the light state object.
 * @return {?}
 */
lightState.State.prototype.reset = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.clear = function() {};

/**
 * Creates a copy of the state object
 * @return {?}
 */
lightState.State.prototype.copy = function() {};

/**
 * Sets the strict state for setting parameters for the light state.
 * @return {?}
 */
lightState.State.prototype.strict = function() {};

/**
 * @return {boolean}
 */
lightState.State.prototype.isStrict = function() {};

/**
 * Sets the on state
 * @param {boolean=} on The state (true for on, false for off). If this parameter is not specified, it is assumed to be true.
 * @return {?}
 */
lightState.State.prototype.on = function(on) {};

/**
 * Adds the bri state
 * @param {number} value The hue bri value, 0 to 254.
 * @return {?}
 */
lightState.State.prototype.bri = function(value) {};

/**
 * Adds the hue for the color desired.
 * @param {number} hue The hue value is a wrapping value between 0 and 65535. Both 0 and 65535 are red, 25500 is green and 46920 is blue.
 * @return {?}
 */
lightState.State.prototype.hue = function(hue) {};

/**
 * The saturation of the color for the bulb, 0 being the least saturated i.e. white.
 * @param {number} saturation The saturation value 0 to 255
 * @return {?}
 */
lightState.State.prototype.sat = function(saturation) {};

/**
 * Adds the xy values
 * @param {number} x The x value ranged from 0 to 1, or an Array of [x, y] values
 * @param {number} y The y value ranged from 0 to 1
 * @return {?}
 */
lightState.State.prototype.xy = function(x, y) {};

/**
 * Adds the Mired Color Temperature
 * @param {number} colorTemp The Color Temperature between 153 to 500 inclusive.
 * @return {?}
 */
lightState.State.prototype.ct = function(colorTemp) {};

/**
 * Adds the alert state
 * @param {string} value A String value representing the alert state, "none", "select", "lselect".
 * @return {?}
 */
lightState.State.prototype.alert = function(value) {};

/**
 * Adds an effect for the bulb.
 * @param {string} value The type of effect, currently supports "none" and "colorloop".
 * @return {?}
 */
lightState.State.prototype.effect = function(value) {};

/**
 * Adds a transition to the desired state.
 * @param {number} value This is given as a multiple of 100ms and defaults to 4 (400ms).
 * @return {?}
 */
lightState.State.prototype.transitiontime = function(value) {};

/**
 * Increments/Decrements the brightness value for the lights.
 * @param {number} value An amount to change the current brightness by, -254 to 254.
 * @return {?}
 */
lightState.State.prototype.bri_inc = function(value) {};

/**
 * Increments/Decrements the saturation value for the lights.
 * @param {number} value An amount to change the current saturation by, -254 to 254.
 * @return {?}
 */
lightState.State.prototype.sat_inc = function(value) {};

/**
 * Increments/Decrements the Hue value for the lights.
 * @param {number} value An amount to change the current hue by, -65534 to 65534.
 * @return {?}
 */
lightState.State.prototype.hue_inc = function(value) {};

/**
 * Increments/Decrements the color temperature value for the lights.
 * @param {number} value An amount to change the current color temperature by, -65534 to 65534.
 * @return {?}
 */
lightState.State.prototype.ct_inc = function(value) {};

/**
 * Increments/Decrements the XY value for the lights.
 * @param {number} value An amount to change the current XY by, -0.5 to 0.5.
 * @return {?}
 */
lightState.State.prototype.xy_inc = function(value) {};

/**
 * @param {string} value
 * @return {?}
 */
lightState.State.prototype.scene = function(value) {};

/**
 * @return {?}
 */
lightState.State.prototype.turnOn = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.off = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.turnOff = function() {};

/**
 * Set the brightness as a percent value
 * @param {number} percentage The brightness percentage value between 0 and 100.
 * @return {?}
 */
lightState.State.prototype.brightness = function(percentage) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.incrementBrightness = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.colorTemperature = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.colourTemperature = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.colorTemp = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.colourTemp = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.incrementColorTemp = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.incrementColorTemperature = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.incrementColourTemp = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.incrementColourTemperature = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.incrementHue = function(value) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.incrementXY = function(value) {};

/**
 * @param {number} percentage
 * @return {?}
 */
lightState.State.prototype.saturation = function(percentage) {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.incrementSaturation = function(value) {};

/**
 * @return {?}
 */
lightState.State.prototype.shortAlert = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.alertShort = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.longAlert = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.alertLong = function() {};

/**
 * @param {number} value
 * @return {?}
 */
lightState.State.prototype.transitionTime = function(value) {};

/**
 * Sets the transition time in milliseconds.
 * @param {number} milliseconds The number of milliseconds for the transition
 * @return {?}
 */
lightState.State.prototype.transition = function(milliseconds) {};

/**
 * @return {?}
 */
lightState.State.prototype.transitionSlow = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.transitionFast = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.transitionInstant = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.transitionDefault = function() {};

/**
 * Builds the White state for a lamp
 * @param {number} colorTemp The temperature, a value of 153-500
 * @param {number} brightPercentage The percentage of brightness 0-100
 * @return {?}
 */
lightState.State.prototype.white = function(colorTemp, brightPercentage) {};

/**
 * Adds the HSL values
 * @param {number} hue The hue value in degrees 0-360
 * @param {number} saturation The saturation percentage 0-100
 * @param {number} luminosity The luminosity percentage 0-100
 * @return {?}
 */
lightState.State.prototype.hsl = function(hue, saturation, luminosity) {};

/**
 * Adds the HSB values
 * @param {number} hue The hue value in degrees 0-360
 * @param {number} saturation The saturation percentage 0-100
 * @param {number} brightness The brightness percentage 0-100
 * @return {?}
 */
lightState.State.prototype.hsb = function(hue, saturation, brightness) {};

/**
 * Adds the rgb color to the state. This requires knowledge of the light type to be able to convert it into
 * an actual color that the map can display.
 * 
 * @param {number} r The amount of Red 0-255, or an {Array} or r, g, b values.
 * @param {number} g The amount of Green 0-255
 * @param {number} b The amount of Blue 0-255
 * @return {?}
 */
lightState.State.prototype.rgb = function(r, g, b) {};

/**
 * @return {boolean}
 */
lightState.State.prototype.hasRGB = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.colorLoop = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.colourLoop = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.effectColorLoop = function() {};

/**
 * @return {?}
 */
lightState.State.prototype.effectColourLoop = function() {};

/**
 * Creates a copy of the State if there is an RGB value set.
 * 
 * @param {string} modelid The model ID of the light(s) to convert the rgb value for.
 * 
 * lamp model provided. If there is no RGB value set, then {null} will be returned.
 * @return {?}
 */
lightState.State.prototype.applyRGB = function(modelid) {};

/**
 * @param {!Object=} values
 * @return {?}
 */
lightState.create = function(values) {};

/**
 * @param {!Object} obj
 * @return {boolean}
 */
lightState.isLightState = function(obj) {};