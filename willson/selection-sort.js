/*
 * Selection Sort
 *
 * Implement the [selection sort algorithm]
 * (http://en.wikipedia.org/wiki/Selection_sort).
*/

var selectionSort = function (array) {
  var len = array.length;
  var i, j, minIdx;

  if (len < 2) { return array; }

  for (i = 0; i < len - 1; i += 1) {
    minIdx = i;
    for (j = i + 1; j < len; j += 1) {
      if ( array[j] < array[minIdx] ) {
        minIdx = j;
      }
    }
    swap( array, i, minIdx );
  }
};

var swap = function (array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};