var app = angular.module("rockApp");

app.service("rockService", ["$http", function ($http) {

    var self = this;
    this.issues = [];

    $http.get("http://localhost:4000/issues").then(function (response) {
        self.issues = response.data;
    });

    this.deleteEntry = function (issue) {

        return $http.delete("http://localhost:4000/issues/" + issue._id).then(function (response) {
        });
    };

    this.postEntry = function (issue) {
        return $http.post("http://localhost:4000/issues/", issue).then(function (response) {

            self.issues.push(response.data);
            self.issue = {};
        });
    };

    this.putEntry = function (issue) {
        return $http.put("http://localhost:4000/issues/" + issue._id, issue).then(function (response) {

        });
    };
}]);