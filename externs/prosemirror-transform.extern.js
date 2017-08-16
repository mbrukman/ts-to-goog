/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/prosemirror-transform/index.d.ts:

/* TODO: ImportDeclaration in  */
/**
 * @record
 * @struct
 */
function Mappable() {}

/**
 * @param {number} pos
 * @param {number=} assoc
 * @return {number}
 */
Mappable.prototype.map = function(pos, assoc) {};

/**
 * @param {number} pos
 * @param {number=} assoc
 * @return {?}
 */
Mappable.prototype.mapResult = function(pos, assoc) {};
/**
 * @constructor
 * @struct
 */
function MapResult() {}
 /** @type {number} */
MapResult.prototype.pos;
 /** @type {boolean} */
MapResult.prototype.deleted;

/**
 * @constructor
 * @struct
 * @param {!Array<number>} ranges
 */
function StepMap(ranges) {}

/**
 * @param {number} pos
 * @param {number=} assoc
 * @return {?}
 */
StepMap.prototype.mapResult = function(pos, assoc) {};

/**
 * @param {number} pos
 * @param {number=} assoc
 * @return {number}
 */
StepMap.prototype.map = function(pos, assoc) {};

/**
 * @param {?} f
 * @return {void}
 */
StepMap.prototype.forEach = function(f) {};

/**
 * @return {?}
 */
StepMap.prototype.invert = function() {};

/**
 * @constructor
 * @struct
 * @param {!Array<?>=} maps
 */
function Mapping(maps) {}
 /** @type {!Array<?>} */
Mapping.prototype.maps;
 /** @type {number} */
Mapping.prototype.from;
 /** @type {number} */
Mapping.prototype.to;

/**
 * @param {number=} from
 * @param {number=} to
 * @return {?}
 */
Mapping.prototype.slice = function(from, to) {};

/**
 * @param {?} map
 * @param {number=} mirrors
 * @return {void}
 */
Mapping.prototype.appendMap = function(map, mirrors) {};

/**
 * @param {?} mapping
 * @return {void}
 */
Mapping.prototype.appendMapping = function(mapping) {};

/**
 * @param {?} mapping
 * @return {void}
 */
Mapping.prototype.appendMappingInverted = function(mapping) {};

/**
 * @param {number} pos
 * @param {number=} assoc
 * @return {number}
 */
Mapping.prototype.map = function(pos, assoc) {};

/**
 * @param {number} pos
 * @param {number=} assoc
 * @return {?}
 */
Mapping.prototype.mapResult = function(pos, assoc) {};

/**
 * @constructor
 * @struct
 * @param {number} from
 * @param {number} to
 * @param {?} mark
 */
function AddMarkStep(from, to, mark) {}

/**
 * @constructor
 * @struct
 * @param {number} from
 * @param {number} to
 * @param {?} mark
 */
function RemoveMarkStep(from, to, mark) {}

/**
 * @constructor
 * @struct
 * @param {?} doc
 */
function Transform(doc) {}
 /** @type {?} */
Transform.prototype.doc;
 /** @type {!Array<?>} */
Transform.prototype.steps;
 /** @type {!Array<?>} */
Transform.prototype.docs;
 /** @type {?} */
Transform.prototype.mapping;
 /** @type {?} */
Transform.prototype.before;
 /** @type {boolean} */
Transform.prototype.docChanged;

/**
 * @param {number} from
 * @param {number} to
 * @param {?} mark
 * @return {?}
 */
Transform.prototype.addMark = function(from, to, mark) {};

/**
 * @param {number} from
 * @param {number} to
 * @param {?=} mark
 * @return {?}
 */
Transform.prototype.removeMark = function(from, to, mark) {};

/**
 * @param {number} from
 * @param {number} to
 * @return {?}
 */
Transform.prototype.clearMarkup = function(from, to) {};

/**
 * @param {number} from
 * @param {number} to
 * @param {?} slice
 * @return {?}
 */
Transform.prototype.replaceRange = function(from, to, slice) {};

/**
 * @param {number} from
 * @param {number} to
 * @param {?} node
 * @return {?}
 */
Transform.prototype.replaceRangeWith = function(from, to, node) {};

/**
 * @param {number} from
 * @param {number} to
 * @return {?}
 */
Transform.prototype.deleteRange = function(from, to) {};

/**
 * @param {number} from
 * @param {number} to
 * @return {?}
 */
Transform.prototype.delete = function(from, to) {};

/**
 * @param {number} from
 * @param {number=} to
 * @param {?=} slice
 * @return {?}
 */
Transform.prototype.replace = function(from, to, slice) {};

/**
 * @param {number} from
 * @param {number} to
 * @param {(?|!Array<?>)} content
 * @return {?}
 */
Transform.prototype.replaceWith = function(from, to, content) {};

/**
 * @param {number} pos
 * @param {(?|!Array<?>)} content
 * @return {?}
 */
Transform.prototype.insert = function(pos, content) {};

/**
 * @param {?} range
 * @param {number} target
 * @return {?}
 */
Transform.prototype.lift = function(range, target) {};

/**
 * @param {?} range
 * @param {!Array<?>} wrappers
 * @return {?}
 */
Transform.prototype.wrap = function(range, wrappers) {};

/**
 * @param {number} from
 * @param {number} to
 * @param {?} type
 * @param {!Object=} attrs
 * @return {?}
 */
Transform.prototype.setBlockType = function(from, to, type, attrs) {};

/**
 * @param {number} pos
 * @param {?=} type
 * @param {!Object=} attrs
 * @param {!Array<?>=} marks
 * @return {?}
 */
Transform.prototype.setNodeType = function(pos, type, attrs, marks) {};

/**
 * @param {number} pos
 * @param {number=} depth
 * @param {!Array<?>=} typesAfter
 * @return {?}
 */
Transform.prototype.split = function(pos, depth, typesAfter) {};

/**
 * @param {number} pos
 * @param {number=} depth
 * @param {boolean=} p1
 * @return {?}
 */
Transform.prototype.join = function(pos, depth, p1) {};

/**
 * @param {?} step
 * @return {?}
 */
Transform.prototype.step = function(step) {};

/**
 * @param {?} step
 * @return {?}
 */
Transform.prototype.maybeStep = function(step) {};

/**
 * @constructor
 * @struct
 * @param {number} from
 * @param {number} to
 * @param {?} slice
 * @param {boolean=} structure
 */
function ReplaceStep(from, to, slice, structure) {}

/**
 * @constructor
 * @struct
 * @param {number} from
 * @param {number} to
 * @param {number} gapFrom
 * @param {number} gapTo
 * @param {?} slice
 * @param {number} insert
 * @param {boolean=} structure
 */
function ReplaceAroundStep(from, to, gapFrom, gapTo, slice, insert, structure) {}

/**
 * @param {?} doc
 * @param {number} from
 * @param {number=} to
 * @param {?=} slice
 * @return {?}
 */
function replaceStep(doc, from, to, slice) {}
/**
 * @constructor
 * @struct
 */
function Step() {}

/**
 * @param {?} doc
 * @return {?}
 */
Step.prototype.apply = function(doc) {};

/**
 * @return {?}
 */
Step.prototype.getMap = function() {};

/**
 * @param {?} doc
 * @return {?}
 */
Step.prototype.invert = function(doc) {};

/**
 * @param {?} mapping
 * @return {?}
 */
Step.prototype.map = function(mapping) {};

/**
 * @param {?} other
 * @return {?}
 */
Step.prototype.merge = function(other) {};

/**
 * @param {number} n
 * @return {?}
 */
Step.prototype.offset = function(n) {};

/**
 * @return {!Object}
 */
Step.prototype.toJSON = function() {};

/**
 * @param {?} schema
 * @param {!Object} json
 * @return {?}
 */
Step.fromJSON = function(schema, json) {};

/**
 * @param {string} id
 * @param {?} stepClass
 * @return {void}
 */
Step.jsonID = function(id, stepClass) {};
/**
 * @constructor
 * @struct
 */
function StepResult() {}
 /** @type {?} */
StepResult.prototype.doc;
 /** @type {string} */
StepResult.prototype.failed;

/**
 * @param {?} doc
 * @return {?}
 */
StepResult.ok = function(doc) {};

/**
 * @param {string} message
 * @return {?}
 */
StepResult.fail = function(message) {};

/**
 * @param {?} doc
 * @param {number} from
 * @param {number} to
 * @param {?} slice
 * @return {?}
 */
StepResult.fromReplace = function(doc, from, to, slice) {};

/**
 * @param {?} range
 * @return {number}
 */
function liftTarget(range) {}

/**
 * @param {?} range
 * @param {?} nodeType
 * @param {!Object=} attrs
 * @return {!Array<?>}
 */
function findWrapping(range, nodeType, attrs) {}

/**
 * @param {?} doc
 * @param {number} pos
 * @param {number=} depth
 * @param {!Array<?>=} typesAfter
 * @return {boolean}
 */
function canSplit(doc, pos, depth, typesAfter) {}

/**
 * @param {?} doc
 * @param {number} pos
 * @return {boolean}
 */
function canJoin(doc, pos) {}

/**
 * @param {?} doc
 * @param {number} pos
 * @param {number=} dir
 * @return {number}
 */
function joinPoint(doc, pos, dir) {}

/**
 * @param {?} doc
 * @param {number} pos
 * @param {?} nodeType
 * @param {!Object=} attrs
 * @return {number}
 */
function insertPoint(doc, pos, nodeType, attrs) {}
