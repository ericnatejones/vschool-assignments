var app = angular.module("bountyApp", []);

app.controller("MainController", ["$scope", "theService", function ($scope, theService) {

    $scope.edit = false;
    $scope.service = theService;
    $scope.bounties = [];
    var parentIndex;

    $scope.service.get().then(function (response) {

        $scope.bounties = response.data;
    });

    $scope.bountyPost = {};

    $scope.addBounty = function () {

        $scope.service.post($scope.bountyPost).then(function (response) {
            $scope.bounties.push(response.data);
            $scope.bountyPost = [];
        });
    };

    $scope.deleteBounty = function (index) {
        $scope.service.delete($scope.bounties[index]).then(function (response) {

            $scope.bounties.splice(index, 1);
        });
    };

    $scope.editBounty = function (bounty, index) {
        parentIndex = index;
        $scope.bountyPost = bounty;
        $scope.edit = true;
    };

    $scope.updateBounty = function (bounty) {

        $scope.service.put($scope.bounties[parentIndex], $scope.bountyPost).then(function (response) {

            $scope.bounties[parentIndex] = response.data;

        });
    };
}]);

app.service("theService", ["$http", function ($http) {

    this.get = function () {
        return $http.get("http://localhost:8000/bounty");
    };

    this.post = function (bountyPost) {
        return $http.post("http://localhost:8000/bounty", bountyPost);
    };

    this.delete = function (bountyPost) {

        return $http.delete("http://localhost:8000/bounty/" + bountyPost.id);
    };

    this.put = function (oldBounty, newBounty) {

        return $http.put("http://localhost:8000/bounty/" + oldBounty.id, newBounty);
    };

}]);