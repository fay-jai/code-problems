/*
 * Find Missing Element
 *
 * There is an array of non-negative integers. A second array is formed by
 * shuffling the elements of the first array and deleting a random element.
 * Given these two arrays, find which element is missing in the second array.
*/

var findMissing = function (base, missing) {
  var hash = {};

  missing.forEach(function (item) {
    hash[item] = hash[item] || 0;
    hash[item] += 1;
  });

  base.forEach(function (item) {
    if (!hash[item]) {
      return item;
    }
    hash[item] -= 1;
  });
};