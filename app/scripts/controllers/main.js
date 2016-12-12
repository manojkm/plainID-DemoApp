'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
	.config(function ($stateProvider) {

		$stateProvider.state('resources', {
			url: '',
			abstract: true,
			views: {
				'page-content': {
					templateUrl: 'views/main.html',
					controller: 'MainCtrl',
					controllerAs: 'main'
				},

			}
	    }).state('resources.list', {
			url: '',
			views: {
				'card-view': {
					templateUrl: 'views/elements/item-card.html'
				}				
			}
	    }).state('resources.view', {
			url: '/:id',
			parent: 'resources',
			views: {
				'card-view': {
					templateUrl: 'views/elements/item-card.html',
					controller: function(ResourcesService, $scope, $rootScope, $stateParams) {
						///
						/// Display the selected item from the data in a detailed view
						///
						function selectItem(id) {
							ResourcesService.getItemById(id).then(function(item) {
								$scope.ngModel = item;
							});
							$rootScope.hideSidebar();
						}
						
						selectItem($stateParams.id);
					}
				}
			}
	    });

	})
	.controller('MainCtrl', function ($scope, $rootScope, $http, ResourcesService, _) {
		$scope.loading = false;
		$scope.searchValue = '';
		$scope.actions = [];
		$scope.resources = [];
		$scope.filteredResources = [];
		
		///
		/// Get the resources data and save it in scope
		///
		function getData(callback) {
			$scope.loading = true;

			ResourcesService.getData()
		        .then(function() {
					$scope.actions = ResourcesService.actions;
					$scope.resources = ResourcesService.resources;
					$scope.loading = false;
					
					if (callback) {
						callback();
					}
					
		        })
		        .catch(function() {
		        	$scope.loading = false;
		        });
		}
		
		///
		/// Filter the data based on the search input value
		///
		function filterData() {
			$scope.filteredResources = _.filter(ResourcesService.resources, function(item) {
				var regEx = new RegExp($scope.searchValue, 'i');
				
				if (regEx.test(item.name)) {
					return true;
				} else {
					return false;
				}
			});
		}
		
		///
		/// Execute data search
		///
		function search() {
			getData(filterData);
		}
		
		///
		/// Expose variables/functions to scope
		///
		$scope.onSearch = search;

		search();

	});
