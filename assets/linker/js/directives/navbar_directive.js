'use strict';

angular.module('wc').directive('navbar', function ($state, $rootScope) {
  return {
    restrict: 'E',
    transclude: false,
    templateUrl: 'views/navbar.html'
  }
});