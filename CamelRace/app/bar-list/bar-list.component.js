"use strict";

// Register `barList` component, along with its associated controller and template
angular.
    module("app").
    component("barList", {                 
        templateUrl: 'app/bar-list/bar-list.template.html',       
        controller: ['$http', function barListController($http) {
                var self = this;
                 $http.get('app/tasks/tasks.json').then(function(response) {               
                    self.data = response.data;

                    self.width = 600;
                    self.height = 600;
                    self.max = 0;

                    var arrLength = self.data.length;
                    for (var i = 0; i < arrLength; i++) {
                        // Find Maximum X Axis Value
                        if (self.data[i].total > self.max)
                            self.max = self.data[i].total;
                    }

                 });                                     
       
        }]
    });


