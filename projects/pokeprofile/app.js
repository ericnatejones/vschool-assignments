var app = angular.module("pokeProfile", []);

app.controller("mainController", ["$scope", "pokeService", function ($scope, pokeService) {
    $scope.status = false;

    $scope.findPokemon = function (number) {

        pokeService.getPokemon(number).then(function (data) {
            $scope.pokemon = data;
            $scope.status = true;

        });
    };
}]);