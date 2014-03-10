'use strict';

angular.module('wc').controller('UserCtrl', function ($rootScope, $scope, $state, users) {
  $scope.users = users

  $scope.destroy = function(user) {
    var _user = user
    user.$delete().then(function() {
      var index = $scope.users.indexOf(_user)
      $scope.users.splice(index, 1)
      $rootScope.alert = { msg: 'user: ' + _user.email + ' deleted!', type: 'info' }
    })
  }
})