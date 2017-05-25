﻿'use strict';

// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp',[]);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
    $scope.tasks = [
        {
            "name": 0,
            "total": "450",
            "current": "20"
        },
        {
            "name": 0,
            "total": "200",
            "current": "150"
        },
        {
            "name": 0,
            "total": "50",
            "current": "50"
        }
    ];
});