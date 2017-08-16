/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/restify-errors/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @extends {vErrorOptions}
 * @record
 * @struct
 */
function RestifyHttpErrorOptions() {}
 /** @type {number} */
RestifyHttpErrorOptions.prototype.statusCode;
 /** @type {string} */
RestifyHttpErrorOptions.prototype.message;
 /** @type {string} */
RestifyHttpErrorOptions.prototype.code;
 /** @type {?} */
RestifyHttpErrorOptions.prototype.context;

/**
 * @constructor
 * @struct
 * @param {string|?} printf_or_options_or_priorErr
 * @param {...?|string=} args_or_printf_or_options
 */
function HttpError(printf_or_options_or_priorErr, args_or_printf_or_options) {}
 /** @type {string} */
HttpError.prototype.message;
 /** @type {number} */
HttpError.prototype.statusCode;
 /** @type {string} */
HttpError.prototype.code;
 /** @type {?} */
HttpError.prototype.body;
 /** @type {string} */
HttpError.prototype.displayName;

/**
 * @return {?}
 */
HttpError.prototype.toJSON = function() {};

/**
 * @constructor
 * @struct
 * @param {string|?=} printf_or_options_or_priorErr
 * @param {...?|string=} args_or_printf_or_options
 */
function DefinedHttpError(printf_or_options_or_priorErr, args_or_printf_or_options) {}
/**
 * @extends {RestifyHttpErrorOptions}
 * @record
 * @struct
 */
function RestifyRestErrorOptions() {}
 /** @type {string} */
RestifyRestErrorOptions.prototype.restCode;

/**
 * @constructor
 * @struct
 * @param {string|?} printf_or_options_or_priorErr
 * @param {...?|string=} args_or_printf_or_options
 */
function RestError(printf_or_options_or_priorErr, args_or_printf_or_options) {}
 /** @type {string} */
RestError.prototype.restCode;

/**
 * @constructor
 * @struct
 * @param {string|?=} printf_or_options_or_priorErr
 * @param {...?|string=} args_or_printf_or_options
 */
function DefinedRestError(printf_or_options_or_priorErr, args_or_printf_or_options) {}

/**
 * @param {string} name
 * @param {?=} defaults
 * @return {void}
 */
function makeConstructor(name, defaults) {}

/**
 * @param {number} statusCode
 * @param {...?} args
 * @return {?}
 */
function makeErrFromCode(statusCode, args) {}

/**
 * @param {?} err
 * @return {?}
 */
function bunyanSerializer(err) {}
/**
 * @constructor
 * @struct
 */
function BadRequestError() {}
/**
 * @constructor
 * @struct
 */
function UnauthorizedError() {}
/**
 * @constructor
 * @struct
 */
function PaymentRequiredError() {}
/**
 * @constructor
 * @struct
 */
function ForbiddenError() {}
/**
 * @constructor
 * @struct
 */
function NotFoundError() {}
/**
 * @constructor
 * @struct
 */
function MethodNotAllowedError() {}
/**
 * @constructor
 * @struct
 */
function NotAcceptableError() {}
/**
 * @constructor
 * @struct
 */
function ProxyAuthenticationRequiredError() {}
/**
 * @constructor
 * @struct
 */
function RequestTimeoutError() {}
/**
 * @constructor
 * @struct
 */
function ConflictError() {}
/**
 * @constructor
 * @struct
 */
function GoneError() {}
/**
 * @constructor
 * @struct
 */
function LengthRequiredError() {}
/**
 * @constructor
 * @struct
 */
function PreconditionFailedError() {}
/**
 * @constructor
 * @struct
 */
function RequestEntityTooLargeError() {}
/**
 * @constructor
 * @struct
 */
function RequesturiTooLargeError() {}
/**
 * @constructor
 * @struct
 */
function UnsupportedMediaTypeError() {}
/**
 * @constructor
 * @struct
 */
function RangeNotSatisfiableError() {}
/**
 * @constructor
 * @struct
 */
function ExpectationFailedError() {}
/**
 * @constructor
 * @struct
 */
function ImATeapotError() {}
/**
 * @constructor
 * @struct
 */
function UnprocessableEntityError() {}
/**
 * @constructor
 * @struct
 */
function LockedError() {}
/**
 * @constructor
 * @struct
 */
function FailedDependencyError() {}
/**
 * @constructor
 * @struct
 */
function UnorderedCollectionError() {}
/**
 * @constructor
 * @struct
 */
function UpgradeRequiredError() {}
/**
 * @constructor
 * @struct
 */
function PreconditionRequiredError() {}
/**
 * @constructor
 * @struct
 */
function TooManyRequestsError() {}
/**
 * @constructor
 * @struct
 */
function RequestHeaderFieldsTooLargeError() {}
/**
 * @constructor
 * @struct
 */
function InternalServerError() {}
/**
 * @constructor
 * @struct
 */
function NotImplementedError() {}
/**
 * @constructor
 * @struct
 */
function BadGatewayError() {}
/**
 * @constructor
 * @struct
 */
function ServiceUnavailableError() {}
/**
 * @constructor
 * @struct
 */
function GatewayTimeoutError() {}
/**
 * @constructor
 * @struct
 */
function HttpVersionNotSupportedError() {}
/**
 * @constructor
 * @struct
 */
function VariantAlsoNegotiatesError() {}
/**
 * @constructor
 * @struct
 */
function InsufficientStorageError() {}
/**
 * @constructor
 * @struct
 */
function BandwidthLimitExceededError() {}
/**
 * @constructor
 * @struct
 */
function NotExtendedError() {}
/**
 * @constructor
 * @struct
 */
function NetworkAuthenticationRequiredError() {}
/**
 * @constructor
 * @struct
 */
function BadDigestError() {}
/**
 * @constructor
 * @struct
 */
function BadMethodError() {}
/**
 * @constructor
 * @struct
 */
function InternalError() {}
/**
 * @constructor
 * @struct
 */
function InvalidArgumentError() {}
/**
 * @constructor
 * @struct
 */
function InvalidContentError() {}
/**
 * @constructor
 * @struct
 */
function InvalidCredentialsError() {}
/**
 * @constructor
 * @struct
 */
function InvalidHeaderError() {}
/**
 * @constructor
 * @struct
 */
function InvalidVersionError() {}
/**
 * @constructor
 * @struct
 */
function MissingParameterError() {}
/**
 * @constructor
 * @struct
 */
function NotAuthorizedError() {}
/**
 * @constructor
 * @struct
 */
function RequestExpiredError() {}
/**
 * @constructor
 * @struct
 */
function RequestThrottledError() {}
/**
 * @constructor
 * @struct
 */
function ResourceNotFoundError() {}
/**
 * @constructor
 * @struct
 */
function WrongAcceptError() {}
