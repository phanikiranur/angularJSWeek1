(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope, $filter) {

  $scope.lunchText = "";
  $scope.status = "";

  $scope.checkNow = function() {
    $scope.status = "";
    var items = $scope.lunchText.split(',');
    if($scope.lunchText.length == 0)
      $scope.status = "Please enter data first";
    else if(items.length <= 3)
      $scope.status = "Enjoy!";
    else if(items.length > 3 )
      $scope.status = "Too much!";
  }

}

})();
