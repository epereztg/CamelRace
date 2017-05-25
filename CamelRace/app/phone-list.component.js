'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {
    template:
        '<ul>' +
           
            '<li ng-repeat="phone in $ctrl.phones">' +
            '<h3 style="background-color:#eee; padding:2% 0 2% 0;  border-bottom: 2px solid green;">' +
            '<span>{{phone.name}}</span>' +
            '</h3>' +
            '</li>' +
            
            '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });


