var app = angular.module("theApp");

app.service("theService", ["$http", function ($http) {

    this.getNovels =
        $http.get("http://localhost:4000/novels");

    this.getArticles =
        $http.get("http://localhost:4000/articles");

    this.getNovel = function (key) {
        return $http.get("http://localhost:4000/novels/" + key);
    };

    this.getArticle = function (key) {
        return $http.get("http://localhost:4000/articles/" + key);
    };

    this.getComments = function (key) {
        return $http.get("http://localhost:4000/articles/" + key + "/comments");
    };

    this.postComment = function (key, pendingComment) {
        return $http.post("http://localhost:4000/articles/" + key + "/comments", pendingComment);
    };

    this.putLikes = function (key, comment, article) {
        return $http.put("http://localhost:4000/articles/" + key + "/comments/" + comment._id, article);
    };

    //    this.deleteEntry = function (comment) {
    //
    //        return $http.delete("http://localhost:4000/articles/comments/" + comment._id).then(function (response) {});
    //    };


    //    this.putEntry = function (comment) {
    //        return $http.put("http://localhost:4000/articles/comments/" + comment._id, comment).then(function (response) {
    //
    //        });
    //    };


}]);