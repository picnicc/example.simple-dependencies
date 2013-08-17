/**
 * Our plugin would begin here
 * It relies on Underscore, Backbone and jQuery
 * We assume that those dependencies are available
 */
(function(window) {

	var self = somePlugin = {
		init: function() {

			// we can use Underscore, Backbone, and jQuery

			// The dependencies have either been included in our compiled file
			// or the user already had them in her environment
		},
	};

	window.somePlugin = somePlugin;
})(window);