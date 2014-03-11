'use strict';

angular.module('wc').controller('UserEditCtrl', function ($rootScope, $scope, daoFactory, $controller, user) {
  $scope.user = user
  $controller('UserCreateCtrl', {
    $rootScope: $rootScope,
    $scope: $scope,
    daoFactory: daoFactory
  })
})