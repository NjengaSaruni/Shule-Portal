'use strict';

angular.module('shule').
	config(['$routeProvider', '$locationProvider', 
	function($routeProvider, $locationProvider) 
{
   $routeProvider.
		when("/", {
			template: "<book-list></book-list>"
		}).
		when("/about", {
			templateUrl: "/templates/about.html"
		}).
		when("/users", {
			template: "<user-list></user-list>" 
		}).
		when("/users/:id", {
			template: "<user-detail></user-detail>" 
		}).
/*		when("/books/:id/:abc", {
			template: "<book-list></book-list>" 
		}).*/
		otherwise({
			template: "Not Found"
		})

   $locationProvider.html5Mode(true);
}]);
