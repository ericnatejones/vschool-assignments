var app = angular.module("toDo", []);

app.controller("mainController", ["$scope", "EntryService", function ($scope, EntryService) {

    EntryService.getEntry().then(function (response) {
        $scope.toDoList = response.data;
    })

    $scope.edit = false;
    var tempIndex;

    $scope.addToDo = function (toDo) {

        EntryService.postEntry(toDo).then(function (response) {
            $scope.toDoList.push(response.data);
        })
        $scope.toDo = {};
    }

    $scope.makeEdit = function (item) {
        $scope.toDo = item;
        $scope.edit = true;


    }
    $scope.deleteToDo = function (toDo, index) {

        var confirmed = confirm("Are you sure you want to delete this?");

        if (confirmed) {
            EntryService.deleteEntry(toDo).then(function (response) {
                $scope.toDoList.splice(index, 1);
            });
        }
    }

    $scope.update = function (toDo, index) {

        EntryService.putEntry(toDo).then(function (response) {
            $scope.toDoList[index] = response.data;
        })

        $scope.toDo = {};
        $scope.edit = false;
    }

    $scope.complete = function (toDo, index) {

        toDo.completed = !toDo.completed;

        EntryService.putEntry(toDo).then(function (response) {
            $scope.toDoList[index] = response.data;
        })
    }
}]);

app.service("EntryService", ["$http", function ($http) {

    this.deleteEntry = function (toDo) {
        return $http.delete("http://mean.codingcamp.us/jackmcb/todo/" + toDo._id)
    }
    
    this.getEntry = function () {
        return $http.get("http://mean.codingcamp.us/jackmcb/todo/")
    }
    
       this.putEntry = function (toDo) {
        return $http.put("http://mean.codingcamp.us/jackmcb/todo/" + toDo._id, toDo)
    }
       
          this.postEntry = function (toDo) {
        return $http.post("http://mean.codingcamp.us/jackmcb/todo/", toDo)
    }

}]);
