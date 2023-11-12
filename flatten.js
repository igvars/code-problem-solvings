/**
 * Problem: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/submissions/1097496660/
 * We should you use space complexity as O(1)
 * Morris Traversal is used
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let current = root;

  while (current) {
    if (current.left) {
      let predecessor = current.left;

      while (predecessor.right) {
        predecessor = predecessor.right;
      }

      predecessor.right = current.right;
      current.right = current.left;
      current.left = null;
    }

    current = current.right;
  }
};

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
root.right = new TreeNode(5, null, new TreeNode(6));

flatten(root);
