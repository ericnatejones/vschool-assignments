var app = angular.module("mightyClicker", []);

app.controller("MainController", ["$scope", "redService", "blueService", function ($scope, redService, blueService) {

    $scope.redClickCount = redService.clickCount;
    $scope.blueClickCount = blueService.clickCount;


    $scope.redClick = function () {

        redService.upTick();
        blueService.downTick();
        $scope.redClickCount = redService.clickCount;
        $scope.blueClickCount = blueService.clickCount;
        audio = new Audio('shotgun.mp3');

    audio.play();
    }

    $scope.blueClick = function () {

        blueService.upTick();
        redService.downTick();
        $scope.redClickCount = redService.clickCount;
        $scope.blueClickCount = blueService.clickCount;
        audio = new Audio('Mario-coin-sound.mp3');

    audio.play();
    }





}]);