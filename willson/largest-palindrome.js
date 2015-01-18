/*
 * Largest Palindrome
 *
 * Write a function that finds the largest palindrome in a string. All
 * characters can be valid for the palindrome, including whitespace. In the
 * string "I am a red racecar driver" - the largest palindrome would be
 * "d racecar d".
*/

var largestPalindrome = function (string) {
  var len = string.length;
  var result = [];
  var i, j;

  // get all string combinations
  for (i = 0; i < len - 1; i += 1) {
    for (j = i + 1; j < len; j += 1) {
      result.push( string.slice(i, j) );
    }
  }

  return result
    .filter(function (s) {
      return isPalindrome(s) && s !== ' ';
    })
    .reduce(function (a, c) {
      return Math.max(a, c.length);
    }, 1);
};

var isPalindrome = function (string) {
  var len = string.length;
  if (len === 0) { return false; }
  if (len === 1) { return true; }
  if (string[0] !== string[len - 1]) { return false; }
  return isPalindrome(string.slice(1, len - 1));
};