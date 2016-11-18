'use strict';

angular.module('authentication').
    component('authentication', {
        templateUrl: '/templates/login.html',

        controller: function(Login, $routeParams, $scope) {
            $scope.userData = {}
            
            $scope.loginUser = function(){
                Login.post($scope.userData)
            }
        }
 
});

        