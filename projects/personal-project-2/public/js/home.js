var app = angular.module("theApp");

app.controller("HomeController", ["$scope", function ($scope) {

    function scrollify() {
        window.scroll(0, 0);
    };

    setTimeout(scrollify, 500);
    
    $scope.pageClass = "page-home";
    
}]);