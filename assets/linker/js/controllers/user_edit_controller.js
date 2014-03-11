'use strict';

angular.module('wc').controller('UserEditCtrl', function ($rootScope, $scope, $resource, $controller, user) {
  $scope.user = user
  $controller('UserCreateCtrl', {
    $rootScope: $rootScope,
    $scope: $scope,
    $resource: $resource
  })
})