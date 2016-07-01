var app = angular.module("theApp");

app.controller("BlogController", ["$scope", "theService", function ($scope, theService) {
    
   function scrollify() {
        window.scroll(0, 0);
    };

    setTimeout(scrollify, 500);

    $scope.pageClass = "page-blog";

    $scope.articles = [];

    $scope.theService = theService;
    $scope.theService.getArticles.then(function (response) {

        $scope.articles = response.data;

    });
}]);