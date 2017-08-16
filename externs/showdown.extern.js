/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/showdown/index.d.ts:

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */
/** @const */
var Showdown = {};
/**
 * @record
 * @struct
 */
Showdown.Extension = function() {};
 /** @type {string} */
Showdown.Extension.prototype.type;
/**
 * @extends {Showdown.Extension}
 * @record
 * @struct
 */
Showdown.RegexReplaceExtension = function() {};
 /** @type {(string|!RegExp)} */
Showdown.RegexReplaceExtension.prototype.regex;
 /** @type {?} */
Showdown.RegexReplaceExtension.prototype.replace;
/**
 * @extends {Showdown.Extension}
 * @record
 * @struct
 */
Showdown.FilterExtension = function() {};
 /** @type {function(string, ?, !Showdown.ConverterOptions): string} */
Showdown.FilterExtension.prototype.filter;
/**
 * @extends {Showdown.RegexReplaceExtension}
 * @extends {Showdown.FilterExtension}
 * @record
 * @struct
 */
Showdown.ShowdownExtension = function() {};
/**
 * @record
 * @struct
 */
Showdown.ConverterExtensions = function() {};
 /** @type {!Array<!Showdown.ShowdownExtension>} */
Showdown.ConverterExtensions.prototype.language;
 /** @type {!Array<!Showdown.ShowdownExtension>} */
Showdown.ConverterExtensions.prototype.output;
/**
 * @record
 * @struct
 */
Showdown.ShowdownOptions = function() {};
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.omitExtraWLInCodeBlocks;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.noHeaderId;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.customizedHeaderId;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.ghCompatibleHeaderId;
 /** @type {(string|boolean)} */
Showdown.ShowdownOptions.prototype.prefixHeaderId;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.parseImgDimensions;
 /** @type {number} */
Showdown.ShowdownOptions.prototype.headerLevelStart;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.simplifiedAutoLink;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.excludeTrailingPunctuationFromURLs;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.literalMidWordUnderscores;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.strikethrough;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.tables;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.tablesHeaderId;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.ghCodeBlocks;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.tasklists;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.smoothLivePreview;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.smartIndentationFix;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.disableForced4SpacesIndentedSublists;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.simpleLineBreaks;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.requireSpaceBeforeHeadingText;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.ghMentions;
 /** @type {string} */
Showdown.ShowdownOptions.prototype.ghMentionsLink;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.openLinksInNewWindow;
 /** @type {boolean} */
Showdown.ShowdownOptions.prototype.backslashEscapesHTMLTags;
/**
 * @extends {Showdown.ShowdownOptions}
 * @record
 * @struct
 */
Showdown.ConverterOptions = function() {};
 /** @type {(string|!Array<string>)} */
Showdown.ConverterOptions.prototype.extensions;
/**
 * @record
 * @struct
 */
Showdown.Converter = function() {};

/**
 * @param {string} text The input text (markdown)
 * @return {string} The output HTML
 */
Showdown.Converter.prototype.makeHtml = function(text) {};

/**
 * Setting a "local" option only affects the specified Converter object.
 * 
 * @param {string} optionKey
 * @param {string} value
 * @return {void}
 */
Showdown.Converter.prototype.setOption = function(optionKey, value) {};

/**
 * Get the option of this Converter instance.
 * 
 * @param {string} optionKey
 * @return {?}
 */
Showdown.Converter.prototype.getOption = function(optionKey) {};

/**
 * Get the options of this Converter instance.
 * @return {!Showdown.ShowdownOptions}
 */
Showdown.Converter.prototype.getOptions = function() {};

/**
 * Add extension to THIS converter.
 * 
 * @param {!Showdown.ShowdownExtension} extension
 * @param {string} name
 * @return {void}
 */
Showdown.Converter.prototype.addExtension = function(extension, name) {};

/**
 * Use a global registered extension with THIS converter
 * 
 * @param {string} extensionName Name of the previously registered extension.
 * @return {void}
 */
Showdown.Converter.prototype.useExtension = function(extensionName) {};

/**
 * Get all extensions.
 * 
 * @return {!Showdown.ConverterExtensions} all extensions.
 */
Showdown.Converter.prototype.getAllExtensions = function() {};

/**
 * Remove an extension from THIS converter.
 * 
 * Note: This is a costly operation. It's better to initialize a new converter
 * and specify the extensions you wish to use.
 * 
 * @param {(!Showdown.ShowdownExtension|!Array<!Showdown.ShowdownExtension>)} extensions
 * @return {void}
 */
Showdown.Converter.prototype.removeExtension = function(extensions) {};

/**
 * Set a "local" flavor for THIS Converter instance
 * 
 * @param {string} name
 * @return {void}
 */
Showdown.Converter.prototype.setFlavor = function(name) {};
/**
 * @record
 * @struct
 */
Showdown.ConverterStatic = function() {};

/* TODO: ConstructSignature: Showdown */
 /** @type {!Showdown.ConverterStatic} */
Showdown.Converter;

/**
 * Setting a "global" option affects all instances of showdown
 * @param {string} optionKey
 * @param {string} value
 * @return {void}
 */
Showdown.setOption = function(optionKey, value) {};

/**
 * Retrieve previous set global option.
 * @param {string} optionKey
 * @return {?} The extensions array.
 */
Showdown.getOption = function(optionKey) {};

/**
 * Retrieve previous set global options.
 * Retrieve previous set global options.
 * @return {!Showdown.ShowdownOptions}
 */
Showdown.getOptions = function() {};

/**
 * Reset options.
 * @return {void}
 */
Showdown.resetOptions = function() {};

/**
 * Retrieve the default options.
 * Retrieve the default options.
 * @return {!Showdown.ShowdownOptions}
 */
Showdown.getDefaultOptions = function() {};

/**
 * Registered extensions
 * 
 * \@prarm name
 * @param {string} name
 * @param {(!Showdown.ShowdownExtension|function(): !Showdown.ShowdownExtension|function(): !Array<!Showdown.ShowdownExtension>)} extension
 * @return {void}
 */
Showdown.extension = function(name, extension) {};
 /** @type {!Object<string,!Showdown.ShowdownExtension>} */
Showdown.extensions;

/**
 * Get an extension.
 * 
 * Reset extensions.
 * @return {void} The extensions array.
 */
Showdown.resetExtensions = function() {};

/**
 * @return {!Object<string,!Array<!Showdown.ShowdownExtension>>} all extensions.
 */
Showdown.getAllExtensions = function() {};

/**
 * Remove an extension.
 * 
 * @param {string} name
 * @return {void}
 */
Showdown.removeExtension = function(name) {};

/**
 * Setting a "global" flavor affects all instances of showdown
 * 
 * @param {string} name
 * @return {void}
 */
Showdown.setFlavor = function(name) {};
