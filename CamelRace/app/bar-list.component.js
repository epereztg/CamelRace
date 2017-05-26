"use strict";

// Register `barList` component, along with its associated controller and template
angular.
    module("app").
    component("barList", {   
        template:                    
        '<div ng-repeat="bar in $ctrl.data" class="bar" style="height:{{$ctrl.width / $ctrl.data.length - 40}}px;width:{{bar.total /  $ctrl.max * $ctrl.height}}px; top:{{$index / $ctrl.data.length * $ctrl.width}}px;">' + '<div>&#11044;</div>' + '</div>',
        //&#11044;


        //'<div ng-repeat="bar in $ctrl.data" class="bar" style="height:{{$ctrl.barHeight}}px; width:{{$ctrl.barWidht}}px; top:{{$index / $ctrl.barTop}}px;">{{$index / $ctrl.barWidht}} </div>',
            
        controller: function barListController() {

            this.width = 600;
            this.height = 650;
            this.yAxis = "Ongoing Tasks";
            this.xAxis = "Race!";
                      

            this.data = [
                {
                    label: "Task",
                    total: 36
                },
                {
                    label: "Task",
                    total: 54
                },
                {
                    label: "Task",
                    total: 62
                },
                {
                    label: "Task",
                    total: 82
                },
                {
                    label: "Task",
                    total: 96
                },
                {
                    label: "Task",
                    total: 104
                },
                {
                    label: "Task",
                    total: 122
                },
                {
                    label: "Task",
                    total: 152
                },
                {
                    label: "Task",
                    total: 176
                },
                {
                    label: "Task",
                    total: 180
                },
                {
                    label: "Task",
                    total: 252
                },
                {
                    label: "Task",
                    total: 342
                }
            ];

            // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
            this.max = 0;


            //$scope.max = Math.max.apply(Math, $scope.data);
            var arrLength = this.data.length;
            for (var i = 0; i < arrLength; i++) {
                // Find Maximum X Axis Value
                if (this.data[i].total > this.max)
                    this.max = this.data[i].total;                   
            }

            this.barHeight = this.width / this.data.length - 40;
            this.barWidht = this.data.total / this.max * this.height;
            this.barTop = this.data.length * this.width;
        }
    });


