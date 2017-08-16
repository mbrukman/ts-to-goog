/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/leaflet-providers/index.d.ts:

/**
 * @constructor
 * @struct
 * @param {string} provider
 * @param {!L.TileLayerOptions=} options
 */
L.TileLayer.Provider = function(provider, options) {};
 /** @type {!L.TileLayer.Provider.ProvidersMap} */
L.TileLayer.Provider.providers;
/**
 * @record
 * @struct
 */
L.TileLayer.Provider.ProvidersMap = function() {};

/* TODO: IndexSignature: L.TileLayer.Provider */
/**
 * @record
 * @struct
 */
L.TileLayer.Provider.ProviderConfig = function() {};
 /** @type {string} */
L.TileLayer.Provider.ProviderConfig.prototype.url;
 /** @type {!L.TileLayerOptions} */
L.TileLayer.Provider.ProviderConfig.prototype.options;
 /** @type {!Object<string,(string|!L.TileLayer.Provider.ProviderConfig)>} */
L.TileLayer.Provider.ProviderConfig.prototype.variants;

/**
 * @param {string} provider
 * @param {!L.TileLayerOptions=} options
 * @return {!L.TileLayer.Provider}
 */
L.tileLayer.provider = function(provider, options) {};