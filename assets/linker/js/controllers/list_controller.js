'use strict';

angular.module('wc').controller('ListCtrl', function ($rootScope, $scope, collection) {
  $scope.collection = collection

  $scope.destroy = function(item) {
    var _item = item
    item.$delete().then(function() {
      var index = $scope.users.indexOf(item)
      $scope.collection.splice(_item, 1)
      $rootScope.alert = { msg: 'user: ' + _item.id + ' deleted!', type: 'info' }
    })
  }
})