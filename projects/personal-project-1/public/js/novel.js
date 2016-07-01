var app = angular.module("theApp");

app.controller("NovelController", ["$scope", "$routeParams", "theService", function ($scope, $routeParams, theService) {

    function scrollify() {
        window.scroll(0, 0);
    };

    setTimeout(scrollify, 500);
    
    $scope.pageClass = "page-novel";

    $scope.novel = {};

    var novelKey = $routeParams.novelId;

    $scope.theService = theService;
    $scope.theService.getNovel(novelKey).then(function (response) {
        $scope.novel = response.data;
    });

}]);