## Breath First Search
#### Iterative
Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

```Javascript
const traverse = (root) => {
  let result = [];
  if (root === null) return result;

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let levelSize = queue.length;
    let currentLevel = [];

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      currentLevel.push(currentNode.value);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel)
  }

  return result;
};
```

#### Reverse Level Order Traversal (easy)
Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

```Javascript
function traverse(root) {
  const result = [];
  if (root === null) {
    return result;
  }
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    levelSize = queue.length;
    currentLevel = [];
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      currentLevel.push(currentNode.val);

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.unshift(currentLevel);
  }
  return result;
}
```

#### Zigzag Traversal (medium)
Given a binary tree, populate an array to represent its zigzag level order traversal. You should populate the values of all nodes of the first level from left to right, then right to left for the next level and keep alternating in the same manner for the following levels.

```Javascript
function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = new Deque();
  queue.push(root);
  leftToRight = true;
  while (queue.length > 0) {
    levelSize = queue.length;
    currentLevel = new Deque();
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();

      if (leftToRight) {
        currentLevel.push(currentNode.val);
      } else {
        currentLevel.unshift(currentNode.val);
      }

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.push(currentLevel.toArray());
    leftToRight = !leftToRight;
  }

  return result;
}
```

#### Level Averages in a Binary Tree (easy)
Given a binary tree, populate an array to represent the averages of all of its levels.

```Javascript
const find_level_averages = function(root) {
  let result = [];

  if (root === null) return result;

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const levelSize = queue.length;
    let sum = 0;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      sum += currentNode.value;
      
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    result.push(sum / levelSize);
  }
  return result;
};
```

#### Minimum Depth of a Binary Tree (easy)
Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

```Javascript
const find_minimum_depth = function(root) {
  if (root === null) return 0;

  let queue = [];
  queue.push(root);

  let minimum = 0;

  while (queue.length > 0) {
    minimum++;
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (currentNode.left === null && currentNode.right === null) return minimum;
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }
};
```

#### Maximum Depth of a Binary Tree (easy)
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

#### Iteratie
```Javascript
const find_maximum_depth = function(root) {
  if (root === null) return currentDepth;
    
    let queue = [];
    queue.push(root);
    
    let maximum = 0;
    
    while (queue.length > 0) {
        maximum++;
        let levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            
            if (currentNode.left !== null) queue.push(currentNode.left);
            if (currentNode.right !== null) queue.push(currentNode.right);
        }
    }
    return maximum;
};
```

#### Level Order Successor (easy)
Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

```Javascript
const find_successor = function(root, key) {
  if (root === null) return null;

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
      let currentNode = queue.shift();

      if (currentNode.val === key) return queue[0];

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
  }
  return null;
};
```

#### Connect Level Order Siblings (medium)
Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

```Javascript
const connect_level_order_siblings = function(root) {
  if (root === null) return null;

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let previousNode = null;
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (previousNode !== null) {
        previousNode.next = currentNode;
      }

      previousNode = currentNode;

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }
};
```

#### Connect All Level Order Siblings (medium)
Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

```Javascript
const connect_all_siblings = function(root) {
  if (root === null) return null;

  const queue = [];
  queue.push(root);
  let currentNode = null;
  let previousNode = null;

  while (queue.length > 0) {
    currentNode = queue.shift();
    
    if (previousNode !== null) {
      previousNode.next = currentNode;
    }

    if (currentNode.left !== null) queue.push(currentNode.left);
    if (currentNode.right !== null) queue.push(currentNode.right);
  }
};
```

#### Right View of a Binary Tree (easy)
Given a binary tree, return an array containing nodes in its right view. The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.

```Javascript
const tree_right_view = function(root) {
  let result = [];

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();

      if (i === levelSize - 1) result.push(currentNode.value);
        
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }
  return result;
};
```