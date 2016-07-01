var app = angular.module("theApp");

app.controller("ArticleController", ["$scope", "theService", "$routeParams", function ($scope, theService, $routeParams) {

    function scrollify() {
        window.scroll(0, 0);
    };

    setTimeout(scrollify, 500);

    $scope.pageClass = "page-article";

    $scope.article = {};
    $scope.pendingComment = "";

    var articleKey = $routeParams.articleId;
    $scope.articleKey = articleKey;
    $scope.theService = theService;
    $scope.theService.getArticle(articleKey).then(function (response) {
        $scope.article = response.data;
    });
    $scope.theService.getComments(articleKey).then(function (response) {
        $scope.comments = response.data;
    });

    $scope.addComment = function (pendingComment) {

        pendingComment = {
            user: "RandomUser",
            body: pendingComment,
            date: new Date,
            length: this.length,
            likes: 0
        };

        $scope.theService.postComment(articleKey, pendingComment).then(function (response) {

            $scope.article.comments.push(pendingComment);
            $scope.pendingComment = "";
        });
    };

    $scope.upVote = function (index) {

        var article = $scope.article;

        var comment = $scope.article.comments[index];

        article.comments[index].likes++;

        $scope.theService.putLikes(articleKey, comment, article).then(function (response) {

        });
    };

    $scope.downVote = function (index) {

        var article = $scope.article;

        var comment = $scope.article.comments[index];

        article.comments[index].likes--;

        $scope.theService.putLikes(articleKey, comment, article).then(function (response) {

        });
    };
}]);