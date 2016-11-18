'use strict';

angular.module('shule').
	config(['$routeProvider', '$locationProvider', '$resourceProvider','$httpProvider',
	function($routeProvider, $locationProvider, $resourceProvider, $httpProvider) 
{
   $routeProvider.
		when("/", {
			template: "<book-list></book-list>"
		}).
		when("/login", {
			template: "<authentication></authentication>"
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
		when("/books/:id", {
			template: "<book-detail></book-detail>" 
		}).
		otherwise({
			template: "Not Found"
		})

	$httpProvider.defaults.withCredentials = true;
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

	$resourceProvider.defaults.stripTrailingSlashes = false;
 	$locationProvider.html5Mode(true);
}]);
