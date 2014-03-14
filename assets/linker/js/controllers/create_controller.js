'use strict';

angular.module('wc').controller('CreateCtrl', function ($rootScope, $scope, config) {
  $scope.save = function() {
    var model_instance = $scope[config.model_name]
    if(model_instance  && model_instance.id) {
      config.Model.update(model_instance)
    } else {
      config.Model.save(model_instance)
    }
  }
})