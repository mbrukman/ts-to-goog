/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/underscore.string/index.d.ts:

/* TODO: ImportDeclaration in  */
 /** @type {!UnderscoreStringStatic} */
var self;

/* TODO: ExportAssignment in  */
/** @const */
var tsickle_declare_module = {};
// Derived from: declare module "underscore"
 /** @type {!UnderscoreStringStatic} */
tsickle_declare_module.underscore.UnderscoreStatic.prototype.str;
 /** @type {!UnderscoreStringStatic} */
tsickle_declare_module.underscore.UnderscoreStatic.prototype.string;
/**
 * @extends {UnderscoreStringStaticExports}
 * @record
 * @struct
 */
tsickle_declare_module.underscore.UnderscoreStringStatic = function() {};

/**
 * Tests if string contains a substring.
 * ('foobar', 'ob') => true
 * @param {string} str
 * @param {string} needle
 * @return {boolean}
 */
tsickle_declare_module.underscore.UnderscoreStringStatic.prototype.include = function(str, needle) {};

/**
 * Tests if string contains a substring.
 * ('foobar', 'ob') => true
 * @param {string} str
 * @param {string} needle
 * @return {boolean}
 */
tsickle_declare_module.underscore.UnderscoreStringStatic.prototype.contains = function(str, needle) {};

/**
 * Return reversed string.
 * ('foobar') => 'raboof'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStatic.prototype.reverse = function(str) {};
/**
 * @record
 * @struct
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports = function() {};

/**
 * @return {!UnderscoreStringStaticExports}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.exports = function() {};

/**
 * Determine if a string is 'blank.'
 * @param {string} str
 * @return {boolean}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.isBlank = function(str) {};

/**
 * Removes all html tags from string.
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.stripTags = function(str) {};

/**
 * Converts first letter of the string to uppercase.
 * ('foo Bar') => 'Foo Bar'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.capitalize = function(str) {};

/**
 * Converts first letter of the string to lowercase.
 * ('Foo Bar') => 'foo Bar'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.decapitalize = function(str) {};

/**
 * Chop a string into pieces.
 * ('whitespace', 3) => ['whi','tes','pac','e']
 * @param {string} str String to chop
 * @param {number} step Size of the pieces
 * @return {!Array<?>}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.chop = function(str, step) {};

/**
 * Compress some whitespaces to one.
 * (' foo    bar   ') => 'foo bar'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.clean = function(str) {};

/**
 * Count occurences of a sub string.
 * ('Hello world', 'l') => 3
 * @param {string} str
 * @param {string} substr
 * @return {number}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.count = function(str, substr) {};

/**
 * Convert string to an array of characters.
 * ('Hello') => ['H','e','l','l','o']
 * @param {string} str
 * @return {!Array<?>}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.chars = function(str) {};

/**
 * Returns a copy of the string in which all the case-based characters have had their case swapped.
 * ('hELLO') => 'Hello'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.swapCase = function(str) {};

/**
 * Converts HTML special characters to their entity equivalents.
 * ('<div>Blah blah blah</div>') => '&lt;div&gt;Blah blah blah&lt;/div&gt;'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.escapeHTML = function(str) {};

/**
 * Converts entity characters to HTML equivalents.
 * ('&lt;div&gt;Blah blah blah&lt;/div&gt;') => '<div>Blah blah blah</div>'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.unescapeHTML = function(str) {};

/**
 * Escape a string for use in a regular expression.
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.escapeRegExp = function(str) {};

/**
 * Splice a string like an array.
 * @param {string} str
 * @param {number} i
 * @param {number} howmany
 * @param {string=} substr
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.splice = function(str, i, howmany, substr) {};

/**
 * Insert a string at index.
 * @param {string} str
 * @param {number} i
 * @param {string} substr
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.insert = function(str, i, substr) {};

/**
 * Joins strings together with given separator.
 * (' ', 'foo', 'bar') => 'foo bar'
 * @param {string} separator
 * @param {...string} args
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.join = function(separator, args) {};

/**
 * Split string by newlines character.
 * ('Hello\nWorld') => ['Hello', 'World']
 * @param {string} str
 * @return {!Array<?>}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.lines = function(str) {};

/**
 * Checks if string starts with another string.
 * ('image.gif', 'image') => true
 * @param {string} str
 * @param {string} starts
 * @return {boolean}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.startsWith = function(str, starts) {};

/**
 * Checks if string ends with another string.
 * ('image.gif', 'gif') => true
 * @param {string} value
 * @param {string} starts
 * @return {boolean}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.endsWith = function(value, starts) {};

/**
 * Returns the successor to passed string.
 * ('a') => 'b'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.succ = function(str) {};

/**
 * Capitalize first letter of every word in the string.
 * ('my name is epeli') => 'My Name Is Epeli'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.titleize = function(str) {};

/**
 * Converts underscored or dasherized string to a camelized one.
 * ('-moz-transform') => 'MozTransform'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.camelize = function(str) {};

/**
 * Converts a camelized or dasherized string into an underscored one.
 * ('MozTransform') => 'moz_transform'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.underscored = function(str) {};

/**
 * Converts a underscored or camelized string into an dasherized one.
 * ('MozTransform') => '-moz-transform'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.dasherize = function(str) {};

/**
 * Converts string to camelized class name.
 * ('some_class_name') => 'SomeClassName'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.classify = function(str) {};

/**
 * Converts an underscored, camelized, or dasherized string into a humanized one.
 * Also removes beginning and ending whitespace, and removes the postfix '_id'.
 * ('  capitalize dash-CamelCase_underscore trim  ') => 'Capitalize dash camel case underscore trim'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.humanize = function(str) {};

/**
 * Trims defined characters from begining and ending of the string.
 * Defaults to whitespace characters.
 * ('  foobar   ') => 'foobar'
 * ('_-foobar-_', '_-') => 'foobar'
 * @param {string} str
 * @param {string=} characters
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.trim = function(str, characters) {};

/**
 * Trims defined characters from begining and ending of the string.
 * Defaults to whitespace characters.
 * ('  foobar   ') => 'foobar'
 * ('_-foobar-_', '_-') => 'foobar'
 * @param {string} str
 * @param {string=} characters
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.strip = function(str, characters) {};

/**
 * Left trim. Similar to trim, but only for left side.
 * @param {string} str
 * @param {string=} characters
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.ltrim = function(str, characters) {};

/**
 * Left trim. Similar to trim, but only for left side.
 * @param {string} str
 * @param {string=} characters
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.lstrip = function(str, characters) {};

/**
 * Right trim. Similar to trim, but only for right side.
 * @param {string} str
 * @param {string=} characters
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.rtrim = function(str, characters) {};

/**
 * Right trim. Similar to trim, but only for right side.
 * @param {string} str
 * @param {string=} characters
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.rstrip = function(str, characters) {};

/**
 * Truncate string to specified length.
 * ('Hello world').truncate(5) => 'Hello...'
 * ('Hello').truncate(10) => 'Hello'
 * @param {string} str
 * @param {number} length
 * @param {string=} truncateStr
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.truncate = function(str, length, truncateStr) {};

/**
 * Elegant version of truncate.
 * Makes sure the pruned string does not exceed the original length.
 * Avoid half-chopped words when truncating.
 * ('Hello, cruel world', 15) => 'Hello, cruel...'
 * @param {string} str
 * @param {number} length
 * @param {string=} pruneStr
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.prune = function(str, length, pruneStr) {};

/**
 * Split string by delimiter (String or RegExp).
 * /\s+/ by default.
 * ('   I   love   you   ') => ['I','love','you']
 * ('I_love_you', '_') => ['I','love','you']
 * Split string by delimiter (String or RegExp).
 * /\s+/ by default.
 * ('   I   love   you   ') => ['I','love','you']
 * ('I_love_you', '_') => ['I','love','you']
 * Split string by delimiter (String or RegExp).
 * /\s+/ by default.
 * ('   I   love   you   ') => ['I','love','you']
 * ('I_love_you', '_') => ['I','love','you']
 * @param {string} str
 * @param {string|!RegExp=} delimiter
 * @return {!Array<string>}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.words = function(str, delimiter) {};

/**
 * Pads a string with characters until the total string length is equal to the passed length parameter.
 * By default, pads on the left with the space char (' ').
 * padStr is truncated to a single character if necessary.
 * ('1', 8) => '       1'
 * ('1', 8, '0') => '00000001'
 * ('1', 8, '0', 'right') => '10000000'
 * ('1', 8, '0', 'both') => '00001000'
 * ('1', 8, 'bleepblorp', 'both') => 'bbbb1bbb'
 * @param {string} str
 * @param {number} length
 * @param {string=} padStr
 * @param {string=} type
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.pad = function(str, length, padStr, type) {};

/**
 * Left-pad a string.
 * Alias for pad(str, length, padStr, 'left')
 * ('1', 8, '0') => '00000001'
 * @param {string} str
 * @param {number} length
 * @param {string=} padStr
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.lpad = function(str, length, padStr) {};

/**
 * Left-pad a string.
 * Alias for pad(str, length, padStr, 'left')
 * ('1', 8, '0') => '00000001'
 * @param {string} str
 * @param {number} length
 * @param {string=} padStr
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.rjust = function(str, length, padStr) {};

/**
 * Right-pad a string.
 * Alias for pad(str, length, padStr, 'right')
 * ('1', 8, '0') => '10000000'
 * @param {string} str
 * @param {number} length
 * @param {string=} padStr
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.rpad = function(str, length, padStr) {};

/**
 * Right-pad a string.
 * Alias for pad(str, length, padStr, 'right')
 * ('1', 8, '0') => '10000000'
 * @param {string} str
 * @param {number} length
 * @param {string=} padStr
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.ljust = function(str, length, padStr) {};

/**
 * Left/right-pad a string.
 * Alias for pad(str, length, padStr, 'both')
 * ('1', 8, '0') => '00001000'
 * @param {string} str
 * @param {number} length
 * @param {string=} padStr
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.lrpad = function(str, length, padStr) {};

/**
 * Left/right-pad a string.
 * Alias for pad(str, length, padStr, 'both')
 * ('1', 8, '0') => '00001000'
 * @param {string} str
 * @param {number} length
 * @param {string=} padStr
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.center = function(str, length, padStr) {};

/**
 * C like string formatting.
 * _.sprintf('%.1f', 1.17) => '1.2'
 * @param {string} format
 * @param {...?} args
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.sprintf = function(format, args) {};

/**
 * Parse string to number.
 * Returns NaN if string can't be parsed to number.
 * ('2.556').toNumber() => 3
 * ('2.556').toNumber(1) => 2.6
 * @param {string} str
 * @param {number=} decimals
 * @return {number}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.toNumber = function(str, decimals) {};

/**
 * Formats the numbers.
 * (1000, 2) => '1,000.00'
 * (123456789.123, 5, '.', ',') => '123,456,789.12300'
 * @param {number} number
 * @param {number=} dec
 * @param {string=} dsep
 * @param {string=} tsep
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.numberFormat = function(number, dec, dsep, tsep) {};

/**
 * Searches a string from left to right for a pattern.
 * Returns a substring consisting of the characters in the string that are to the right of the pattern.
 * If no match found, returns entire string.
 * ('This_is_a_test_string').strRight('_') => 'is_a_test_string'
 * @param {string} str
 * @param {string} sep
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.strRight = function(str, sep) {};

/**
 * Searches a string from right to left for a pattern.
 * Returns a substring consisting of the characters in the string that are to the right of the pattern.
 * If no match found, returns entire string.
 * ('This_is_a_test_string').strRightBack('_') => 'string'
 * @param {string} str
 * @param {string} sep
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.strRightBack = function(str, sep) {};

/**
 * Searches a string from left to right for a pattern.
 * Returns a substring consisting of the characters in the string that are to the left of the pattern.
 * If no match found, returns entire string.
 * ('This_is_a_test_string').strLeft('_') => 'This'
 * @param {string} str
 * @param {string} sep
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.strLeft = function(str, sep) {};

/**
 * Searches a string from right to left for a pattern.
 * Returns a substring consisting of the characters in the string that are to the left of the pattern.
 * If no match found, returns entire string.
 * ('This_is_a_test_string').strLeftBack('_') => 'This_is_a_test'
 * @param {string} str
 * @param {string} sep
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.strLeftBack = function(str, sep) {};

/**
 * Join an array into a human readable sentence.
 * (['jQuery', 'Mootools', 'Prototype']) => 'jQuery, Mootools and Prototype'
 * (['jQuery', 'Mootools', 'Prototype'], ', ', ' unt ') => 'jQuery, Mootools unt Prototype'
 * @param {!Array<?>} array
 * @param {string=} separator
 * @param {string=} lastSeparator
 * @param {boolean=} serial
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.toSentence = function(array, separator, lastSeparator, serial) {};

/**
 * The same as toSentence, but uses ', ' as default for lastSeparator.
 * @param {!Array<?>} array
 * @param {string=} separator
 * @param {string=} lastSeparator
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.toSentenceSerial = function(array, separator, lastSeparator) {};

/**
 * Transform text into a URL slug. Replaces whitespaces, accentuated, and special characters with a dash.
 * ('Un éléphant à l'orée du bois') => 'un-elephant-a-loree-du-bois'
 * @param {string} str
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.slugify = function(str) {};

/**
 * Surround a string with another string.
 * ('foo', 'ab') => 'abfooab'
 * @param {string} str
 * @param {string} wrapper
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.surround = function(str, wrapper) {};

/**
 * Quotes a string.
 * quoteChar defaults to "
 * ('foo') => '"foo"'
 * @param {string} str
 * @param {string=} quoteChar
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.quote = function(str, quoteChar) {};

/**
 * Quotes a string.
 * quoteChar defaults to "
 * ('foo') => '"foo"'
 * @param {string} str
 * @param {string=} quoteChar
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.q = function(str, quoteChar) {};

/**
 * Unquotes a string.
 * quoteChar defaults to "
 * ('"foo"') => 'foo'
 * ("'foo'", "'") => 'foo'
 * @param {string} str
 * @param {string=} quoteChar
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.unquote = function(str, quoteChar) {};

/**
 * Repeat a string with an optional separator.
 * ('foo', 3) => 'foofoofoo'
 * ('foo', 3, 'bar') => 'foobarfoobarfoo'
 * @param {string} value
 * @param {number} count
 * @param {string=} separator
 * @return {string}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.repeat = function(value, count, separator) {};

/**
 * Naturally sort strings like humans would do.
 * Caution: this function is charset dependent.
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.naturalCmp = function(str1, str2) {};

/**
 * Calculates Levenshtein distance between two strings.
 * ('kitten', 'kittah') => 2
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.levenshtein = function(str1, str2) {};

/**
 * Turn strings that can be commonly considered as booleans to real booleans.
 * Such as "true", "false", "1" and "0". This function is case insensitive.
 * ('true') => true
 * ('FALSE') => false
 * ('random') => undefined
 * ('truthy', ['truthy'], ['falsy']) => true
 * ('true only at start', [/^true/]) => true
 * @param {string} str
 * @param {!Array<?>=} trueValues
 * @param {!Array<?>=} falseValues
 * @return {boolean}
 */
tsickle_declare_module.underscore.UnderscoreStringStaticExports.prototype.toBoolean = function(str, trueValues, falseValues) {};