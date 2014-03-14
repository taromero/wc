'use strict';

angular.module('wc').controller('ListCtrl', function ($rootScope, $scope, config) {
  $scope.collection = config.collection

  $scope.destroy = function(item) {
    item.$delete().then(function() {
      var index = $scope.collection.indexOf(item)
      $scope.collection.splice(index, 1)
      $rootScope.alert = { msg: 'user: ' + item.id + ' deleted!', type: 'info' }
    })
  }
})