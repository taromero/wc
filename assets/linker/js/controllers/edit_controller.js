'use strict';

angular.module('wc').controller('EditCtrl', function ($rootScope, $scope, Model, model_name, $controller, model_instance) {
  $scope[model_name] = model_instance
  $controller('CreateCtrl', {
    $rootScope: $rootScope,
    $scope: $scope,
    Model: Model,
    model_name: model_name
  })
})