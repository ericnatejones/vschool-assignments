var app = angular.module("stringViewer", []);

app.controller("MainController", ["$scope", function ($scope) {
    $scope.list = ["Red", "Green", "Cars", "Dogs"];

}]);