'use strict';

angular.module('wc').directive('alertMsg', function () {
  return {
    restrict: 'E',
    controller: function($scope, $rootScope) {
      $rootScope.$watch("alert", function() {
        if($rootScope.alert) {
          $("html, body").animate({ scrollTop: 0 }, "slow");
        }
      });

      $scope.closeAlert = function() {
        $rootScope.alert = null;
      }
    },
    templateUrl: 'views/alert.html'
  }
});