/*
 * Longest Words
 *
 * Write a function that returns the longest word(s) from a sentence. The
 * function should not return any duplicate words (case-insensitive).
 *
 * longestWords("You are just an old antidisestablishmentarian")
 *   => ["antidisestablishmentarian"]
 * longestWords("I gave a present to my parents") => ["present", "parents"]
 * longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo
 * buffalo") => ["buffalo"] or ["Buffalo"]
*/

var longestWords = function (string) {
  var words  = string.toLowerCase().split(' ');
  var hash   = {};
  var max    = words.reduce(function (a, c) {
    hash[c] = c.length;
    return Math.max(a, c.length);
  }, 0);
  var result = [];

  for (var prop in hash) {
    if (hash[prop] === max) {
      result.push( prop );
    }
  }

  return result;
};