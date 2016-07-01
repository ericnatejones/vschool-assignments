var app = angular.module("theApp", ["ngRoute", "ngAnimate"]);

app.controller("indexController", ["$scope", function ($scope) {

    $scope.scroll = function () {
        window.scroll(0, 0);
    }
    
    $scope.commentScroll = function () {
        window.scroll(99999,99999);
    }
    
}]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/novels/:novelId", {
            templateUrl: "novel.html",
            controller: "NovelController"
        })
        .when("/blog/:articleId", {
            templateUrl: "article.html",
            controller: "ArticleController"
        })
        .when("/novels", {
            templateUrl: "novels.html",
            controller: "NovelsController"
        })
        .when("/about", {
            templateUrl: "about.html",
            controller: "AboutController"
        })
        .when("/blog", {
            templateUrl: "blog.html",
            controller: "BlogController"
        })
        .when("/", {
            templateUrl: "welcome.html",
            controller: "HomeController"
        });
});