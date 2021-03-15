## Question #1 Two Sum (Easy)

```javascript
//nested for-loop solution
var twoSum = function (nums, target) {
  indicesArray = [];
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indicesArray.push(i, j);
        return indicesArray;
      }
    }
  }
};

//hash tables solution
var twoSum = function (nums, target) {
  const hashT = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashT.has(complement)) {
      return [i, hashT.get(complement)];
    }
    hashT.set(nums[i], i);
  }
};
```

## Question #2 Container With Most Water (Medium)

```javascript
//nested for-loop solution
var maxArea = function (heights) {
  let maxAreaValue = 0;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      let height = Math.min(heights[i], heights[j]);
      let width = j - i;
      let area = height * width;
      maxAreaValue = Math.max(maxAreaValue, area);
    }
  }
  return maxAreaValue;
};

//pointer solution
var getMaxWaterContainer = function (heights) {
  let p1 = 0,
    p2 = heights.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};
```

## Question #3 Trapping Rain Water (Hard)

```javascript
const getTrappedRainwater = function (heights) {
  let left = 0,
    right = heights.length - 1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }

      right--;
    }
  }

  return totalWater;
};
```

## Question #4 Backspace String Compare (Easy)

```javascript
const buildString = function (string) {
  const builtStringArray = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== "#") {
      builtStringArray.push(string[i]);
    } else {
      builtStringArray.pop();
    }
  }

  return builtStringArray;
};

var backspaceCompare = function (S, T) {
  const finalS = buildString(S);
  const finalT = buildString(T);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }

  return true;
};
```

## Question #5 Longest Substring Without Repeating Characters(Medium)

```javascript
const lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  const seen = {};
  let left = 0,
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previouslySeenChar = seen[currentChar];

    if (previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
    }

    seen[currentChar] = right;

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};
```

## Question #6a Valid Palindrome (Easy)

```javascript
var isValidPalindrome = function (s) {
  let s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
```

## Question #6b Almost Palindrome (Easy)

```javascript
var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (s[start] !== s[end]) {
      return (
        validSubPalindrome(s, start + 1, end) ||
        validSubPalindrome(s, start, end - 1)
      );
    }
    start++;
    end--;
  }
  return true;
};

var validSubPalindrome = function (s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
```

## Question #7a Reverse Linked List (Easy)

```Javascript
//Create your own Node

var reverseList = function (head) {
   let prevNode = null;

   while(head !== null) {
      let nextNode = head.next
      head.next = prevNode
      prevNode = head
      head = nextNode
   }

   return prevNode;
}
```

## Question #7b Reversed Linked List II (Medium)

```Javascript
var reverseBetween = function(head, left, right) {
   let currentPos = 1, currentNode = head, start = head

   while(currentPos < left) {
      start = currentNode;
      currentNode = currentNode.next
      currentPos++;
   }

   let newList = null, tail = currentNode

   while(currentPos >- left && currentPos <= right) {
      const next = currentNode.next
      currentNode.next = newList
      newList = currentNode
      currentNode = next
      currentPos++
   }
   start.next = newList
   tail.next = currentNode

   if(left > 1) {
      return head;
   } else {
      return newList
   }
}
```

## Question #8 Merge Multi-Level Doubly Linked List (Medium)

```Javascript

```

## Question #9 Cycle Detection (Medium)

```Javascript

```

## Question #10 Valid Parentheses (Easy)

```Javascript
var isValid = function(s) {
    const parenthesis = {
        "(":")",
        "[":"]",
        "{":"}",
    }

    if(s.length === 0) return true;

    const stack = []

    for(let i = 0; i < s.length; i++) {
        if(parenthesis[s[i]]) {
            stack.push(s[i])
        } else {
        const leftBracket = stack.pop()
        const correctBracket = parenthesis[leftBracket]
        if(s[i] !== correctBracket) return false
        }
    }
    return stack.length === 0;
};

//time: O(n)
//space: O(n)
```

## Question #11 Minimum Brackets To Remove To Make Valid (Medium)

```Javascript
const minRemoveToMakeValid = function(str) {
    const res = str.split('');
    const stack = [];

    for (let i = 0; i < res.length; i++) {
        if (res[i] === '(') {
            stack.push(i);
        } else if (res[i] === ')' && stack.length) {
            stack.pop();
        } else if (res[i] === ')') {
            res[i] = ''
        }
    }

    while (stack.length) {
        const curChar = stack.pop();
        res[curChar] = '';
    }

    return res.join('');
};

//time: O(n)
//space: O(n)
```

## Question #12 Implement Queue With Stacks (Easy)

```Javascript
class QueueWithStacks {
   constructor() {
      this.in=[]; //enqueue
      this.out=[]; //dequeue
   }

   enqueue(val) {
      this.in.push(val); //O(1)
   }

   dequeue() {
      if(this.out.length === 0) {
         while(this.in.length) {
            this.out.push(this.in.pop())
         }
      }
      return this.out.pop() //O(N)
   }

   peek() {
      if(this.out.length === 0) {
         while(this.in.length) {
            this.out.push(this.in.pop())
         }
      }
      return this.out[this.length - 1] //O(N)
   }

   empty() {
      return this.in.length === 0 && this.out.length === 0 //O(1)
   }
}

//Space Complexity = N
```

## Question #13 Kth Largest Element (Medium)

```Javascript
var findKthLargest = function(nums, k) {
    let sorted = nums.sort(function(a,b) {
        return a - b
    })
    let kthIdx = nums.length - k
    return nums[kthIdx]
};

//Time Complexity =
//Space Complexity =
```

## Question #14 Start And End Of Target (Medium)

```Javascript
const binarySearch = function(nums, left, right, target) {
  while(left <= right) {
    const mid = Math.floor((left + right)/2)
    const foundValue = nums[mid]
    if(foundValue === target) {
      return mid
    } else if(foundValue < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

const searchRange = function(nums, target) {
  if(nums.length < 1) return [-1, -1];

  const firstPos = binarySearch(nums, 0, sums.length - 1, target)

  if(firstPos === -1) return [-1, -1];

  let endPos = firstPos
  let startPos = firstPos
  let temp1
  let temp2

  while(startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(nums, 0, startPos - 1, target)
  }
  startPos = temp1;

  while(endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearc(nums, endPos + 1, nums.length - 1, target)
  }
  endPos = temp2;

  return [startPos, endPos]
}

//Time Complexity = O(logN)
//Space Complexity = O(1)
```

## Question #15 Maximum Depth Of Binary Tree (Easy)

```Javascript


//Time Complexity =
//Space Complexity =
```

## Question #16 Level Order Of Binary Tree (Medium)

```Javascript


//Time Complexity =
//Space Complexity =
```

## Question #17 Right Side View of Tree (Medium)

```Javascript


//Time Complexity =
//Space Complexity =
```
