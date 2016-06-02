var app = angular.module("openingCredits", []);

app.controller("mainController", ["$scope", "$http", function ($scope, $http) {

    $http.get("http://swapi.co/api/films/1/").then(function (response) {
        $scope.credits = response.data;
    });


}]);

  audio = new Audio('https://archive.org/download/StarWarsThemeSongByJohnWilliams/Star%20Wars%20Theme%20Song%20By%20John%20Williams.mp3');

    setTimeout(function() {audio.play();}, 2000);