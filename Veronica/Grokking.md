# Grokking the Coding Interview
## Table of contents
[Two Pointers](#Two-Pointers)
[Fast and Slow Pointers](#Fast-and-Slow-Pointers))
1. [Find Cycle Start](#Find-Cycle-Start)
[Reverse Linked List](#Reverse-Linked-List)

[Sliding Window](#Sliding-Window)
1. [Max sub array of size K](#Max-sub-array-of-size-K)
2. [Smallest SubArray with Given Sum S](#Smallest-SubArray-with-Given-Sum-S)
3. [Longest Substring With K Distinct Characters](#Longest-Substring-With-K-Distinct-Characters)
4. [Length of Longest Substring](#Length-of-Longest-Substring)

# Two Pointers
# Fast and Slow Pointers
## Find Cycle Start
```javascript
function find_cycle_start(head) {
  cycle_length = 0;
  // find if there is a cycle
  let slow = head,
    fast = head;
  while ((fast !== null && fast.next !== null)) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) { // when fast is equal to slow the cycle is found and we call the calc length helper
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
  /* where they meet is the start because the length of the cycle minus how much further the faster pointer
  has to go to meet the slower pointer will always be the total length - the cycle length, aka where the cycle starts*/
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }

  return pointer1;
}
```
# Reverse Linked List
# Sliding Window
## Max sub array of size K
```javascript
const max_sub_array_of_size_k = function(k, arr) {
  let maxSum = 0;
  let startWindow = 0;
  let newSum =0
  for(let endWindow = 0; endWindow < arr.length; endWindow++){
    newSum +=  arr[endWindow]
    console.log(newSum)
    if(endWindow >= k-1 ){
      if(newSum > maxSum){
        maxSum = newSum
      }
      newSum = newSum - arr[startWindow]
      startWindow++
    }
  }

  return maxSum;
};
```
## Smallest SubArray with Given Sum S
```javascript
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
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}
```
## Longest Substring With K Distinct Characters
```javascript
function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}
```

```javascript
function non_repeat_substring(str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (rightChar in charIndexMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    // insert the 'rightChar' into the map
    charIndexMap[rightChar] = windowEnd;
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
```
## Length of Longest Substring
```javascript
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
