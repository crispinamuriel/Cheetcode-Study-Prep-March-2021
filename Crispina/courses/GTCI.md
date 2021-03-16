# 16 Patterns - Groking the Codding Interview
Notes:

This course categorizes coding interview probllems into a set of 16 patterns. Ea
## Pattern 1: Sliding Window

### 1. Introduction
### 2. Maximum Sum Subarray of Size K (easy)
### 3. Smallest Subarray with a given sum (easy)
```
/* Smallest Subarry With a Given Sum

create fn
keep a windowSum
keep a minLength at Infinity (So we always have something bigger to compare when we compare our lengths)
keep a windowStart

for(windowEnd)
inside our for loop we want to add elements to our Sum
the instruction says 'shrink the window as small as possible until the windowSum is smaller than s'
what it really means is make sure, as you're adding to the sum, that sum stays where we want it, we want the sum to be equal to s or greater before we operate on our window and calculate the length.
     while (windowSum >=s) // if our window has hit the desired window length step into this loop
        calculate the length of the window, compare that to the min length, keep the smallest out of the two
        take out of the Sum, the element at the window windowStart
        move the windowStart up

check if our length is still infinity if it is return 0
return minLength


*/

const smallestSubArraySumS = (arr, s) => {

  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // when windowSum is equal or more than s we want to calculate the length
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1); // calculate length, keep smallest
      windowSum -= arr[windowStart]; //take out the windowStart element
      windowStart += 1; // move the window
    }
  }

  if (minLength === Infinity) { // if we didn't find a sum = s
    return 0;
  }
  return minLength;
}

console.log(smallestSubArraySumS([2, 1, 5, 2, 3, 2],7));
```
### 4. Longest Substring with K Distinct Characters (medium)
### 5. Fruits into Baskets (medium)
### 6. No-repeat Substring (hard)
### 7. Longest Substring with Same Letters after Replacement (hard)
### 8. Longest Subarray with Ones after Replacement (hard)
### 9. Problem Challenge 1
### 10. Solution Review: Problem Challenge 1
### 11. Problem Challenge 2
### 12. Solution Review: Problem Challenge 2
### 13. Problem Challenge 3
### 14. Solution Review: Problem Challenge 3
### 15. Problem Challenge 4
### 16. Solution Review: Problem Challenge 4

## Pattern 2: Two Pointers

### 1. Introduction
### 2. Pair with Target Sum (easy)
### 3. Remove Duplicates (easy)
### 4. Squaring a Sorted Array (easy)
### 5. Triplet Sum to Zero (medium)
### 6. Triplet Sum Close to Target (medium)
### 7. Triplets with Smaller Sum (medium)
### 8. Subarrays with Product Less than a Target (medium)
### 9. Dutch National Flag Problem (medium)
### 10. Problem Challenge 1
### 11. Solution Review: Problem Challenge 1
### 12. Problem Challenge 2
### 13. Solution Review: Problem Challenge 2
### 14. roblem Challenge 3
### 15. Solution Review: Problem Challenge 3

## Pattern 3: Fast & Slow pointers

## Pattern 4: Merge Intervals

## Pattern 5: Cyclic Sort

## Pattern 6: In-place Reversal of a LinkedList

## Pattern 7: Tree Breadth First Search
 ### Binary Tree (Level Order Traversal)

 ```
 const Deque = require('./collections/deque'); //http://www.collectionsjs.com

/*Explaination:

There are 3 containers, the result, the queue, and the current level
loop through the queue
for each node:
     point at curr node
     push the curr.val into our currLevel container
     if currentNode.left, push it into the queue
     if currentNode.right, push it into the queue

   push current level into the result

return result
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function traverse(root) {

  result = [];

  if (root === null) {
    return result;
  }

  const queue = new Deque();

  queue.push(root);

  while (queue.length > 0) {

    // keep note of how many nodes are in this level
    const levelSize = queue.length;

    // container for this level
    currentLevel = [];


    // for loop to do these operations for each node in level
    for (i = 0; i < levelSize; i++) {

      // shift off the front of the queue (this does not break us out of the while loop)
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


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);

 ```

## Pattern 8: Tree Depth First Search

## Pattern 9: Two Heaps

## Pattern 10: Subsets

## Pattern 11: Modified Binary Search

## Pattern 12: Bitwise XOR

## Pattern 13: Top 'K' Elements

## Pattern 14: K-way merge

## Pattern 15: 0/1 Knapsack (Dynamic Programming)

## Pattern 16: Topological Sort (Graph)

