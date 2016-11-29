angular.module('register').
    component('register', {
        templateUrl: '/templates/register.html',

        controller: function(Register, $routeParams, $scope) {
            // $scope.userData = {}
            
            $scope.registerUser = function(){
                Register.post($scope.userData)
            }
        }
 
});