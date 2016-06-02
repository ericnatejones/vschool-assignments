var app = angular.module("theLeague", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/character/:charName", {
            templateUrl: "character.html",
            controller: "CharacterController"
        })
        .when("/", {
            templateUrl: "home.html",
            controller: "HomeController"
        });
});