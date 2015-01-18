/*
 * Integer Difference
 *
 * Write a function that accepts an array of random integers and an integer *n*.
 * Determine the number of times where two integers in the array have the
 * difference of *n*.
 *
 * f(4, [1, 1, 5, 6, 9, 16, 27]) // 3 (Due to 2x [1, 5], and [5, 9])
 * f(2, [1, 1, 3, 3]) // 4 (Due to 4x [1, 3])
*/

var integerDifference = function (array, total) {
  return combinations(array).filter(function (arr) {
    return difference(arr) === total;
  }).length;
};

var combinations = function (array) {
  var len = array.length;
  var result = [];
  var i, j;

  for (i = 0; i < len - 1; i += 1) {
    for (j = i + 1; j < len; j += 1) {
      result.push( [array[i], array[j]] );
    }
  }

  return result;
};

var difference = function (array) {
  return Math.abs( array.reduce(function (a, c) {
    return a - c;
  }) );
};