var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5 (value) {
  return value > 5;
};

var filteredNumberArr = numberArray.filter(above5);

console.log ("filtered", filteredNumberArr);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

console.log ("filtered", shoppingList);

var searchValue = "Bismol";

function containsFilter (value) {
  return value.indexOf(searchValue) !== -1;
}

var searcher = shoppingList.filter(containsFilter);

console.log ("searched", searcher);
