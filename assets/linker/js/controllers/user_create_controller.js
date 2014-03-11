'use strict';

angular.module('wc').controller('UserCreateCtrl', function ($rootScope, $scope, daoFactory) {
  $scope.save = function() {
    if($scope.user && $scope.user.id) {
      daoFactory.User.update($scope.user)
    } else {
      daoFactory.User.save($scope.user)
    }
  }
})