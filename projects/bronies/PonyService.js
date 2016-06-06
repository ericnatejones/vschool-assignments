var app = angular.module("bronyApp");

app.service("PonyService", ["$http", function ($http) {
    
    var self = this;
    this.ponyList = [];
    $http.get("http://mean.codingcamp.us/jackmcb/pony").then(function (response) {
        self.ponyList = response.data;
    });

    this.deleteEntry = function (pony, index) {

        return $http.delete("http://mean.codingcamp.us/jackmcb/pony/" + pony._id).then(function (response) {
            self.ponyList.splice(index, 1);
            return response.data;
        })
    };

    this.postEntry = function (pony) {
        return $http.post("http://mean.codingcamp.us/jackmcb/pony/", pony).then(function (response) {
            self.ponyList.push(response.data);
        })
    };
}]);