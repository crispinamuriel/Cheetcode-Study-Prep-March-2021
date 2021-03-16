# Breath First Search

- if path is close to current point

## Iterative

```javascript
function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
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
  }

  return result;
}
```

## Recursive

---

## Binary Tree Level Order

```javascript
function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    currentLevel = [];
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
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

## Reverse Level Order Traversal

```javascript
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
    result.unshift(currentLevel);
  }
  return result;
}
```

## ZigZag Traversal

```javascript
function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);
  leftToRight = true;
  while (queue.length > 0) {
    levelSize = queue.length;
    currentLevel = [];
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();

      // add the node to the current level based on the traverse direction
      if (leftToRight) {
        currentLevel.push(currentNode.val);
      } else {
        currentLevel.unshift(currentNode.val);
      }

      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(currentLevel.toArray());
    // reverse the traversal direction
    leftToRight = !leftToRight;
  }

  return result;
}
```

## Level Averages in a Binary Tree

```javascript
function find_level_averages(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let levelSize = queue.length,
      levelSum = 0.0;
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      // add the node's value to the running sum
      levelSum += currentNode.val;
      // insert the children of current node to the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    // append the current level's average to the result array
    result.push(levelSum / levelSize);
  }

  return result;
}
```

## Minimum Depth of a Binary

```javascript
const find_minimum_depth = function (root) {
  let queue = [root];
  let levelCounter = 0;
  let isMinDepth = false;
  if (root !== null && root.left === null && root.right === null) {
    return 1;
  }
  while (queue.length > 0 && !isMinDepth) {
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      let curr = queue.shift();
      if (curr.left === null && curr.right === null) {
        isMinDepth = true;
        break;
      }
      if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }
    levelCounter++;
  }
  return levelCounter;
};
```

## Level Order Successor

## Connect Level Order Siblings

```
Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.
```

```javascript
function connect_level_order_siblings(root) {
  if (root === null) {
    return;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let previousNode = null,
      levelSize = queue.length;
    // connect all nodes of this level
    for (i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      if (previousNode !== null) {
        previousNode.next = currentNode;
      }
      previousNode = currentNode;
      // insert the children of current node in the queue
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }
}
```

# Connect All Level Order Siblings (medium)

```
Connect All Level Order Siblings (medium) #
Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.
```

```javascript
const connect_all_siblings = function (root) {
  let prev = null;
  let queue = [root];
  while (queue.length > 0) {
    let currLength = queue.length;
    for (let i = 0; i < currLength; i++) {
      let curr = queue.shift();
      if (prev !== null) {
        prev.next = curr;
      }
      prev = curr;
      if (curr.left !== null) {
        queue.push(curr.left);
      }
      if (curr.right !== null) {
        queue.push(curr.right);
      }
    }
  }
};
```

# Right View of a Binary Tree (easy)

```
Given a binary tree, return an array containing nodes in its right view.
The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
```

```javascript
const tree_right_view = function (root) {
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    let currLength = queue.length;
    let curr;
    for (let i = 0; i < currLength; i++) {
      curr = queue.shift();
      if (i === currLength - 1) {
        result.push(curr);
      }
      if (curr.left != null) {
        queue.push(curr.left);
      }
      if (curr.right != null) {
        queue.push(curr.right);
      }
    }
  }

  return result;
};
```

```
Problem 1: Given a binary tree, return an array containing nodes in its left view.
The left view of a binary tree is the set of nodes visible when the tree is seen from the left side.

Solution: We will be following a similar approach,
but instead of appending the last element of each level we will be appending the first element of each level to the output array.
```
