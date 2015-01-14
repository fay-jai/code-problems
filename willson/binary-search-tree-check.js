/*
 * Binary Search Tree Check
 *
 * Given a binary tree, check whether it’s a binary search tree or not.
*/

var isBST = function (tree) {
  var lowerBound = Number.MIN_VALUE;
  var upperBound = Number.MAX_VALUE;
  var inner = function (node, lowerBound, upperBound) {
    if (node === null) return true;

    var value = node.value;
    if ( value < lowerBound || value > upperBound ) return false;
    return inner(node.left, lowerBound, value) &&
           inner(node.right, value, upperBound);
  };

  if (tree.root === null) return false;
  return inner(tree.root, lowerBound, upperBound);
};