'use strict';

angular.module('userDetail').
	component('userDetail', {
		// template : "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click here</button></div>",
		templateUrl: '/templates/user-detail.html',
		controller: function(User, $http, $location, $routeParams, $scope) {

			User.query(function(data)
			{
				angular.forEach(data, function(user){
			    	if(user.id == $routeParams.id){
			    		console.log($routeParams.id)
			    		$scope.userItem = user
			    	}
		   		})
			})

		}
});