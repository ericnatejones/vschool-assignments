var app = angular.module("theApp");

app.controller("CommutesController", ["$scope", "theService", function ($scope, theService) {

    function scrollify() {
        window.scroll(0, 0);
    }
    scrollify();

    $scope.pageClass = "page-commutes";

    $scope.theService = theService;

    $scope.theService.getCommutes.then(function (response) {
        $scope.commutes = response.data;
    });

    $scope.addCommute = function (title, notes) {

        var commute = {
            title: title,
            notes: notes,
            trips: []
        };
        $scope.theService.postCommute(commute).then(function (response) {

            $scope.commutes.push(response.data);
            $scope.commute = "";
        });
    };
}]);