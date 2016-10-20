'use strict';

angular.module('shule').
	config(function($locationProvider,$routeProvider)
	{
		$locationProvider.hmtl5Mode({
			enabled: true
		})

		$routeProvider.
		when("/", {
			template: "<book-list></book-list>"
		}).
		when("/book/1/", {
			template: "<h1>Hi<h1>" 
		}).
		when("/book/2/", {
			template: "<book-list></book-list>" 
		}).
		otherwise({
			template: "Not Found"
		})
	});