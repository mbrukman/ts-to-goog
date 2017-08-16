/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/project-oxford/index.d.ts:

/* TODO: ImportEqualsDeclaration in  */

/* TODO: ImportEqualsDeclaration in  */

/**
 * @constructor
 * @struct
 * @param {string} apiKey
 */
function Client(apiKey) {}
 /** @type {string} */
Client.prototype._key;
 /** @type {!FaceAPI} */
Client.prototype.face;
 /** @type {!VisionAPI} */
Client.prototype.vision;
/**
 * @constructor
 * @struct
 */
function FaceAPI() {}
 /** @type {!PersonGroup} */
FaceAPI.prototype.personGroup;
 /** @type {!Person} */
FaceAPI.prototype.person;

/**
 * Call the Face Detected API
 * Detects human faces in an image and returns face locations, face landmarks, and
 * optional attributes including head-pose, gender, and age. Detection is an essential
 * API that provides faceId to other APIs like Identification, Verification,
 * and Find Similar.
 * 
 * @param {!Options.Detect} options
 * @return {!Bluebird<!Array<?>>}
 */
FaceAPI.prototype.detect = function(options) {};

/**
 * Detect similar faces using faceIds (as returned from the detect API)
 * @param {string} sourceFaceId
 * @param {!Array<string>} candidateFacesIds
 * @return {!Bluebird<!FaceResponses.Similar>}
 */
FaceAPI.prototype.similar = function(sourceFaceId, candidateFacesIds) {};

/**
 * Divides candidate faces into groups based on face similarity using faceIds.
 * The output is one or more disjointed face groups and a MessyGroup.
 * A face group contains the faces that have similar looking, often of the same person.
 * There will be one or more face groups ranked by group size, i.e. number of face.
 * Faces belonging to the same person might be split into several groups in the result.
 * The MessyGroup is a special face group that each face is not similar to any other
 * faces in original candidate faces. The messyGroup will not appear in the result if
 * all faces found their similar counterparts. The candidate face list has a
 * limit of 100 faces.
 * 
 * @param {!Array<string>} faces
 * @return {!Bluebird<!FaceResponses.Grouping>}
 */
FaceAPI.prototype.grouping = function(faces) {};

/**
 * Identifies persons from a person group by one or more input faces.
 * To recognize which person a face belongs to, Face Identification needs a person group
 * that contains number of persons. Each person contains one or more faces. After a person
 * group prepared, it should be trained to make it ready for identification. Then the
 * identification API compares the input face to those persons' faces in person group and
 * returns the best-matched candidate persons, ranked by confidence.
 * 
 * @param {!Array<string>} faceIDs
 * @param {!Options.Identify} options
 * @return {!Bluebird<!Array<!FaceResponses.Identify>>}
 */
FaceAPI.prototype.identify = function(faceIDs, options) {};

/**
 * Analyzes two faces and determine whether they are from the same person.
 * Verification works well for frontal and near-frontal faces.
 * For the scenarios that are sensitive to accuracy please use with own judgment.
 * @param {!Array<string>} faces
 * @return {!Bluebird<!FaceResponses.Verify>}
 */
FaceAPI.prototype.verify = function(faces) {};
/**
 * @constructor
 * @struct
 */
function VisionAPI() {}

/**
 * This operation does a deep analysis on the given image and then extracts a
 * set of rich visual features based on the image content.
 * 
 * @param {!Options.Analyze} options
 * @return {!Bluebird<!VisionResponses.Analyze>}
 */
VisionAPI.prototype.analyzeImage = function(options) {};

/**
 * Generate a thumbnail image to the user-specified width and height. By default, the
 * service analyzes the image, identifies the region of interest (ROI), and generates
 * smart crop coordinates based on the ROI. Smart cropping is designed to help when you
 * specify an aspect ratio that differs from the input image.
 * 
 * @param {!Options.Thumbnail} options
 * @return {!Bluebird<!internal.Stream>}
 */
VisionAPI.prototype.thumbnail = function(options) {};

/**
 * Optical Character Recognition (OCR) detects text in an image and extracts the recognized
 * characters into a machine-usable character stream.
 * 
 * @param {!Options.Ocr} options
 * @return {!Bluebird<!VisionResponses.Ocr>}
 */
VisionAPI.prototype.ocr = function(options) {};
/**
 * @constructor
 * @struct
 */
function PersonGroup() {}

/**
 * Creates a new person group with a user-specified ID.
 * A person group is one of the most important parameters for the Identification API.
 * The Identification searches person faces in a specified person group.
 * 
 * @param {string} personGroupId
 * @param {string} name
 * @param {string} userData
 * @return {!Bluebird<void>}
 */
PersonGroup.prototype.create = function(personGroupId, name, userData) {};

/**
 * Deletes an existing person group.
 * 
 * @param {string} personGroupId
 * @return {!Bluebird<void>}
 */
PersonGroup.prototype.delete = function(personGroupId) {};

/**
 * Gets an existing person group.
 * 
 * @param {string} personGroupId
 * @return {!Bluebird<!PersonGroupResponses.PersonGroup>}
 */
PersonGroup.prototype.get = function(personGroupId) {};

/**
 * Retrieves the training status of a person group. Training is triggered by the Train PersonGroup API.
 * The training will process for a while on the server side. This API can query whether the training
 * is completed or ongoing.
 * 
 * @param {string} personGroupId
 * @return {!Bluebird<!PersonGroupResponses.TrainingStatus>}
 */
PersonGroup.prototype.trainingStatus = function(personGroupId) {};

/**
 * Starts a person group training.
 * Training is a necessary preparation process of a person group before identification.
 * Each person group needs to be trained in order to call Identification. The training
 * will process for a while on the server side even after this API has responded.
 * 
 * @param {string} personGroupId
 * @return {!Bluebird<!PersonGroupResponses.TrainingStatus>}
 */
PersonGroup.prototype.trainingStart = function(personGroupId) {};

/**
 * Updates an existing person group's display name and userData.
 * 
 * @param {string} personGroupId
 * @param {string} name
 * @param {string} userData
 * @return {!Bluebird<void>}
 */
PersonGroup.prototype.update = function(personGroupId, name, userData) {};

/**
 * Lists all person groups in the current subscription.
 * @return {!Bluebird<!Array<!PersonGroupResponses.PersonGroup>>}
 */
PersonGroup.prototype.list = function() {};
/**
 * @constructor
 * @struct
 */
function Person() {}

/**
 * Adds a face to a person for identification. The maximum face count for each person is 32.
 * The face ID must be added to a person before its expiration. Typically a face ID expires
 * 24 hours after detection.
 * 
 * @param {string} personGroupId
 * @param {string} personId
 * @param {string} faceId
 * @param {string=} userData
 * @return {!Bluebird<void>}
 */
Person.prototype.addFace = function(personGroupId, personId, faceId, userData) {};

/**
 * Deletes a face from a person.
 * 
 * @param {string} personGroupId
 * @param {string} personId
 * @param {string} faceId
 * @return {!Bluebird<void>}
 */
Person.prototype.deleteFace = function(personGroupId, personId, faceId) {};

/**
 * Updates a face for a person.
 * 
 * @param {string} personGroupId
 * @param {string} personId
 * @param {string} faceId
 * @param {string} userData
 * @return {!Bluebird<void>}
 */
Person.prototype.updateFace = function(personGroupId, personId, faceId, userData) {};

/**
 * Get a face for a person.
 * 
 * @param {string} personGroupId
 * @param {string} personId
 * @param {string} faceId
 * @return {!Bluebird<!PersonResponses.Face>}
 */
Person.prototype.getFace = function(personGroupId, personId, faceId) {};

/**
 * Creates a new person in a specified person group for identification.
 * The number of persons has a subscription limit. Free subscription amount is 1000 persons.
 * The maximum face count for each person is 32.
 * 
 * @param {string} personGroupId
 * @param {!Array<string>} faces
 * @param {string} name
 * @param {string} userData
 * @return {!Bluebird<{personId: string}>}
 */
Person.prototype.create = function(personGroupId, faces, name, userData) {};

/**
 * Deletes an existing person from a person group.
 * 
 * @param {string} personGroupId
 * @param {string} personId
 * @return {!Bluebird<void>}
 */
Person.prototype.delete = function(personGroupId, personId) {};

/**
 * Gets an existing person from a person group.
 * 
 * @param {string} personGroupId
 * @param {string} personId
 * @return {!Bluebird<!PersonResponses.Person>}
 */
Person.prototype.get = function(personGroupId, personId) {};

/**
 * Updates a person's information.
 * 
 * @param {string} personGroupId
 * @param {string} personId
 * @param {!Array<string>} faces
 * @param {string} name
 * @param {string} userData
 * @return {!Bluebird<void>}
 */
Person.prototype.update = function(personGroupId, personId, faces, name, userData) {};

/**
 * Lists all persons in a person group, with the person information.
 * 
 * @param {string} personGroupId
 * @return {!Bluebird<!Array<!PersonResponses.Person>>}
 */
Person.prototype.list = function(personGroupId) {};
/** @const */
var Options = {};
/**
 * @record
 * @struct
 */
Options.Detect = function() {};
 /** @type {string} */
Options.Detect.prototype.url;
 /** @type {string} */
Options.Detect.prototype.path;
 /** @type {!internal.Stream} */
Options.Detect.prototype.stream;
 /** @type {boolean} */
Options.Detect.prototype.analyzesFaceLandmarks;
 /** @type {boolean} */
Options.Detect.prototype.analyzesAge;
 /** @type {boolean} */
Options.Detect.prototype.analyzesGender;
 /** @type {boolean} */
Options.Detect.prototype.analyzesHeadPose;
/**
 * @record
 * @struct
 */
Options.Identify = function() {};
 /** @type {string} */
Options.Identify.prototype.personGroupId;
 /** @type {number} */
Options.Identify.prototype.maxNumOfCandidatesReturned;
/**
 * @record
 * @struct
 */
Options.Analyze = function() {};
 /** @type {string} */
Options.Analyze.prototype.url;
 /** @type {string} */
Options.Analyze.prototype.path;
 /** @type {boolean} */
Options.Analyze.prototype.ImageType;
 /** @type {boolean} */
Options.Analyze.prototype.Color;
 /** @type {boolean} */
Options.Analyze.prototype.Faces;
 /** @type {boolean} */
Options.Analyze.prototype.Adult;
 /** @type {boolean} */
Options.Analyze.prototype.Categories;
/**
 * @record
 * @struct
 */
Options.Thumbnail = function() {};
 /** @type {string} */
Options.Thumbnail.prototype.url;
 /** @type {string} */
Options.Thumbnail.prototype.path;
 /** @type {number} */
Options.Thumbnail.prototype.width;
 /** @type {number} */
Options.Thumbnail.prototype.height;
 /** @type {boolean} */
Options.Thumbnail.prototype.smartCropping;
 /** @type {!internal.Writable} */
Options.Thumbnail.prototype.pipe;
/**
 * @record
 * @struct
 */
Options.Ocr = function() {};
 /** @type {string} */
Options.Ocr.prototype.url;
 /** @type {string} */
Options.Ocr.prototype.path;
 /** @type {string} */
Options.Ocr.prototype.language;
 /** @type {boolean} */
Options.Ocr.prototype.detectOrientation;
/** @const */
var FaceResponses = {};
/**
 * @record
 * @struct
 */
FaceResponses.FaceRectangle = function() {};
 /** @type {number} */
FaceResponses.FaceRectangle.prototype.top;
 /** @type {number} */
FaceResponses.FaceRectangle.prototype.left;
 /** @type {number} */
FaceResponses.FaceRectangle.prototype.width;
 /** @type {number} */
FaceResponses.FaceRectangle.prototype.height;
/**
 * @record
 * @struct
 */
FaceResponses.point = function() {};
 /** @type {number} */
FaceResponses.point.prototype.x;
 /** @type {number} */
FaceResponses.point.prototype.y;
/**
 * @record
 * @struct
 */
FaceResponses.FaceLandmarks = function() {};

/* TODO: PropertySignature: FaceResponses."pupilLeft" */

/* TODO: PropertySignature: FaceResponses."pupilRight" */

/* TODO: PropertySignature: FaceResponses."noseTip" */

/* TODO: PropertySignature: FaceResponses."mouthLeft" */

/* TODO: PropertySignature: FaceResponses."mouthRight" */

/* TODO: PropertySignature: FaceResponses."eyebrowLeftOuter" */

/* TODO: PropertySignature: FaceResponses."eyebrowLeftInner" */

/* TODO: PropertySignature: FaceResponses."eyeLeftOuter" */

/* TODO: PropertySignature: FaceResponses."eyeLeftTop" */

/* TODO: PropertySignature: FaceResponses."eyeLeftBottom" */

/* TODO: PropertySignature: FaceResponses."eyeLeftInner" */

/* TODO: PropertySignature: FaceResponses."eyebrowRightInner" */

/* TODO: PropertySignature: FaceResponses."eyebrowRightOuter" */

/* TODO: PropertySignature: FaceResponses."eyeRightInner" */

/* TODO: PropertySignature: FaceResponses."eyeRightTop" */

/* TODO: PropertySignature: FaceResponses."eyeRightBottom" */

/* TODO: PropertySignature: FaceResponses."eyeRightOuter" */

/* TODO: PropertySignature: FaceResponses."noseRootLeft" */

/* TODO: PropertySignature: FaceResponses."noseRootRight" */

/* TODO: PropertySignature: FaceResponses."noseLeftAlarTop" */

/* TODO: PropertySignature: FaceResponses."noseRightAlarTop" */

/* TODO: PropertySignature: FaceResponses."noseLeftAlarOutTip" */

/* TODO: PropertySignature: FaceResponses."noseRightAlarOutTip" */

/* TODO: PropertySignature: FaceResponses."upperLipTop" */

/* TODO: PropertySignature: FaceResponses."upperLipBottom" */

/* TODO: PropertySignature: FaceResponses."underLipTop" */

/* TODO: PropertySignature: FaceResponses."underLipBottom" */
/**
 * @record
 * @struct
 */
FaceResponses.Attributes = function() {};

/* TODO: PropertySignature: FaceResponses."headPose" */

/* TODO: PropertySignature: FaceResponses."gender" */

/* TODO: PropertySignature: FaceResponses."age" */
/**
 * @record
 * @struct
 */
FaceResponses.Detect = function() {};

/* TODO: PropertySignature: FaceResponses."faceId" */

/* TODO: PropertySignature: FaceResponses."faceRectangle" */

/* TODO: PropertySignature: FaceResponses."faceLandmarks" */

/* TODO: PropertySignature: FaceResponses."attributes" */
/**
 * @record
 * @struct
 */
FaceResponses.Similar = function() {};

/* TODO: PropertySignature: FaceResponses."faceIds" */
/**
 * @record
 * @struct
 */
FaceResponses.Grouping = function() {};

/* TODO: PropertySignature: FaceResponses."groups" */

/* TODO: PropertySignature: FaceResponses."messyGroup" */
/**
 * @record
 * @struct
 */
FaceResponses.Identify = function() {};

/* TODO: PropertySignature: FaceResponses."faceId" */

/* TODO: PropertySignature: FaceResponses."candidates" */
/**
 * @record
 * @struct
 */
FaceResponses.Verify = function() {};

/* TODO: PropertySignature: FaceResponses."isIdentical" */

/* TODO: PropertySignature: FaceResponses."confidence" */
/** @const */
var PersonGroupResponses = {};
/**
 * @record
 * @struct
 */
PersonGroupResponses.PersonGroup = function() {};

/* TODO: PropertySignature: PersonGroupResponses."personGroupId" */

/* TODO: PropertySignature: PersonGroupResponses."name" */

/* TODO: PropertySignature: PersonGroupResponses."userData" */
/**
 * @record
 * @struct
 */
PersonGroupResponses.TrainingStatus = function() {};

/* TODO: PropertySignature: PersonGroupResponses."personGroupId" */

/* TODO: PropertySignature: PersonGroupResponses."status" */

/* TODO: PropertySignature: PersonGroupResponses."startTime" */

/* TODO: PropertySignature: PersonGroupResponses."endTime" */
/** @const */
var PersonResponses = {};
/**
 * @record
 * @struct
 */
PersonResponses.Create = function() {};

/* TODO: PropertySignature: PersonResponses."personId" */
/**
 * @record
 * @struct
 */
PersonResponses.Person = function() {};

/* TODO: PropertySignature: PersonResponses."personId" */

/* TODO: PropertySignature: PersonResponses."faceIds" */

/* TODO: PropertySignature: PersonResponses."name" */

/* TODO: PropertySignature: PersonResponses."userData" */
/**
 * @record
 * @struct
 */
PersonResponses.Face = function() {};

/* TODO: PropertySignature: PersonResponses."faceId" */

/* TODO: PropertySignature: PersonResponses."userData" */
/** @const */
var VisionResponses = {};
/**
 * @record
 * @struct
 */
VisionResponses.Analyze = function() {};

/* TODO: PropertySignature: VisionResponses."categories" */

/* TODO: PropertySignature: VisionResponses."adult" */

/* TODO: PropertySignature: VisionResponses."requestId" */

/* TODO: PropertySignature: VisionResponses."metadata" */

/* TODO: PropertySignature: VisionResponses."faces" */

/* TODO: PropertySignature: VisionResponses."color" */

/* TODO: PropertySignature: VisionResponses."imageType" */
/**
 * @record
 * @struct
 */
VisionResponses.Ocr = function() {};

/* TODO: PropertySignature: VisionResponses."language" */

/* TODO: PropertySignature: VisionResponses."textAngle" */

/* TODO: PropertySignature: VisionResponses."orientation" */

/* TODO: PropertySignature: VisionResponses."regions" */
