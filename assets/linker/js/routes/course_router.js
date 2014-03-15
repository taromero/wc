"use strict";

angular.module('wc')
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('course_list', {
        url: "/course",
        templateUrl: "views/course/course_list.html",
        controller: "ListCtrl",
        resolve: {
          config: function(daoFactory) {
            return {
              collection: daoFactory.Course.query()
            }
          }
        },
      })
      .state('course_create', {
        url: "/course/create",
        templateUrl: "views/course/course_create.html",
        controller: "CreateCtrl",
        resolve: {
          config: function(daoFactory) {
            return {
              Model: daoFactory.Course,
              model_name: 'course'
            }
          }
        }
      })
      .state('course_edit', {
        url: "/course/edit/:id",
        templateUrl: "views/course/course_create.html",
        controller: "EditCtrl",
        resolve: {
          config: function(daoFactory, $stateParams) {
            return {
              model_instance: daoFactory.Course.get({ id: $stateParams.id }),
              Model: daoFactory.Course,
              model_name: 'course'
            }
          }
        }
      })
  })
