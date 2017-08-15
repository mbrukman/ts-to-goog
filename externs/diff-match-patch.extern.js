/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/diff-match-patch/index.d.ts:

/** @typedef {!Array<?>} */
var Diff;
/**
 * @constructor
 * @struct
 */
function Patch() {}
 /** @type {!Array<!Array<?>>} */
Patch.prototype.diffs;
 /** @type {number} */
Patch.prototype.start1;
 /** @type {number} */
Patch.prototype.start2;
 /** @type {number} */
Patch.prototype.length1;
 /** @type {number} */
Patch.prototype.length2;
/**
 * @constructor
 * @struct
 */
function diff_match_patch() {}
 /** @type {number} */
diff_match_patch.prototype.Diff_Timeout;
 /** @type {number} */
diff_match_patch.prototype.Diff_EditCost;
 /** @type {number} */
diff_match_patch.prototype.Match_Threshold;
 /** @type {number} */
diff_match_patch.prototype.Match_Distance;
 /** @type {number} */
diff_match_patch.prototype.Patch_DeleteThreshold;
 /** @type {number} */
diff_match_patch.prototype.Patch_Margin;
 /** @type {number} */
diff_match_patch.prototype.Match_MaxBits;

/**
 * @return {!diff_match_patch}
 */
diff_match_patch.new = function() {};

/**
 * @param {string} text1
 * @param {string} text2
 * @param {boolean=} opt_checklines
 * @param {number=} opt_deadline
 * @return {!Array<!Array<?>>}
 */
diff_match_patch.prototype.diff_main = function(text1, text2, opt_checklines, opt_deadline) {};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
diff_match_patch.prototype.diff_commonPrefix = function(text1, text2) {};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
diff_match_patch.prototype.diff_commonSuffix = function(text1, text2) {};

/**
 * @param {!Array<!Array<?>>} diffs
 * @return {void}
 */
diff_match_patch.prototype.diff_cleanupSemantic = function(diffs) {};

/**
 * @param {!Array<!Array<?>>} diffs
 * @return {void}
 */
diff_match_patch.prototype.diff_cleanupSemanticLossless = function(diffs) {};

/**
 * @param {!Array<!Array<?>>} diffs
 * @return {void}
 */
diff_match_patch.prototype.diff_cleanupEfficiency = function(diffs) {};

/**
 * @param {!Array<!Array<?>>} diffs
 * @return {void}
 */
diff_match_patch.prototype.diff_cleanupMerge = function(diffs) {};

/**
 * @param {!Array<!Array<?>>} diffs
 * @param {number} loc
 * @return {number}
 */
diff_match_patch.prototype.diff_xIndex = function(diffs, loc) {};

/**
 * @param {!Array<!Array<?>>} diffs
 * @return {string}
 */
diff_match_patch.prototype.diff_prettyHtml = function(diffs) {};

/**
 * @param {!Array<!Array<?>>} diffs
 * @return {string}
 */
diff_match_patch.prototype.diff_text1 = function(diffs) {};

/**
 * @param {!Array<!Array<?>>} diffs
 * @return {string}
 */
diff_match_patch.prototype.diff_text2 = function(diffs) {};

/**
 * @param {!Array<!Array<?>>} diffs
 * @return {number}
 */
diff_match_patch.prototype.diff_levenshtein = function(diffs) {};

/**
 * @param {!Array<!Array<?>>} diffs
 * @return {string}
 */
diff_match_patch.prototype.diff_toDelta = function(diffs) {};

/**
 * @param {string} text1
 * @param {string} delta
 * @return {!Array<!Array<?>>}
 */
diff_match_patch.prototype.diff_fromDelta = function(text1, delta) {};

/**
 * @param {?} text1
 * @param {string=} text2
 * @return {!Array<!Patch>}
 */
diff_match_patch.prototype.patch_make = function(text1, text2) {};

/**
 * @param {!Array<!Patch>} patches
 * @return {!Array<!Patch>}
 */
diff_match_patch.prototype.patch_deepCopy = function(patches) {};

/**
 * @param {!Array<!Patch>} patches
 * @param {string} text
 * @return {!Array<?>}
 */
diff_match_patch.prototype.patch_apply = function(patches, text) {};

/**
 * @param {string} text
 * @return {!Array<!Patch>}
 */
diff_match_patch.prototype.patch_fromText = function(text) {};

/**
 * @param {!Array<!Patch>} patches
 * @return {string}
 */
diff_match_patch.prototype.patch_toText = function(patches) {};
 /** @type {number} */
var DIFF_DELETE;
 /** @type {number} */
var DIFF_INSERT;
 /** @type {number} */
var DIFF_EQUAL;