/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/mdns/index.d.ts:
/** @const */
var MDNS = {};
/**
 * @record
 * @struct
 */
MDNS.DnsSdError = function() {};
 /** @type {number} */
MDNS.DnsSdError.prototype.errorCode;
/**
 * @record
 * @struct
 */
MDNS.AdvertisementOptions = function() {};
 /** @type {string} */
MDNS.AdvertisementOptions.prototype.name;
 /** @type {number} */
MDNS.AdvertisementOptions.prototype.interfaceIndex;
 /** @type {string} */
MDNS.AdvertisementOptions.prototype.networkInterface;
 /** @type {?} */
MDNS.AdvertisementOptions.prototype.txtRecord;
 /** @type {?} */
MDNS.AdvertisementOptions.prototype.host;
 /** @type {?} */
MDNS.AdvertisementOptions.prototype.domain;
 /** @type {?} */
MDNS.AdvertisementOptions.prototype.flags;
 /** @type {?} */
MDNS.AdvertisementOptions.prototype.context;
/**
 * @record
 * @struct
 */
MDNS.AdvertisementCreatable = function() {};

/* TODO: ConstructSignature: MDNS */
/**
 * @record
 * @struct
 */
MDNS.Advertisement = function() {};

/**
 * @return {void}
 */
MDNS.Advertisement.prototype.start = function() {};

/**
 * @return {void}
 */
MDNS.Advertisement.prototype.stop = function() {};
/**
 * @record
 * @struct
 */
MDNS.BrowserOptions = function() {};
 /** @type {!Array<function(!MDNS.Service, function(): void): boolean>} */
MDNS.BrowserOptions.prototype.resolverSequence;
 /** @type {number} */
MDNS.BrowserOptions.prototype.interfaceIndex;
 /** @type {string} */
MDNS.BrowserOptions.prototype.networkInterface;
 /** @type {?} */
MDNS.BrowserOptions.prototype.domain;
 /** @type {?} */
MDNS.BrowserOptions.prototype.context;
 /** @type {?} */
MDNS.BrowserOptions.prototype.flags;
/**
 * @record
 * @struct
 */
MDNS.Browser = function() {};

/**
 * @return {?}
 */
MDNS.Browser.prototype.start = function() {};

/**
 * @return {?}
 */
MDNS.Browser.prototype.stop = function() {};

/**
 * @param {string} event
 * @param {!Function|function(!MDNS.Service): void} listener
 * @return {Browser}
 */
MDNS.Browser.prototype.on = function(event, listener) {};
/**
 * @record
 * @struct
 */
MDNS.BrowserStatic = function() {};

/* TODO: ConstructSignature: MDNS */
 /** @type {!Array<function(!MDNS.Service, function(): void): boolean>} */
MDNS.BrowserStatic.prototype.defaultResolverSequence;
/**
 * @record
 * @struct
 */
MDNS.Service = function() {};
 /** @type {!Array<string>} */
MDNS.Service.prototype.addresses;
 /** @type {number} */
MDNS.Service.prototype.flags;
 /** @type {string} */
MDNS.Service.prototype.fullname;
 /** @type {string} */
MDNS.Service.prototype.host;
 /** @type {number} */
MDNS.Service.prototype.interfaceIndex;
 /** @type {string} */
MDNS.Service.prototype.name;
 /** @type {string} */
MDNS.Service.prototype.networkInterface;
 /** @type {number} */
MDNS.Service.prototype.port;
 /** @type {string} */
MDNS.Service.prototype.replyDomain;
 /** @type {?} */
MDNS.Service.prototype.type;
/**
 * @record
 * @struct
 */
MDNS.ServiceType = function() {};

/* TODO: ConstructSignature: MDNS */

/* TODO: ConstructSignature: MDNS */

/* TODO: ConstructSignature: MDNS */

/* TODO: ConstructSignature: MDNS */

/* TODO: ConstructSignature: MDNS */
 /** @type {boolean} */
MDNS.ServiceType.prototype.fullyQualified;
 /** @type {string} */
MDNS.ServiceType.prototype.name;
 /** @type {string} */
MDNS.ServiceType.prototype.protocol;
 /** @type {!Array<string>} */
MDNS.ServiceType.prototype.subtypes;

/**
 * @return {string}
 */
MDNS.ServiceType.prototype.toString = function() {};

/**
 * @param {string} serviceTypeIdentifier
 * @return {?}
 */
MDNS.ServiceType.prototype.fromString = function(serviceTypeIdentifier) {};

/**
 * @return {!Array<string>}
 */
MDNS.ServiceType.prototype.toArray = function() {};

/**
 * @param {!Array<string>} serviceTypeIdentifier
 * @return {?}
 */
MDNS.ServiceType.prototype.fromArray = function(serviceTypeIdentifier) {};

/**
 * @param {{name: string, protocol: string, subtypes: !Array<string>}|?} serviceTypeIdentifier_or_serviceType
 * @return {?}
 */
MDNS.ServiceType.prototype.fromJSON = function(serviceTypeIdentifier_or_serviceType) {};
/**
 * @record
 * @struct
 */
MDNS.MDNSResolverSequenceTasks = function() {};
/**
 * @extends {MDNS.MDNSResolverSequenceTasks}
 * @record
 * @struct
 */
MDNS.DefaultResolverSequenceTasks = function() {};

/**
 * @param {{flags: ?}=} options
 * @return {function(!MDNS.Service, function(): void): boolean}
 */
MDNS.DefaultResolverSequenceTasks.prototype.DNSServiceResolve = function(options) {};

/**
 * @param {?=} options
 * @return {function(!MDNS.Service, function(): void): boolean}
 */
MDNS.DefaultResolverSequenceTasks.prototype.DNSServiceGetAddrInfo = function(options) {};

/**
 * @param {?=} options
 * @return {function(!MDNS.Service, function(): void): boolean}
 */
MDNS.DefaultResolverSequenceTasks.prototype.getaddrinfo = function(options) {};

/**
 * @return {function(!MDNS.Service, function(): void): boolean}
 */
MDNS.DefaultResolverSequenceTasks.prototype.makeAddressesUnique = function() {};

/**
 * @param {function(string, number, !Array<string>): boolean} fn
 * @return {void}
 */
MDNS.DefaultResolverSequenceTasks.prototype.filterAddresses = function(fn) {};

/**
 * @return {void}
 */
MDNS.DefaultResolverSequenceTasks.prototype.logService = function() {};
 /** @type {!MDNS.AdvertisementCreatable} */
MDNS.Advertisement;
 /** @type {!MDNS.BrowserStatic} */
MDNS.Browser;
 /** @type {?} */
MDNS.ServiceType;
 /** @type {!MDNS.DefaultResolverSequenceTasks} */
MDNS.rst;

/**
 * @param {string} name
 * @param {...string} subtypes
 * @return {?}
 */
MDNS.tcp = function(name, subtypes) {};

/**
 * @param {string} name
 * @param {...string} subtypes
 * @return {?}
 */
MDNS.udp = function(name, subtypes) {};

/**
 * @param {string|!Array<string>|{name: string, protocol: string, subtypes: !Array<string>}|?} name_or_serviceTypeIdentifier_or_serviceType
 * @param {string=} protocol
 * @param {...string} subtypes
 * @return {?}
 */
MDNS.makeServiceType = function(name_or_serviceTypeIdentifier_or_serviceType, protocol, subtypes) {};

/**
 * @param {?} serviceType
 * @param {!MDNS.BrowserOptions=} options
 * @return {?}
 */
MDNS.createBrowser = function(serviceType, options) {};

/**
 * @param {?} serviceType
 * @param {number} port
 * @param {!MDNS.AdvertisementOptions=} options
 * @param {function(!MDNS.DnsSdError, !MDNS.Service): void=} callback
 * @return {?}
 */
MDNS.createAdvertisement = function(serviceType, port, options, callback) {};

/**
 * @param {!MDNS.Service} service
 * @param {!Array<function(!MDNS.Service, function(): void): boolean>=} sequence
 * @param {function(!MDNS.DnsSdError, !MDNS.Service): void=} callback
 * @return {void}
 */
MDNS.resolve = function(service, sequence, callback) {};

/**
 * @param {!MDNS.BrowserOptions} options
 * @return {?}
 */
MDNS.browseThemAll = function(options) {};

/**
 * @return {?}
 */
MDNS.loopbackInterface = function() {};
 /** @type {boolean} */
MDNS.isAvahi;
 /** @type {number} */
MDNS._DNS_SD_H;
 /** @type {string} */
MDNS.kDNSServiceMaxDomainName;
 /** @type {number} */
MDNS.kDNSServiceMaxServiceName;
 /** @type {?} */
MDNS.kDNSServiceOutputFlags;
 /** @type {number} */
MDNS.kDNSServiceProperty_DaemonVersion;
 /** @type {number} */
MDNS.kDNSServiceClass_IN;
 /** @type {number} */
MDNS.kDNSServiceErr_NoError;
 /** @type {number} */
MDNS.kDNSServiceErr_Unknown;
 /** @type {number} */
MDNS.kDNSServiceErr_NoSuchName;
 /** @type {number} */
MDNS.kDNSServiceErr_NoMemory;
 /** @type {number} */
MDNS.kDNSServiceErr_BadParam;
 /** @type {number} */
MDNS.kDNSServiceErr_BadReference;
 /** @type {number} */
MDNS.kDNSServiceErr_BadState;
 /** @type {number} */
MDNS.kDNSServiceErr_BadFlags;
 /** @type {number} */
MDNS.kDNSServiceErr_Unsupported;
 /** @type {number} */
MDNS.kDNSServiceErr_NotInitialized;
 /** @type {number} */
MDNS.kDNSServiceErr_AlreadyRegistered;
 /** @type {number} */
MDNS.kDNSServiceErr_NameConflict;
 /** @type {number} */
MDNS.kDNSServiceErr_Invalid;
 /** @type {number} */
MDNS.kDNSServiceErr_Firewall;
 /** @type {number} */
MDNS.kDNSServiceErr_Incompatible;
 /** @type {number} */
MDNS.kDNSServiceErr_BadInterfaceIndex;
 /** @type {number} */
MDNS.kDNSServiceErr_Refused;
 /** @type {number} */
MDNS.kDNSServiceErr_NoSuchRecord;
 /** @type {number} */
MDNS.kDNSServiceErr_NoAuth;
 /** @type {number} */
MDNS.kDNSServiceErr_NoSuchKey;
 /** @type {number} */
MDNS.kDNSServiceErr_NATTraversal;
 /** @type {number} */
MDNS.kDNSServiceErr_DoubleNAT;
 /** @type {number} */
MDNS.kDNSServiceErr_BadTime;
 /** @type {number} */
MDNS.kDNSServiceErr_BadSig;
 /** @type {number} */
MDNS.kDNSServiceErr_BadKey;
 /** @type {number} */
MDNS.kDNSServiceErr_Transient;
 /** @type {number} */
MDNS.kDNSServiceErr_ServiceNotRunning;
 /** @type {number} */
MDNS.kDNSServiceErr_NATPortMappingUnsupported;
 /** @type {number} */
MDNS.kDNSServiceErr_NATPortMappingDisabled;
 /** @type {number} */
MDNS.kDNSServiceErr_NoRouter;
 /** @type {number} */
MDNS.kDNSServiceErr_PollingMode;
 /** @type {number} */
MDNS.kDNSServiceErr_Timeout;
 /** @type {number} */
MDNS.kDNSServiceType_A;
 /** @type {number} */
MDNS.kDNSServiceType_NS;
 /** @type {number} */
MDNS.kDNSServiceType_MD;
 /** @type {number} */
MDNS.kDNSServiceType_MF;
 /** @type {number} */
MDNS.kDNSServiceType_CNAME;
 /** @type {number} */
MDNS.kDNSServiceType_SOA;
 /** @type {number} */
MDNS.kDNSServiceType_MB;
 /** @type {number} */
MDNS.kDNSServiceType_MG;
 /** @type {number} */
MDNS.kDNSServiceType_MR;
 /** @type {number} */
MDNS.kDNSServiceType_NULL;
 /** @type {number} */
MDNS.kDNSServiceType_WKS;
 /** @type {number} */
MDNS.kDNSServiceType_PTR;
 /** @type {number} */
MDNS.kDNSServiceType_HINFO;
 /** @type {number} */
MDNS.kDNSServiceType_MINFO;
 /** @type {number} */
MDNS.kDNSServiceType_MX;
 /** @type {number} */
MDNS.kDNSServiceType_TXT;
 /** @type {number} */
MDNS.kDNSServiceType_RP;
 /** @type {number} */
MDNS.kDNSServiceType_AFSDB;
 /** @type {number} */
MDNS.kDNSServiceType_X25;
 /** @type {number} */
MDNS.kDNSServiceType_ISDN;
 /** @type {number} */
MDNS.kDNSServiceType_RT;
 /** @type {number} */
MDNS.kDNSServiceType_NSAP;
 /** @type {number} */
MDNS.kDNSServiceType_NSAP_PTR;
 /** @type {number} */
MDNS.kDNSServiceType_SIG;
 /** @type {number} */
MDNS.kDNSServiceType_KEY;
 /** @type {number} */
MDNS.kDNSServiceType_PX;
 /** @type {number} */
MDNS.kDNSServiceType_GPOS;
 /** @type {number} */
MDNS.kDNSServiceType_AAAA;
 /** @type {number} */
MDNS.kDNSServiceType_LOC;
 /** @type {number} */
MDNS.kDNSServiceType_NXT;
 /** @type {number} */
MDNS.kDNSServiceType_EID;
 /** @type {number} */
MDNS.kDNSServiceType_NIMLOC;
 /** @type {number} */
MDNS.kDNSServiceType_SRV;
 /** @type {number} */
MDNS.kDNSServiceType_ATMA;
 /** @type {number} */
MDNS.kDNSServiceType_NAPTR;
 /** @type {number} */
MDNS.kDNSServiceType_KX;
 /** @type {number} */
MDNS.kDNSServiceType_CERT;
 /** @type {number} */
MDNS.kDNSServiceType_A6;
 /** @type {number} */
MDNS.kDNSServiceType_DNAME;
 /** @type {number} */
MDNS.kDNSServiceType_SINK;
 /** @type {number} */
MDNS.kDNSServiceType_OPT;
 /** @type {number} */
MDNS.kDNSServiceType_APL;
 /** @type {number} */
MDNS.kDNSServiceType_DS;
 /** @type {number} */
MDNS.kDNSServiceType_SSHFP;
 /** @type {number} */
MDNS.kDNSServiceType_IPSECKEY;
 /** @type {number} */
MDNS.kDNSServiceType_RRSIG;
 /** @type {number} */
MDNS.kDNSServiceType_NSEC;
 /** @type {number} */
MDNS.kDNSServiceType_DNSKEY;
 /** @type {number} */
MDNS.kDNSServiceType_DHCID;
 /** @type {number} */
MDNS.kDNSServiceType_NSEC3;
 /** @type {number} */
MDNS.kDNSServiceType_NSEC3PARAM;
 /** @type {number} */
MDNS.kDNSServiceType_HIP;
 /** @type {number} */
MDNS.kDNSServiceType_SPF;
 /** @type {number} */
MDNS.kDNSServiceType_UINFO;
 /** @type {number} */
MDNS.kDNSServiceType_UID;
 /** @type {number} */
MDNS.kDNSServiceType_GID;
 /** @type {number} */
MDNS.kDNSServiceType_UNSPEC;
 /** @type {number} */
MDNS.kDNSServiceType_TKEY;
 /** @type {number} */
MDNS.kDNSServiceType_TSIG;
 /** @type {number} */
MDNS.kDNSServiceType_IXFR;
 /** @type {number} */
MDNS.kDNSServiceType_AXFR;
 /** @type {number} */
MDNS.kDNSServiceType_MAILB;
 /** @type {number} */
MDNS.kDNSServiceType_MAILA;
 /** @type {number} */
MDNS.kDNSServiceType_ANY;
 /** @type {number} */
MDNS.kDNSServiceFlagsMoreComing;
 /** @type {number} */
MDNS.kDNSServiceFlagsAdd;
 /** @type {number} */
MDNS.kDNSServiceFlagsDefault;
 /** @type {number} */
MDNS.kDNSServiceFlagsNoAutoRename;
 /** @type {number} */
MDNS.kDNSServiceFlagsShared;
 /** @type {number} */
MDNS.kDNSServiceFlagsUnique;
 /** @type {number} */
MDNS.kDNSServiceFlagsBrowseDomains;
 /** @type {number} */
MDNS.kDNSServiceFlagsRegistrationDomains;
 /** @type {number} */
MDNS.kDNSServiceFlagsLongLivedQuery;
 /** @type {number} */
MDNS.kDNSServiceFlagsAllowRemoteQuery;
 /** @type {number} */
MDNS.kDNSServiceFlagsForceMulticast;
 /** @type {number} */
MDNS.kDNSServiceFlagsKnownUnique;
 /** @type {number} */
MDNS.kDNSServiceFlagsReturnIntermediates;
 /** @type {number} */
MDNS.kDNSServiceFlagsNonBrowsable;
 /** @type {number} */
MDNS.kDNSServiceFlagsShareConnection;
 /** @type {number} */
MDNS.kDNSServiceFlagsSuppressUnusable;
 /** @type {number} */
MDNS.kDNSServiceFlagsWakeOnResolve;
 /** @type {number} */
MDNS.kDNSServiceFlagsBackgroundTrafficClass;
 /** @type {number} */
MDNS.kDNSServiceFlagsIncludeAWDL;
 /** @type {number} */
MDNS.kDNSServiceFlagsValidate;
 /** @type {number} */
MDNS.kDNSServiceFlagsSecure;
 /** @type {number} */
MDNS.kDNSServiceFlagsInsecure;
 /** @type {number} */
MDNS.kDNSServiceFlagsBogus;
 /** @type {number} */
MDNS.kDNSServiceFlagsIndeterminate;
 /** @type {number} */
MDNS.kDNSServiceFlagsUnicastResponse;
 /** @type {number} */
MDNS.kDNSServiceFlagsValidateOptional;
 /** @type {number} */
MDNS.kDNSServiceFlagsWakeOnlyService;
 /** @type {number} */
MDNS.kDNSServiceProtocol_IPv4;
 /** @type {number} */
MDNS.kDNSServiceProtocol_IPv6;
 /** @type {number} */
MDNS.kDNSServiceProtocol_UDP;
 /** @type {number} */
MDNS.kDNSServiceProtocol_TCP;

/* TODO: ExportAssignment in  */