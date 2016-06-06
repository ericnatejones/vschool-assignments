var app = angular.module("theLeague");

app.controller("SkinController", ["$scope", "getService", "$routeParams", function ($scope, getService, $routeParams) {

    getService.database.then(function (response) {
        $scope.characters = response.data.data;

        $scope.charKey = $routeParams.charName;

        $scope.skinKey = $routeParams.skinKey;

        var skinArray = [];


        for (i = 0; i < $scope.characters[$scope.charKey].skins.length; i++) {
            skinArray.push($scope.characters[$scope.charKey].skins[i].num);
        };
        
          function getIndex(index) {
            return index == $scope.skinKey;
        }

        if ($scope.skinKey < 1) {
            $scope.previousSkinKey = skinArray.length - 1;
        } else {
            $scope.previousSkinKey = skinArray.findIndex(getIndex);
            $scope.previousSkinKey--;
        };

        if (skinArray.findIndex(getIndex) < skinArray.length - 1) {

            $scope.nextSkinKey = skinArray.findIndex(getIndex);
            $scope.nextSkinKey++;

        } else {

            $scope.nextSkinKey = 0;
        };

        $scope.nextArrayKey = skinArray[$scope.nextSkinKey];

        $scope.prevArrayKey = skinArray[$scope.previousSkinKey];

        $scope.scroll = function () {
            window.scroll(0, 0);
        }
        
      
        console.log(skinArray.length);
console.log(skinArray.findIndex(getIndex));
        console.log("Skin Array:" + skinArray);
        console.log("Skin Key: " + $scope.skinKey);
        console.log("Previous Skin Key: " + $scope.previousSkinKey);
        console.log("Next Skin Key: " + $scope.nextSkinKey);
        console.log("Prev Array Key: " + $scope.prevArrayKey);
        console.log("Next Array Key: " + $scope.nextArrayKey + "\n\n");

    });

}]);