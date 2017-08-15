/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/cli-color/index.d.ts:
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "cli-color"
/** @const */
tsickle_declare_module.cli_color = {};
/** @const */
tsickle_declare_module.cli_color.m = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.cli_color.m.Format = function() {};

/* TODO: CallSignature: tsickle_declare_module.cli_color.m */
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bold;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.italic;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.underline;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.blink;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.inverse;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.strike;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.black;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.red;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.green;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.yellow;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.blue;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.magenta;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.cyan;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.white;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgBlack;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgRed;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgGreen;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgYellow;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgBlue;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgMagenta;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgCyan;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgWhite;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.blackBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.redBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.greenBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.yellowBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.blueBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.magentaBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.cyanBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.whiteBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgBlackBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgRedBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgGreenBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgYellowBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgBlueBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgMagentaBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgCyanBright;
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m.Format.prototype.bgWhiteBright;
 /** @type {string} */
tsickle_declare_module.cli_color.m.Format.prototype.beep;
 /** @type {string} */
tsickle_declare_module.cli_color.m.Format.prototype.reset;
 /** @type {number} */
tsickle_declare_module.cli_color.m.Format.prototype.width;
 /** @type {number} */
tsickle_declare_module.cli_color.m.Format.prototype.height;
 /** @type {boolean} */
tsickle_declare_module.cli_color.m.Format.prototype.xtermSupported;

/**
 * @param {number} color
 * @return {!m.Format}
 */
tsickle_declare_module.cli_color.m.Format.prototype.xterm = function(color) {};

/**
 * @param {number} color
 * @return {!m.Format}
 */
tsickle_declare_module.cli_color.m.Format.prototype.bgXterm = function(color) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
tsickle_declare_module.cli_color.m.Format.prototype.move = function(x, y) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
tsickle_declare_module.cli_color.m.Format.prototype.moveTo = function(x, y) {};

/**
 * @param {number=} n
 * @param {boolean=} erase
 * @return {string}
 */
tsickle_declare_module.cli_color.m.Format.prototype.bol = function(n, erase) {};

/**
 * @param {number} n
 * @return {string}
 */
tsickle_declare_module.cli_color.m.Format.prototype.up = function(n) {};

/**
 * @param {number} n
 * @return {string}
 */
tsickle_declare_module.cli_color.m.Format.prototype.down = function(n) {};

/**
 * @param {number} n
 * @return {string}
 */
tsickle_declare_module.cli_color.m.Format.prototype.left = function(n) {};

/**
 * @param {number} n
 * @return {string}
 */
tsickle_declare_module.cli_color.m.Format.prototype.right = function(n) {};
 /** @type {!m.Format} */
tsickle_declare_module.cli_color.m;

/* TODO: ExportAssignment in tsickle_declare_module.cli_color */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "cli-color/trim"
/** @const */
tsickle_declare_module.cli_color_trim = {};

/**
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.cli_color_trim.ansiTrim = function(str) {};

/* TODO: ExportAssignment in tsickle_declare_module.cli_color_trim */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "cli-color/throbber"
/** @const */
tsickle_declare_module.cli_color_throbber = {};

/* TODO: ImportEqualsDeclaration in tsickle_declare_module.cli_color_throbber */
/** @const */
tsickle_declare_module.cli_color_throbber.setupThrobber = {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.cli_color_throbber.setupThrobber.Throbber = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.cli_color_throbber.setupThrobber.Throbber.prototype.start = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.cli_color_throbber.setupThrobber.Throbber.prototype.stop = function() {};

/**
 * @return {void}
 */
tsickle_declare_module.cli_color_throbber.setupThrobber.Throbber.prototype.restart = function() {};

/**
 * @param {function(string): ?} write
 * @param {number} period
 * @param {!m.Format=} format
 * @return {!setupThrobber.Throbber}
 */
tsickle_declare_module.cli_color_throbber.setupThrobber = function(write, period, format) {};

/* TODO: ExportAssignment in tsickle_declare_module.cli_color_throbber */
