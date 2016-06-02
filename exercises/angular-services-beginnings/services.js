var app = angular.module("favePokemon");

app.service("pokeService", function () {

    this.favoritePokemon = [];

    this.addPokemon = function (pokemon) {
        pokemon = pokemon.toLowerCase();

        if (this.favoritePokemon.indexOf(pokemon) === -1) {

            this.favoritePokemon.push(pokemon);
        } else {
            window.alert("Pokemon already on list");
        }
    }

    this.removePokemon = function (pokemon) {
        pokemon = pokemon.toLowerCase();
        var index = this.favoritePokemon.indexOf(pokemon);
        if (index > -1) {
            this.favoritePokemon.splice(index, 1);
        } else {
            window.alert("Pokemon not on list.");
        }
    }

});