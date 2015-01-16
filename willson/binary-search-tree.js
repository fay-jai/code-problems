/*
 * Binary Search Tree
 *
 * Gives methods to create a binary search tree.
*/

var BinarySearchTreeNode = function (value) {
  this.value = value;
  this.left  = null;
  this.right = null;
};

var BinarySearchTree = function () {
  this.root = null;
};

BinarySearchTree.prototype.insert = function (node) {
  if (this.isEmpty()) {
    this.root === node;
  } else {
    _insert.call(this, this.root, node);
  }
};

var _insert = function (start, node) {
  if (node.value <= start.value) {
    if (start.left) {
      _insert.call(this, start.left, node);
    } else {
      start.left = node;
    }
  } else {
    if (start.right) {
      _insert.call(this, start.right, node);
    } else {
      start.right = node;
    }
  }
};

BinarySearchTree.prototype.remove = function (node) {
  if (!this.isEmpty()) {
    this.root = _remove.call(this, this.root, node);
  }
};

var _remove = function (start, node) {
  if (start) {
    if (node.value < start.value) {
      start.left  = _remove.call(this, start.left , node);
    } else if (node.value > start.value) {
      start.right = _remove.call(this, start.right, node);
    } else if (start.left && start.right) {
      var minRight = _findMinValue(start.right);
      start.value  = minRight.value;
      start.right  = _remove.call(this, start.right, minRight);
    } else {
      start = start.left || start.right;
    }
  }

  return start;
};

BinarySearchTree.prototype.contains = function (node) {
  if (this.isEmpty()) return false;
  return _contains.call(this, this.root, node);
};

var _contains = function (start, node) {
  if (start === null) return false;
  if (node === start) return true;
  if (node.value  <  start.value) return _contains.call(this, start.left, node);
  return _contains.call(this, start.right, node);
};

BinarySearchTree.prototype.findMinValue = function (node) {
  if (!this.isEmpty()) {
    return _findMinValue.call(this, node || this.root);
  }
};

var _findMinValue = function (start) {
  while (start.left) {
    start = start.left;
  }
  return start;
};

BinarySearchTree.prototype.findMaxValue = function (node) {
  if (!this.isEmpty()) {
    return _findMaxValue.call(this, node || this.root);
  }
};

var _findMaxValue = function (start) {
  while (start.right) {
    start = start.right;
  }
  return start;
};

BinarySearchTree.prototype.getHeight = function (node) {
  if (!this.isEmpty()) {
    return _getHeight.call(this, node || this.root) - 1;
  }
};

var _getHeight = function (start) {
  if (start === null) return 0;
  return 1 + Math.max( _getHeight.call(this, start.left),
                       _getHeight.call(this, start.right) );
};

BinarySearchTree.prototype.isEmpty = function () {
  return this.root === null;
};