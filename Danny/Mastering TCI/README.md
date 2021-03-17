# Arrays

## 1. Two Sum

```js
// Time: O(N) | Space: O(N)
const twoSum = function(nums, target) {
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (dict[diff] !== undefined) {
            return [dict[diff], i]
        } else {
            dict[nums[i]] = i;
        }
    }
};
```

# Strings

## 4. Backspace String Compare

```js
// Brute Force: Time: O(N^2) | Space: O(1)
const backspaceCompare = function(S, T) {
  return backspaceChars(S) === backspaceChars(T)
};

const backspaceChars = function(str) {
  let i = str.length-1;
  while (i >= 0) {
      if (str[i+1] === '#' && str[i] !== '#') {
        str = str.slice(0, i) + str.slice(i+2, str.length1)
      }
      i--;
  }
  // First char is backspace
  if (str[0] === '#') return str.slice(1)
  return str;
}

// Stack Solution: Time: O(N) | Space: O(N)
// 3 Pass O(N) Solution
const backspaceCompare = function(S, T) {
    const sStack = [];
    const tStack = [];
    createStack(S, sStack);
    createStack(T, tStack);

    if (sStack.length !== tStack.length) return false;
    for (let i = 0; i < sStack.length; i++) {
        if (sStack[i] !== tStack[i]) {
            return false
        }
    }

    return true;
}

const createStack = function(str, stack) {
        for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char !== '#') {
            stack.push(char)
        } else {
            stack.pop();
        }
    }
}
```

# Linked Lists

## 7. M, N Reversals

```js
// Time: O(N) | Space: O(1)
const reverseBetween = function(head, left, right) {
  let prev = null;
  let curr = head;
  while (curr !== left) {
      prev = curr;
      curr = curr.next;
  }
  let segmentTail = curr;
  let next = null;
  while (curr !== right) {
      let temp = curr.next;
      curr.next = next;
      next = curr;
      curr = temp;
  }
  segmentTail.next = curr.next;
  curr.next = next;
  prev.next = curr;
  return head;
};
```
# Stacks

# Queues

# Recursion

## 13. Kth Largest Element
Given an integer array nums and an integer k, return the kth largest element in the array.

Recursive Solution.
Time: O(log(N)) | Space: O(log(N))
```js
const findKthLargest = function(nums, k) {
  if (nums.length <= 1) return nums[0];
  let pivotIdx = 0;
  let idx = nums.length-1;
  let iterLeft = true;
  let elemsSeen = 1;
  while (elemsSeen <= nums.length) {
      const elem = nums[idx];
      elemsSeen++;
      const shouldSwap = (elem < nums[pivotIdx] && iterLeft) || (elem > nums[pivotIdx] && !iterLeft);
      if (shouldSwap) {
          let tempIdx = idx;
          nums[idx] = nums[pivotIdx];
          nums[pivotIdx] = elem;
          idx = pivotIdx
          pivotIdx = tempIdx;
          iterLeft = !iterLeft;
      }
      idx = iterLeft ? idx-1 : idx+1;
  }
  if (nums.length-k === pivotIdx) return nums[pivotIdx];
  else if (k > pivotIdx) {
      k -= (nums.length-pivotIdx)
      return findKthLargest(nums.slice(0, pivotIdx), k)
  } else {
      return findKthLargest(nums.slice(pivotIdx+1), k)
  }
};
```

## 19. Validate Binary Search Tree
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

* The left subtree of a node contains only nodes with keys less than the node's key.
* The right subtree of a node contains only nodes with keys greater than the node's key.
* Both the left and right subtrees must also be binary search trees.

Time: O(N) | Space: O(N)
```js
var isValidBST = function(root) {

    const helper  = (current, max = Infinity, min = -Infinity) => {
        if (current === null ) return true;

        if(current.val < max && current.val > min ){
            return helper(current.left, current.val, min) && helper(current.right, max, current.val)
        }  else {
            return false
        }
    }
    return helper(root)

};
```
