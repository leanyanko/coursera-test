(function () {
'use strict';

angular.module('DependencyInj', [])

.controller('DIController', DIController)//['$scope', '$filter', DIController]);
function DIController ($scope, $filter, $injector) {
  $scope.name = "Anna";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log ($injector.annotate(DIController));
}

function AnnotateMe(name, job, blah) {
  return "string";
}

console.log(DIController.toString())

})();
