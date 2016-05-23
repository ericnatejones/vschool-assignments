var app = angular.module("learningAngular", []);

app.controller("MainController", ["$scope", function ($scope) {
    
        $scope.people = [

        {
            name: "Jim",
            age: 70

        },
        {
            name: "Betty",
            age: 75

        },
        {
            name: "Nancy",
            age: 63

        }
        ];

}]);