'use strict';

angular.module('angularfullstackApp')
	.controller('NavbarCtrl', function ($scope, $location) {
		$scope.menu = [{
			'title': 'Home',
			'link': '/'
		},{
			'title': 'Message',
			'link': 'message'
		}];

		$scope.isActive = function(route) {
			return route === $location.path();
		};
	}
);
