var app = angular.module("theLeague");

app.controller("CharacterController", ["$scope", "getService", "$routeParams", function ($scope, getService, $routeParams) {

    getService.database.then(function (response) {
        $scope.characters = response.data.data;


        var charKey = $routeParams.charName;
        $scope.character = $scope.characters[charKey];

        $scope.character.lore = $scope.character.lore.replace(/\<.*?>/g, "\n");

        for (i = 0; i < $scope.character.allytips.length; i++) {
            $scope.character.allytips[i] = $scope.character.allytips[i].replace(/\<.*?>/g, "\n");
        }
        for (i = 0; i < $scope.character.spells.length; i++) {
            $scope.character.spells[i].name = $scope.character.spells[i].name.replace(/\<.*?>/g, "\n");
        }
        for (i = 0; i < $scope.character.spells.length; i++) {
            $scope.character.spells[i].description = $scope.character.spells[i].description.replace(/\<.*?>/g, "\n");
        }
        for (i = 0; i < $scope.character.passive.length; i++) {
            $scope.character.passive[i].name = $scope.character.passive[i].name.replace(/\<.*?>/g, "\n");
        }
        for (i = 0; i < $scope.character.passive.length; i++) {
            $scope.character.passive[i].description = $scope.character.passive[i].description.replace(/\<.*?>/g, "\n");
        }

        $scope.spellName = "Click Spells to Read More."

        $scope.show = function (index) {
            $scope.spellVisible = true;
            $scope.spellName = $scope.character.spells[index].name;
            $scope.spellDescription = $scope.character.spells[index].description;
        }
        var newArray = [];

        function createArray(characters) {
            var i = 0,
                character;
            for (character in characters) {
                newArray.push(character);
                i++;
            }
        }
        createArray($scope.characters);

        var thisChar = newArray.indexOf(charKey),
            nextChar = thisChar,
            prevChar = thisChar;

        if (thisChar < newArray.length - 1) {
            nextChar++;
        } else {
            nextChar = 0;
        };
        if (thisChar == 0) {
            prevChar = newArray.length - 1;
        } else {
            prevChar = prevChar - 1;
        };

        $scope.nextPage = newArray[nextChar];
        $scope.prevPage = newArray[prevChar];

        $scope.scroll = function () {
            window.scroll(0, 0);
        }

    });
}]);