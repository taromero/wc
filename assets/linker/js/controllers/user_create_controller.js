'use strict';

angular.module('wc').controller('UserCreateCtrl', function ($rootScope, $scope, $resource) {
  $scope.save = function() {
    if($scope.user && $scope.user.id) {
      $resource('user/:id', { id: '@id' }, { update: { method: 'PUT' } }).update($scope.user)
    } else {
      $resource('user/:id', { id: '@id' }).save($scope.user)
    }
  }
})