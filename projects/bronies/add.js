var app = angular.module("bronyApp");

app.controller("AddController", ["$scope", "PonyService", function ($scope, PonyService) {

    $scope.addPony = function (pony, valid) {
       
        if (valid) {
            
            PonyService.postEntry(pony);

            $scope.pony = {};
        }

    };
}]);