/*
 * Balanced Brackets
 *
 * Write a function that accepts a string consisting entiring of brackets
 * (`[](){}`) and returns whether it is balanced. Every "opening" bracket
 * must be followed by a closing bracket of the same type. There can also
 * be nested brackets, which adhere to the same rule.
 *
 * f('()[]{}(([])){[()][]}') // true
 * f('())[]{}') // false
 * f('[(])') // false
*/

var isBalanced = function (str) {
  var stack = [];
  var len   = str.length;
  var popped, i;

  for (i = 0; i < len; i += 1) {
    if ( isOpening(str[i]) ) {
      stack.push( str[i] );
    } else if ( isClosing(str[i]) ) {
      popped = stack.pop();
      if ( bracketMap[popped] !== str[i] ) return false;
    }
  }

  return stack.length === 0;
};

var bracketMap = {
  '(' : ')',
  '{' : '}',
  '[' : ']'
};

var isOpening  = function (char) {
  return char === '(' ||
         char === '{' ||
         char === '[';
};

var isClosing  = function (char) {
  return char === ')' ||
         char === '}' ||
         char === ']';
};