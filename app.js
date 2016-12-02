(function () {
  'use strict';

  angular.module('testApp', [])

  .controller('Controller', function ($scope) {
      $scope.name = "Scope";
      $scope.sayHello = function () {
        return "Hello there";
      }
  });
})();
