# Problem 1 - Two Sum (optimized with hash map)

Time: O(n);
Space: O(n);

```js
var twoSum = function (nums, target) {
  let result = [];
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let difference = target - currentNum;
    if (difference in map) {
      result.push(i, map[difference]);
    } else {
      map[currentNum] = i;
    }
  }
  return result;
};
```

# Problem 1 - Two Sum (for a sorted array)

Time: O(n);
Space: O(1);

```js
var twoSum = function (sortedNums, target) {
  let result = [];
  let left = 0;
  let right = sortedNums.length - 1;
  let sum = sortedNums[left] + sortedNums[right];
  while (left < right) {
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      result.push(left, right);
    }
  }
  return result;
};
```

# Problem 1 - Two Sum (DS design)

Design and implement a TwoSum class. It should support the following operations: add and find.

add(input) – Add the number input to an internal data structure.

find(value) – Find if there exists any pair of numbers which sum is equal to the value.

For example,
add(1); add(3); add(5); find(4) => true; find(7) => false

```js
class TwoSum {
  constructor(numbers = []) {
    this.numbers = numbers;
  }
  add(num) {
    //O(1) space b/c in JS arrays are dynamic

    return this.numbers.push(num);
  }
  find(target) {
    //O(n) space with hash map
    //O(n) time - for loop

    let map = {};
    for (let i = 0; i < this.numbers.length; i++) {
      let currentNum = this.numbers[i];
      let difference = target - currentNum;
      if (difference in map) {
        return true;
      } else {
        map[currentNum] = i;
      }
    }
    return false;
  }
}
```

# Problem 2 - Container With Most Water

Time: O(n);
Space: O(1);

```js
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const lowerWall = Math.min(height[left], height[right]);
    const length = right - left;
    const area = length * lowerWall;
    maxArea = Math.max(area, maxArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
```

# Problem 3 - Trap rain water

Time: O(n);
Space: O(1);

```js
var trap = function (height) {
  let totalWater = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  while (leftPointer < rightPointer) {
    if (height[leftPointer] < height[rightPointer]) {
      if (height[leftPointer] >= maxLeft) {
        maxLeft = height[leftPointer];
      } else {
        totalWater += maxLeft - height[leftPointer];
      }
      leftPointer++;
    } else {
      if (height[rightPointer] >= maxRight) {
        maxRight = height[rightPointer];
      } else {
        totalWater += maxRight - height[rightPointer];
      }
      rightPointer--;
    }
  }
  return totalWater;
};
```

# Problem 4 - Backspace string compare

Time: O(n + m);
Space: O(1);

```js
var backspaceCompare = function (S, T) {
  let sPointer = S.length - 1;
  let tPointer = T.length - 1;
  let sCharsToDelete = 0;
  let tCharsToDelete = 0;
  while (sPointer >= 0 || tPointer >= 0) {
    if (S[sPointer] === "#") {
      sCharsToDelete += 2;
      while (sCharsToDelete > 0) {
        sCharsToDelete--;
        sPointer--;
        if (S[sPointer] === "#") {
          sCharsToDelete += 2;
        }
      }
    }
    if (T[tPointer] === "#") {
      tCharsToDelete += 2;
      while (tCharsToDelete > 0) {
        tCharsToDelete--;
        tPointer--;
        if (T[tPointer] === "#") {
          tCharsToDelete += 2;
        }
      }
    }
    if (S[sPointer] !== T[tPointer]) {
      return false;
    } else {
      sPointer--;
      tPointer--;
    }
  }
  return true;
};
```

# Problem 5 - Longest substring without repeating characters

Time: O(n);
Space: O(1);

```js
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let left = 0;
  let right = 0;
  let longest = 0;
  let seen = {};
  while (right < s.length) {
    let leftChar = s[left];
    let rightChar = s[right];
    if (!(rightChar in seen) || seen[rightChar] < left) {
      seen[rightChar] = right;
      let currentLength = right - left + 1;
      longest = Math.max(currentLength, longest);
      right++;
    } else {
      left = seen[rightChar] + 1;
      seen[rightChar] = right;
      right++;
    }
  }
  return longest;
};
```

# Problem 6 - Almost Palindrome

Time: O(n);
Space: O(1);

```js
var validPalindrome = function (s) {
  const isValidSubPalindrome = (s, left, right) => {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        isValidSubPalindrome(s, left + 1, right) ||
        isValidSubPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};
```

# Problem 7 - Basic Linked List reversal

Time: O(n);
Space: O(1);

1. Construct a Linked List using JS class syntax

```js
class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

let head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
```

2. Write a reverse function

```js
const reverse = function (head) {
  let current = head;
  let prev = null;
  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};
```

# Problem 8 - Implement strStr (indexOf in JS)

Time: O(n); Space: O(n);

```js
var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  if (haystack.length === needle.length && haystack === needle) {
    return 0;
  }
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let currentChar = haystack[i];
    if (currentChar === needle[0]) {
      let subStr = haystack.slice(i, i + needle.length);
      if (subStr === needle) {
        return i;
      }
    }
  }
  return -1;
};
```

# Sliding Window - Intro

Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

```js
          |     |
[1, 4, 5, 7, 9, 22] K = 3;
 0  1  2  3  4  5


function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return result;
}
```

# Order-agonstic binary search

Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

!!NB
The safest way to find the middle of two numbers without getting an integer overflow is as follows:

middle = start + (end-start)/2

```js
function binary_search(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  const isAscending = arr[start] < arr[end];
  while (start <= end) {
    // calculate the middle of the current range
    mid = Math.floor(start + (end - start) / 2);

    if (key === arr[mid]) {
      return mid;
    }
    if (isAscending) {
      // ascending order
      if (key < arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else {
        // key > arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    } else {
      // descending order
      if (key > arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else {
        // key < arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    }
  }

  return -1; // element not found
}
```
