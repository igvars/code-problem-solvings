class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function isValidBinarySearchTree(n) {
  function isValidHelper(n, low, high) {
    if (n === null) {
      return true;
    }
    const value = n.val;
    if (
      value > low &&
      value < high &&
      isValidHelper(n.left, low, value) &&
      isValidHelper(n.right, value, high)
    ) {
      return true;
    }
    return false;
  }
  return isValidHelper(n, -Infinity, Infinity);
}

//   5
//  /  \
// 4    7
const node = new Node(5);
node.left = new Node(4);
node.right = new Node(7);
console.log(isValidBinarySearchTree(node));

//   5
//  /  \
// 4    7
//     /
//    2
const node2 = new Node(5);
node2.left = new Node(4);
node2.right = new Node(7);
node2.right.left = new Node(2);
console.log(isValidBinarySearchTree(node2));
