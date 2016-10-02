/*\
title: test-tobibeer/escape-filter.js
type: application/javascript
tags: [[$:/tags/test-spec]]

Tests the escape filter.

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

// Create a wiki
var wiki = new $tw.Wiki();

describe("test escape filter", function() {
	var fakeWidget = {getVariable: function() {return "foo";}};
	// Tests

	it("escape $:/foo", function() {
		expect(wiki.filterTiddlers(
			"[[$:/foo]escape[]]"
		,fakeWidget).join(",")).toBe("\\$:\\/foo");
	});
});

})();
