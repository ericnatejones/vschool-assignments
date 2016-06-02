var app = angular.module("setupApp", []);

app.controller("controllerOne", ["$scope", function ($scope) {
    $scope.input = {};

    $scope.addFunction = function (valueOne, valueTwo) {
        $scope.input.total = valueOne + valueTwo;
    }
}]);

app.controller("controllerTwo", ["$scope", function ($scope) {
    $scope.input = {};

    $scope.multiplyFunction = function (valueOne, valueTwo) {
        $scope.input.total = valueOne * valueTwo;
    }
}]);