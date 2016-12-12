'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
	.module('demoApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'ui.router',
		'ui.bootstrap',
		'angular-loading-bar',
		'underscore'
	])
	.run(function($rootScope) {
		$rootScope.sidebarVisible = true;
		
		/// Hide the split view sidebar
		function hideSidebar() {
			$rootScope.sidebarVisible = false;
		}
		
		/// show the split view sidebar
		function showSidebar() {
			$rootScope.sidebarVisible = true;
		}

		/// toggle the split view sidebar visiblity
		function toggleSidebar() {
			if ($rootScope.sidebarVisible) {
				hideSidebar();
			} else {
				showSidebar();
			}
		}
		
		///
		/// Expose variables/functions to scope
		///
		$rootScope.hideSidebar = hideSidebar;
		$rootScope.showSidebar = showSidebar;
		$rootScope.toggleSidebar = toggleSidebar;
		
	});
