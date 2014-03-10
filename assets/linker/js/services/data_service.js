'use strict';

angular.module('wc').service('dataService', function($rootScope, $resource) {
  return {
    findAllUsers: function() {
      var User = $resource('/user/:id', { id:'@id' })
      return User.query().$promise.then(function(users) {
        return users
      })
    }
  }
})