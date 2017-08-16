/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/ip/index.d.ts:
/**
 * @record
 * @struct
 */
function NodeBuffer() {}
/**
 * @record
 * @struct
 */
function SubnetInfo() {}
 /** @type {string} */
SubnetInfo.prototype.networkAddress;
 /** @type {string} */
SubnetInfo.prototype.firstAddress;
 /** @type {string} */
SubnetInfo.prototype.lastAddress;
 /** @type {string} */
SubnetInfo.prototype.broadcastAddress;
 /** @type {string} */
SubnetInfo.prototype.subnetMask;
 /** @type {number} */
SubnetInfo.prototype.subnetMaskLength;
 /** @type {number} */
SubnetInfo.prototype.numHosts;
 /** @type {number} */
SubnetInfo.prototype.length;

/**
 * @param {string} ip
 * @return {boolean}
 */
SubnetInfo.prototype.contains = function(ip) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "ip"
/** @const */
tsickle_declare_module.ip = {};

/**
 * Check two IP address are the same.
 * 
 * @param {string} ip1
 * @param {string} ip2
 * @return {boolean}
 */
tsickle_declare_module.ip.isEqual = function(ip1, ip2) {};

/**
 * Convert an IP string into a buffer.
 * 
 * @param {string} ip
 * @param {number=} buffer
 * @param {number=} offset
 * @return {!NodeBuffer}
 */
tsickle_declare_module.ip.toBuffer = function(ip, buffer, offset) {};

/**
 * Convert an IP buffer into a string.
 * 
 * @param {!NodeBuffer} ip
 * @param {number=} offset
 * @param {number=} length
 * @return {string}
 */
tsickle_declare_module.ip.toString = function(ip, offset, length) {};

/**
 * Get the subnet mask from a CIDR prefix length.
 * 
 * @param {number} prefixLength
 * @param {string=} family The IP family is infered from the prefixLength, but can be explicity specified as either "ipv4" or "ipv6".
 * 
 * @return {string}
 */
tsickle_declare_module.ip.fromPrefixLen = function(prefixLength, family) {};

/**
 * Get the network ID IP address from an IP address and its subnet mask.
 * 
 * @param {string} ip
 * @param {string} mask
 * @return {string}
 */
tsickle_declare_module.ip.mask = function(ip, mask) {};

/**
 * Get the network ID IP address from an IP address in CIDR notation.
 * 
 * @param {string} cidr
 * @return {string}
 */
tsickle_declare_module.ip.cidr = function(cidr) {};

/**
 * Get the bitwise inverse (NOT every octet) of an IP address or subnet mask.
 * 
 * @param {string} ip
 * @return {string}
 */
tsickle_declare_module.ip.not = function(ip) {};

/**
 * Get the bitwise OR of two IP addresses (usually an IP address and a subnet mask).
 * 
 * @param {string} ip
 * @param {string} mask
 * @return {string}
 */
tsickle_declare_module.ip.or = function(ip, mask) {};

/**
 * Check whether an IP is within a private IP address range.
 * 
 * @param {string} ip
 * @return {boolean}
 */
tsickle_declare_module.ip.isPrivate = function(ip) {};

/**
 * Check whether an IP is within a public IP address range.
 * 
 * @param {string} ip
 * @return {boolean}
 */
tsickle_declare_module.ip.isPublic = function(ip) {};

/**
 * Check whether an IP is a loopback address.
 * 
 * @param {string} ip
 * @return {boolean}
 */
tsickle_declare_module.ip.isLoopback = function(ip) {};

/**
 * Check whether an IP is a IPv4 address.
 * 
 * @param {string} ip
 * @return {boolean}
 */
tsickle_declare_module.ip.isV4Format = function(ip) {};

/**
 * Check whether an IP is a IPv6 address.
 * 
 * @param {string} ip
 * @return {boolean}
 */
tsickle_declare_module.ip.isV6Format = function(ip) {};

/**
 * Get the loopback address for an IP family.
 * 
 * @param {string=} family The family can be either "ipv4" or "ipv6". Default: "ipv4".
 * 
 * @return {string}
 */
tsickle_declare_module.ip.loopback = function(family) {};

/**
 * Get the address for the network interface on the current system with the specified 'name'.
 * If no interface name is specified, the first IPv4 address or loopback address is returned.
 * 
 * @param {string=} name The name can be any named interface, or 'public' or 'private'.
 * @param {string=} family The family can be either "ipv4" or "ipv6". Default: "ipv4".
 * 
 * @return {string}
 */
tsickle_declare_module.ip.address = function(name, family) {};

/**
 * Convert a string IPv4 IP address to the equivalent long numeric value.
 * 
 * @param {string} ip
 * @return {number}
 */
tsickle_declare_module.ip.toLong = function(ip) {};

/**
 * Convert an IPv4 IP address from its the long numeric value to a string.
 * 
 * @param {number} ip
 * @return {string}
 */
tsickle_declare_module.ip.fromLong = function(ip) {};

/**
 * Get the subnet information.
 * @param {string} ip IP address.
 * @param {string} subnet Subnet address.
 * @return {!SubnetInfo}
 */
tsickle_declare_module.ip.subnet = function(ip, subnet) {};

/**
 * Get the subnet information.
 * @param {string} cidr CIDR address.
 * @return {!SubnetInfo}
 */
tsickle_declare_module.ip.cidrSubnet = function(cidr) {};
