/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const maxDepth = (root, currentDepth = 0) => {
  if (!root) return currentDepth;
  currentDepth++;
  
  return Math.max(maxDepth(root.left, currentDepth), maxDepth(root.right, currentDepth))
};
