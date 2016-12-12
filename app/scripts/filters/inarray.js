'use strict';

/**
 * @ngdoc filter
 * @name demoApp.filter:inArray
 * @function
 * @description
 * # inArray
 * Looks through each value in the list, returning an array of all the values that exists in the filtered list
 */
angular.module('demoApp')
	.filter('inArray', function () {
		return function (list, values, key) {
			var filtered = [];
			
			list.forEach(function(item) {
				if (values && (values.indexOf(item[key]) !== -1)) {
					filtered.push(item);
				}				
			});
			
			return filtered;
		};
	});
