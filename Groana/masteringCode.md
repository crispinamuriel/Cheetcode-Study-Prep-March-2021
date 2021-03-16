## Question #1 Google Interview Question Two Sum (Easy)

```Javascript
const twoSum = (nums, target) => {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] >= 0) {
          return [hash[nums[i]], i];
      } else {
          const diff = target - nums[i];
          hash[diff] = i;
      }
  }
};
```

## Question #2 Container With Most Water (Medium)

```Javascript
const maxArea = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;

  while (left < right) {
    let height = Math.min(arr[left], arr[right]);
    let width = right - left;
    let area = width * height;
    maxArea = Math.max(maxArea, area);

    if (arr[left] <= arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
```

## Question #3 Trapping Rainwater (Hard)

```Javascript
const trap = (height) => {
  let total = 0;

  for (let i = 0; i < height.length - 1; i++) {
    let leftP = i;
    let rightP = i;
    let maxLeft = 0;
    let maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, height[leftP]);
      leftP--;
    }

    while (rightP < height.length) {
      maxRight = Math.max(maxRight, height[rightP]);
      rightP++;
    }

    const currWater = Math.min(maxLeft, maxRight) - height[i];

    if (currWater >= 0) total += currWater;
  }
  return total;
};
```

## Question #4 Backspace String Compare (Easy)

```Javascript
const typeStr = (str) => {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letter === '#') {
      arr.pop();
    } else {
      arr.push(letter);
    }
  }

  return arr.join('');
};

const backspaceCompare = (str1, str2) => {
  return typeStr(str1) === typeStr(str2);
};
```

## Question #5 Longest Substring Without Repeating Characters (Medium)

```Javascript
const lengthOfLongestSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      start = Math.max(start, seen[str[i]]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[str[i]] = i + 1;
  }
  return longest;
};
```

## Question #6a Valid Palindrome(Easy)

```Javascript
const isPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
```

## Question #6b Almost Palindrome(Hard)

```Javascript
const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isPalindromeII = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return (
        isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};
```

## Question #7a Reverse a Linked List

```Javascript
const reverseLL = (head) => {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
```

## Question #9 Cycle Detection (Medium)

```Javascript
const has_cycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
```

## Question #10 Valid Parentheses (Easy)

```Javascript
const isValid = (str) => {
  if (str.length === 0) return false;

  let parens = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let stack = [];

  for (let bracket of str) {
    if (bracket in parens) {
      stack.push(bracket);
    } else {
      let leftBracket = stack.pop();
      if (parens[leftBracket] !== bracket) return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
};
```

## Question #11 Minimum Brackets To Remove To Make Valid (Medium)

```Javascript
const minRemoveToMakeValid = (str) => {
  let res = str.split('');
  let stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length) {
      stack.pop();
    } else if (res[i] === ')') {
      res[i] = '';
    }
  }

  while (stack.length) {
    let currIdx = stack.pop();
    res[currIdx] = '';
  }

  return res.join('');
};
```

## Question #15 Maximum Depth Of Binary Tree (Easy)

```Javascript
const maxDepth = (root, currentDepth = 0) => {
  if (!root) return currentDepth;
  currentDepth++;
  
  return Math.max(maxDepth(root.left, currentDepth), maxDepth(root.right, currentDepth))
};
```

## Find Range
```Javascript
function find_range(arr, key) {
  let result = [-1, -1];
  result[0] = searchRange(arr, key, false);
  if (result[0] !== -1) { // no need to search, if 'key' is not present in the input array
    result[1] = searchRange(arr, key, true);
  }

  return result;
}

// modified Binary Search
function searchRange(arr, key, findMaxIndex) {
  let keyIndex = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else { // key === arr[mid]
      keyIndex = mid;
      if (findMaxIndex) {
        start = mid + 1; // search ahead to find the last index of 'key'
      } else {
        end = mid - 1; // search behind to find the first index of 'key'
      }
    }
  }

  return keyIndex;
}
```
