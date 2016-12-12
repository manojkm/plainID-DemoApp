'use strict';

/**
 * @ngdoc service
 * @name demoApp.ResourcesService
 * @description
 * # ResourcesService
 * Service in the demoApp.
 */
angular.module('demoApp')
	.service('ResourcesService', function ($q, $http, _) {
	
		var self = this;
		
		self.actions = [];
		self.resources = [];
		
		self.getData = function() {
			return $q(function (resolve, reject) {
				
				/// Adding timestamp to URL to make sure we don't get fresh results and not from cache
				var url = '/data/data.json?v=' + new Date().getTime();
				$http.get(url)
					.then(function(result) {
						self.actions = result.data.actions;
						self.resources = result.data.resources;
						resolve(result);
					})
					.catch(reject);
	        });
		};
		self.findItemById = function(id) {
			return _.findWhere(self.resources, {id: id});
		};
		
		self.getItemById = function(id) {
			return $q(function (resolve, reject) {
				if (self.resources.length) {
					resolve(self.findItemById(id));
				} else {
					
					self.getData()
						.then(function() {
							resolve(self.findItemById(id));
						})
						.catch(reject);
				}
			});
		};
	
	});
