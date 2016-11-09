'user strict';

angular.module('user').
	factory('User', function($resource){
		var url = 'http://0.0.0.0:1234/users/users/:user'
		return $resource(url, {user: '@user'}, {
			
			query: {
				method: "GET",
				params: {},	
				isArray: true,
				cache: true,
		/*		transformResponse
				interceptor	*/
			},
			get: {
				method: "GET",
				params: {},
				isArray: false,
				cache: true,
			}
		})
	});