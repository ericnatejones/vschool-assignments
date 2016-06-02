var app = angular.module("favoriteState", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/about", {
            templateUrl: "about/about.html",
            controller: "AboutController"
        })
        .when("/whyilove", {
            templateUrl: "whyilove/whyilove.html",
            controller: "WhyILoveController"
        })
        .otherwise({
            templateUrl: "home/home.html",
            controller: "HomeController"
        })
});