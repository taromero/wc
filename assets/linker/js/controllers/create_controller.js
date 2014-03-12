'use strict';

angular.module('wc').controller('CreateCtrl', function ($rootScope, $scope, Model, model_name) {
  $scope.save = function() {
    var model_instance = $scope[model_name]
    if(model_instance  && model_instance.id) {
      Model.update(model_instance)
    } else {
      Model.save(model_instance)
    }
  }
})