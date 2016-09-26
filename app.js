(function functionName() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkMenu = function(){
      var menuEaten = $scope.lunchMenu || '';
      var message = '';
      var fontColor = 'green';
      var borderIndicator = 'green-border';

      var lunchItems = menuEaten.split(',')
      .filter(function(item){
        return item.trim() != "";
      });

      if(lunchItems.length == 0){
        message = 'Please enter data first';
        fontColor = 'red';
        borderIndicator = 'red-border';
      }
      else if(lunchItems.length > 3){
        message = 'Too much!';
      }else{
        message = 'Enjoy!';
      }

      $scope.message = message;
      $scope.colorClass = fontColor;
      $scope.borderIndicator = borderIndicator;
    }
  }
})();
