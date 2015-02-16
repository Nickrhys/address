'use strict';

/**
 * @ngdoc function
 * @name addressBookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the addressBookApp
 */
angular.module('addressBookApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
