var app = angular.module("uglyThings", []);

app.controller("mainController", ["$scope", function ($scope) {

    $scope.uglyThings = [];

    $scope.addUgly = function (submission) {
        submission.comments = [];
        $scope.uglyThings.push(submission);
        $scope.submission = {};
    }

    $scope.addComment = function (comment, index) {
        $scope.uglyThings[index].comments.push(comment);

    }
    $scope.deleteComment = function (index, parentIndex) {
        $scope.uglyThings[parentIndex].comments.splice(index, 1);
    }

    $scope.deleteSub = function (index) {
        $scope.uglyThings.splice(index, 1);
    }
}])