var app = angular.module("bronyApp");

app.controller("ViewController", ["$scope", "PonyService", function ($scope, PonyService) {

    $scope.PonyService = PonyService;

    $scope.deletePony = function (pony, index) {

        PonyService.deleteEntry(pony, index).then(function (data) {

        });
    };
}]);