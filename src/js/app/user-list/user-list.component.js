'use strict';

angular.module('userList').
	component('userList', {
		templateUrl: '/templates/user-list.html',
		controller: function(User, $http, $location, $routeParams, $scope) {

		$scope.userItems =  User.query();

        $scope.addUser = function(){

        };
	}
	
});