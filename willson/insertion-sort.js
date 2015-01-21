/*
 * Insertion Sort
 *
 * Implement the [insertion sort algorithm]
 * (http://en.wikipedia.org/wiki/Insertion_sort)
*/

var insertionSort = function (array) {
  var len = array.length;
  var i, j, hole;

  for (i = 0; i < len; i += 1) {
    hole = array[i];

    j = i;
    while (j > 0 && hole < array[j - 1]) {
      array[j] = array[j - 1];
      j -= 1;
    }
    array[j] = hole;
  }
};