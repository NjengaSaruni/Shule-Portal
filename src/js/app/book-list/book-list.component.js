'use strict';

angular.module('bookList').
	component('bookList', {
		template : "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click here</button></div>",
		controller: function($scope) {
			console.log("Hello")
			$scope.title = "Hi there"
			$scope.clicks = 1
			$scope.someClickTest=function(){
				console.log("Clicked")
				$scope.title = 'Clicked ' + $scope.clicks + ' times'
				$scope.clicks+=1
		}
	}
});