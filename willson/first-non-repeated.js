/*
 * First Non-repeated character
 *
 * Write a function that accepts a single string input and returns the first
 * non-repeated character.
 *
 * "AABBC" // "C"
 * "AABBCCDEEFF" // "D"
*/

var firstNonRepeated = function (string) {
  var len = string.length;
  var i;

  if (len === 0) {
    throw new Error('Must be non-empty string');
  }

  if (len === 1) {
    return string;
  }

  i = 1;
  while (string[0] === string[i]) {
    i += 1;
  }

  if (i === 1) {
    return string[0];
  } else {
    return firstNonRepeated( string.slice(i) );
  }
};