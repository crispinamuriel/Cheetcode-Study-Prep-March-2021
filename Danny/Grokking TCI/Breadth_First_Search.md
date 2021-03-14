# Breadth First Search a Binary Tree

## Template

## Breadth First Traversal
Time: O(N) | Space: O(N)
```js
function traverse(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      // add the node to the current level
      currentLevel.push(currentNode.val);
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel);
  }

  return result;
}
```
### Naive Solution - No Queue
```js
const traverse = function(root) {
  let result = [];
  if (!result.length) {
    result.push([root])
  };

  while (true) {
    const level = [];
    const prevLevel = result[result.length-1];
    prevLevel.forEach(node => {
      if (node.left !== null) level.push(node.left);
      if (node.right !== null) level.push(node.right);
    })
    if (!level.length) break;
    else result.push(level);
  };

  return result;
};
```

## Zig Zag Traversal
Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

Time: O(N) | Space: O(W) where W is the width of the widest level
```js
const traverse = function(root) {
  const result = [];
  let stack = [root];
  let startLeft = true;

  while (stack.length > 0) {
    const levelSize = stack.length;
    const currentLevel = [];
    const tempStack = [];
    for (let i = 0; i < levelSize; i++) {
      const currentNode = stack.pop();
      currentLevel.push(currentNode.value);

      if (startLeft) {
        if (currentNode.left !== null) tempStack.push(currentNode.left);
        if (currentNode.right !== null) tempStack.push(currentNode.right);
      } else {
        if (currentNode.right !== null) tempStack.push(currentNode.right);
        if (currentNode.left !== null) tempStack.push(currentNode.left);
      }
    }
    result.push(currentLevel)
    startLeft = !startLeft;
    stack = tempStack;
  }
  return result;
};
```
