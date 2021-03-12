## Question #1 Google Interview Question Two Sum (Easy)

```javascript
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let remainder = target - nums[i];
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      map.set(remainder, i);
    }
  }
  return [];
};
```

## Question #2 Container With Most Water (Medium)

```javascript
var maxArea = function(height) {
let left =0;
let right =height.length-1;
let areaMax =0;

while(left < right){
  let width = right-left;
  let length =  Math.min(height[left], height[right]);
  let area =  length* width;
  areaMax = Math.max(areaMax, area);
  if(height[left]<height[right]){
    left++;
  }
  else {
    right--;
  }
}
```

## Question #3 Trapping Rainwater (Hard)

```javascript
/*
1. Identify the pointer with the lesser value
2. Is this pointer value greater than or equal to max on that side
  yes -> update max on that side
  no -> get water for pointer, add to total
3. move pointer inwards
4. repeat for other pointer
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (heights) {
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
// runing time  O(n) and space O(n) with a  stack
//runing time O(n) and space O(1)
var backspaceCompare = function(S, T) {

    let i= S.length-1, j =T.length-1;
    let skipS =0, skipT=0;
    while(i >=0 || j >= 0){
        //find position for next possible char in S
        while(i >=0){
            if(S[i] ==='#') {
                skipS++;
            }
            else if (skipS >0){
                skipS--;
            }
            else break;
            i--;
        }
        //find position for next possible char in S
        while(j >=0){
            if(T[j] ==='#') {
                skipT++;
            }
            else if (skipT >0){
                skipT--;
            }
            else break;
            j--;
        }
        // If two actual characters are different
        if(i >=0 && j>=0 && S[i] != T[j]){
            return false;
        }
        if((i>=0) != (j>= 0)){
            return false;
        }
        i--;
        j--;
    }
    return true;

};

}
```

## Question #5 Longest Substring Without Repeating Characters (Medium)

```javascript
// running time O(n^2) and space O(1) brute force
// runing time O(n) and space O(1)
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let index = {};
  let right = 0;

  for (let left = 0; right < s.length; right++) {
    // use left or old value of right where we have already tested the ones b4
    left = Math.max(index[s[right]] || 0, left);
    max = Math.max(max, right - left + 1);
    //save right so left can move to it later
    index[s[right]] = right + 1;
  }
  return max;
};
```

## Question #6a Valid Palindrome(Easy)

```javascript
//runining time  O(n) and space O(1)
var isPalindrome = function (s) {
  let clean = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
  return clean === clean.split("").reverse().join("");
};

var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  let left = 0;
  right = s.length - 1;

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
// running time O(n) and space O(1) - two pointer
var validSubPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

var validPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      //when u find one that isn't the space lets try without it to the left and to the right
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
```

## Question 7 Reverse Linked List II, M, N Reversals

```javascript
// running O(n), space O(1)
//p,q are indexs to the position in the linkedlist not the values
const reverseSubList = function (head, p, q) {
  let current = head;
  let prev = null;
  let i = 0;
  while (current !== null && i < p - 1) {
    prev = current;
    current = current.next;
    i++;
  }

  let lastPartOfFirstLink = prev;

  let endOfLinkAfterReverse = current;

  current = endOfLinkAfterReverse;
  let next = null;
  prev = null;
  i = 0;
  while ((current != null) & (i < q - p + 1)) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i++;
  }
  if (lastPartOfFirstLink !== null) {
    // need to link first part to reversed
    lastPartOfFirstLink.next = prev;
  } else {
    head = prev;
  }
  //reversed to what is left of the linklist
  endOfLinkAfterReverse.next = current;
  return head;
};
```

## Question 8 Flatten a Multilevel Doubly Linked List

```javascript
// running time O(n), space O(1)
// merge up the child linkedlist and keep iterating next
var flatten = function (head) {
  if (!head) return head;

  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }

      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }

      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
};
```

## Question 9 Cycle Detection

```javascript
// running O(n), space O(1)
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

function find_cycle_start(head) {
  if (head == null || head.next == null) return null;
  cycle_length = 0;
  // find the LinkedList cycle
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      // found the cycle
      cycle_length = calculate_cycle_length(slow);
      let start = find_start(head, cycle_length);
      if (start != -1) return start;
      else return null;
      break;
    }
  }
  return null;
}
```

# Question #10 Valid Parentheses (Easy)

var isValid = function(s) {

```javascript
// running O(n), space O(n)
var isValid = function (s) {
  if (s.length < 2) return false;
  let stack = [];
  let matchingRightToLeft = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] in matchingRightToLeft) {
      let item = stack.pop();
      if (item !== matchingRightToLeft[s[i]]) {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length == 0;
};
```

# Question #11 Minimum Brackets To Remove To Make Valid (Medium)

```javascript
// running O(n), space O(n)
var minRemoveToMakeValid = function (s) {
  const answer = s.split("");
  const stack = [];

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === "(") {
      stack.push(i);
    } else if (answer[i] === ")" && stack.length) {
      stack.pop();
    } else if (answer[i] === ")") {
      answer[i] = "";
    }
  }

  while (stack.length) {
    const curIndex = stack.pop();
    answer[curIndex] = "";
  }

  return answer.join("");
};
```

# Question #12 Implement Queue With Stacks (Easy)

```javascript
class MyQueue {
  constructor() {
    this.data = [];
    this.stack2 = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.data.push(x);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    while (this.data.length) {
      this.stack2.push(this.data.pop());
    }
    let poped = this.stack2.pop();
    while (this.stack2.length) {
      this.data.push(this.stack2.pop());
    }
    return poped;
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    return this.data[0];
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    if (this.data.length || this.stack2.length) return false;
    else return true;
  }
}
```
