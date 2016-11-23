'user strict';

angular.module('login').
    factory('Login', function($resource){
        var url = 'http://0.0.0.0:1234/api-token-auth/'

        return $resource(url, {}, {
            post: {
                method: "POST",
            },
        })
    })
    .factory('Register', function($resource){
        var url = 'http://0.0.0.0:1234/users/users'

        return $resource (url, {}, {
            post: {
                method: "POST",
            }
        })
    });


