'use strict';

angular.module('wc').controller('EditCtrl', function ($rootScope, $scope, $controller, config) {
  $scope[config.model_name] = config.model_instance
  $controller('CreateCtrl', {
    $rootScope: $rootScope,
    $scope: $scope,
    config: config
  })
})