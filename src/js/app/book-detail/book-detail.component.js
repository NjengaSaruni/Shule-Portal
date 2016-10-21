'use strict';

angular.module('bookDetail').
	component('bookDetail', {
		// template : "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click here</button></div>",
		templateUrl: '/templates/book-detail.html',
		controller: function($location, $routeParams, $scope) {

		    var bookItems = [
				{title: "Management Information Systems", id: 1 ,author: "Mr Christopher Moturi"},
				{title: "User Centred Development", id: 2 ,author: "Dr Oboko"},
				{title: "Compiler Construction", id: 3 ,author: "Dr Evans Miriti"},
				{title: "Network and Distributed Programming", id: 4 ,author: "Dr Abade"},
			]

		    angular.forEach(bookItems, function(book){
		    	if(book.id == $routeParams.id){
		    		$scope.book = book
		    	}
		    })

		}
});