﻿"use strict";

// Register `barList` component, along with its associated controller and template
angular.
    module("app").
    component("graph", {
        templateUrl: 'app/graph/graph.template.html',
        //controller: function barListController() {

        //    this.width = 600;
        //    this.height = 600;
        //    this.yAxis = "Ongoing Tasks";
        //    this.xAxis = "Race!";
        //    //Math.round(x)

        //    this.data = [
        //        {
        //            label: "Task",
        //            total: 36,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 54,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 62,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 82,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 96,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 104,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 122,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 152,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 176,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 180,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 252,
        //            current: 10
        //        },
        //        {
        //            label: "Task",
        //            total: 342,
        //            current: 10
        //        }
        //    ];

        //    // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
        //    this.max = 0;


        //    //$scope.max = Math.max.apply(Math, $scope.data);
        //    var arrLength = this.data.length;
        //    for (var i = 0; i < arrLength; i++) {
        //        // Find Maximum X Axis Value
        //        if (this.data[i].total > this.max)
        //            this.max = this.data[i].total;
        //    }

        //    this.barHeight = this.width / this.data.length - 40;
        //    this.barWidht = this.data.total / this.max * this.height;
        //    this.barTop = this.data.length * this.width;
        //}
        controller: ['$http', function graphController($http) {
            var self = this;
            $http.get('app/tasks/tasks.json').then(function (response) {
                //self.tasks = response.data;
                self.data = response.data;

                self.width = 600;
                self.height = 600;
                self.yAxis = "Ongoing Tasks";
                self.xAxis = "Race!";

                var arrLength = self.data.length;
                for (var i = 0; i < arrLength; i++) {
                    // Find Maximum X Axis Value
                    if (self.data[i].total > self.max)
                        self.max = self.data[i].total;
                }

               
            });



        }]
    });

