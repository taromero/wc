"use strict";

angular.module('wc')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('index', {
        url: "/",
        templateUrl: "views/main.html",
        controller: "MainCtrl"
      })
  })
