var app = angular.module("hitList", []);

app.controller("mainController", ["$scope", "HttpService", function ($scope, HttpService) {

    HttpService.getRequest().then(function (response) {
        $scope.hitData = response.data;
    });
}]);

app.service("HttpService", ["$http", function ($http) {
    
    this.getRequest = function () {
        return $http.get("http://mean.codingcamp.us:6543/hitlist.json");
    }
}])