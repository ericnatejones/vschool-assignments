var app = angular.module("theApp");

app.service("theService", ["$http", function ($http) {
    this.commutes = [
        {
            title: "Home",
            trips: [
                {
                    date: "6-28-16",
                    time: 5005
                }
            ]
        },
        {
            title: "Work",
            trips: [
                {
                    date: "6-27-16",
                    time: 31536000
                },
                {
                    date: "6-25-16",
                    time: 2628000
                },
                {
                    date: "6-23-16",
                    time: 604800
                },
                {
                    date: "6-22-16",
                    time: 86400
                },
                {
                    date: "6-22-16",
                    time: 3600
                },
                {
                    date: "6-22-16",
                    time: 60
                },
                {
                    date: "6-22-16",
                    time: 9
                }
            ]
        }
    ];

    this.getCommutes =
        $http.get("http://localhost:4000/commutes");

    this.getCommute = function (commuteKey) {
        return $http.get("http://localhost:4000/commutes/" + commuteKey);
    };

    this.postCommute = function (commute) {
        return $http.post("http://localhost:4000/commutes/", commute);
    };
    
    this.postTrip = function (key, pendingTrip) {
        return $http.post("http://localhost:4000/commutes/" + key + "/trips", pendingTrip);
    };
    
    this.putCommute = function (key, commute) {
        return $http.put("http://localhost:4000/commutes/" + comment._id, commute);
    };
    
    
    // FIGURE THIS OUT
    
    
    this.deleteCommute = function (commute) {
        return $http.delete("http://localhost:4000/commutes" + commute._id).then(function (response) {
            
            
            
        });
    };
     this.deleteTrip = function (trip) {
        return $http.delete("http://localhost:4000/commutes/" + key +"/trips/" + trip._id).then(function (response) {
            
            
            
        });
    };
    
    
}]);