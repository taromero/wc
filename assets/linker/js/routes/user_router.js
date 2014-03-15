"use strict";

angular.module('wc')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('user_list', {
        url: "/user",
        templateUrl: "views/user/user_list.html",
        controller: "ListCtrl",
        resolve: {
          config: function(daoFactory) {
            return {
              collection: daoFactory.User.query()
            }
          }
        },
      })
      .state('user_create', {
        url: "/user/create",
        templateUrl: "views/user/user_create.html",
        controller: "CreateCtrl",
        resolve: {
          config: function(daoFactory) {
            return {
              Model: daoFactory.User,
              model_name: 'user'
            }
          }
        }
      })
      .state('user_edit', {
        url: "/user/edit/:id",
        templateUrl: "views/user/user_create.html",
        controller: "EditCtrl",
        resolve: {
          config: function(daoFactory, $stateParams) {
            return {
              model_instance: daoFactory.User.get({ id: $stateParams.id }),
              Model: daoFactory.User,
              model_name: 'user'
            }
          }
        }
      })
  })
