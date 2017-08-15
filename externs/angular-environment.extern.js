/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/angular-environment/index.d.ts:
/** @const */
var angular = {};
/** @const */
angular.environment = {};
/**
 * @record
 * @struct
 */
angular.environment.ServiceProvider = function() {};
 /** @type {function(!angular.environment.Config): void} */
angular.environment.ServiceProvider.prototype.config;
 /** @type {function(): void} */
angular.environment.ServiceProvider.prototype.check;
 /** @type {function(string): ?} */
angular.environment.ServiceProvider.prototype.read;
/**
 * @record
 * @struct
 */
angular.environment.Service = function() {};
 /** @type {function(): string} */
angular.environment.Service.prototype.get;
 /** @type {function(string): void} */
angular.environment.Service.prototype.set;
 /** @type {function(string): boolean} */
angular.environment.Service.prototype.is;
 /** @type {function(string): ?} */
angular.environment.Service.prototype.read;
/**
 * @record
 * @struct
 */
angular.environment.Config = function() {};
 /** @type {!Object<string,!Array<string>>} */
angular.environment.Config.prototype.domains;
 /** @type {!Object<string,!Object<string,?>>} */
angular.environment.Config.prototype.vars;