var app = angular.module("badger", []);

app.controller("mainController", ["$scope", function ($scope) {

    $scope.people = [];
    $scope.colors = ["red", "blue", "green", "gold", "purple", "orange"];
    $scope.submitForm = function (person, isValid) {

        if (isValid) {
            $scope.people.push(person);
            $scope.person = {};
            document.userForm.reset();
            $scope.userForm.$setPristine();
            $scope.toggle = !$scope.toggle;
        }
    };

}]);