class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


## Binary Tree Level Order Traversal 
Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.
```Javascript
const traverse = function(root) {
  if (root === null) return result
  result = [];
  let queue = []
  queue.push(root)
  while (queue.length > 0){
    let currentLevelValues = []
    let length = queue.length
    for (let i = 0; i < length; i++){
      let node = queue.shift()
      currentLevelValues.push(node.value)
       if (node.left !== null){
         queue.push(node.left)
       }
       if (node.right !==null){
         queue.push(node.right)
       }
  }
    result.push(currentLevelValues)
  }
  return result;
};
```
> Time/Space: O(N)/O(N)

## Reverse Level Order Traversal (easy)
Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

```Javascript
const traverse = function(root) {
  result = [];
  let queue = []
  queue.push(root)
  while (queue.length > 0){
    let length = queue.length
    let currentValues = []
    for (let i = 0; i < length; i++){
      const currentNode = queue.shift()
      currentValues.push(currentNode.value)
      if (currentNode.left !== null){
        queue.push(currentNode.left)
      }
      if (currentNode.right !== null){
        queue.push(currentNode.right)
      }
    }
    result.unshift(currentValues)
  }
  return result;
}
```
### Find minimum depth (easy)
Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

```Javascript
const find_minimum_depth = function(root) {
  if (root === null) return 0
  let queue = []
  queue.push(root)
  let depth = 0
  while (queue.length > 0){
    depth++
    let length = queue.length
    for (let i = 0; i < length; i++){
      let currentNode = queue.shift()
      if (currentNode.left === null && currentNode.right === null) return depth
      if (currentNode.left !== null) queue.push(currentNode.left)
      if (currentNode.right !==null) queue.push(currentNode.right)
    }
  }
};
```
>Time/Space: O(N)/O(N)