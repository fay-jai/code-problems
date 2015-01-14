/*
 * String Rotation
 *
 * Find out if a string is a rotation of another string. E.g. `ABCD` is a
 * rotation of `BCDA` but not `ACBD`.
*/

var isRotation = function (base, check) {
  var baseLen  = base.length;
  var checkLen = check.length;

  if (baseLen !== checkLen) return false;
  return (check + check).indexOf( base ) !== -1;
};