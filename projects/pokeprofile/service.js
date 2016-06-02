var app = angular.module("pokeProfile");

app.service("pokeService", ["$http", function ($http) {

    var baseUrl = "http://pokeapi.co";

    this.getPokemon = function (number) {

        var pokemon = {};

        return $http.get(baseUrl + "/api/v1/pokemon/" + number + "/").then(function (response) {

            pokemon.name = response.data.name;
            pokemon.attack = response.data.attack;
            pokemon.ability = response.data.abilities[0].name;

            return $http.get(baseUrl + response.data.sprites[0].resource_uri);
        }).then(function (response) {
            pokemon.sprite = response.data.image;
            return pokemon;
        });
    };
}]);