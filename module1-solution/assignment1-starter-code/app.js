(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.inputString = "";
    $scope.resultString = "";

    $scope.returnResult = function () {
      var strArray = $scope.inputString.split(",");
      var strLength = strArray.length;
      if(strLength==0 || $scope.inputString==""){
          $scope.resultString = "Please enter data first";
      }else if(strLength > 0 && strLength <= 3){
          $scope.resultString = "Enjoy!";
      }else if(strLength > 3){
          $scope.resultString = "Too much!";
      }
      //$scope.resultString = strArray;
    };
  }
})();
