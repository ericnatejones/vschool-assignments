var app = angular.module("bronyApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/ponyList", {
            templateUrl: "view.html",
            controller: "ViewController"
        })
        .when("/", {
            templateUrl: "add.html",
            controller: "AddController"
        });
});