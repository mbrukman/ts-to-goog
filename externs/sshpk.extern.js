/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/sshpk/index.d.ts:
/**
 * @constructor
 * @struct
 */
function SshPK() {}
/**
 * @constructor
 * @struct
 */
SshPK.Algo = function() {};
 /** @type {!Array<string>} */
SshPK.Algo.prototype.parts;
 /** @type {string} */
SshPK.Algo.prototype.sizePart;
 /** @type {boolean} */
SshPK.Algo.prototype.normalize;
/**
 * @constructor
 * @struct
 */
SshPK.algInfo = function() {};
 /** @type {!SshPK.Algo} */
SshPK.algInfo.prototype.dsa;
 /** @type {!SshPK.Algo} */
SshPK.algInfo.prototype.rsa;
 /** @type {!SshPK.Algo} */
SshPK.algInfo.prototype.ecdsa;
 /** @type {!SshPK.Algo} */
SshPK.algInfo.prototype.ed25519;
 /** @type {!SshPK.Algo} */
SshPK.algInfo.prototype.curve25519;
/**
 * @constructor
 * @struct
 */
SshPK.algPrivInfo = function() {};
 /** @type {!SshPK.Algo} */
SshPK.algPrivInfo.prototype.dsa;
 /** @type {!SshPK.Algo} */
SshPK.algPrivInfo.prototype.rsa;
 /** @type {!SshPK.Algo} */
SshPK.algPrivInfo.prototype.ecdsa;
 /** @type {!SshPK.Algo} */
SshPK.algPrivInfo.prototype.ed25519;
 /** @type {!SshPK.Algo} */
SshPK.algPrivInfo.prototype.curve25519;
/**
 * @constructor
 * @struct
 */
SshPK.hashAlgs = function() {};
 /** @type {boolean} */
SshPK.hashAlgs.prototype.md5;
 /** @type {boolean} */
SshPK.hashAlgs.prototype.sha1;
 /** @type {boolean} */
SshPK.hashAlgs.prototype.sha256;
 /** @type {boolean} */
SshPK.hashAlgs.prototype.sha384;
 /** @type {boolean} */
SshPK.hashAlgs.prototype.sha512;
/**
 * @constructor
 * @struct
 */
SshPK.Curve = function() {};
 /** @type {number} */
SshPK.Curve.prototype.size;
 /** @type {string} */
SshPK.Curve.prototype.pkcs8oid;
 /** @type {?} */
SshPK.Curve.prototype.p;
 /** @type {?} */
SshPK.Curve.prototype.a;
 /** @type {?} */
SshPK.Curve.prototype.b;
 /** @type {?} */
SshPK.Curve.prototype.s;
 /** @type {?} */
SshPK.Curve.prototype.n;
 /** @type {?} */
SshPK.Curve.prototype.G;
/**
 * @constructor
 * @struct
 */
SshPK.curves = function() {};
 /** @type {!SshPK.Curve} */
SshPK.curves.prototype.nistp256;
 /** @type {!SshPK.Curve} */
SshPK.curves.prototype.nistp384;
 /** @type {!SshPK.Curve} */
SshPK.curves.prototype.nistp512;
/**
 * @constructor
 * @struct
 */
SshPK.algs = function() {};
 /** @type {!SshPK.algInfo} */
SshPK.algs.prototype.info;
 /** @type {!SshPK.algPrivInfo} */
SshPK.algs.prototype.privInfo;
 /** @type {!SshPK.hashAlgs} */
SshPK.algs.prototype.hashAlgs;
 /** @type {!SshPK.curves} */
SshPK.algs.prototype.curves;

/**
 * @constructor
 * @struct
 * @param {?} opts
 */
SshPK.Certificate = function(opts) {};
 /** @type {!Array<!SshPK.Identity>} */
SshPK.Certificate.prototype.subjects;
 /** @type {string} */
SshPK.Certificate.prototype.issuer;
 /** @type {string} */
SshPK.Certificate.prototype.subjectKey;
 /** @type {string} */
SshPK.Certificate.prototype.issuerKey;
 /** @type {string} */
SshPK.Certificate.prototype.signatures;
 /** @type {string} */
SshPK.Certificate.prototype.serial;
 /** @type {string} */
SshPK.Certificate.prototype.validFrom;
 /** @type {string} */
SshPK.Certificate.prototype.validUntil;
 /** @type {!SshPK.Formats} */
SshPK.Certificate.formats;

/**
 * @param {string} format
 * @param {?=} options
 * @return {?}
 */
SshPK.Certificate.prototype.toBuffer = function(format, options) {};

/**
 * @param {string} format
 * @param {?=} options
 * @return {string}
 */
SshPK.Certificate.prototype.toString = function(format, options) {};

/**
 * @param {string} algo
 * @return {!SshPK.Fingerprint}
 */
SshPK.Certificate.prototype.fingerprint = function(algo) {};

/**
 * @param {string} algo
 * @return {string}
 */
SshPK.Certificate.prototype.hash = function(algo) {};

/**
 * @param {!Date} when
 * @return {boolean}
 */
SshPK.Certificate.prototype.isExpired = function(when) {};

/**
 * @param {!SshPK.Certificate} issuerCert
 * @return {boolean}
 */
SshPK.Certificate.prototype.isSignedBy = function(issuerCert) {};

/**
 * @param {!SshPK.Key} issuerKey
 * @return {boolean}
 */
SshPK.Certificate.prototype.isSignedByKey = function(issuerKey) {};

/**
 * @param {!SshPK.Key} key
 * @return {void}
 */
SshPK.Certificate.prototype.signWith = function(key) {};

/**
 * @param {string} subjectOrSubjects
 * @param {!SshPK.Key} key
 * @param {?} options
 * @return {!SshPK.Certificate}
 */
SshPK.Certificate.createSelfSigned = function(subjectOrSubjects, key, options) {};

/**
 * @param {string} subjectOrSubjects
 * @param {!SshPK.Key} key
 * @param {string} issuer
 * @param {!SshPK.PrivateKey} issuerKey
 * @param {?} options
 * @return {!SshPK.Certificate}
 */
SshPK.Certificate.create = function(subjectOrSubjects, key, issuer, issuerKey, options) {};

/**
 * @param {(string|?)} data
 * @param {string} format
 * @param {?} options
 * @return {!SshPK.Certificate}
 */
SshPK.Certificate.parse = function(data, format, options) {};

/**
 * @param {(string|?)} data
 * @param {string} ver
 * @return {boolean}
 */
SshPK.Certificate.isCertificate = function(data, ver) {};

/**
 * @constructor
 * @struct
 * @param {!SshPK.Key} key
 */
SshPK.DiffieHellman = function(key) {};

/**
 * @return {!SshPK.Key}
 */
SshPK.DiffieHellman.prototype.getPublicKey = function() {};

/**
 * @return {!SshPK.PrivateKey}
 */
SshPK.DiffieHellman.prototype.getPrivateKey = function() {};

/**
 * @return {!SshPK.PrivateKey}
 */
SshPK.DiffieHellman.prototype.getKey = function() {};

/**
 * @param {!SshPK.PrivateKey} key
 * @return {void}
 */
SshPK.DiffieHellman.prototype.setKey = function(key) {};

/**
 * @param {!SshPK.PrivateKey} key
 * @return {void}
 */
SshPK.DiffieHellman.prototype.setPrivateKey = function(key) {};

/**
 * @param {!SshPK.PrivateKey} otherpk
 * @return {?}
 */
SshPK.DiffieHellman.prototype.computeSecret = function(otherpk) {};

/**
 * @return {!SshPK.PrivateKey}
 */
SshPK.DiffieHellman.prototype.generateKey = function() {};

/**
 * @return {!SshPK.PrivateKey}
 */
SshPK.DiffieHellman.prototype.generateKeys = function() {};
/**
 * @constructor
 * @struct
 */
SshPK.X9ECParameters = function() {};
 /** @type {?} */
SshPK.X9ECParameters.prototype.G;
 /** @type {?} */
SshPK.X9ECParameters.prototype.g;
 /** @type {?} */
SshPK.X9ECParameters.prototype.n;
 /** @type {?} */
SshPK.X9ECParameters.prototype.h;

/**
 * @constructor
 * @struct
 * @param {!SshPK.X9ECParameters} params
 * @param {?} buffer
 */
SshPK.ECPublic = function(params, buffer) {};

/**
 * @constructor
 * @struct
 * @param {!SshPK.X9ECParameters} params
 * @param {?} buffer
 */
SshPK.ECPrivate = function(params, buffer) {};

/**
 * @param {!SshPK.Key} pk
 * @return {?}
 */
SshPK.ECPrivate.prototype.deriveSharedSecret = function(pk) {};

/**
 * @constructor
 * @struct
 * @param {!SshPK.Key} key
 * @param {string} hashAlgo
 */
SshPK.Verifier = function(key, hashAlgo) {};

/**
 * @param {(string|?)} chunk
 * @return {void}
 */
SshPK.Verifier.prototype.update = function(chunk) {};

/**
 * @param {string} signature
 * @return {boolean}
 */
SshPK.Verifier.prototype.verify = function(signature) {};

/**
 * @constructor
 * @struct
 * @param {!SshPK.Key} key
 * @param {string} hashAlgo
 */
SshPK.Signer = function(key, hashAlgo) {};

/**
 * @param {(string|?)} chunk
 * @return {void}
 */
SshPK.Signer.prototype.update = function(chunk) {};

/**
 * @return {!SshPK.Signature}
 */
SshPK.Signer.prototype.sign = function() {};

/**
 * @constructor
 * @struct
 * @param {!SshPK.Fingerprint} fp
 * @param {string} format
 */
SshPK.FingerprintFormatError = function(fp, format) {};
 /** @type {string} */
SshPK.FingerprintFormatError.prototype.name;
 /** @type {string} */
SshPK.FingerprintFormatError.prototype.message;

/**
 * @constructor
 * @struct
 * @param {string} algo
 */
SshPK.InvalidAlgorithmError = function(algo) {};
 /** @type {string} */
SshPK.InvalidAlgorithmError.prototype.name;
 /** @type {string} */
SshPK.InvalidAlgorithmError.prototype.message;

/**
 * @constructor
 * @struct
 * @param {string} name
 * @param {string} format
 * @param {?} innerErr
 */
SshPK.KeyParseError = function(name, format, innerErr) {};
 /** @type {string} */
SshPK.KeyParseError.prototype.name;
 /** @type {string} */
SshPK.KeyParseError.prototype.message;

/**
 * @constructor
 * @struct
 * @param {string} type
 * @param {string} format
 * @param {?} innerErr
 */
SshPK.SignatureParseError = function(type, format, innerErr) {};
 /** @type {string} */
SshPK.SignatureParseError.prototype.name;
 /** @type {string} */
SshPK.SignatureParseError.prototype.message;

/**
 * @constructor
 * @struct
 * @param {string} name
 * @param {string} format
 * @param {?} innerErr
 */
SshPK.CertificateParseError = function(name, format, innerErr) {};
 /** @type {string} */
SshPK.CertificateParseError.prototype.name;
 /** @type {string} */
SshPK.CertificateParseError.prototype.message;

/**
 * @constructor
 * @struct
 * @param {string} name
 * @param {string} format
 */
SshPK.KeyEncryptedError = function(name, format) {};
 /** @type {string} */
SshPK.KeyEncryptedError.prototype.name;
 /** @type {string} */
SshPK.KeyEncryptedError.prototype.message;

/**
 * @constructor
 * @struct
 * @param {?} opts
 */
SshPK.Fingerprint = function(opts) {};
 /** @type {string} */
SshPK.Fingerprint.prototype.algorithm;
 /** @type {string} */
SshPK.Fingerprint.prototype.hash;
 /** @type {string} */
SshPK.Fingerprint.prototype.type;

/**
 * @param {string=} format
 * @return {string}
 */
SshPK.Fingerprint.prototype.toString = function(format) {};

/**
 * @param {!SshPK.Fingerprint} other
 * @return {boolean}
 */
SshPK.Fingerprint.prototype.matches = function(other) {};

/**
 * @param {string} fp
 * @return {string}
 */
SshPK.Fingerprint.prototype.addColons = function(fp) {};

/**
 * @param {string} fp
 * @return {string}
 */
SshPK.Fingerprint.prototype.base64Strip = function(fp) {};

/**
 * @param {string} alg
 * @param {string} h
 * @return {string}
 */
SshPK.Fingerprint.prototype.sshBase64Format = function(alg, h) {};

/**
 * @param {(string|?)} obj
 * @param {string} ver
 * @return {boolean}
 */
SshPK.Fingerprint.prototype.isFingerprint = function(obj, ver) {};

/**
 * @param {string} fp
 * @param {?} options
 * @return {!SshPK.Fingerprint}
 */
SshPK.Fingerprint.parse = function(fp, options) {};

/**
 * @constructor
 * @struct
 * @param {?} opts
 */
SshPK.Identity = function(opts) {};
 /** @type {string} */
SshPK.Identity.prototype.cn;
 /** @type {!Array<string>} */
SshPK.Identity.prototype.components;
 /** @type {?} */
SshPK.Identity.prototype.componentLookup;
 /** @type {string} */
SshPK.Identity.prototype.type;
 /** @type {string} */
SshPK.Identity.prototype.hostname;
 /** @type {string} */
SshPK.Identity.prototype.uid;
 /** @type {string} */
SshPK.Identity.prototype.email;

/**
 * @return {string}
 */
SshPK.Identity.prototype.toString = function() {};

/**
 * @param {(string|?)} der
 * @param {string} tag
 * @return {void}
 */
SshPK.Identity.prototype.toAsn1 = function(der, tag) {};

/**
 * @param {!SshPK.Identity} other
 * @return {boolean}
 */
SshPK.Identity.prototype.equals = function(other) {};

/**
 * @param {string} hostname
 * @return {!SshPK.Identity}
 */
SshPK.Identity.forHost = function(hostname) {};

/**
 * @param {string} uid
 * @return {!SshPK.Identity}
 */
SshPK.Identity.forUser = function(uid) {};

/**
 * @param {string} email
 * @return {!SshPK.Identity}
 */
SshPK.Identity.forEmail = function(email) {};

/**
 * @param {string} dn
 * @return {!SshPK.Identity}
 */
SshPK.Identity.parseDN = function(dn) {};

/**
 * @param {(string|?)} dn
 * @param {string} top
 * @return {!SshPK.Identity}
 */
SshPK.Identity.parseAsn1 = function(dn, top) {};

/**
 * @param {(string|?)} dn
 * @param {string} ver
 * @return {boolean}
 */
SshPK.Identity.isIdentity = function(dn, ver) {};
/**
 * @constructor
 * @struct
 */
SshPK.Format = function() {};
 /** @type {function(?, ?): ?} */
SshPK.Format.prototype.read;
 /** @type {function(!SshPK.Key, ?): ?} */
SshPK.Format.prototype.write;
/**
 * @constructor
 * @struct
 */
SshPK.Formats = function() {};
 /** @type {!SshPK.Format} */
SshPK.Formats.prototype.auto;
 /** @type {!SshPK.Format} */
SshPK.Formats.prototype.pem;
 /** @type {!SshPK.Format} */
SshPK.Formats.prototype.pkcs1;
 /** @type {!SshPK.Format} */
SshPK.Formats.prototype.pkcs8;
 /** @type {!SshPK.Format} */
SshPK.Formats.prototype.rfc4253;
 /** @type {!SshPK.Format} */
SshPK.Formats.prototype.ssh;

/* TODO: PropertyDeclaration: SshPK."ssh-private" */
 /** @type {!SshPK.Format} */
SshPK.Formats.prototype.openssh;
/**
 * @constructor
 * @struct
 */
SshPK.Verify = function() {};

/**
 * @param {string} data
 * @param {string} fmt
 * @return {boolean}
 */
SshPK.Verify.prototype.verify = function(data, fmt) {};

/**
 * @constructor
 * @struct
 * @param {?} opts
 */
SshPK.Key = function(opts) {};
 /** @type {string} */
SshPK.Key.prototype.type;
 /** @type {string} */
SshPK.Key.prototype.parts;
 /** @type {string} */
SshPK.Key.prototype.part;
 /** @type {string} */
SshPK.Key.prototype.comment;
 /** @type {string} */
SshPK.Key.prototype.source;
 /** @type {string} */
SshPK.Key.prototype.curve;
 /** @type {number} */
SshPK.Key.prototype.size;
 /** @type {!SshPK.Formats} */
SshPK.Key.formats;

/**
 * @param {string} format
 * @param {?=} options
 * @return {?}
 */
SshPK.Key.prototype.toBuffer = function(format, options) {};

/**
 * @param {string} format
 * @param {?=} options
 * @return {string}
 */
SshPK.Key.prototype.toString = function(format, options) {};

/**
 * @param {string} algo
 * @return {?}
 */
SshPK.Key.prototype.hash = function(algo) {};

/**
 * @param {string} algo
 * @return {!SshPK.Fingerprint}
 */
SshPK.Key.prototype.fingerprint = function(algo) {};

/**
 * @return {string}
 */
SshPK.Key.prototype.defaultHashAlgorithm = function() {};

/**
 * @param {string} algo
 * @return {!SshPK.Verify}
 */
SshPK.Key.prototype.createVerify = function(algo) {};

/**
 * @return {!SshPK.DiffieHellman}
 */
SshPK.Key.prototype.createDiffieHellman = function() {};

/**
 * @return {!SshPK.DiffieHellman}
 */
SshPK.Key.prototype.createDH = function() {};

/**
 * @param {(string|?)} data
 * @param {string} format
 * @param {?} options
 * @return {!SshPK.Key}
 */
SshPK.Key.parse = function(data, format, options) {};

/**
 * @param {(string|?)} obj
 * @param {string} ver
 * @return {boolean}
 */
SshPK.Key.isKey = function(obj, ver) {};

/**
 * @constructor
 * @struct
 * @param {?} opts
 */
SshPK.PrivateKey = function(opts) {};
 /** @type {!SshPK.Formats} */
SshPK.PrivateKey.formats;

/**
 * @param {string} format
 * @param {?} options
 * @return {?}
 */
SshPK.PrivateKey.prototype.toBuffer = function(format, options) {};

/**
 * @param {string} algo
 * @return {?}
 */
SshPK.PrivateKey.prototype.hash = function(algo) {};

/**
 * @return {!SshPK.Key}
 */
SshPK.PrivateKey.prototype.toPublic = function() {};

/**
 * @param {string} newType
 * @param {number} newSize
 * @return {!SshPK.PrivateKey}
 */
SshPK.PrivateKey.prototype.derive = function(newType, newSize) {};

/**
 * @param {string} hashAlgo
 * @return {!SshPK.Key}
 */
SshPK.PrivateKey.prototype.createVerify = function(hashAlgo) {};

/**
 * @param {string} hashAlgo
 * @return {!SshPK.Signer}
 */
SshPK.PrivateKey.prototype.createSign = function(hashAlgo) {};

/**
 * @param {(string|?)} data
 * @param {string} format
 * @param {?} options
 * @return {!SshPK.PrivateKey}
 */
SshPK.PrivateKey.parse = function(data, format, options) {};

/**
 * @param {(string|?)} data
 * @param {string} ver
 * @return {boolean}
 */
SshPK.PrivateKey.isPrivateKey = function(data, ver) {};

/**
 * @constructor
 * @struct
 * @param {?} opts
 */
SshPK.Signature = function(opts) {};

/**
 * @param {string} format
 * @return {?}
 */
SshPK.Signature.prototype.toBuffer = function(format) {};

/**
 * @param {string} format
 * @return {string}
 */
SshPK.Signature.prototype.toString = function(format) {};

/**
 * @param {(string|?)} data
 * @param {string} type
 * @param {string} format
 * @return {!SshPK.Signature}
 */
SshPK.Signature.parse = function(data, type, format) {};

/**
 * @param {(string|?)} obj
 * @param {string} ver
 * @return {boolean}
 */
SshPK.Signature.isSignature = function(obj, ver) {};
/**
 * @constructor
 * @struct
 */
SshPK.SSHPart = function() {};
 /** @type {?} */
SshPK.SSHPart.prototype.data;

/**
 * @constructor
 * @struct
 * @param {?} opts
 */
SshPK.SSHBuffer = function(opts) {};

/**
 * @return {?}
 */
SshPK.SSHBuffer.prototype.toBuffer = function() {};

/**
 * @return {boolean}
 */
SshPK.SSHBuffer.prototype.atEnd = function() {};

/**
 * @return {?}
 */
SshPK.SSHBuffer.prototype.remainder = function() {};

/**
 * @param {number} n
 * @return {void}
 */
SshPK.SSHBuffer.prototype.skip = function(n) {};

/**
 * @return {void}
 */
SshPK.SSHBuffer.prototype.expand = function() {};

/**
 * @return {!SshPK.SSHPart}
 */
SshPK.SSHBuffer.prototype.readPart = function() {};

/**
 * @return {?}
 */
SshPK.SSHBuffer.prototype.readBuffer = function() {};

/**
 * @return {string}
 */
SshPK.SSHBuffer.prototype.readString = function() {};

/**
 * @return {number}
 */
SshPK.SSHBuffer.prototype.readInt = function() {};

/**
 * @return {?}
 */
SshPK.SSHBuffer.prototype.readInt64 = function() {};

/**
 * @return {string}
 */
SshPK.SSHBuffer.prototype.readChar = function() {};

/**
 * @param {?} buf
 * @return {void}
 */
SshPK.SSHBuffer.prototype.writeBuffer = function(buf) {};

/**
 * @param {string} buf
 * @return {void}
 */
SshPK.SSHBuffer.prototype.writeString = function(buf) {};

/**
 * @param {string} buf
 * @return {void}
 */
SshPK.SSHBuffer.prototype.writeCString = function(buf) {};

/**
 * @param {number} buf
 * @return {void}
 */
SshPK.SSHBuffer.prototype.writeInt = function(buf) {};

/**
 * @param {?} buf
 * @return {void}
 */
SshPK.SSHBuffer.prototype.writeInt64 = function(buf) {};

/**
 * @param {string} buf
 * @return {void}
 */
SshPK.SSHBuffer.prototype.writeChar = function(buf) {};

/**
 * @param {!SshPK.SSHPart} buf
 * @return {void}
 */
SshPK.SSHBuffer.prototype.writePart = function(buf) {};

/**
 * @param {?} buf
 * @return {void}
 */
SshPK.SSHBuffer.prototype.write = function(buf) {};

/**
 * @param {?} buf
 * @param {string} chr
 * @return {!Array<?>}
 */
SshPK.bufferSplit = function(buf, chr) {};

/**
 * @param {!SshPK.PrivateKey} key
 * @return {void}
 */
SshPK.addRSAMissing = function(key) {};

/**
 * @param {?} g
 * @param {?} p
 * @param {?} x
 * @return {?}
 */
SshPK.calculateDSAPublic = function(g, p, x) {};

/**
 * @param {?} buf
 * @return {?}
 */
SshPK.mpNormalize = function(buf) {};

/**
 * @param {?} buf
 * @param {boolean} addZero
 * @return {?}
 */
SshPK.ecNormalize = function(buf, addZero) {};

/**
 * @param {?} buf
 * @return {number}
 */
SshPK.countZeros = function(buf) {};

/**
 * @param {?} obj
 * @param {?} klass
 * @param {string} needVer
 * @param {string} name
 * @return {void}
 */
SshPK.assertCompatible = function(obj, klass, needVer, name) {};

/**
 * @param {?} obj
 * @param {?} klass
 * @param {string} needVer
 * @return {boolean}
 */
SshPK.isCompatible = function(obj, klass, needVer) {};
/**
 * @constructor
 * @struct
 */
SshPK.OpenSllKeyDeriv = function() {};
 /** @type {?} */
SshPK.OpenSllKeyDeriv.prototype.key;
 /** @type {?} */
SshPK.OpenSllKeyDeriv.prototype.iv;

/**
 * @param {string} cipher
 * @param {string} salt
 * @param {string} passphrase
 * @param {number} count
 * @return {!SshPK.OpenSllKeyDeriv}
 */
SshPK.opensslKeyDeriv = function(cipher, salt, passphrase, count) {};
/**
 * @constructor
 * @struct
 */
SshPK.OpensshCipherInfo = function() {};
 /** @type {number} */
SshPK.OpensshCipherInfo.prototype.keySize;
 /** @type {number} */
SshPK.OpensshCipherInfo.prototype.blockSize;
 /** @type {string} */
SshPK.OpensshCipherInfo.prototype.opensslName;

/**
 * @param {string} cipber
 * @return {!SshPK.OpensshCipherInfo}
 */
SshPK.opensshCipherInfo = function(cipber) {};

/**
 * @param {(string|?)} data
 * @param {string} format
 * @param {?=} options
 * @return {!SshPK.Key}
 */
SshPK.parseKey = function(data, format, options) {};

/**
 * @param {string} fp
 * @param {?=} options
 * @return {!SshPK.Fingerprint}
 */
SshPK.parseFingerprint = function(fp, options) {};

/**
 * @param {(string|?)} data
 * @param {string} type
 * @param {string} format
 * @return {!SshPK.Signature}
 */
SshPK.parseSignature = function(data, type, format) {};

/**
 * @param {(string|?)} data
 * @param {string} format
 * @param {?=} options
 * @return {!SshPK.PrivateKey}
 */
SshPK.parsePrivateKey = function(data, format, options) {};

/**
 * @param {(string|?)} data
 * @param {string} format
 * @param {?=} options
 * @return {!SshPK.Certificate}
 */
SshPK.parseCertificate = function(data, format, options) {};

/**
 * @param {string} subjectOrSubjects
 * @param {!SshPK.Key} key
 * @param {?=} options
 * @return {!SshPK.Certificate}
 */
SshPK.createSelfSignedCertificate = function(subjectOrSubjects, key, options) {};

/**
 * @param {string} subjectOrSubjects
 * @param {!SshPK.Key} key
 * @param {string} issuer
 * @param {!SshPK.PrivateKey} issuerKey
 * @param {?=} options
 * @return {!SshPK.Certificate}
 */
SshPK.createCertificate = function(subjectOrSubjects, key, issuer, issuerKey, options) {};

/**
 * @param {string} dn
 * @return {!SshPK.Identity}
 */
SshPK.identityFromDN = function(dn) {};

/**
 * @param {string} hostname
 * @return {!SshPK.Identity}
 */
SshPK.identityForHost = function(hostname) {};

/**
 * @param {string} uid
 * @return {!SshPK.Identity}
 */
SshPK.identityForUser = function(uid) {};

/**
 * @param {string} email
 * @return {!SshPK.Identity}
 */
SshPK.identityForEmail = function(email) {};

/* TODO: ExportAssignment in  */
