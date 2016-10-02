/*\
title: $:/plugins/tobibeer/escape/filter.js
type: application/javascript
module-type: filteroperator

a filter to escape characters in a title to make it safe for use in regular expressions

@preserve
\*/
(function(){"use strict";exports.escape=function(e,n,t){var c=[];e(function(e,n){c.push(n.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g,"\\$&"))});return c}})();