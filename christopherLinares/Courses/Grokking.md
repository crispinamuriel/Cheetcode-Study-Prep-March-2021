# Grokking the Coding Interview: Patterns for Coding Questions




## Pattern: Sliding Window

### Average of all contiguous subarrays of size ‘K’

```javascript
function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    };
  };

  return result;
};
```

### Maximum Sum Subarray of Size K (easy)

```javascript
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    };
  };
  return maxSum;
};

/*
Time Complexity #
The time complexity of the above algorithm will be O(N)

Space Complexity #
The algorithm runs in constant space O(1)
*/
```

### Smallest Subarray with a given sum (easy)

```javascript
/*

let sum = 0
let minLength = Infinity
let windowStart = 0

for (windowEnd < arr.length)
keep a running sum of elements
while nested loop (sum >=s)
Record length of this window as smallest so far
remove windowStart from sum
shrink the window from left once
continue until for loop ends
if(minLength === Infinity)return 0 else minLength

*/

function smallest_subarray_with_given_sum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    // shrink the window as small as possible until the 'window_sum' is smaller than 's'
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    };
  };

  if (minLength === Infinity) {
    return 0;
  };
  return minLength;
};

/*
Time Complexity #
The time complexity of the above algorithm will be O(N)O(N). The outer for loop runs for all elements, and the inner while loop processes each element only once; therefore, the time complexity of the algorithm will be O(N+N)O(N+N), which is asymptotically equivalent to O(N)

Space Complexity #
The algorithm runs in constant space O(1)
*/
```

### Longest Substring with K Distinct Characters (medium)

```javascript
/*

  sliding window pattern
  let windowStart = 0
  let characters = {};
  for (windowEnd < str.length)
  let curr = string[i]
  if (characters[curr] === undefined) change value of undefined to 1
  else (increment value)
  if(value at that key not exceeding K)

*/

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    };
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      };
      windowStart += 1; // shrink the window
    };
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  };

  return maxLength;
};
```

### Fruits into Baskets (medium)

```javascript
const fruits_into_baskets = function(fruits) {
  /*
  edges: empty fruits arr return 0, .length = 1 return 1;

  Sliding window pattern
  let currMax;
  let windowStart = 0;
  let frequency = {};
  for (windowEnd < fruits.length)
  if () fruit not found in frequency add it else increment
  while () if more than two fruits in frequency shrink window
  return currMax

  */

  let currMax = 0;
  let windowStart = 0;
  let frequency = {};

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const curr = fruits[windowEnd];

    if (frequency[curr] === undefined) {
      frequency[curr] = 1;
    } else {
      frequency[curr]++
    };

    while (Object.keys(frequency).length > 2) {
      const left = fruits[windowStart];
      frequency[left]--;

      if (frequency[left] === 0) delete frequency[left];
      windowStart++
    };

    currMax = Math.max(currMax, windowEnd - windowStart + 1);
  };

  return currMax;
};

```

### No-repeat Substring (hard)

```javascript
const non_repeat_substring = function(str) {
  /*
  let currMax = 0;
  let windowStart = 0;
  let charIndexes = {};

  for (windowEnd < str.length)
  if () charIndexes doesn't have letter than add it
  else {} windowstart = last index that char was seen + 1
  update max accordingly
  return max

  */

  let currMax = 0;
  let windowStart = 0;
  let charIndexes = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightWindow = str[windowEnd];

    if (charIndexes[rightWindow] !== undefined) {
      windowStart = Math.max(windowStart, charIndexes[rightWindow] + 1)
    }

    charIndexes[rightWindow] = windowEnd;
    currMax = Math.max(currMax, windowEnd - windowStart + 1);

  };

  return currMax;

  /*
Time Complexity
The above algorithm’s time complexity will be O(N), where ‘N’ is the number of characters in the input string.

Space Complexity
The algorithm’s space complexity will be O(K), where KK is the number of distinct characters in the input string. This also means K<=N, because in the worst case, the whole string might not have any repeating character, so the entire string will be added to the HashMap.
*/
};
```

### Longest Substring with Same Letters after Replacement (hard)

```javascript
function length_of_longest_substring(str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let maxRepeatLetterCount = 0;
  let frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (frequencyMap[rightChar] === undefined) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar]++;
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
    };

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  };
  return maxLength;
}
```

### Longest Subarray with Ones after Replacement (hard)

```javascript

```











## Pattern: In-place Reversal of a LinkedList

In a lot of problems, we are asked to reverse the links between a set of nodes of a LinkedList. Often, the constraint is that we need to do this in-place, i.e., using the existing node objects and without using extra memory.

In-place Reversal of a LinkedList pattern describes an efficient way to solve the above problem. In the following chapters, we will solve a bunch of problems using this pattern.

<hr>

### Problem

Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.

<hr>

### Solution

To reverse a LinkedList, we need to reverse one node at a time. We will start with a variable current which will initially point to the head of the LinkedList and a variable previous which will point to the previous node that we have processed; initially previous will point to null.

In a stepwise manner, we will reverse the current node by pointing it to the previous before moving on to the next node. Also, we will update the previous to always point to the previous node that we have processed. Here is the visual representation of our algorithm:

```javascript
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = '';
    temp = this;
    while (temp !== null) {
      result += temp.value + ' ';
      temp = temp.next;
    }
    return result;
  }
}

const reverse = function (head) {
  let current = head,
    previous = null;
  while (current !== null) {
    next = current.next; // temporarily store the next node
    current.next = previous; // reverse the current node
    previous = current; // before we move to the next node, point previous to the current node
    current = next; // move on the next node
  }
  return previous;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`);
```
