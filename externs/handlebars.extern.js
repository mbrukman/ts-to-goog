/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/handlebars/index.d.ts:
/** @const */
var Handlebars = {};

/**
 * @param {string|!Object} name
 * @param {!Function=} fn
 * @param {boolean=} inverse
 * @return {void}
 */
Handlebars.registerHelper = function(name, fn, inverse) {};

/**
 * @param {string} name
 * @param {?} str
 * @return {void}
 */
Handlebars.registerPartial = function(name, str) {};

/**
 * @param {string} name
 * @return {void}
 */
Handlebars.unregisterHelper = function(name) {};

/**
 * @param {string} name
 * @return {void}
 */
Handlebars.unregisterPartial = function(name) {};

/**
 * @param {string|!Object<string,!Function>} name_or_obj
 * @param {!Function=} fn
 * @return {void}
 */
Handlebars.registerDecorator = function(name_or_obj, fn) {};

/**
 * @param {string} name
 * @return {void}
 */
Handlebars.unregisterDecorator = function(name) {};

/**
 * @return {void}
 */
Handlebars.K = function() {};

/**
 * @param {?} object
 * @return {?}
 */
Handlebars.createFrame = function(object) {};

/**
 * @param {!Array<?>} obj
 * @param {!Array<?>} ids
 * @return {!Array<?>}
 */
Handlebars.blockParams = function(obj, ids) {};

/**
 * @param {string} message
 * @return {void}
 */
Handlebars.Exception = function(message) {};

/**
 * @param {number} level
 * @param {?} obj
 * @return {void}
 */
Handlebars.log = function(level, obj) {};

/**
 * @param {string} input
 * @return {!hbs.AST.Program}
 */
Handlebars.parse = function(input) {};

/**
 * @template T
 * @param {?} input
 * @param {!CompileOptions=} options
 * @return {!HandlebarsTemplateDelegate<T>}
 */
Handlebars.compile = function(input, options) {};

/**
 * @param {?} input
 * @param {!PrecompileOptions=} options
 * @return {!TemplateSpecification}
 */
Handlebars.precompile = function(input, options) {};

/**
 * @template T
 * @param {!TemplateSpecification} precompilation
 * @return {!HandlebarsTemplateDelegate<T>}
 */
Handlebars.template = function(precompilation) {};

/**
 * @return {?}
 */
Handlebars.create = function() {};
 /** @type {?} */
Handlebars.SafeString;
 /** @type {function(string): string} */
Handlebars.escapeExpression;
 /** @type {?} */
Handlebars.Utils;
 /** @type {!Logger} */
Handlebars.logger;
 /** @type {!HandlebarsTemplates} */
Handlebars.templates;
 /** @type {!Object<string,!Function>} */
Handlebars.helpers;
 /** @type {!Object<string,?>} */
Handlebars.partials;
 /** @type {!Object<string,!Function>} */
Handlebars.decorators;

/**
 * @return {?}
 */
Handlebars.noConflict = function() {};
/** @const */
Handlebars.AST = {};
 /** @type {!hbs.AST.helpers} */
Handlebars.AST.helpers;
/**
 * @record
 * @struct
 */
Handlebars.ICompiler = function() {};

/**
 * @param {!hbs.AST.Node} node
 * @return {void}
 */
Handlebars.ICompiler.prototype.accept = function(node) {};

/**
 * @param {!hbs.AST.Program} program
 * @return {void}
 */
Handlebars.ICompiler.prototype.Program = function(program) {};

/**
 * @param {!hbs.AST.BlockStatement} block
 * @return {void}
 */
Handlebars.ICompiler.prototype.BlockStatement = function(block) {};

/**
 * @param {!hbs.AST.PartialStatement} partial
 * @return {void}
 */
Handlebars.ICompiler.prototype.PartialStatement = function(partial) {};

/**
 * @param {!hbs.AST.PartialBlockStatement} partial
 * @return {void}
 */
Handlebars.ICompiler.prototype.PartialBlockStatement = function(partial) {};

/**
 * @param {!hbs.AST.DecoratorBlock} decorator
 * @return {void}
 */
Handlebars.ICompiler.prototype.DecoratorBlock = function(decorator) {};

/**
 * @param {!hbs.AST.Decorator} decorator
 * @return {void}
 */
Handlebars.ICompiler.prototype.Decorator = function(decorator) {};

/**
 * @param {!hbs.AST.MustacheStatement} mustache
 * @return {void}
 */
Handlebars.ICompiler.prototype.MustacheStatement = function(mustache) {};

/**
 * @param {!hbs.AST.ContentStatement} content
 * @return {void}
 */
Handlebars.ICompiler.prototype.ContentStatement = function(content) {};

/**
 * @param {!hbs.AST.CommentStatement=} comment
 * @return {void}
 */
Handlebars.ICompiler.prototype.CommentStatement = function(comment) {};

/**
 * @param {!hbs.AST.SubExpression} sexpr
 * @return {void}
 */
Handlebars.ICompiler.prototype.SubExpression = function(sexpr) {};

/**
 * @param {!hbs.AST.PathExpression} path
 * @return {void}
 */
Handlebars.ICompiler.prototype.PathExpression = function(path) {};

/**
 * @param {!hbs.AST.StringLiteral} str
 * @return {void}
 */
Handlebars.ICompiler.prototype.StringLiteral = function(str) {};

/**
 * @param {!hbs.AST.NumberLiteral} num
 * @return {void}
 */
Handlebars.ICompiler.prototype.NumberLiteral = function(num) {};

/**
 * @param {!hbs.AST.BooleanLiteral} bool
 * @return {void}
 */
Handlebars.ICompiler.prototype.BooleanLiteral = function(bool) {};

/**
 * @return {void}
 */
Handlebars.ICompiler.prototype.UndefinedLiteral = function() {};

/**
 * @return {void}
 */
Handlebars.ICompiler.prototype.NullLiteral = function() {};

/**
 * @param {!hbs.AST.Hash} hash
 * @return {void}
 */
Handlebars.ICompiler.prototype.Hash = function(hash) {};
/**
 * @implements {Handlebars.ICompiler}
 * @constructor
 * @struct
 */
Handlebars.Visitor = function() {};

/**
 * @param {!hbs.AST.Node} node
 * @return {void}
 */
Handlebars.Visitor.prototype.accept = function(node) {};

/**
 * @param {!hbs.AST.Node} node
 * @param {string} name
 * @return {void}
 */
Handlebars.Visitor.prototype.acceptKey = function(node, name) {};

/**
 * @param {!Array<!hbs.AST.Expression>} arr
 * @return {void}
 */
Handlebars.Visitor.prototype.acceptArray = function(arr) {};

/**
 * @param {!hbs.AST.Program} program
 * @return {void}
 */
Handlebars.Visitor.prototype.Program = function(program) {};

/**
 * @param {!hbs.AST.BlockStatement} block
 * @return {void}
 */
Handlebars.Visitor.prototype.BlockStatement = function(block) {};

/**
 * @param {!hbs.AST.PartialStatement} partial
 * @return {void}
 */
Handlebars.Visitor.prototype.PartialStatement = function(partial) {};

/**
 * @param {!hbs.AST.PartialBlockStatement} partial
 * @return {void}
 */
Handlebars.Visitor.prototype.PartialBlockStatement = function(partial) {};

/**
 * @param {!hbs.AST.DecoratorBlock} decorator
 * @return {void}
 */
Handlebars.Visitor.prototype.DecoratorBlock = function(decorator) {};

/**
 * @param {!hbs.AST.Decorator} decorator
 * @return {void}
 */
Handlebars.Visitor.prototype.Decorator = function(decorator) {};

/**
 * @param {!hbs.AST.MustacheStatement} mustache
 * @return {void}
 */
Handlebars.Visitor.prototype.MustacheStatement = function(mustache) {};

/**
 * @param {!hbs.AST.ContentStatement} content
 * @return {void}
 */
Handlebars.Visitor.prototype.ContentStatement = function(content) {};

/**
 * @param {!hbs.AST.CommentStatement=} comment
 * @return {void}
 */
Handlebars.Visitor.prototype.CommentStatement = function(comment) {};

/**
 * @param {!hbs.AST.SubExpression} sexpr
 * @return {void}
 */
Handlebars.Visitor.prototype.SubExpression = function(sexpr) {};

/**
 * @param {!hbs.AST.PathExpression} path
 * @return {void}
 */
Handlebars.Visitor.prototype.PathExpression = function(path) {};

/**
 * @param {!hbs.AST.StringLiteral} str
 * @return {void}
 */
Handlebars.Visitor.prototype.StringLiteral = function(str) {};

/**
 * @param {!hbs.AST.NumberLiteral} num
 * @return {void}
 */
Handlebars.Visitor.prototype.NumberLiteral = function(num) {};

/**
 * @param {!hbs.AST.BooleanLiteral} bool
 * @return {void}
 */
Handlebars.Visitor.prototype.BooleanLiteral = function(bool) {};

/**
 * @return {void}
 */
Handlebars.Visitor.prototype.UndefinedLiteral = function() {};

/**
 * @return {void}
 */
Handlebars.Visitor.prototype.NullLiteral = function() {};

/**
 * @param {!hbs.AST.Hash} hash
 * @return {void}
 */
Handlebars.Visitor.prototype.Hash = function(hash) {};
/**
 * @record
 * @struct
 */
function HandlebarsTemplatable() {}
 /** @type {!HandlebarsTemplateDelegate<?>} */
HandlebarsTemplatable.prototype.template;
/**
 * @record
 * @struct
 */
function HandlebarsTemplateDelegate() {}

/* TODO: CallSignature:  */
/**
 * @record
 * @struct
 */
function HandlebarsTemplates() {}

/* TODO: IndexSignature:  */
/**
 * @record
 * @struct
 */
function TemplateSpecification() {}
/**
 * @record
 * @struct
 */
function RuntimeOptions() {}
 /** @type {boolean} */
RuntimeOptions.prototype.partial;
 /** @type {!Array<?>} */
RuntimeOptions.prototype.depths;
 /** @type {!Object<string,!Function>} */
RuntimeOptions.prototype.helpers;
 /** @type {!Object<string,!HandlebarsTemplateDelegate<?>>} */
RuntimeOptions.prototype.partials;
 /** @type {!Object<string,!Function>} */
RuntimeOptions.prototype.decorators;
/**
 * @record
 * @struct
 */
function CompileOptions() {}
 /** @type {boolean} */
CompileOptions.prototype.data;
 /** @type {boolean} */
CompileOptions.prototype.compat;
 /** @type {{helperMissing: boolean, blockHelperMissing: boolean, each: boolean, if: boolean, unless: boolean, with: boolean, log: boolean, lookup: boolean}} */
CompileOptions.prototype.knownHelpers;
 /** @type {boolean} */
CompileOptions.prototype.knownHelpersOnly;
 /** @type {boolean} */
CompileOptions.prototype.noEscape;
 /** @type {boolean} */
CompileOptions.prototype.strict;
 /** @type {boolean} */
CompileOptions.prototype.assumeObjects;
 /** @type {boolean} */
CompileOptions.prototype.preventIndent;
 /** @type {boolean} */
CompileOptions.prototype.ignoreStandalone;
 /** @type {boolean} */
CompileOptions.prototype.explicitPartialContext;
/**
 * @extends {CompileOptions}
 * @record
 * @struct
 */
function PrecompileOptions() {}
 /** @type {string} */
PrecompileOptions.prototype.srcName;
 /** @type {string} */
PrecompileOptions.prototype.destName;
/** @const */
var hbs = {};

/**
 * @constructor
 * @struct
 * @param {string} str
 */
hbs.SafeString = function(str) {};

/**
 * @return {string}
 */
hbs.SafeString.toString = function() {};
/** @const */
hbs.Utils = {};

/**
 * @param {string} str
 * @return {string}
 */
hbs.Utils.escapeExpression = function(str) {};

/**
 * @param {?} object
 * @return {?}
 */
hbs.Utils.createFrame = function(object) {};

/**
 * @param {!Array<?>} obj
 * @param {!Array<?>} ids
 * @return {!Array<?>}
 */
hbs.Utils.blockParams = function(obj, ids) {};

/**
 * @param {?} obj
 * @return {boolean}
 */
hbs.Utils.isEmpty = function(obj) {};

/**
 * @param {?} obj
 * @param {...?} source
 * @return {?}
 */
hbs.Utils.extend = function(obj, source) {};

/**
 * @param {?} obj
 * @return {string}
 */
hbs.Utils.toString = function(obj) {};

/**
 * @param {?} obj
 * @return {boolean}
 */
hbs.Utils.isArray = function(obj) {};

/**
 * @param {?} obj
 * @return {boolean}
 */
hbs.Utils.isFunction = function(obj) {};
/**
 * @record
 * @struct
 */
function Logger() {}
 /** @type {number} */
Logger.prototype.DEBUG;
 /** @type {number} */
Logger.prototype.INFO;
 /** @type {number} */
Logger.prototype.WARN;
 /** @type {number} */
Logger.prototype.ERROR;
 /** @type {number} */
Logger.prototype.level;
 /** @type {!Object<number,string>} */
Logger.prototype.methodMap;

/**
 * @param {number} level
 * @param {string} obj
 * @return {void}
 */
Logger.prototype.log = function(level, obj) {};
/** @const */
hbs.AST = {};
/**
 * @record
 * @struct
 */
hbs.AST.Node = function() {};
 /** @type {string} */
hbs.AST.Node.prototype.type;
 /** @type {!hbs.AST.SourceLocation} */
hbs.AST.Node.prototype.loc;
/**
 * @record
 * @struct
 */
hbs.AST.SourceLocation = function() {};
 /** @type {string} */
hbs.AST.SourceLocation.prototype.source;
 /** @type {!hbs.AST.Position} */
hbs.AST.SourceLocation.prototype.start;
 /** @type {!hbs.AST.Position} */
hbs.AST.SourceLocation.prototype.end;
/**
 * @record
 * @struct
 */
hbs.AST.Position = function() {};
 /** @type {number} */
hbs.AST.Position.prototype.line;
 /** @type {number} */
hbs.AST.Position.prototype.column;
/**
 * @extends {hbs.AST.Node}
 * @record
 * @struct
 */
hbs.AST.Program = function() {};
 /** @type {!Array<!hbs.AST.Statement>} */
hbs.AST.Program.prototype.body;
 /** @type {!Array<string>} */
hbs.AST.Program.prototype.blockParams;
/**
 * @extends {hbs.AST.Node}
 * @record
 * @struct
 */
hbs.AST.Statement = function() {};
/**
 * @extends {hbs.AST.Statement}
 * @record
 * @struct
 */
hbs.AST.MustacheStatement = function() {};
 /** @type {(!hbs.AST.PathExpression|!hbs.AST.Literal)} */
hbs.AST.MustacheStatement.prototype.path;
 /** @type {!Array<!hbs.AST.Expression>} */
hbs.AST.MustacheStatement.prototype.params;
 /** @type {!hbs.AST.Hash} */
hbs.AST.MustacheStatement.prototype.hash;
 /** @type {boolean} */
hbs.AST.MustacheStatement.prototype.escaped;
 /** @type {!hbs.AST.StripFlags} */
hbs.AST.MustacheStatement.prototype.strip;
/**
 * @extends {hbs.AST.MustacheStatement}
 * @record
 * @struct
 */
hbs.AST.Decorator = function() {};
/**
 * @extends {hbs.AST.Statement}
 * @record
 * @struct
 */
hbs.AST.BlockStatement = function() {};
 /** @type {!hbs.AST.PathExpression} */
hbs.AST.BlockStatement.prototype.path;
 /** @type {!Array<!hbs.AST.Expression>} */
hbs.AST.BlockStatement.prototype.params;
 /** @type {!hbs.AST.Hash} */
hbs.AST.BlockStatement.prototype.hash;
 /** @type {!hbs.AST.Program} */
hbs.AST.BlockStatement.prototype.program;
 /** @type {!hbs.AST.Program} */
hbs.AST.BlockStatement.prototype.inverse;
 /** @type {!hbs.AST.StripFlags} */
hbs.AST.BlockStatement.prototype.openStrip;
 /** @type {!hbs.AST.StripFlags} */
hbs.AST.BlockStatement.prototype.inverseStrip;
 /** @type {!hbs.AST.StripFlags} */
hbs.AST.BlockStatement.prototype.closeStrip;
/**
 * @extends {hbs.AST.BlockStatement}
 * @record
 * @struct
 */
hbs.AST.DecoratorBlock = function() {};
/**
 * @extends {hbs.AST.Statement}
 * @record
 * @struct
 */
hbs.AST.PartialStatement = function() {};
 /** @type {(!hbs.AST.SubExpression|!hbs.AST.PathExpression)} */
hbs.AST.PartialStatement.prototype.name;
 /** @type {!Array<!hbs.AST.Expression>} */
hbs.AST.PartialStatement.prototype.params;
 /** @type {!hbs.AST.Hash} */
hbs.AST.PartialStatement.prototype.hash;
 /** @type {string} */
hbs.AST.PartialStatement.prototype.indent;
 /** @type {!hbs.AST.StripFlags} */
hbs.AST.PartialStatement.prototype.strip;
/**
 * @extends {hbs.AST.Statement}
 * @record
 * @struct
 */
hbs.AST.PartialBlockStatement = function() {};
 /** @type {(!hbs.AST.SubExpression|!hbs.AST.PathExpression)} */
hbs.AST.PartialBlockStatement.prototype.name;
 /** @type {!Array<!hbs.AST.Expression>} */
hbs.AST.PartialBlockStatement.prototype.params;
 /** @type {!hbs.AST.Hash} */
hbs.AST.PartialBlockStatement.prototype.hash;
 /** @type {!hbs.AST.Program} */
hbs.AST.PartialBlockStatement.prototype.program;
 /** @type {!hbs.AST.StripFlags} */
hbs.AST.PartialBlockStatement.prototype.openStrip;
 /** @type {!hbs.AST.StripFlags} */
hbs.AST.PartialBlockStatement.prototype.closeStrip;
/**
 * @extends {hbs.AST.Statement}
 * @record
 * @struct
 */
hbs.AST.ContentStatement = function() {};
 /** @type {string} */
hbs.AST.ContentStatement.prototype.value;
 /** @type {!hbs.AST.StripFlags} */
hbs.AST.ContentStatement.prototype.original;
/**
 * @extends {hbs.AST.Statement}
 * @record
 * @struct
 */
hbs.AST.CommentStatement = function() {};
 /** @type {string} */
hbs.AST.CommentStatement.prototype.value;
 /** @type {!hbs.AST.StripFlags} */
hbs.AST.CommentStatement.prototype.strip;
/**
 * @extends {hbs.AST.Node}
 * @record
 * @struct
 */
hbs.AST.Expression = function() {};
/**
 * @extends {hbs.AST.Expression}
 * @record
 * @struct
 */
hbs.AST.SubExpression = function() {};
 /** @type {!hbs.AST.PathExpression} */
hbs.AST.SubExpression.prototype.path;
 /** @type {!Array<!hbs.AST.Expression>} */
hbs.AST.SubExpression.prototype.params;
 /** @type {!hbs.AST.Hash} */
hbs.AST.SubExpression.prototype.hash;
/**
 * @extends {hbs.AST.Expression}
 * @record
 * @struct
 */
hbs.AST.PathExpression = function() {};
 /** @type {boolean} */
hbs.AST.PathExpression.prototype.data;
 /** @type {number} */
hbs.AST.PathExpression.prototype.depth;
 /** @type {!Array<string>} */
hbs.AST.PathExpression.prototype.parts;
 /** @type {string} */
hbs.AST.PathExpression.prototype.original;
/**
 * @extends {hbs.AST.Expression}
 * @record
 * @struct
 */
hbs.AST.Literal = function() {};
/**
 * @extends {hbs.AST.Literal}
 * @record
 * @struct
 */
hbs.AST.StringLiteral = function() {};
 /** @type {string} */
hbs.AST.StringLiteral.prototype.value;
 /** @type {string} */
hbs.AST.StringLiteral.prototype.original;
/**
 * @extends {hbs.AST.Literal}
 * @record
 * @struct
 */
hbs.AST.BooleanLiteral = function() {};
 /** @type {boolean} */
hbs.AST.BooleanLiteral.prototype.value;
 /** @type {boolean} */
hbs.AST.BooleanLiteral.prototype.original;
/**
 * @extends {hbs.AST.Literal}
 * @record
 * @struct
 */
hbs.AST.NumberLiteral = function() {};
 /** @type {number} */
hbs.AST.NumberLiteral.prototype.value;
 /** @type {number} */
hbs.AST.NumberLiteral.prototype.original;
/**
 * @extends {hbs.AST.Literal}
 * @record
 * @struct
 */
hbs.AST.UndefinedLiteral = function() {};
/**
 * @extends {hbs.AST.Literal}
 * @record
 * @struct
 */
hbs.AST.NullLiteral = function() {};
/**
 * @extends {hbs.AST.Node}
 * @record
 * @struct
 */
hbs.AST.Hash = function() {};
 /** @type {!Array<!hbs.AST.HashPair>} */
hbs.AST.Hash.prototype.pairs;
/**
 * @extends {hbs.AST.Node}
 * @record
 * @struct
 */
hbs.AST.HashPair = function() {};
 /** @type {string} */
hbs.AST.HashPair.prototype.key;
 /** @type {!hbs.AST.Expression} */
hbs.AST.HashPair.prototype.value;
/**
 * @record
 * @struct
 */
hbs.AST.StripFlags = function() {};
 /** @type {boolean} */
hbs.AST.StripFlags.prototype.open;
 /** @type {boolean} */
hbs.AST.StripFlags.prototype.close;
/**
 * @record
 * @struct
 */
hbs.AST.helpers = function() {};

/**
 * @param {!hbs.AST.Node} node
 * @return {boolean}
 */
hbs.AST.helpers.prototype.helperExpression = function(node) {};

/**
 * @param {!hbs.AST.PathExpression} path
 * @return {boolean}
 */
hbs.AST.helpers.prototype.scopeId = function(path) {};

/**
 * @param {!hbs.AST.PathExpression} path
 * @return {boolean}
 */
hbs.AST.helpers.prototype.simpleId = function(path) {};
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "handlebars"
/** @const */
tsickle_declare_module.handlebars = {};

/* TODO: ExportAssignment in tsickle_declare_module.handlebars */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "handlebars/handlebars.runtime"
/** @const */
tsickle_declare_module.handlebars_handlebars_runtime = {};

/* TODO: ExportAssignment in tsickle_declare_module.handlebars_handlebars_runtime */