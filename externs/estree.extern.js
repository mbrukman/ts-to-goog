/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/estree/index.d.ts:
/**
 * @record
 * @struct
 */
function BaseNode() {}
 /** @type {!Array<?>} */
BaseNode.prototype.leadingComments;
 /** @type {!Array<?>} */
BaseNode.prototype.trailingComments;
 /** @type {?} */
BaseNode.prototype.loc;
 /** @type {!Array<?>} */
BaseNode.prototype.range;

/** @typedef {?} */
var Node;
/**
 * @record
 * @struct
 */
function Comment() {}
 /** @type {string} */
Comment.prototype.value;
/**
 * @record
 * @struct
 */
function SourceLocation() {}
 /** @type {string} */
SourceLocation.prototype.source;
 /** @type {?} */
SourceLocation.prototype.start;
 /** @type {?} */
SourceLocation.prototype.end;
/**
 * @record
 * @struct
 */
function Position() {}
 /** @type {number} */
Position.prototype.line;
 /** @type {number} */
Position.prototype.column;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function Program() {}
 /** @type {string} */
Program.prototype.type;
 /** @type {string} */
Program.prototype.sourceType;
 /** @type {!Array<?>} */
Program.prototype.body;
 /** @type {!Array<?>} */
Program.prototype.comments;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function BaseFunction() {}
 /** @type {!Array<?>} */
BaseFunction.prototype.params;
 /** @type {boolean} */
BaseFunction.prototype.generator;
 /** @type {boolean} */
BaseFunction.prototype.async;
 /** @type {?} */
BaseFunction.prototype.body;

/** @typedef {?} */
var Function;

/** @typedef {?} */
var Statement;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function BaseStatement() {}
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function EmptyStatement() {}
 /** @type {string} */
EmptyStatement.prototype.type;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function BlockStatement() {}
 /** @type {string} */
BlockStatement.prototype.type;
 /** @type {!Array<?>} */
BlockStatement.prototype.body;
 /** @type {!Array<?>} */
BlockStatement.prototype.innerComments;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function ExpressionStatement() {}
 /** @type {string} */
ExpressionStatement.prototype.type;
 /** @type {?} */
ExpressionStatement.prototype.expression;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function IfStatement() {}
 /** @type {string} */
IfStatement.prototype.type;
 /** @type {?} */
IfStatement.prototype.test;
 /** @type {?} */
IfStatement.prototype.consequent;
 /** @type {?} */
IfStatement.prototype.alternate;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function LabeledStatement() {}
 /** @type {string} */
LabeledStatement.prototype.type;
 /** @type {?} */
LabeledStatement.prototype.label;
 /** @type {?} */
LabeledStatement.prototype.body;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function BreakStatement() {}
 /** @type {string} */
BreakStatement.prototype.type;
 /** @type {?} */
BreakStatement.prototype.label;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function ContinueStatement() {}
 /** @type {string} */
ContinueStatement.prototype.type;
 /** @type {?} */
ContinueStatement.prototype.label;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function WithStatement() {}
 /** @type {string} */
WithStatement.prototype.type;
 /** @type {?} */
WithStatement.prototype.object;
 /** @type {?} */
WithStatement.prototype.body;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function SwitchStatement() {}
 /** @type {string} */
SwitchStatement.prototype.type;
 /** @type {?} */
SwitchStatement.prototype.discriminant;
 /** @type {!Array<?>} */
SwitchStatement.prototype.cases;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function ReturnStatement() {}
 /** @type {string} */
ReturnStatement.prototype.type;
 /** @type {?} */
ReturnStatement.prototype.argument;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function ThrowStatement() {}
 /** @type {string} */
ThrowStatement.prototype.type;
 /** @type {?} */
ThrowStatement.prototype.argument;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function TryStatement() {}
 /** @type {string} */
TryStatement.prototype.type;
 /** @type {?} */
TryStatement.prototype.block;
 /** @type {?} */
TryStatement.prototype.handler;
 /** @type {?} */
TryStatement.prototype.finalizer;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function WhileStatement() {}
 /** @type {string} */
WhileStatement.prototype.type;
 /** @type {?} */
WhileStatement.prototype.test;
 /** @type {?} */
WhileStatement.prototype.body;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function DoWhileStatement() {}
 /** @type {string} */
DoWhileStatement.prototype.type;
 /** @type {?} */
DoWhileStatement.prototype.body;
 /** @type {?} */
DoWhileStatement.prototype.test;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function ForStatement() {}
 /** @type {string} */
ForStatement.prototype.type;
 /** @type {?} */
ForStatement.prototype.init;
 /** @type {?} */
ForStatement.prototype.test;
 /** @type {?} */
ForStatement.prototype.update;
 /** @type {?} */
ForStatement.prototype.body;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function BaseForXStatement() {}
 /** @type {?} */
BaseForXStatement.prototype.left;
 /** @type {?} */
BaseForXStatement.prototype.right;
 /** @type {?} */
BaseForXStatement.prototype.body;
/**
 * @extends {BaseForXStatement}
 * @record
 * @struct
 */
function ForInStatement() {}
 /** @type {string} */
ForInStatement.prototype.type;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function DebuggerStatement() {}
 /** @type {string} */
DebuggerStatement.prototype.type;

/** @typedef {?} */
var Declaration;
/**
 * @extends {BaseStatement}
 * @record
 * @struct
 */
function BaseDeclaration() {}
/**
 * @extends {BaseFunction}
 * @extends {BaseDeclaration}
 * @record
 * @struct
 */
function FunctionDeclaration() {}
 /** @type {string} */
FunctionDeclaration.prototype.type;
 /** @type {?} */
FunctionDeclaration.prototype.id;
 /** @type {?} */
FunctionDeclaration.prototype.body;
/**
 * @extends {BaseDeclaration}
 * @record
 * @struct
 */
function VariableDeclaration() {}
 /** @type {string} */
VariableDeclaration.prototype.type;
 /** @type {!Array<?>} */
VariableDeclaration.prototype.declarations;
 /** @type {string} */
VariableDeclaration.prototype.kind;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function VariableDeclarator() {}
 /** @type {string} */
VariableDeclarator.prototype.type;
 /** @type {?} */
VariableDeclarator.prototype.id;
 /** @type {?} */
VariableDeclarator.prototype.init;

/** @typedef {?} */
var Expression;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function BaseExpression() {}
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function ThisExpression() {}
 /** @type {string} */
ThisExpression.prototype.type;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function ArrayExpression() {}
 /** @type {string} */
ArrayExpression.prototype.type;
 /** @type {!Array<?>} */
ArrayExpression.prototype.elements;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function ObjectExpression() {}
 /** @type {string} */
ObjectExpression.prototype.type;
 /** @type {!Array<?>} */
ObjectExpression.prototype.properties;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function Property() {}
 /** @type {string} */
Property.prototype.type;
 /** @type {?} */
Property.prototype.key;
 /** @type {?} */
Property.prototype.value;
 /** @type {string} */
Property.prototype.kind;
 /** @type {boolean} */
Property.prototype.method;
 /** @type {boolean} */
Property.prototype.shorthand;
 /** @type {boolean} */
Property.prototype.computed;
/**
 * @extends {BaseFunction}
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function FunctionExpression() {}
 /** @type {?} */
FunctionExpression.prototype.id;
 /** @type {string} */
FunctionExpression.prototype.type;
 /** @type {?} */
FunctionExpression.prototype.body;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function SequenceExpression() {}
 /** @type {string} */
SequenceExpression.prototype.type;
 /** @type {!Array<?>} */
SequenceExpression.prototype.expressions;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function UnaryExpression() {}
 /** @type {string} */
UnaryExpression.prototype.type;
 /** @type {string} */
UnaryExpression.prototype.operator;
 /** @type {boolean} */
UnaryExpression.prototype.prefix;
 /** @type {?} */
UnaryExpression.prototype.argument;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function BinaryExpression() {}
 /** @type {string} */
BinaryExpression.prototype.type;
 /** @type {string} */
BinaryExpression.prototype.operator;
 /** @type {?} */
BinaryExpression.prototype.left;
 /** @type {?} */
BinaryExpression.prototype.right;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function AssignmentExpression() {}
 /** @type {string} */
AssignmentExpression.prototype.type;
 /** @type {string} */
AssignmentExpression.prototype.operator;
 /** @type {?} */
AssignmentExpression.prototype.left;
 /** @type {?} */
AssignmentExpression.prototype.right;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function UpdateExpression() {}
 /** @type {string} */
UpdateExpression.prototype.type;
 /** @type {string} */
UpdateExpression.prototype.operator;
 /** @type {?} */
UpdateExpression.prototype.argument;
 /** @type {boolean} */
UpdateExpression.prototype.prefix;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function LogicalExpression() {}
 /** @type {string} */
LogicalExpression.prototype.type;
 /** @type {string} */
LogicalExpression.prototype.operator;
 /** @type {?} */
LogicalExpression.prototype.left;
 /** @type {?} */
LogicalExpression.prototype.right;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function ConditionalExpression() {}
 /** @type {string} */
ConditionalExpression.prototype.type;
 /** @type {?} */
ConditionalExpression.prototype.test;
 /** @type {?} */
ConditionalExpression.prototype.alternate;
 /** @type {?} */
ConditionalExpression.prototype.consequent;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function BaseCallExpression() {}
 /** @type {?} */
BaseCallExpression.prototype.callee;
 /** @type {!Array<?>} */
BaseCallExpression.prototype.arguments;

/** @typedef {?} */
var CallExpression;
/**
 * @extends {BaseCallExpression}
 * @record
 * @struct
 */
function SimpleCallExpression() {}
 /** @type {string} */
SimpleCallExpression.prototype.type;
/**
 * @extends {BaseCallExpression}
 * @record
 * @struct
 */
function NewExpression() {}
 /** @type {string} */
NewExpression.prototype.type;
/**
 * @extends {BaseExpression}
 * @extends {BasePattern}
 * @record
 * @struct
 */
function MemberExpression() {}
 /** @type {string} */
MemberExpression.prototype.type;
 /** @type {?} */
MemberExpression.prototype.object;
 /** @type {?} */
MemberExpression.prototype.property;
 /** @type {boolean} */
MemberExpression.prototype.computed;

/** @typedef {?} */
var Pattern;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function BasePattern() {}
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function SwitchCase() {}
 /** @type {string} */
SwitchCase.prototype.type;
 /** @type {?} */
SwitchCase.prototype.test;
 /** @type {!Array<?>} */
SwitchCase.prototype.consequent;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function CatchClause() {}
 /** @type {string} */
CatchClause.prototype.type;
 /** @type {?} */
CatchClause.prototype.param;
 /** @type {?} */
CatchClause.prototype.body;
/**
 * @extends {BaseNode}
 * @extends {BaseExpression}
 * @extends {BasePattern}
 * @record
 * @struct
 */
function Identifier() {}
 /** @type {string} */
Identifier.prototype.type;
 /** @type {string} */
Identifier.prototype.name;

/** @typedef {?} */
var Literal;
/**
 * @extends {BaseNode}
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function SimpleLiteral() {}
 /** @type {string} */
SimpleLiteral.prototype.type;
 /** @type {(string|number|boolean)} */
SimpleLiteral.prototype.value;
 /** @type {string} */
SimpleLiteral.prototype.raw;
/**
 * @extends {BaseNode}
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function RegExpLiteral() {}
 /** @type {string} */
RegExpLiteral.prototype.type;
 /** @type {!RegExp} */
RegExpLiteral.prototype.value;
 /** @type {?} */
RegExpLiteral.prototype.regex;
 /** @type {string} */
RegExpLiteral.prototype.raw;

/** @typedef {string} */
var UnaryOperator;

/** @typedef {string} */
var BinaryOperator;

/** @typedef {string} */
var LogicalOperator;

/** @typedef {string} */
var AssignmentOperator;

/** @typedef {string} */
var UpdateOperator;
/**
 * @extends {BaseForXStatement}
 * @record
 * @struct
 */
function ForOfStatement() {}
 /** @type {string} */
ForOfStatement.prototype.type;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function Super() {}
 /** @type {string} */
Super.prototype.type;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function SpreadElement() {}
 /** @type {string} */
SpreadElement.prototype.type;
 /** @type {?} */
SpreadElement.prototype.argument;
/**
 * @extends {BaseExpression}
 * @extends {BaseFunction}
 * @record
 * @struct
 */
function ArrowFunctionExpression() {}
 /** @type {string} */
ArrowFunctionExpression.prototype.type;
 /** @type {boolean} */
ArrowFunctionExpression.prototype.expression;
 /** @type {?} */
ArrowFunctionExpression.prototype.body;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function YieldExpression() {}
 /** @type {string} */
YieldExpression.prototype.type;
 /** @type {?} */
YieldExpression.prototype.argument;
 /** @type {boolean} */
YieldExpression.prototype.delegate;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function TemplateLiteral() {}
 /** @type {string} */
TemplateLiteral.prototype.type;
 /** @type {!Array<?>} */
TemplateLiteral.prototype.quasis;
 /** @type {!Array<?>} */
TemplateLiteral.prototype.expressions;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function TaggedTemplateExpression() {}
 /** @type {string} */
TaggedTemplateExpression.prototype.type;
 /** @type {?} */
TaggedTemplateExpression.prototype.tag;
 /** @type {?} */
TaggedTemplateExpression.prototype.quasi;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function TemplateElement() {}
 /** @type {string} */
TemplateElement.prototype.type;
 /** @type {boolean} */
TemplateElement.prototype.tail;
 /** @type {?} */
TemplateElement.prototype.value;
/**
 * @extends {Property}
 * @record
 * @struct
 */
function AssignmentProperty() {}
 /** @type {?} */
AssignmentProperty.prototype.value;
 /** @type {string} */
AssignmentProperty.prototype.kind;
 /** @type {boolean} */
AssignmentProperty.prototype.method;
/**
 * @extends {BasePattern}
 * @record
 * @struct
 */
function ObjectPattern() {}
 /** @type {string} */
ObjectPattern.prototype.type;
 /** @type {!Array<?>} */
ObjectPattern.prototype.properties;
/**
 * @extends {BasePattern}
 * @record
 * @struct
 */
function ArrayPattern() {}
 /** @type {string} */
ArrayPattern.prototype.type;
 /** @type {!Array<?>} */
ArrayPattern.prototype.elements;
/**
 * @extends {BasePattern}
 * @record
 * @struct
 */
function RestElement() {}
 /** @type {string} */
RestElement.prototype.type;
 /** @type {?} */
RestElement.prototype.argument;
/**
 * @extends {BasePattern}
 * @record
 * @struct
 */
function AssignmentPattern() {}
 /** @type {string} */
AssignmentPattern.prototype.type;
 /** @type {?} */
AssignmentPattern.prototype.left;
 /** @type {?} */
AssignmentPattern.prototype.right;

/** @typedef {?} */
var Class;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function BaseClass() {}
 /** @type {?} */
BaseClass.prototype.superClass;
 /** @type {?} */
BaseClass.prototype.body;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function ClassBody() {}
 /** @type {string} */
ClassBody.prototype.type;
 /** @type {!Array<?>} */
ClassBody.prototype.body;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function MethodDefinition() {}
 /** @type {string} */
MethodDefinition.prototype.type;
 /** @type {?} */
MethodDefinition.prototype.key;
 /** @type {?} */
MethodDefinition.prototype.value;
 /** @type {string} */
MethodDefinition.prototype.kind;
 /** @type {boolean} */
MethodDefinition.prototype.computed;
 /** @type {boolean} */
MethodDefinition.prototype.static;
/**
 * @extends {BaseClass}
 * @extends {BaseDeclaration}
 * @record
 * @struct
 */
function ClassDeclaration() {}
 /** @type {string} */
ClassDeclaration.prototype.type;
 /** @type {?} */
ClassDeclaration.prototype.id;
/**
 * @extends {BaseClass}
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function ClassExpression() {}
 /** @type {string} */
ClassExpression.prototype.type;
 /** @type {?} */
ClassExpression.prototype.id;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function MetaProperty() {}
 /** @type {string} */
MetaProperty.prototype.type;
 /** @type {?} */
MetaProperty.prototype.meta;
 /** @type {?} */
MetaProperty.prototype.property;

/** @typedef {?} */
var ModuleDeclaration;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function BaseModuleDeclaration() {}

/** @typedef {?} */
var ModuleSpecifier;
/**
 * @extends {BaseNode}
 * @record
 * @struct
 */
function BaseModuleSpecifier() {}
 /** @type {?} */
BaseModuleSpecifier.prototype.local;
/**
 * @extends {BaseModuleDeclaration}
 * @record
 * @struct
 */
function ImportDeclaration() {}
 /** @type {string} */
ImportDeclaration.prototype.type;
 /** @type {!Array<?>} */
ImportDeclaration.prototype.specifiers;
 /** @type {?} */
ImportDeclaration.prototype.source;
/**
 * @extends {BaseModuleSpecifier}
 * @record
 * @struct
 */
function ImportSpecifier() {}
 /** @type {string} */
ImportSpecifier.prototype.type;
 /** @type {?} */
ImportSpecifier.prototype.imported;
/**
 * @extends {BaseModuleSpecifier}
 * @record
 * @struct
 */
function ImportDefaultSpecifier() {}
 /** @type {string} */
ImportDefaultSpecifier.prototype.type;
/**
 * @extends {BaseModuleSpecifier}
 * @record
 * @struct
 */
function ImportNamespaceSpecifier() {}
 /** @type {string} */
ImportNamespaceSpecifier.prototype.type;
/**
 * @extends {BaseModuleDeclaration}
 * @record
 * @struct
 */
function ExportNamedDeclaration() {}
 /** @type {string} */
ExportNamedDeclaration.prototype.type;
 /** @type {?} */
ExportNamedDeclaration.prototype.declaration;
 /** @type {!Array<?>} */
ExportNamedDeclaration.prototype.specifiers;
 /** @type {?} */
ExportNamedDeclaration.prototype.source;
/**
 * @extends {BaseModuleSpecifier}
 * @record
 * @struct
 */
function ExportSpecifier() {}
 /** @type {string} */
ExportSpecifier.prototype.type;
 /** @type {?} */
ExportSpecifier.prototype.exported;
/**
 * @extends {BaseModuleDeclaration}
 * @record
 * @struct
 */
function ExportDefaultDeclaration() {}
 /** @type {string} */
ExportDefaultDeclaration.prototype.type;
 /** @type {?} */
ExportDefaultDeclaration.prototype.declaration;
/**
 * @extends {BaseModuleDeclaration}
 * @record
 * @struct
 */
function ExportAllDeclaration() {}
 /** @type {string} */
ExportAllDeclaration.prototype.type;
 /** @type {?} */
ExportAllDeclaration.prototype.source;
/**
 * @extends {BaseExpression}
 * @record
 * @struct
 */
function AwaitExpression() {}
 /** @type {string} */
AwaitExpression.prototype.type;
 /** @type {?} */
AwaitExpression.prototype.argument;
