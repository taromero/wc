'use strict';

angular.module('wc').service('daoFactory', function($resource) {
  return {
    User: $resource('user/:id', { id: '@id' }, { update: { method: 'PUT' } })
  }
})