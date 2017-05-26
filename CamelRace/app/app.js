
(function () {

    var app = angular.module('app', []);

    app.controller('graphController', function ($scope) {

        // Options

        $scope.width = 600;
        $scope.height = 650;
        $scope.yAxis = 'Ongoing Tasks';
        $scope.xAxis = 'Race!';

        // Data 

        $scope.data = [
          {
              label: 'January',
              value: 36
          },
          {
              label: 'February',
              value: 54
          },
          {
              label: 'March',
              value: 62
          },
          {
              label: 'April',
              value: 82
          },
          {
              label: 'May',
              value: 96
          },
          {
              label: 'June',
              value: 104
          },
          {
              label: 'July',
              value: 122
          },
          {
              label: 'August',
              value: 152
          },
          {
              label: 'September',
              value: 176
          },
          {
              label: 'October',
              value: 180
          },
          {
              label: 'November',
              value: 252
          },
          {
              label: 'December',
              value: 342
          }
        ];

        // Find Maximum X & Y Axis Values - this is used to position the data as a percentage of the maximum
        $scope.max = 0;


        //$scope.max = Math.max.apply(Math, $scope.data);
        var arrLength = $scope.data.length;
        for (var i = 0; i < arrLength; i++) {
            // Find Maximum X Axis Value
            if ($scope.data[i].value > $scope.max)
                $scope.max = $scope.data[i].value;
        }
        //Array.max = function (array) {
        //    return Math.max.apply(Math, array);
        //};

        //Console.log($scope.max);

        // End Controller  
    });

})();