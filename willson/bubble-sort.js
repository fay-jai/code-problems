/*
 * Bubble Sort
 * Implement the bubble sort algorithm
*/

var bubbleSort = function (array) {
  var len = array.length;
  var i, j, swapped;

  for (i = 0; i < len; i += 1) {
    swapped = false;
    for (j = 0; j < len - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) { break; }
  }
  return array;
};

var swap = function (array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

var empty   = [];
var one     = [18];
var reverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1];
var sorted  = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(bubbleSort(empty));
console.log(bubbleSort(one));
console.log(bubbleSort(reverse));
console.log(bubbleSort(sorted));