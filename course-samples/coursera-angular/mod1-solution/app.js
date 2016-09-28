(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);
function LunchCheckController($scope, $filter,$injector){
    $scope.name = "";
    $scope.message = "";
    $scope.num = 0;
    $scope.displayMessage = function () {
        var myNum = calcualteNum($scope.name);
        $scope.num = myNum;
        if (myNum == 1){
            $scope.message = "Enter some items"
            $scope.num = 0;
        } else if (myNum > 1 && myNum <= 3){
            $scope.message = "Enjoy!"
        } else $scope.message = "Too Much!"

    };
    function calcualteNum(string){
        var counter = 1;
        for (var i = 0; i < string.length; i++) {
            if (string[i] === ","){counter += 1};
        }
        return counter;


    };

    // $scope.checkLunch = function($scope.name){
        //var insideMessage = updateMessage($scope.name);
        //var myString = $scope.name.split([,])
        //var numStrings = length(myString)
        //var insideMessage = "";
        // if numStrings <= 3{
        //     insideMessage = "Enjoy Your Lunch!"
        // } else {
        //     insideMessage = "Too Much!"
        // }
        //$scope.message = insideMessage;
    //};

};
})();
