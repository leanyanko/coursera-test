(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cokieCost = .45;

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return msg;
  };

  $scope.sayLoveMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    msg = lovesFilter(msg);
    return msg;
  };

  // $scope.sayTruthMessage = function () {
  //   var msg = "Yaakov likes to eat healthy snacks at night!";
  //   msg = truthFilter(msg, 'healthy', 'harmful');
  //   return msg;
  // };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace ("likes", "loves");
      return input;
    };
}

function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace (target, replace);
    return input;
  };
}

})();
