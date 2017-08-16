/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from d/gapi.plus/index.d.ts:
/** @const */
gapi.client.plus = {};
/** @const */
gapi.client.plus.people = {};
/**
 * @record
 * @struct
 */
gapi.client.plus.people.GetParameters = function() {};
 /** @type {string} */
gapi.client.plus.people.GetParameters.prototype.userId;

/**
 * @param {!gapi.client.plus.people.GetParameters} parameters
 * @return {!gapi.client.HttpRequest<!gapi.client.plus.people.Person>}
 */
gapi.client.plus.people.get = function(parameters) {};
/**
 * @record
 * @struct
 */
gapi.client.plus.people.SearchParameters = function() {};
 /** @type {string} */
gapi.client.plus.people.SearchParameters.prototype.query;
 /** @type {string} */
gapi.client.plus.people.SearchParameters.prototype.language;
 /** @type {number} */
gapi.client.plus.people.SearchParameters.prototype.maxResults;
 /** @type {string} */
gapi.client.plus.people.SearchParameters.prototype.pageToken;

/**
 * @param {!gapi.client.plus.people.SearchParameters} parameters
 * @return {!gapi.client.HttpRequest<!gapi.client.plus.people.PeopleFeed>}
 */
gapi.client.plus.people.search = function(parameters) {};
/**
 * @record
 * @struct
 */
gapi.client.plus.people.PeopleFeed = function() {};
 /** @type {string} */
gapi.client.plus.people.PeopleFeed.prototype.kind;
 /** @type {string} */
gapi.client.plus.people.PeopleFeed.prototype.etag;
 /** @type {string} */
gapi.client.plus.people.PeopleFeed.prototype.selfLink;
 /** @type {string} */
gapi.client.plus.people.PeopleFeed.prototype.title;
 /** @type {string} */
gapi.client.plus.people.PeopleFeed.prototype.nextPageToken;
 /** @type {number} */
gapi.client.plus.people.PeopleFeed.prototype.totalItems;
 /** @type {!Array<!gapi.client.plus.people.Person>} */
gapi.client.plus.people.PeopleFeed.prototype.items;
/**
 * @record
 * @struct
 */
gapi.client.plus.people.Person = function() {};
 /** @type {string} */
gapi.client.plus.people.Person.prototype.kind;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.etag;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.nickname;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.occupation;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.skills;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.birthday;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.gender;
 /** @type {!Array<{value: string, type: string}>} */
gapi.client.plus.people.Person.prototype.emails;
 /** @type {!Array<{value: string, type: string, label: string}>} */
gapi.client.plus.people.Person.prototype.urls;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.objectType;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.id;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.displayName;
 /** @type {{formatted: string, familyName: string, givenName: string, middleName: string, honorificPrefix: string, honorificSuffix: string}} */
gapi.client.plus.people.Person.prototype.name;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.tagline;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.braggingRights;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.aboutMe;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.relationshipStatus;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.url;
 /** @type {{url: string}} */
gapi.client.plus.people.Person.prototype.image;
 /** @type {!Array<{name: string, department: string, title: string, type: string, startDate: string, endDate: string, location: string, description: string, primary: boolean}>} */
gapi.client.plus.people.Person.prototype.organizations;
 /** @type {!Array<{value: string, primary: boolean}>} */
gapi.client.plus.people.Person.prototype.placesLived;
 /** @type {boolean} */
gapi.client.plus.people.Person.prototype.isPlusUser;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.language;
 /** @type {{min: number, max: number}} */
gapi.client.plus.people.Person.prototype.ageRange;
 /** @type {number} */
gapi.client.plus.people.Person.prototype.plusOneCount;
 /** @type {number} */
gapi.client.plus.people.Person.prototype.circledByCount;
 /** @type {boolean} */
gapi.client.plus.people.Person.prototype.verified;
 /** @type {{layout: string, coverPhoto: {url: string, height: number, width: number}, coverInfo: {topImageOffset: number, leftImageOffset: number}}} */
gapi.client.plus.people.Person.prototype.cover;
 /** @type {string} */
gapi.client.plus.people.Person.prototype.domain;
