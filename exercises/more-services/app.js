var app = angular.module("cartoonApp", []);

app.controller("MainController", ["$scope", "CartoonService", function ($scope, CartoonService) {

    $scope.cartoons = CartoonService.cartoons;
    $scope.addCartoon = function (cartoon) {
        CartoonService.addCartoon(cartoon);
        $scope.cartoon = {};
    }

    $scope.deleteCartoon = function (index) {
        CartoonService.deleteCartoon(index);
    }
}]);