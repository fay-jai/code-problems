/*
 * All Permutations of a String
 *
 * Generate all permutations of a given string. (Note: also known as the
 * generating anagrams problem).
*/

var stringPermutations = function (string) {
  var len = string.length;

  // base case
  if (len === 0) { return []; }
  if (len === 1) { return [ string ]; }

  return string.split('').reduce(function (accArray, character, idx) {
    var rest = '' + string.slice(0, idx) + string.slice(idx + 1);
    var comb = stringPermutations( rest )
      .map(function (s) { return '' + character + s; })
      .concat( accArray );

    var hash = {};
    comb.forEach(function (s) {
      hash[s] = true;
    });

    return Object.keys( hash );
  }, []);
};