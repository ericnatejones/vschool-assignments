var app = angular.module("theLeague");

app.controller("HomeController", ["$scope", "getService", function ($scope, getService) {

    getService.database.then(function (response) {
        $scope.characters = response.data.data;
        
        $scope.scroll = function () {
            window.scroll(0, 0);
            
            console.log($scope.characters);
        }
    });
}]);