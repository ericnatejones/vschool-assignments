var app = angular.module("theLeague", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/character/:charName/:skinKey", {
            templateUrl: "skin.html",
            controller: "SkinController"
        })
        .when("/character/:charName", {
            templateUrl: "character.html",
            controller: "CharacterController"
        })
        .when("/", {
            templateUrl: "home.html",
            controller: "HomeController"
        });
});

app.controller("indexController", ["$scope", function($scope) {
    
      $scope.scroll = function() {
            window.scroll(0,0);
        }
}])