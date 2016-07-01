var app = angular.module("directiveApp", []);

app.controller("MainController", ["$scope", function ($scope) {
    $scope.contact = {
        firstName: "John",
        lastName: "Doe",
        imageUrl: "blarg.jpg",
        email: "jd@jd.net",
        phone: "555-555-5555",
        notes: "He's a good guy."
    };
    
    $scope.players = [
        {
            rank: 1,
            name: "Steve"
        },
        {
            rank: 100,
            name: "Bob"
        },
        {
            rank: 7,
            name: "Jack"
        }
    ];
    
    

}]);

app.filter("ordinal", function() {
   
    return function (number) {
        if (number == 1) {
            return number + "st";
        } else if (number == 2) {
            return number + "nd";
        } else {
            
            return number;
        }
    };
    
});

app.directive("contactCard", function () {
    return {
        templateUrl: "contact-card.html",
        scope: {
            contact: "="
        },
        restrict: "E",
        replace: true
        
    };
});

//web components (re-usable); 
//they are completely self-contained pieces of HTML
//bundle JS and HTML together so that you can move your web component around.
//Name HTML whatever you want. <my-info></my-info>. This tag could represent as many lines of HTML as you want.