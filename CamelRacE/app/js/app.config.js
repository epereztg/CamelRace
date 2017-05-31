'use strict';

angular.
  module('app').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/bars', {
            template: '<bar-list></bar-list>'
        }).
        when('/bars/:barId', {
            template: '<bar-detail></bar-detail>'
        }).
        otherwise('/bars');
    }
  ]);
