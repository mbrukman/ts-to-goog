/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/react-intl v1/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "react-intl"
/** @const */
tsickle_declare_module.react_intl = {};

/* TODO: ImportDeclaration in tsickle_declare_module.react_intl */
/** @const */
tsickle_declare_module.react_intl.ReactIntl = {};
/**
 * @extends {React.Mixin}
 * @record
 * @struct
 */
tsickle_declare_module.react_intl.ReactIntl.IIntlMixin = function() {};

/**
 * @param {string} key
 * @return {string}
 */
tsickle_declare_module.react_intl.ReactIntl.IIntlMixin.prototype.getIntlMessage = function(key) {};
 /** @type {!ReactIntl.IIntlMixin} */
tsickle_declare_module.react_intl.ReactIntl.IntlMixin;
/** @const */
tsickle_declare_module.react_intl.ReactIntl.IntlComponent = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.react_intl.ReactIntl.IntlComponent.Props = function() {};
 /** @type {!Array<string>} */
tsickle_declare_module.react_intl.ReactIntl.IntlComponent.Props.prototype.locales;
 /** @type {!Object<string,?>} */
tsickle_declare_module.react_intl.ReactIntl.IntlComponent.Props.prototype.messages;
 /** @type {!Array<string>} */
tsickle_declare_module.react_intl.ReactIntl.IntlComponent.Props.prototype.formats;

/**
 * @param {string} key
 * @return {string}
 */
tsickle_declare_module.react_intl.ReactIntl.IntlComponent.prototype.getIntlMessage = function(key) {};
/** @const */
tsickle_declare_module.react_intl.ReactIntl.FormattedDate = {};
/**
 * @extends {ReactIntl.IntlComponent.Props}
 * @record
 * @struct
 */
tsickle_declare_module.react_intl.ReactIntl.FormattedDate.Props = function() {};
 /** @type {!Date} */
tsickle_declare_module.react_intl.ReactIntl.FormattedDate.Props.prototype.value;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedDate.Props.prototype.day;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedDate.Props.prototype.month;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedDate.Props.prototype.year;
/** @const */
tsickle_declare_module.react_intl.ReactIntl.FormattedTime = {};
/**
 * @extends {ReactIntl.IntlComponent.Props}
 * @record
 * @struct
 */
tsickle_declare_module.react_intl.ReactIntl.FormattedTime.Props = function() {};
 /** @type {!Date} */
tsickle_declare_module.react_intl.ReactIntl.FormattedTime.Props.prototype.value;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedTime.Props.prototype.day;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedTime.Props.prototype.month;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedTime.Props.prototype.year;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedTime.Props.prototype.format;
/** @const */
tsickle_declare_module.react_intl.ReactIntl.FormattedRelative = {};
/**
 * @extends {ReactIntl.IntlComponent.Props}
 * @record
 * @struct
 */
tsickle_declare_module.react_intl.ReactIntl.FormattedRelative.Props = function() {};
 /** @type {number} */
tsickle_declare_module.react_intl.ReactIntl.FormattedRelative.Props.prototype.value;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedRelative.Props.prototype.units;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedRelative.Props.prototype.style;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedRelative.Props.prototype.format;
/** @const */
tsickle_declare_module.react_intl.ReactIntl.FormattedMessage = {};
/**
 * @extends {ReactIntl.IntlComponent.Props}
 * @record
 * @struct
 */
tsickle_declare_module.react_intl.ReactIntl.FormattedMessage.Props = function() {};
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedMessage.Props.prototype.message;

/* TODO: IndexSignature: tsickle_declare_module.react_intl.ReactIntl.FormattedMessage */
/** @const */
tsickle_declare_module.react_intl.ReactIntl.FormattedHTMLMessage = {};
/**
 * @extends {ReactIntl.IntlComponent.Props}
 * @record
 * @struct
 */
tsickle_declare_module.react_intl.ReactIntl.FormattedHTMLMessage.Props = function() {};
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedHTMLMessage.Props.prototype.message;

/* TODO: IndexSignature: tsickle_declare_module.react_intl.ReactIntl.FormattedHTMLMessage */
/** @const */
tsickle_declare_module.react_intl.ReactIntl.FormattedNumber = {};
/**
 * @extends {ReactIntl.IntlComponent.Props}
 * @record
 * @struct
 */
tsickle_declare_module.react_intl.ReactIntl.FormattedNumber.Props = function() {};
 /** @type {number} */
tsickle_declare_module.react_intl.ReactIntl.FormattedNumber.Props.prototype.value;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedNumber.Props.prototype.style;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedNumber.Props.prototype.currency;
 /** @type {string} */
tsickle_declare_module.react_intl.ReactIntl.FormattedNumber.Props.prototype.format;

/* TODO: ExportAssignment in tsickle_declare_module.react_intl */
