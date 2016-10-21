'use strict';

angular.module('confirmClick').
	directive('confirmClick', function($rootScope, $location){
		return {
			scope: {
				message: "@message",
				eq: "=eq",
				user: "=user"
			},
			restrict: "E",
			template: "<a ng-href='#}'>{{ user.first_name }}</a>",
			link: function(scope, element, attr){
				var msg = scope.message || "Are you sure?"
				element.bind("click", function(event){
					if(window.confirm(msg)){
						console.log('/users/' + scope.user.id)
						$rootScope.$apply(function(){
							$location.path('/users/' + scope.user.id)
						})
					}

				})
				console.log(scope)
			}
		}

	});