var app = angular.module("techWishList", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/computer", {
            templateUrl: "computer.html",
            controller: "ComputerController"
        })
          .when("/other", {
            templateUrl: "other.html",
            controller: "OtherController"
        })
        .when("/", {
            templateUrl: "home.html",
            controller: "HomeController"
        });
});

app.directive