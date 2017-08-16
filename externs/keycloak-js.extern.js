/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/keycloak-js/index.d.ts:

/* TODO: NamespaceExportDeclaration in  */

/* TODO: ExportAssignment in  */

/**
 * Creates a new Keycloak client instance.
 * @param {(string|!Object)=} config Path to a JSON config file or a plain config object.
 * @return {!Keycloak.KeycloakInstance}
 */
function Keycloak(config) {}

/** @typedef {string} */
Keycloak.KeycloakAdapterName;

/** @typedef {string} */
Keycloak.KeycloakOnLoad;

/** @typedef {string} */
Keycloak.KeycloakResponseMode;

/** @typedef {string} */
Keycloak.KeycloakResponseType;

/** @typedef {string} */
Keycloak.KeycloakFlow;
/**
 * @record
 * @struct
 */
Keycloak.KeycloakInitOptions = function() {};
 /** @type {string} */
Keycloak.KeycloakInitOptions.prototype.adapter;
 /** @type {string} */
Keycloak.KeycloakInitOptions.prototype.onLoad;
 /** @type {string} */
Keycloak.KeycloakInitOptions.prototype.token;
 /** @type {string} */
Keycloak.KeycloakInitOptions.prototype.refreshToken;
 /** @type {string} */
Keycloak.KeycloakInitOptions.prototype.idToken;
 /** @type {number} */
Keycloak.KeycloakInitOptions.prototype.timeSkew;
 /** @type {boolean} */
Keycloak.KeycloakInitOptions.prototype.checkLoginIframe;
 /** @type {boolean} */
Keycloak.KeycloakInitOptions.prototype.checkLoginIframeInterval;
 /** @type {string} */
Keycloak.KeycloakInitOptions.prototype.responseMode;
 /** @type {string} */
Keycloak.KeycloakInitOptions.prototype.flow;
/**
 * @record
 * @struct
 */
Keycloak.KeycloakLoginOptions = function() {};
 /** @type {string} */
Keycloak.KeycloakLoginOptions.prototype.scope;
 /** @type {string} */
Keycloak.KeycloakLoginOptions.prototype.redirectUri;
 /** @type {string} */
Keycloak.KeycloakLoginOptions.prototype.prompt;
 /** @type {string} */
Keycloak.KeycloakLoginOptions.prototype.action;
 /** @type {number} */
Keycloak.KeycloakLoginOptions.prototype.maxAge;
 /** @type {string} */
Keycloak.KeycloakLoginOptions.prototype.loginHint;
 /** @type {string} */
Keycloak.KeycloakLoginOptions.prototype.idpHint;
 /** @type {string} */
Keycloak.KeycloakLoginOptions.prototype.locale;

/** @typedef {function(T): void} */
Keycloak.KeycloakPromiseCallback;
/**
 * @record
 * @struct
 */
Keycloak.KeycloakPromise = function() {};

/**
 * Function to call if the promised action succeeds.
 * @param {function(TSuccess): void} callback
 * @return {!Keycloak.KeycloakPromise}
 */
Keycloak.KeycloakPromise.prototype.success = function(callback) {};

/**
 * Function to call if the promised action throws an error.
 * @param {function(TError): void} callback
 * @return {!Keycloak.KeycloakPromise}
 */
Keycloak.KeycloakPromise.prototype.error = function(callback) {};
/**
 * @record
 * @struct
 */
Keycloak.KeycloakError = function() {};
 /** @type {string} */
Keycloak.KeycloakError.prototype.error;
 /** @type {string} */
Keycloak.KeycloakError.prototype.error_description;
/**
 * @record
 * @struct
 */
Keycloak.KeycloakAdapter = function() {};

/**
 * @param {!Keycloak.KeycloakLoginOptions=} options
 * @return {!Keycloak.KeycloakPromise<void, void>}
 */
Keycloak.KeycloakAdapter.prototype.login = function(options) {};

/**
 * @param {?=} options
 * @return {!Keycloak.KeycloakPromise<void, void>}
 */
Keycloak.KeycloakAdapter.prototype.logout = function(options) {};

/**
 * @param {!Keycloak.KeycloakLoginOptions=} options
 * @return {!Keycloak.KeycloakPromise<void, void>}
 */
Keycloak.KeycloakAdapter.prototype.register = function(options) {};

/**
 * @return {!Keycloak.KeycloakPromise<void, void>}
 */
Keycloak.KeycloakAdapter.prototype.accountManagement = function() {};

/**
 * @param {{redirectUri: string}} options
 * @param {boolean} encodeHash
 * @return {string}
 */
Keycloak.KeycloakAdapter.prototype.redirectUri = function(options, encodeHash) {};
/**
 * @record
 * @struct
 */
Keycloak.KeycloakProfile = function() {};
 /** @type {string} */
Keycloak.KeycloakProfile.prototype.id;
 /** @type {string} */
Keycloak.KeycloakProfile.prototype.username;
 /** @type {string} */
Keycloak.KeycloakProfile.prototype.email;
 /** @type {string} */
Keycloak.KeycloakProfile.prototype.firstName;
 /** @type {string} */
Keycloak.KeycloakProfile.prototype.lastName;
 /** @type {boolean} */
Keycloak.KeycloakProfile.prototype.enabled;
 /** @type {boolean} */
Keycloak.KeycloakProfile.prototype.emailVerified;
 /** @type {boolean} */
Keycloak.KeycloakProfile.prototype.totp;
 /** @type {number} */
Keycloak.KeycloakProfile.prototype.createdTimestamp;
/**
 * @record
 * @struct
 */
Keycloak.KeycloakInstance = function() {};
 /** @type {boolean} */
Keycloak.KeycloakInstance.prototype.authenticated;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.subject;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.responseMode;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.responseType;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.flow;
 /** @type {{roles: !Array<string>}} */
Keycloak.KeycloakInstance.prototype.realmAccess;
 /** @type {!Array<string>} */
Keycloak.KeycloakInstance.prototype.resourceAccess;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.token;
 /** @type {{exp: number, iat: number, nonce: string, sub: string, session_state: string, realm_access: {roles: !Array<string>}, resource_access: !Array<string>}} */
Keycloak.KeycloakInstance.prototype.tokenParsed;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.refreshToken;
 /** @type {{nonce: string}} */
Keycloak.KeycloakInstance.prototype.refreshTokenParsed;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.idToken;
 /** @type {{nonce: string}} */
Keycloak.KeycloakInstance.prototype.idTokenParsed;
 /** @type {number} */
Keycloak.KeycloakInstance.prototype.timeSkew;
 /** @type {boolean} */
Keycloak.KeycloakInstance.prototype.loginRequired;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.authServerUrl;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.realm;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.clientId;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.clientSecret;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.redirectUri;
 /** @type {string} */
Keycloak.KeycloakInstance.prototype.sessionId;
 /** @type {!Keycloak.KeycloakProfile} */
Keycloak.KeycloakInstance.prototype.profile;
 /** @type {!Object} */
Keycloak.KeycloakInstance.prototype.userInfo;

/**
 * Called when the adapter is initialized.
 * @param {boolean=} authenticated
 * @return {void}
 */
Keycloak.KeycloakInstance.prototype.onReady = function(authenticated) {};

/**
 * Called when a user is successfully authenticated.
 * @return {void}
 */
Keycloak.KeycloakInstance.prototype.onAuthSuccess = function() {};

/**
 * Called if there was an error during authentication.
 * @param {!Keycloak.KeycloakError} errorData
 * @return {void}
 */
Keycloak.KeycloakInstance.prototype.onAuthError = function(errorData) {};

/**
 * Called when the token is refreshed.
 * @return {void}
 */
Keycloak.KeycloakInstance.prototype.onAuthRefreshSuccess = function() {};

/**
 * Called if there was an error while trying to refresh the token.
 * @return {void}
 */
Keycloak.KeycloakInstance.prototype.onAuthRefreshError = function() {};

/**
 * Called if the user is logged out (will only be called if the session
 * status iframe is enabled, or in Cordova mode).
 * @return {void}
 */
Keycloak.KeycloakInstance.prototype.onAuthLogout = function() {};

/**
 * Called when the access token is expired. If a refresh token is available
 * the token can be refreshed with Keycloak#updateToken, or in cases where
 * it's not (ie. with implicit flow) you can redirect to login screen to
 * obtain a new access token.
 * @return {void}
 */
Keycloak.KeycloakInstance.prototype.onTokenExpired = function() {};

/**
 * Called to initialize the adapter.
 * @param {!Keycloak.KeycloakInitOptions} initOptions Initialization options.
 * @return {!Keycloak.KeycloakPromise<boolean, !Keycloak.KeycloakError>} A promise to set functions to be invoked on success or error.
 */
Keycloak.KeycloakInstance.prototype.init = function(initOptions) {};

/**
 * Redirects to login form.
 * @param {!Keycloak.KeycloakLoginOptions=} options Login options.
 * @return {!Keycloak.KeycloakPromise<void, void>}
 */
Keycloak.KeycloakInstance.prototype.login = function(options) {};

/**
 * Redirects to logout.
 * @param {?=} options Logout options.
 * @return {!Keycloak.KeycloakPromise<void, void>}
 */
Keycloak.KeycloakInstance.prototype.logout = function(options) {};

/**
 * Redirects to registration form.
 * @param {?=} options Supports same options as Keycloak#login but `action` is
 *                set to `'register'`.
 * @return {!Keycloak.KeycloakPromise<void, void>}
 */
Keycloak.KeycloakInstance.prototype.register = function(options) {};

/**
 * Redirects to the Account Management Console.
 * @return {!Keycloak.KeycloakPromise<void, void>}
 */
Keycloak.KeycloakInstance.prototype.accountManagement = function() {};

/**
 * Returns the URL to login form.
 * @param {!Keycloak.KeycloakLoginOptions=} options Supports same options as Keycloak#login.
 * @return {string}
 */
Keycloak.KeycloakInstance.prototype.createLoginUrl = function(options) {};

/**
 * Returns the URL to logout the user.
 * @param {?=} options Logout options.
 * @return {string}
 */
Keycloak.KeycloakInstance.prototype.createLogoutUrl = function(options) {};

/**
 * Returns the URL to registration page.
 * @param {!Keycloak.KeycloakLoginOptions=} options Supports same options as Keycloak#createLoginUrl but
 *                `action` is set to `'register'`.
 * @return {string}
 */
Keycloak.KeycloakInstance.prototype.createRegisterUrl = function(options) {};

/**
 * Returns the URL to the Account Management Console.
 * @return {string}
 */
Keycloak.KeycloakInstance.prototype.createAccountUrl = function() {};

/**
 * Returns true if the token has less than `minValidity` seconds left before
 * it expires.
 * @param {number=} minValidity If not specified, `0` is used.
 * @return {boolean}
 */
Keycloak.KeycloakInstance.prototype.isTokenExpired = function(minValidity) {};

/**
 * If the token expires within `minValidity` seconds, the token is refreshed.
 * If the session status iframe is enabled, the session status is also
 * checked.
 * \@example 
 * ```js
 * keycloak.updateToken(5).success(function(refreshed) {
 *   if (refreshed) {
 *     alert('Token was successfully refreshed');
 *   } else {
 *     alert('Token is still valid');
 *   }
 * }).error(function() {
 *   alert('Failed to refresh the token, or the session has expired');
 * });
 * @param {number} minValidity
 * @return {!Keycloak.KeycloakPromise<boolean, boolean>} A promise to set functions that can be invoked if the token is
 *          still valid, or if the token is no longer valid.
 */
Keycloak.KeycloakInstance.prototype.updateToken = function(minValidity) {};

/**
 * Clears authentication state, including tokens. This can be useful if
 * the application has detected the session was expired, for example if
 * updating token fails. Invoking this results in Keycloak#onAuthLogout
 * callback listener being invoked.
 * @return {void}
 */
Keycloak.KeycloakInstance.prototype.clearToken = function() {};

/**
 * Returns true if the token has the given realm role.
 * @param {string} role A realm role name.
 * @return {boolean}
 */
Keycloak.KeycloakInstance.prototype.hasRealmRole = function(role) {};

/**
 * Returns true if the token has the given role for the resource.
 * @param {string} role A role name.
 * @param {string=} resource If not specified, `clientId` is used.
 * @return {boolean}
 */
Keycloak.KeycloakInstance.prototype.hasResourceRole = function(role, resource) {};

/**
 * Loads the user's profile.
 * @return {!Keycloak.KeycloakPromise<!Keycloak.KeycloakProfile, void>} A promise to set functions to be invoked on success or error.
 */
Keycloak.KeycloakInstance.prototype.loadUserProfile = function() {};

/**
 * @return {!Keycloak.KeycloakPromise<!Object, void>}
 */
Keycloak.KeycloakInstance.prototype.loadUserInfo = function() {};