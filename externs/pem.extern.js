/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pem/index.d.ts:
/**
 * @record
 * @struct
 */
function ModuleConfiguration() {}
 /** @type {string} */
ModuleConfiguration.prototype.pathOpenSSL;

/** @typedef {string} */
var PrivateKeyCipher;
/**
 * @record
 * @struct
 */
function PrivateKeyCreationOptions() {}
 /** @type {string} */
PrivateKeyCreationOptions.prototype.cipher;
 /** @type {string} */
PrivateKeyCreationOptions.prototype.password;
/**
 * @record
 * @struct
 */
function Pkcs12CreationOptions() {}
 /** @type {string} */
Pkcs12CreationOptions.prototype.cipher;
 /** @type {string} */
Pkcs12CreationOptions.prototype.clientKeyPassword;
 /** @type {!Array<string>} */
Pkcs12CreationOptions.prototype.certFiles;
/**
 * @record
 * @struct
 */
function Pkcs12ReadOptions() {}
 /** @type {string} */
Pkcs12ReadOptions.prototype.p12Password;
 /** @type {string} */
Pkcs12ReadOptions.prototype.clientKeyPassword;

/** @typedef {string} */
var HashFunction;
/**
 * @record
 * @struct
 */
function CSRCreationOptions() {}
 /** @type {string} */
CSRCreationOptions.prototype.clientKey;
 /** @type {string} */
CSRCreationOptions.prototype.clientKeyPassword;
 /** @type {number} */
CSRCreationOptions.prototype.keyBitsize;
 /** @type {string} */
CSRCreationOptions.prototype.hash;
 /** @type {string} */
CSRCreationOptions.prototype.country;
 /** @type {string} */
CSRCreationOptions.prototype.state;
 /** @type {string} */
CSRCreationOptions.prototype.locality;
 /** @type {string} */
CSRCreationOptions.prototype.organization;
 /** @type {string} */
CSRCreationOptions.prototype.organizationUnit;
 /** @type {string} */
CSRCreationOptions.prototype.commonName;
 /** @type {string} */
CSRCreationOptions.prototype.emailAddress;
 /** @type {string} */
CSRCreationOptions.prototype.csrConfigFile;
 /** @type {!Array<string>} */
CSRCreationOptions.prototype.altNames;
/**
 * @extends {CSRCreationOptions}
 * @record
 * @struct
 */
function CertificateCreationOptions() {}
 /** @type {string} */
CertificateCreationOptions.prototype.serviceKey;
 /** @type {string} */
CertificateCreationOptions.prototype.serviceKeyPassword;
 /** @type {?} */
CertificateCreationOptions.prototype.serviceCertificate;
 /** @type {?} */
CertificateCreationOptions.prototype.serial;
 /** @type {boolean} */
CertificateCreationOptions.prototype.selfSigned;
 /** @type {string} */
CertificateCreationOptions.prototype.csr;
 /** @type {number} */
CertificateCreationOptions.prototype.days;
 /** @type {string} */
CertificateCreationOptions.prototype.clientKeyPassword;
 /** @type {string} */
CertificateCreationOptions.prototype.extFile;
 /** @type {string} */
CertificateCreationOptions.prototype.config;
/**
 * @record
 * @struct
 */
function CertificateCreationResult() {}
 /** @type {?} */
CertificateCreationResult.prototype.certificate;
 /** @type {string} */
CertificateCreationResult.prototype.csr;
 /** @type {string} */
CertificateCreationResult.prototype.clientKey;
 /** @type {string} */
CertificateCreationResult.prototype.serviceKey;
/**
 * @record
 * @struct
 */
function CertificateSubjectReadResult() {}
 /** @type {string} */
CertificateSubjectReadResult.prototype.country;
 /** @type {string} */
CertificateSubjectReadResult.prototype.state;
 /** @type {string} */
CertificateSubjectReadResult.prototype.locality;
 /** @type {string} */
CertificateSubjectReadResult.prototype.organization;
 /** @type {string} */
CertificateSubjectReadResult.prototype.organizationUnit;
 /** @type {string} */
CertificateSubjectReadResult.prototype.commonName;
 /** @type {string} */
CertificateSubjectReadResult.prototype.emailAddress;

/** @typedef {?} */
var Callback;

/**
 * Creates a private key
 * 
 * @param {number|(number|?)|?} keyBitsize_or_optionsOrKeyBitsize_or_callback
 * @param {?=} options_or_callback
 * @param {?=} callback
 * @return {void}
 */
function createPrivateKey(keyBitsize_or_optionsOrKeyBitsize_or_callback, options_or_callback, callback) {}

/**
 * Creates a dhparam key
 * 
 * @param {number|?} keyBitsize_or_callback
 * @param {?=} callback
 * @return {void}
 */
function createDhparam(keyBitsize_or_callback, callback) {}

/**
 * Creates a Certificate Signing Request
 * 
 * If options.clientKey is undefined, a new key is created automatically. The used key is included
 * in the callback return as clientKey
 * 
 * @param {?} options_or_callback
 * @param {?=} callback
 * @return {void}
 */
function createCSR(options_or_callback, callback) {}

/**
 * Creates a certificate based on a CSR. If CSR is not defined, a new one
 * will be generated automatically. For CSR generation all the options values
 * can be used as with createCSR.
 * 
 * @param {?} options_or_callback
 * @param {?=} callback
 * @return {void}
 */
function createCertificate(options_or_callback, callback) {}

/**
 * Reads subject data from a certificate or a CSR
 * 
 * @param {string|?} certificate_or_callback
 * @param {?=} callback
 * @return {void}
 */
function readCertificateInfo(certificate_or_callback, callback) {}

/**
 * Exports a public key from a private key, CSR or certificate
 * 
 * @param {string|?} certificate_or_callback
 * @param {?=} callback
 * @return {void}
 */
function getPublicKey(certificate_or_callback, callback) {}

/**
 * Gets the fingerprint for a certificate
 * 
 * @param {string|?} certificate_or_callback
 * @param {string|?=} hash_or_callback
 * @param {?=} callback
 * @return {void}
 */
function getFingerprint(certificate_or_callback, hash_or_callback, callback) {}

/**
 * Gets the modulus from a certificate, a CSR or a private key
 * 
 * @param {string} certificate
 * @param {string|?} password_or_callback
 * @param {?=} callback
 * @return {void}
 */
function getModulus(certificate, password_or_callback, callback) {}

/**
 * Gets the size and prime of DH parameters
 * 
 * @param {string} dh
 * @param {?} callback
 * @return {void}
 */
function getDhparamInfo(dh, callback) {}

/**
 * Exports private key and certificate to a PKCS12 keystore
 * 
 * @param {string} key
 * @param {string} certificate
 * @param {string} password
 * @param {?} options_or_callback
 * @param {?=} callback
 * @return {void}
 */
function createPkcs12(key, certificate, password, options_or_callback, callback) {}

/**
 * Reads private key and certificate from a PKCS12 keystore
 * @param {string} bufferOrPath
 * @param {?} options_or_callback
 * @param {?=} callback
 * @return {?} the result of the callback
 */
function readPkcs12(bufferOrPath, options_or_callback, callback) {}

/**
 * Verifies the signing chain of the passed certificate
 * 
 * @param {string} certificate
 * @param {!Array<string>} ca
 * @param {?} callback
 * @return {void}
 */
function verifySigningChain(certificate, ca, callback) {}

/**
 * config the pem module
 * @param {?} options
 * @return {void}
 */
function config(options) {}
