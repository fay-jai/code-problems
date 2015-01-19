/*
 * Once
 *
 * Write a function that accepts a function as it's only argument and returns a
 * new function that can only ever be executed once.
 *
 * Once completed, add a second arguments that allows the function to be
 * executed `x` number of times before it stops working.
*/

var once = function (fn, numTimes) {
  var counter = 0;
  numTimes = numTimes || 1;

  return function () {
    var args = Array.prototype.slice.call(arguments);

    if (counter < numTimes) {
      counter += 1;
      return fn.apply(null, args);
    }
  };
};