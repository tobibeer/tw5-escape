/*\
title: $:/plugins/tobibeer/escape/filter.js
type: application/javascript
module-type: filteroperator

a filter to escape characters in a title to make it safe for use in regular expressions

@preserve
\*/

(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
The escape filter function...
*/
exports.escape = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
		results.push(
			title.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, "\\$&")
		);
	});
	// Return filter results
	return results;
};

})();