# Depth First Search


## Question #15 Maximum Depth Of Binary Tree (Easy)

```Javascript
const maxDepth = (root, currentDepth = 0) => {
  if (!root) return currentDepth;
  currentDepth++;
  
  return Math.max(maxDepth(root.left, currentDepth), maxDepth(root.right, currentDepth))
};
```

#### Binary Tree Path Sum (easy)
Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

```Javascript
const has_path = function(root, sum) {
  if (root === null) return false;

  if (root.val === sum && root.left === null && root.right === null) return true;

  return has_path(root.left, sum - root.val) || has_path(root.right, sum - root.val);
};
```

#### All Paths for a Sum (medium)
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

```Javascript
function find_paths(root, sum) {
  let allPaths = [];
  find_paths_recursive(root, sum, [], allPaths);
  return allPaths;
}


function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
  if (currentNode === null) return;

  currentPath.push(currentNode.val);

  if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
    allPaths.push(currentPath);
  } else {
    find_paths_recursive(currentNode.left, sum - currentNode.val, currentPath, allPaths)
    find_paths_recursive(currentNode.right, sum - currentNode.val, currentPath, allPaths)
  }
  currentPath.pop(); // why are we popping?
}
```

#### Sum of Path Numbers (medium)
Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of all the numbers represented by all paths.

```Javascript
const find_sum_of_path_numbers = (root) => {
  return find_root_to_leaf_path_numbers(root, 0);
};

const find_root_to_leaf_path_numbers = (currentNode, pathSum) => {
  if (currentNode === null) return 0;

  pathSum = 10 * pathSum + currentNode.value; // what is this math?

  if (currentNode.value !== null && currentNode.left === null && currentNode.right === null) {
    return pathSum;
  }

  return find_root_to_leaf_path_numbers(currentNode.left, pathSum) + find_root_to_leaf_path_numbers(currentNode.right, pathSum)
}
```

#### Path With Given Sequence (medium)
Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.

```Javascript
const find_path = (root, sequence) => {
  if (root == null) {
    return sequence.length === 0;
  }
  return find_path_recursive(root, sequence, 0);
};

const find_path_recursive = (currentNode, sequence, sequenceIndex) => {
  if (currentNode === null) return false;

  const seqLength = sequence.length;

  if (sequenceIndex >= seqLength || currentNode.value !== sequence[sequenceIndex]) {
    return false;
  }

  return find_path_recursive(currentNode.left, sequence, sequenceIndex + 1) ||
    find_path_recursive(currentNode.right, sequence, sequenceIndex + 1)
}
```

#### Count Paths for a Sum (medium)
Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

```Javascript
function count_paths(root, S) {
  return count_paths_recursive(root, S, []);
}

function count_paths_recursive(currentNode, S, currentPath) {
  if (currentNode === null) {
    return 0;
  }

  // add the current node to the path
  currentPath.push(currentNode.val);
  let pathCount = 0,
    pathSum = 0;
  // find the sums of all sub-paths in the current path list
  for (i = currentPath.length - 1; i >= 0; i--) {
    pathSum += currentPath[i];
    // if the sum of any sub-path is equal to 'S' we increment our path count.
    if (pathSum === S) {
      pathCount += 1;
    }
  }
  // traverse the left sub-tree
  pathCount += count_paths_recursive(currentNode.left, S, currentPath);
  // traverse the right sub-tree
  pathCount += count_paths_recursive(currentNode.right, S, currentPath);

  // remove the current node from the path to backtrack
  // we need to remove the current node while we are going up the recursive call stack
  currentPath.pop();
  return pathCount;
}
```

#### Tree Diameter (medium)
Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.

Note: You can always assume that there are at least two leaf nodes in the given tree.

```Javascript
class TreeDiameter {
  constructor() {
    this.treeDiameter = 0;
  }

  find_diameter(root) {
    this.calculate_height(root);
    return this.treeDiameter;
  }

  calculate_height(currentNode) {
    if (currentNode === null) {
      return 0;
    }

    const leftTreeHeight = this.calculate_height(currentNode.left);
    const rightTreeHeight = this.calculate_height(currentNode.right);

    // if the current node doesn't have a left or right subtree, we can't have
    // a path passing through it, since we need a leaf node on each side
    if (leftTreeHeight !== 0 && rightTreeHeight !== 0) {
      // diameter at the current node will be equal to the height of left subtree +
      // the height of right sub-trees + '1' for the current node
      const diameter = leftTreeHeight + rightTreeHeight + 1;

      // update the global tree diameter
      this.treeDiameter = Math.max(this.treeDiameter, diameter);
    }

    // height of the current node will be equal to the maximum of the heights of
    // left or right subtrees plus '1' for(the current node
    return Math.max(leftTreeHeight, rightTreeHeight) + 1;
  }
}
```

#### Path with Maximum Sum (hard)
Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum.

A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. The path must contain at least one node.

```Javascript
class MaximumPathSum {
  find_maximum_path_sum(root) {
    this.globalMaximumSum = -Infinity;
    this.find_maximum_path_sum_recursive(root);
    return this.globalMaximumSum;
  }

  find_maximum_path_sum_recursive(currentNode) {
    if (currentNode === null) {
      return 0;
    }

    let maxPathSumFromLeft = this.find_maximum_path_sum_recursive(currentNode.left);
    let maxPathSumFromRight = this.find_maximum_path_sum_recursive(currentNode.right);

    // ignore paths with negative sums, since we need to find the maximum sum we should
    // ignore any path which has an overall negative sum.
    maxPathSumFromLeft = Math.max(maxPathSumFromLeft, 0);
    maxPathSumFromRight = Math.max(maxPathSumFromRight, 0);

    // maximum path sum at the current node will be equal to the sum from the left subtree +
    // the sum from right subtree + val of current node
    const localMaximumSum = maxPathSumFromLeft + maxPathSumFromRight + currentNode.val;

    // update the global maximum sum
    this.globalMaximumSum = Math.max(this.globalMaximumSum, localMaximumSum);

    // maximum sum of any path from the current node will be equal to the maximum of
    // the sums from left or right subtrees plus the value of the current node
    return Math.max(maxPathSumFromLeft, maxPathSumFromRight) + currentNode.val;
  }
}
```

#### Path with Maximum Sum (hard)
Validate a BST

```Javascript
const dfs = function(node, min, max) {
    if(node.val <= min || node.val >= max) {
      return false;
    }
    
    if(node.left) {
      if(!dfs(node.left, min, node.val)){
        return false;
      };
    }
    
    if(node.right) {
      if(!dfs(node.right, node.val, max)) {
        return false;
      }
    }
    
    return true;
}

const isValidBST = function(root) {
    if(!root) return true;
    return dfs(root, -Infinity, Infinity);
};
```