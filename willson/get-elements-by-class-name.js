/*
 * Get Elements by Class Name
 *
 * Implement the `getElementsByClassName(element, className)` function in JS.
*/

var getElementsByClassName = function (className, element) {
  element = element || document.body;

  var inner = function (node, soFar) {
    var children = Array.prototype.slice.call(node.children);
    var listOfClass =
      node.className
          .split(' ')
          .filter(function (name) { return name !== ''; });

    if (listOfClass.indexOf(className) !== -1) {
      soFar.push(node);
    }

    // base case
    if (children.length === 0) { return soFar; }

    return children.reduce(function (acc, cur) {
      return acc.concat( inner(cur, []) );
    }, soFar);

  };

  return inner(element, []);
};