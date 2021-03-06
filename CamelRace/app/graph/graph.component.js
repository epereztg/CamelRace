﻿"use strict";

// Register `graph` component, along with its associated controller and template
angular.
    module("app").
    component("graph", {
        templateUrl: 'app/graph/graph.template.html',
        
        controller: ['$http', function graphController($http) {
            var self = this;
            $http.get('app/tasks/tasks.json').then(function (response) {
                //self.tasks = response.data;
                self.data = response.data;

                self.width = 1200;
                self.height = 600;
                self.yAxis = "Ongoing Tasks";
                self.xAxis = "Race!";
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


