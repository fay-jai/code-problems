/*
 * Find Even Occurring Element
 *
 * Given an integer array, one element occurs even number of times and all
 * others have odd occurrences. Find the element with even occurrences.
*/

var findEven = function (array) {
  if (!Array.isArray(array)) {
    throw new Error('Must provide an array');
  }

  var hash = {};
  var prop;

  array.forEach(function (item) {
    hash[item] = hash[item] || 0;
    hash[item] += 1;
  });

  for (prop in hash) {
    if (hash[prop] % 2 === 0) {
      return prop;
    }
  }

  throw new Error('There are no items with even # of occurences');
};