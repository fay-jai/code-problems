/*
 * Flatten Array
 *
 * Write a function that accepts a multi dimensional array and returns a
 * flattened version.
 *
 * flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]
*/

// version 1
var flatten = function (array) {
  var len = array.length;
  if (len === 0) return array;

  var result = [];
  var current, i;

  for (i = 0; i < len; i += 1) {
    current = array[i];

    if ( isPrimitive(current) ) {
      result = result.concat( current );
    } else if ( Array.isArray(current) ) {
      result = result.concat( flatten(current) );
    } else {
      throw new Error('Array consists of values that are neither primitives nor arrays');
    }
  }

  return result;
};

// version 2
var flatten = function (array) {
  var inner = function (soFar, remaining) {
    var len = remaining.length;
    if (len === 0) return soFar;

    var first = remaining[0];
    var rest  = remaining.slice(1);

    if ( isPrimitive(first) ) {
      return inner( soFar.concat(first), rest );
    } else if ( Array.isArray(first) ) {
      return inner( soFar.concat( flatten(first) ), rest );
    } else {
      throw new Error('Array consists of values that are neither primitives nor arrays');
    }
  };

  return inner([], array);
};

var isPrimitive = function (value) {
  return typeof value === 'string'  ||
         typeof value === 'number'  ||
         typeof value === 'boolean' ||
                value === null      ||
                value === void 0;
};