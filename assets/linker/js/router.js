"use strict";

angular.module('wc')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('user_list', {
        url: "/user",
        templateUrl: "views/user_list.html",
        controller: "UserListCtrl",
        resolve: {
          users: function($resource) {
            return $resource('/user/:id', { id: '@id' }).query()
          }
        },
      })
      .state('user_create', {
        url: "/user/create",
        templateUrl: "views/user_create.html",
        controller: "UserCreateCtrl"
      })
      .state('user_edit', {
        url: "/user/edit/:id",
        templateUrl: "views/user_create.html",
        controller: "UserEditCtrl",
        resolve: {
          user: function($resource, $stateParams) {
            return $resource('/user/:id', { id: '@id' }).get({ id: $stateParams.id })
          }
        }
      })
  })
