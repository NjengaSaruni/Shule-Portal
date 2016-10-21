'user strict';

angular.module('user').
	factory('User', function($resource){
		var url = 'http://10.4.47.26:9999/users/users/'
		return $resource(url, {}, {
			
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
				isArray: true,
				cache: true,
			}
		})
	});