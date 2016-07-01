var app = angular.module("theApp", ["ngRoute", "ngAnimate"]);

app.controller("indexController", ["$scope", function ($scope) {

    $scope.scroll = function () {
        window.scroll(0, 0);
    };

    $scope.commentScroll = function () {
        window.scroll(99999, 99999);
    };

}]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/commutes/:id/stats", {
            templateUrl: "stats.html",
            controller: "StatsController"
        })
        .when("/commutes/:commuteId", {
            templateUrl: "commute.html",
            controller: "CommuteController"
        })
        .when("/commutes", {
            templateUrl: "commutes.html",
            controller: "CommutesController"
        })
        .when("/login", {
            templateUrl: "login.html",
            controller: "LoginController"
        })
        .when("/signup", {
            templateUrl: "signup.html",
            controller: "SignupController"
        })
        .when("/", {
            templateUrl: "home.html",
            controller: "HomeController"
        });
});

app.filter('timeFilter', function () {

    // Create the return function
    // set the required parameter name to **number**
    return function (totalTime) {

        if (totalTime < 60) {
            return totalTime + " seconds.";
        }

        var totalSec = totalTime;
        var years = parseInt(totalSec / 31536000);
        var months = parseInt(totalSec / 2628000 % 12);
        var weeks = parseInt(totalSec / 604800) % 4;
        var days = parseInt(totalSec / 86400) % 7;
        var hours = parseInt(totalSec / 3600) % 24;
        var minutes = parseInt(totalSec / 60) % 60;
        var seconds = totalSec % 60;

        var result = (years > 0 ? years + (years > 1 ? " years " : " year ") : "") + (months > 0 ? months + (months > 1 ? " months " : " month ") : "") + (weeks > 0 ? weeks + (weeks > 1 ? " weeks " : " week ") : "") + (days > 0 ? days + (days > 1 ? " days " : " day ") : "") + (hours > 0 ? hours + (hours > 1 ? " hours " : " hour ") : "") + (minutes > 0 ? minutes + (minutes > 1 ? " minutes " : " minute ") : "") + (seconds > 0 ? seconds + (seconds > 1 ? " seconds." : " second.") : "");

        //        var result = (hours < 10 ? "0" + hours : hours) + "-" + (minutes < 10 ? "0" + minutes : minutes) + "-" + (seconds < 10 ? "0" + seconds : seconds);

        return result;

    }
});