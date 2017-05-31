"use strict";

// Register `barList` component, along with its associated controller and template
angular.
    module("app").
    component("barList", {
        bindings: {
            width: '=',
            height: '=',
            max: '='
        },
        templateUrl: 'app/bar-list/bar-list.template.html',
        controller: ['$http', function barListController($http) {
            var self = this;
            self.image = '../app/img/walkingCamel.gif';
            $http.get('app/tasks/tasks.json').then(function (response) {
                self.data = response.data;
            });  //htttpget   

            self.isActive = false;
            self.activeButton = function () {
                self.isActive = !self.isActive;
            }
        }] // Ctrl
    });


