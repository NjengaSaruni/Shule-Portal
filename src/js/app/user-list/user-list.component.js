'use strict';

angular.module('userList').
	component('userList', {
		// template : "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click here</button></div>",
		templateUrl: '/templates/user-list.html',
		controller: function($http, $location, $routeParams, $scope) {

		$http.get("http://192.168.1.195:9999/users/users/").then(successCallback, errorCallback);

		function successCallback(response, status, config, statusText)
		{
			console.log(response.data)
			var userItems = response.data
			$scope.userItems = userItems
			console.log(userItems)
		}

		function errorCallback(response, status, config, statusText)
		{
			console.log(response.data)
		}
	}
	
});