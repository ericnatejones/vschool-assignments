var app = angular.module("rockApp", []);

app.controller("mainController", ["$scope", "rockService", function ($scope, rockService) {

    $scope.rockService = rockService;

    $scope.addIssue = function (issue, index) {
        rockService.postEntry(issue);
    };

//    $scope.deleteIssue = function (issue) {
//        rockService.deleteEntry(issue).then(function (data) {
//            for (i = 0; i < $scope.rockService.issues.length; i++) {
//
//                if ($scope.rockService.issues[i]._id === issue._id) {
//                    $scope.rockService.issues.splice(i, 1);
//                }
//            }
//        });
//    };
    $scope.upVote = function (issue) {
        console.log(issue.popularity);
        issue.popularity++;
        rockService.putEntry(issue);
    };

    $scope.downVote = function (issue) {

        issue.popularity--;

        console.log(issue);

        rockService.putEntry(issue);
    };

    $scope.addComment = function (issue, comment) {

        issue.comments.push(comment);

        rockService.putEntry(issue);
    };
}]);