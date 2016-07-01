var app = angular.module("theApp");

app.controller("StatsController", ["$scope", "theService", function ($scope, theService) {

    function scrollify() {
        window.scroll(0, 0);
    }

    scrollify();

    $scope.pageClass = "page-stats";

    $scope.theService = theService;

    $scope.commute = $scope.theService.commutes[1];

    

}]);