var app = angular.module("yodaSpeak", []);

app.controller("mainController", ["$scope", "HttpService", function ($scope, HttpService) {

    $scope.submitForm = function (text) {

        console.log("Request sent.");

        var myRequest = HttpService.getRequest(text);

        myRequest.then(function (response) {
            $scope.toTranslate = response.data;
        });
    }
}]);

app.service("HttpService", ["$http", function ($http) {

    var config = {
        headers: {
            'X-Mashape-Key': 'ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm'
        }
    };
    
    "X-Mashape-Key", "Cov5YSQxvXmshyNwH364igy2Bazrp19YSIFjsnnI6nNXnTXCAS"

    this.getRequest = function (text) {
        return $http.get("https://yoda.p.mashape.com/yoda?sentence=" + text, config);
    }
}]);