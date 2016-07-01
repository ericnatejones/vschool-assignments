    $scope.addCommute = function (title, notes) {

        var commute = {
            title: title,
            notes: notes,
            trips: [{}]
        };

     $scope.theService.postCommute(commute).then(function (response) {

            $scope.commutes.push(commute);
            $scope.commute = "";
        });
    };