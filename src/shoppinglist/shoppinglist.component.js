(function () {
'use strict';

angular.module('ShoppingList')
.component('shoppingList', {
    templateUrl: 'src/shoppinglist/templates/shoppingList.template.html',
    bindings: {
      items: '<'
    }
});

})();
