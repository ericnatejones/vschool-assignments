var app = angular.module("theApp");

app.controller("CommuteController", ["$scope", "theService", "$interval", "$routeParams", function ($scope, theService, $interval, $routeParams) {

    function scrollify() {
        window.scroll(0, 0);
    }

    scrollify();

    $scope.pageClass = "page-commute";

    $scope.theService = theService;

    var commuteKey = $routeParams.commuteId;

    $scope.commuteKey = commuteKey;
    $scope.theService.getCommute($scope.commuteKey).then(function (response) {

        $scope.commute = response.data;

        function median(tripArray) {

            var median = 0,
                numberLength = tripArray.length;

            function sortNumber(a, b) {
                return a - b;
            }

            tripArray.sort(sortNumber);

            if (numberLength % 2 === 0) {
                median = (tripArray[numberLength / 2] + tripArray[numberLength / 2]) / 2;
            } else {
                var medA = tripArray[(numberLength + 1) / 2];
                var medB = tripArray[(numberLength - 1) / 2];
                median = (medA + medB) / 2;
            }
            return median;
        }
        var times = [];

        $scope.totalTripTime = 0;
        $scope.longestTripTime = 0;
        $scope.shortestTripTime = 0;

        for (i = 0; i < $scope.commute.trips.length; i++) {

            $scope.totalTripTime += $scope.commute.trips[i].time;
            times.push($scope.commute.trips[i].time)

            if (i === 0) {

                $scope.longestTripTime = $scope.commute.trips[i].time;

                $scope.shortestTripTime = $scope.commute.trips[i].time;

            } else {

                if ($scope.commute.trips[i].time > $scope.longestTripTime) {
                    $scope.longestTripTime = $scope.commute.trips[i].time;
                }
                if ($scope.commute.trips[i].time < $scope.shortestTripTime) {
                    $scope.shortestTripTime = $scope.commute.trips[i].time;
                }
            }
        }

        $scope.medianTripTime = median(times);

        $scope.averageTripTime = Math.round($scope.totalTripTime / $scope.commute.trips.length);

    });

    $scope.commuteLength = 0;

    function runTimer() {
        $scope.commuteLength++;
    }
    var timer;

    $scope.startTimer = function () {

        timer = $interval(runTimer, 1000);
        return timer;
    };

    $scope.pauseTimer = function () {
        $interval.cancel(timer);
    };

    $scope.addTrip = function () {

        var pendingTrip = {

            date: new Date,
            time: $scope.commuteLength
        };

        $scope.theService.postTrip(commuteKey, pendingTrip).then(function (response) {

            $scope.commute.trips.push(pendingTrip);
            $scope.commuteLength = 0;
        });
    };
    
    
    //FIGURE THIS OUT

    $scope.deleteCommute = function () {

    };
    
    $scope.deleteTrip = function () {
        
    };
    
    
}]);