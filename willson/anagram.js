/*
 * Anagram Detection
 * 
 * Write a function that accepts two parameters, a parent and a child string.
 * Determine how many times the child string - or an anagram of the of the child
 * string - appears in the parent string. There is a solution which can be done
 * in near instant time.
 *
 * f('AdnBndAndBdaBn', 'dAn') // 4 ("Adn", "ndA", "dAn", "And")
 * f('AbrAcadAbRa', 'cAda') // 2
*/

var numAnagrams = function (parent, child) {
  var parentLen = parent.length;
  var childLen  = child.length;
  var result = 0;
  var i, temp;

  for (i = 0; i < parentLen - childLen; i += 1) {
    temp = parent.slice(i, childLen + i);
    if (isAnagram(temp, child)) {
      result += 1;
    }
  }

  return result;
};

var isAnagram = function (a, b) {
  var aLen  = a.length;
  var bLen  = b.length;
  var first = b.indexOf(a[0]);

  if (a === b)       { return true;  }
  if (aLen !== bLen) { return false; }
  if (first === -1)  { return false; }
  return isAnagram( a.slice(1), b.slice(0, first) + b.slice(first + 1) );
};