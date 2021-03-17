# Grokking the Coding Interview
## Table of contents
1. [Two Pointers](#Two-Pointers)
2. [Fast and Slow Pointers](#Fast-and-Slow-Pointers)
3. [Reverse Linked List](#Reverse-Linked-List)
4. [Sliding Window](#Sliding-Window)
5. [Merge Intervals](#Merge-Intervals)
6. [Modified Binary Search](#Modified-Binary-Search)
7. [Tree Breadth First Search](#Tree-Breadth-First-Search)
7. [Tree Depth First Search](#Tree-Depth-First-Search)

# Two Pointers
```javascript
/*
WHEN TO USE: very helpful for sorted arrays & Linked Lists when finding a set of elements with a condition
NOTE: for UNSORTED inputs that expect NONCONTIGUOUS sets for outputs, helpful to sort and then use two pointers
variables to consider:
start position (usually start at 0) --> condition for iterating
end poition (usually start at .length-1)--> condition for iterating
condition: target

currentcondition > target: decrement end pointer (end--)
currentcondition < target: increment start pointer (start++)
*/
function pair_with_target_sum(arr, targetSum) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      return [left, right];
    }

    if (targetSum > currentSum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
  return [-1, -1];
}
```
# Fast and Slow Pointers
```javascript
/*
WHEN TO USE: when dealing with cyclic Linked Lists or array
MIDPOINT: since fast pointer is moving 2x as fast as slow pointer, when fast reaches the end slow will be at the middle
slow pointer will never catch fast pointer unless there is some kind of loop/cycle

*/
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function find_cycle_start(head) {
  cycle_length = 0;
  // find the LinkedList cycle
  let slow = head,
    fast = head;
  while ((fast !== null && fast.next !== null)) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // found the cycle
      cycle_length = calculate_cycle_length(slow);
      break;
    }
  }
  return find_start(head, cycle_length);
}

function calculate_cycle_length(slow) {
  let current = slow,
    cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current === slow) {
      break;
    }
  }
  return cycle_length;
}

function find_start(head, cycle_length) {
  let pointer1 = head,
    pointer2 = head;
  // move pointer2 ahead 'cycle_length' nodes
  while (cycle_length > 0) {
    pointer2 = pointer2.next;
    cycle_length -= 1;
  }
  // increment both pointers until they meet at the start of the cycle
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
}
```
# Reverse Linked List
```javascript
/*
variables to consider:
current: initally set to head, tracks what were currently reversing
previous: initally set to null, tracks the previous current
next: current.next
to reverse: set current.next to previous
reset:  set previous to current, set current to next

for reversing a sublist:
-Skip the first p-1 nodes, to reach the node at position p.
-Remember the node at position p-1 to be used later to connect with the reversed sub-list.
-Next, reverse the nodes from p to q using the same approach discussed in Reverse a LinkedList.
-Connect the p-1 and q+1 nodes to the reversed sub-list.
*/
function reverse(head) {
  let current = head,
    previous = null;
  while (current !== null) {
    next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    previous = current; // before we move to the next node, point previous to the current node
    current = next; // move on the next node
  }
  return previous;
}
```
# Sliding Window
```javascript
/*
WHEN TO USE: CONTIGUOUS subset with a condition
variables to consider:
start position --> condition for iterating
end poition --> condition for iterating

-accumulator that doesnt need helper storage variable(ie. maxsum, max length seen so far, min length, count of something, etc )
-hashMap (if frequency of more than two types of items needs to be track, ie. number of chars seen, index, freq of char, etc. )
-accumulator that DOES need helper storage variable (ie. most seen char frequency, index of relevant char)

looking for max: extend (end++) when valid, and shorten (start++) when invalid
looking for min: shorten (start++ when valid), and extend (end++) when invalid
**length: end-start+1
*/
//example of no hashmap accumulator pattern
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
    windowSum = 0;

  for (i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0;
    for (j = i; j < i + k; j++) {
      windowSum += arr[j];
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
//example of hashmap pattern:
function length_of_longest_substring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

    // Current window size is from windowStart to windowEnd, overall we have a letter which is
    // repeating 'maxRepeatLetterCount' times, this means we can have a window which has one letter
    // repeating 'maxRepeatLetterCount' times and the remaining letters we should replace.
    // if the remaining letters are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' letters
    if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
      leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
```
# Merge Intervals
# Modified Binary Search
# Tree Breadth First Search
```javascript
/*
WHEN TO USE: any problem that involves the traversal of a tree in a level-by-level order,
when its likely the node you are searching for is nearby,
when finding the minimum or maximum depth
Approach:
we use a QUEUE to keep track of the nodes of a level before we jump to the next level

note: space complexity of the algorithm will be O(W) where 'W' is the maximum number of nodes on any level
*/
function traverse(root) {
  result = [];
  if (root === null) {
    return result;
  }

  const queue = [root];
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
# Tree Depth First Search
```javascript
/*
use recursion (or stack for iterative approach) to keep track of all prevcious (parent) nodes while traversing
WHEN TO USE: root-to-leaf path
Approach:
1. start at root
2. if current node is NOT leaf:
 - process node (i.e. add value to total, add to sequence, substact from total, etc)
 - make recursice calls for each child
3. when leaf is found test if condition is met:
yes-> stop, no -> continue
*/
function hasPath(root, sum) {
  if (root === null) {
    return false;
  }

  // if the current node is a leaf and its value is equal to the sum, we've found a path
  if (root.val === sum && root.left === null && root.right === null) {
    return true;
  }

  // recursively call to traverse the left and right sub-tree
  // return true if any of the two recursive call return true
  return hasPath(root.left, sum - root.val) || hasPath(root.right, sum - root.val);
}
```

