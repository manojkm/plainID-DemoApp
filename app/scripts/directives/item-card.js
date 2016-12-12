'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:itemCard
 * @description
 * # itemCard
 */
angular.module('demoApp')
	.directive('itemCard', function () {
	    return {
		    templateUrl: 'views/elements/item-card.html',
			scope: {
                ngModel: '=',
                actions: '='
            },		    
	        restrict: 'E'
	    };
	});
