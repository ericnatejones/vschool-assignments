var app = angular.module("theLeague");

app.controller("CharacterController", ["$scope", "getService", "$routeParams", function ($scope, getService, $routeParams) {

    getService.database.then(function (response) {
        $scope.characters = response.data.data;

        var charKey = $routeParams.charName;
        $scope.character = $scope.characters[charKey];
        
        $scope.character.lore = $scope.character.lore.replace(/\<br\\?>/g, "\n");

        console.log($scope.character.lore);
        
    });
}]);