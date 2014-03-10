'use strict';

angular.module('wc').controller('UserCtrl', function ($scope, $state, users) {
  $scope.users = users
})