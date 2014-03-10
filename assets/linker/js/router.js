"use strict";

angular.module('wc')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/user");

    $stateProvider
      .state('index', {
        url: "/user",
        templateUrl: "views/user.html",
        controller: "UserCtrl",
        resolve: {
          users: function($resource) {
            return $resource('/user/:id', { id: '@id' }).query()
          }
        },
      })
  })
