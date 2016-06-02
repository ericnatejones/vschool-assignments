var app = angular.module("theLeague");

app.controller("HomeController", ["$scope", "getService", function ($scope, getService) {

    getService.database.then(function (response) {
        $scope.characters = response.data.data;
    });
}]);