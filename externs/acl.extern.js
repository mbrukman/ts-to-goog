/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/acl/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/** @typedef {(string|!Array<string>)} */
var strings;

/** @typedef {(string|number)} */
var Value;

/** @typedef {(string|number|!Array<(string|number)>)} */
var Values;

/** @typedef {?} */
var Action;

/** @typedef {?} */
var Callback;

/** @typedef {?} */
var AnyCallback;

/** @typedef {?} */
var AllowedCallback;

/** @typedef {?} */
var GetUserId;
/**
 * @record
 * @struct
 */
function AclStatic() {}

/* TODO: ConstructSignature:  */

/* TODO: ConstructSignature:  */

/* TODO: ConstructSignature:  */
 /** @type {?} */
AclStatic.prototype.memoryBackend;
/**
 * @record
 * @struct
 */
function Logger() {}
 /** @type {?} */
Logger.prototype.debug;
/**
 * @record
 * @struct
 */
function Acl() {}
 /** @type {?} */
Acl.prototype.addUserRoles;
 /** @type {?} */
Acl.prototype.removeUserRoles;
 /** @type {?} */
Acl.prototype.userRoles;
 /** @type {?} */
Acl.prototype.roleUsers;
 /** @type {?} */
Acl.prototype.hasRole;
 /** @type {?} */
Acl.prototype.addRoleParents;
 /** @type {?} */
Acl.prototype.removeRole;
 /** @type {?} */
Acl.prototype.removeResource;
 /** @type {?} */
Acl.prototype.allow;
 /** @type {?} */
Acl.prototype.removeAllow;
 /** @type {?} */
Acl.prototype.removePermissions;
 /** @type {?} */
Acl.prototype.allowedPermissions;
 /** @type {?} */
Acl.prototype.isAllowed;
 /** @type {?} */
Acl.prototype.areAnyRolesAllowed;
 /** @type {?} */
Acl.prototype.whatResources;
 /** @type {?} */
Acl.prototype.permittedResources;
 /** @type {?} */
Acl.prototype.middleware;
/**
 * @record
 * @struct
 */
function Option() {}
 /** @type {?} */
Option.prototype.buckets;
/**
 * @record
 * @struct
 */
function BucketsOption() {}
 /** @type {string} */
BucketsOption.prototype.meta;
 /** @type {string} */
BucketsOption.prototype.parents;
 /** @type {string} */
BucketsOption.prototype.permissions;
 /** @type {string} */
BucketsOption.prototype.resources;
 /** @type {string} */
BucketsOption.prototype.roles;
 /** @type {string} */
BucketsOption.prototype.users;
/**
 * @record
 * @struct
 */
function AclSet() {}
 /** @type {(string|!Array<string>)} */
AclSet.prototype.roles;
 /** @type {!Array<?>} */
AclSet.prototype.allows;
/**
 * @record
 * @struct
 */
function AclAllow() {}
 /** @type {(string|!Array<string>)} */
AclAllow.prototype.resources;
 /** @type {(string|!Array<string>)} */
AclAllow.prototype.permissions;
/**
 * @extends {Backend}
 * @record
 * @struct
 */
function MemoryBackend() {}
/**
 * @record
 * @struct
 */
function MemoryBackendStatic() {}

/* TODO: ConstructSignature:  */
/**
 * @record
 * @struct
 */
function Backend() {}
 /** @type {?} */
Backend.prototype.begin;
 /** @type {?} */
Backend.prototype.end;
 /** @type {?} */
Backend.prototype.clean;
 /** @type {?} */
Backend.prototype.get;
 /** @type {?} */
Backend.prototype.union;
 /** @type {?} */
Backend.prototype.add;
 /** @type {?} */
Backend.prototype.del;
 /** @type {?} */
Backend.prototype.remove;
 /** @type {!Function} */
Backend.prototype.endAsync;
 /** @type {!Function} */
Backend.prototype.getAsync;
 /** @type {!Function} */
Backend.prototype.cleanAsync;
 /** @type {!Function} */
Backend.prototype.unionAsync;
/**
 * @record
 * @struct
 */
function Contract() {}

/* TODO: CallSignature:  */
 /** @type {boolean} */
Contract.prototype.debug;
 /** @type {boolean} */
Contract.prototype.fulfilled;
 /** @type {!Array<?>} */
Contract.prototype.args;
 /** @type {!Array<string>} */
Contract.prototype.checkedParams;
 /** @type {?} */
Contract.prototype.params;
 /** @type {?} */
Contract.prototype.end;
/**
 * @record
 * @struct
 */
function NoOp() {}
 /** @type {?} */
NoOp.prototype.params;
 /** @type {?} */
NoOp.prototype.end;

/* TODO: ImportEqualsDeclaration in  */
 /** @type {?} */
AclStatic.prototype.redisBackend;
/**
 * @extends {Backend}
 * @record
 * @struct
 */
function RedisBackend() {}
/**
 * @record
 * @struct
 */
function RedisBackendStatic() {}

/* TODO: ConstructSignature:  */

/* TODO: ConstructSignature:  */

/* TODO: ImportEqualsDeclaration in  */
 /** @type {?} */
AclStatic.prototype.mongodbBackend;
/**
 * @extends {Backend}
 * @record
 * @struct
 */
function MongodbBackend() {}
/**
 * @record
 * @struct
 */
function MongodbBackendStatic() {}

/* TODO: ConstructSignature:  */

/* TODO: ConstructSignature:  */

/* TODO: ConstructSignature:  */
 /** @type {?} */
var _;

/* TODO: ExportAssignment in  */
