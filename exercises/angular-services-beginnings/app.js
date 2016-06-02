var app = angular.module("favePokemon", []);

app.controller("MainController", ["$scope", "pokeService", function ($scope, pokeService) {

    $scope.pokeList = pokeService.favoritePokemon;

    $scope.addClick = function (pokemon) {
        pokeService.addPokemon(pokemon.name);
        $scope.pokemon = {};
        form.pokeInput.focus();
        
    }
    $scope.removeClick = function (pokemon) {
        pokeService.removePokemon(pokemon.name);
        $scope.pokemon = {};
        form.pokeInput.focus();
    }

}]);