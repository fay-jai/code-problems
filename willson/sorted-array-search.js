/*
 * Sorted Array Search
 *
 * Given an array of numbers sorted in ascending order, write a function that
 * will return the index at which the number is found.
*/

var binarySearch = function (array, num) {
  var inner = function (start, end) {
    if (start >= end) return null;

    var mid = Math.floor( (start + end) / 2 );
    if (num === array[mid]) return mid;
    if (num  <  array[mid]) return inner(start, mid);
    return inner(mid + 1, end);
  };

  return inner(0, array.length);
};