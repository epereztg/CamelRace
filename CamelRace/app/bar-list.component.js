"use strict";

// Register `barList` component, along with its associated controller and template
angular.
    module("app").
    component("barList", {   
        template:                    
        '<div ng-repeat="bar in $ctrl.data" class="bar" style="height:{{$ctrl.width / $ctrl.data.length - 40}}px;width:{{bar.value /  $ctrl.max * $ctrl.height}}px; top:{{$index / $ctrl.data.length * $ctrl.width}}px;"> </div>',
            
        controller: function barListController() {

            this.width = 600;
            this.height = 650;
            this.yAxis = "Ongoing Tasks";
            this.xAxis = "Race!";

            this.data = [
                {
                    label: "January",
                    value: 36
                },
                {
                    label: "February",
                    value: 54
                },
                {
                    label: "March",
                    value: 62
                },
                {
                    label: "April",
                    value: 82
                },
                {
                    label: "May",
                    value: 96
                },
                {
                    label: "June",
                    value: 104
                },
                {
                    label: "July",
                    value: 122
                },
                {
                    label: "August",
                    value: 152
                },
                {
                    label: "September",
                    value: 176
                },
                {
                    label: "October",
                    value: 180
                },
                {
                    label: "November",
                    value: 252
                },
                {
                    label: "December",
                    value: 342
                }
            ];

            // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
            this.max = 0;


            //$scope.max = Math.max.apply(Math, $scope.data);
            var arrLength = this.data.length;
            for (var i = 0; i < arrLength; i++) {
                // Find Maximum X Axis Value
                if (this.data[i].value > this.max)
                    this.max = this.data[i].value;
            }
        }
    });


