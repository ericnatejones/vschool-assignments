var app = angular.module("theApp");

app.controller("NovelsController", ["$scope", "theService", function ($scope, theService) {

    function scrollify() {
        window.scroll(0, 0);
    };

    setTimeout(scrollify, 500);
    
    $scope.pageClass = "page-novels";

    $scope.theService = theService;

    $scope.novels = [];
    $scope.theService.getNovels.then(function (response) {

        $scope.novels = response.data;

    });
}]);