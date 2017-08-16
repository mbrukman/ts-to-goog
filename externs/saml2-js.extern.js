/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/saml2-js/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "saml2-js"
/** @const */
tsickle_declare_module.saml__js = {};

/**
 * @constructor
 * @struct
 * @param {!IdentityProviderOptions} options
 */
tsickle_declare_module.saml__js.IdentityProvider = function(options) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.saml__js.IdentityProviderOptions = function() {};
 /** @type {string} */
tsickle_declare_module.saml__js.IdentityProviderOptions.prototype.sso_login_url;
 /** @type {string} */
tsickle_declare_module.saml__js.IdentityProviderOptions.prototype.sso_logout_url;
 /** @type {!Array<string>} */
tsickle_declare_module.saml__js.IdentityProviderOptions.prototype.certificates;
 /** @type {boolean} */
tsickle_declare_module.saml__js.IdentityProviderOptions.prototype.force_authn;
 /** @type {boolean} */
tsickle_declare_module.saml__js.IdentityProviderOptions.prototype.sign_get_request;
 /** @type {boolean} */
tsickle_declare_module.saml__js.IdentityProviderOptions.prototype.allow_unencrypted_assertion;

/**
 * @constructor
 * @struct
 * @param {!ServiceProviderOptions} options
 */
tsickle_declare_module.saml__js.ServiceProvider = function(options) {};

/**
 * @param {!IdentityProvider} IdP
 * @param {!CreateLoginRequestUrlOptions} options
 * @param {function(?, string, string): void} cb
 * @return {void}
 */
tsickle_declare_module.saml__js.ServiceProvider.prototype.create_login_request_url = function(IdP, options, cb) {};

/**
 * @param {!IdentityProvider} IdP
 * @param {!GetAssertOptions} options
 * @param {function(?, ?): void} cb
 * @return {void}
 */
tsickle_declare_module.saml__js.ServiceProvider.prototype.redirect_assert = function(IdP, options, cb) {};

/**
 * @param {!IdentityProvider} IdP
 * @param {!GetAssertOptions} options
 * @param {function(?, ?): void} cb
 * @return {void}
 */
tsickle_declare_module.saml__js.ServiceProvider.prototype.post_assert = function(IdP, options, cb) {};

/**
 * @param {!IdentityProvider} IdP
 * @param {!CreateLogoutRequestUrlOptions} options
 * @param {function(?, string): void} cb
 * @return {void}
 */
tsickle_declare_module.saml__js.ServiceProvider.prototype.create_logout_request_url = function(IdP, options, cb) {};

/**
 * @param {!IdentityProvider} IdP
 * @param {!CreateLogoutResponseUrlOptions} options
 * @param {function(?, string): void} cb
 * @return {void}
 */
tsickle_declare_module.saml__js.ServiceProvider.prototype.create_logout_response_url = function(IdP, options, cb) {};

/**
 * @return {string}
 */
tsickle_declare_module.saml__js.ServiceProvider.prototype.create_metadata = function() {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.saml__js.ServiceProviderOptions = function() {};
 /** @type {string} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.entity_id;
 /** @type {string} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.private_key;
 /** @type {string} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.certificate;
 /** @type {string} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.assert_endpoint;
 /** @type {!Array<string>} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.alt_private_keys;
 /** @type {!Array<string>} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.alt_certs;
 /** @type {boolean} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.force_authn;
 /** @type {!AuthnContextClassRef} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.auth_context;
 /** @type {string} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.nameid_format;
 /** @type {boolean} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.sign_get_request;
 /** @type {boolean} */
tsickle_declare_module.saml__js.ServiceProviderOptions.prototype.allow_unencrypted_assertion;
/**
 * @record
 * @struct
 */
tsickle_declare_module.saml__js.CreateLoginRequestUrlOptions = function() {};
 /** @type {string} */
tsickle_declare_module.saml__js.CreateLoginRequestUrlOptions.prototype.relay_state;
 /** @type {!AuthnContextClassRef} */
tsickle_declare_module.saml__js.CreateLoginRequestUrlOptions.prototype.auth_context;
 /** @type {string} */
tsickle_declare_module.saml__js.CreateLoginRequestUrlOptions.prototype.nameid_format;
 /** @type {boolean} */
tsickle_declare_module.saml__js.CreateLoginRequestUrlOptions.prototype.force_authn;
 /** @type {boolean} */
tsickle_declare_module.saml__js.CreateLoginRequestUrlOptions.prototype.sign_get_request;
/**
 * @record
 * @struct
 */
tsickle_declare_module.saml__js.GetAssertOptions = function() {};
 /** @type {?} */
tsickle_declare_module.saml__js.GetAssertOptions.prototype.request_body;
 /** @type {boolean} */
tsickle_declare_module.saml__js.GetAssertOptions.prototype.allow_unencrypted_assertion;
/**
 * @record
 * @struct
 */
tsickle_declare_module.saml__js.CreateLogoutRequestUrlOptions = function() {};
 /** @type {string} */
tsickle_declare_module.saml__js.CreateLogoutRequestUrlOptions.prototype.name_id;
 /** @type {string} */
tsickle_declare_module.saml__js.CreateLogoutRequestUrlOptions.prototype.session_index;
 /** @type {boolean} */
tsickle_declare_module.saml__js.CreateLogoutRequestUrlOptions.prototype.allow_unencrypted_assertion;
 /** @type {boolean} */
tsickle_declare_module.saml__js.CreateLogoutRequestUrlOptions.prototype.sign_get_request;
 /** @type {string} */
tsickle_declare_module.saml__js.CreateLogoutRequestUrlOptions.prototype.relay_state;
/**
 * @record
 * @struct
 */
tsickle_declare_module.saml__js.CreateLogoutResponseUrlOptions = function() {};
 /** @type {string} */
tsickle_declare_module.saml__js.CreateLogoutResponseUrlOptions.prototype.in_response_to;
 /** @type {boolean} */
tsickle_declare_module.saml__js.CreateLogoutResponseUrlOptions.prototype.sign_get_request;
 /** @type {string} */
tsickle_declare_module.saml__js.CreateLogoutResponseUrlOptions.prototype.relay_state;
/**
 * @record
 * @struct
 */
tsickle_declare_module.saml__js.AuthnContextClassRef = function() {};
 /** @type {string} */
tsickle_declare_module.saml__js.AuthnContextClassRef.prototype.comparison;
 /** @type {!Array<string>} */
tsickle_declare_module.saml__js.AuthnContextClassRef.prototype.class_refs;
