(function () {
  'use strict';

  angular.module('ShoppingList', ['Spinner']);

  angular.module('ShoppingList')
  .config(function () {
    console.log ('ShoppingList.congig fired');
  })
  .run ( function () {
    console.log('ShoppingList run fired');
  });

})();
