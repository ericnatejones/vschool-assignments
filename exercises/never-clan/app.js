var app = angular.module("neverClan", []);

app.controller("mainController", ["$scope", function ($scope) {

    $scope.player = {

        kills: [
            {
                handle: "TheDeanOfAwesome",
                rank: 9000,
                clan: ["NoobEater", "IHaveNoLife", "Suxors"]
        },
            {
                handle: "TheLordOfAwesome",
                rank: 9001,
                clan: ["Death in a Can", "Acne", "Mom's Basement"]
        },
            {
                handle: "TheSultanOfAwesome",
                rank: 9002,
                clan: ["twerp", "Piki-Flu", "pwnzer"]
        }
    ]
    };
    
    $scope.killCount = $scope.player.kills.length;


}]);