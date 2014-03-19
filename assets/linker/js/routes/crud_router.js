'use strict'

var modelNames = ['User', 'Course', 'Subject']

var firstToLowerCase = function(string) {
  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

var to_ = function(string){
  return string.replace(/([A-Z])/g, function($1) { return "_"+$1.toLowerCase() })
}

angular.module('wc')
  .config(function($stateProvider, $urlRouterProvider) {

    modelNames.forEach(function(modelName) {

      var model_name = to_(firstToLowerCase(modelName))
      var url_aux = 'views/' + model_name + '/' + model_name

      $stateProvider
        .state(model_name + '_list', {
          url: '/' + model_name,
          templateUrl: url_aux + '_list.html',
          controller: 'ListCtrl',
          resolve: {
            config: function(daoFactory) {
              return {
                collection: daoFactory[modelName].query()
              }
            }
          },
        })
        .state(model_name + '_create', {
          url: '/' + model_name + '/create',
          templateUrl: url_aux + '_create.html',
          controller: 'CreateCtrl',
          resolve: {
            config: function(daoFactory) {
              return {
                Model: daoFactory[modelName],
                model_name: model_name
              }
            }
          }
        })
        .state(model_name + '_edit', {
          url: '/' + model_name + '/edit/:id',
          templateUrl: url_aux + '_create.html',
          controller: 'EditCtrl',
          resolve: {
            config: function(daoFactory, $stateParams) {
              return {
                model_instance: daoFactory[modelName].get({ id: $stateParams.id }),
                Model: daoFactory[modelName],
                model_name: model_name
              }
            }
          }
        })
    })

  })