'use strict';

angular.module('bookList').
	component('bookList', {
		// template : "<div class=''><h1 class='new-class'>{{ title }}</h1><button ng-click='someClickTest()'>Click here</button></div>",
		templateUrl: '/templates/book-list.html',
		controller: function($scope) {
			var bookItems = [
				{title: "Management Information Systems", id: 1 ,author: "Mr Christopher Moturi"},
				{title: "User Centred Development", id: 2 ,author: "Dr Oboko"},
				{title: "Compiler Construction", id: 3 ,author: "Dr Evans Miriti"},
				{title: "Network and Distributed Programming", id: 4 ,author: "Dr Abade"},
			]

		    $scope.bookItems = bookItems
		}
});