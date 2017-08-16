/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/pinyin/index.d.ts:

/* TODO: ExportAssignment in  */

/* TODO: NamespaceExportDeclaration in  */

/**
 * 转换中文字符为拼音。可以设定拼音风格，可以打开多音字选项，也可以打开分词。
 * \@example 
 * pinyin("中心") // returns [ [ 'zhōng' ], [ 'xīn' ] ]
 * @param {string} words
 * @param {!pinyin.Options=} options
 * @return {!Array<!Array<string>>}
 */
function pinyin(words, options) {}

/**
 * 按拼音比较两个字符串 a 和 b 的顺序。
 * 如果返回 -1 表示 a 在 b 前
 * 如果返回  0 表示 a 和 b 顺序相同
 * 如果返回  1 表示 a 在 b 后
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
pinyin.compare = function(a, b) {};
 /** @type {number} */
pinyin.STYLE_NORMAL;
 /** @type {number} */
pinyin.STYLE_TONE;
 /** @type {number} */
pinyin.STYLE_TONE2;
 /** @type {number} */
pinyin.STYLE_TO3NE;
 /** @type {number} */
pinyin.STYLE_INITIALS;
 /** @type {number} */
pinyin.STYLE_FIRST_LETTER;
/**
 * @record
 * @struct
 */
pinyin.Options = function() {};
 /** @type {number} */
pinyin.Options.prototype.style;
 /** @type {boolean} */
pinyin.Options.prototype.segment;
 /** @type {boolean} */
pinyin.Options.prototype.heteronym;
