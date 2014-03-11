'use strict';

angular.module('wc').controller('UserCreateCtrl', function ($rootScope, $scope, $resource) {
  $scope.save = function() {
    $resource('user/:id', { id: '@id' }).save($scope.user)
  }
})