'use strict';

angular.module('wc').controller('CreateCtrl', function ($rootScope, $scope, config) {
  $scope.save = function() {
    var model_instance = $scope[config.model_name]
    var promise
    if(model_instance  && model_instance.id) {
      promise = config.Model.update(model_instance).$promise
    } else {
      promise = config.Model.save(model_instance).$promise
    }
    promise.then(function(saved_instance) {
      $rootScope.alert = { msg: config.model_name + ' ' + saved_instance.id + ' saved' }
    })
  }
})