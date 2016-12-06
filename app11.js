// (function () {
// 'use strict';
//
// angular.module('DependencyInj', [])
// .controller('DIController', DIController);
// DIController.$inject = ['$scope', '$filter'];
// //.controller('DIController', ['$scope', '$filter', DIController]);
// function DIController ($scope, $filter, $injector) {
//   $scope.name = "Anna";
//
//   $scope.upper = function () {
//     var upCase = $filter('uppercase');
//     $scope.name = upCase($scope.name);
//   };
// }
//
// })();

// !function(){"use strict";function n(n,e,r){
//   n.name="Anna",n.upper=function(){var r=e("uppercase");
//   n.name=r(n.name)}}angular.module("DependencyInj",[]).
//   controller("DIController",["$scope","$filter",n])}();

!function(){"use strict";function n(n,e,r){
  n.name="Anna",n.upper=function(){var r=e("uppercase");
  n.name=r(n.name)}}angular.module("DependencyInj",[])
  .controller("DIController",["$scope","$filter",n])}();
