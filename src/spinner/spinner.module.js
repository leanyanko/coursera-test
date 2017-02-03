(function () {
  'use strict';

  angular.module('Spinner', []);

  angular.module('Spinner')
  .config(function () {
    console.log ('spinner.congig fired');
  })
  .run ( function () {
    console.log('spinner run fired');
  });

})();
