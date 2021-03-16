# Grokking the Coding Interview
## Table of contents
[Two Pointers](#Two-Pointers)
1. [Pair with Target Sum (easy)](#Pair-with-Target-Sum-(easy))
2. [Triplet Sum Closest to Target](#Triplet-Sum-Closest-to-Target)
2. [Problem 3: Minimum Window Sort (medium)](#Minimum-Window-Sort-(medium))

[Fast and Slow Pointers](#Fast-and-Slow-Pointers))
1. [Find Cycle Start](#Find-Cycle-Start)
2. [Find Middle of Linked List](#Find-Middle-of-a-Linked-List)


[Reverse Linked List](#Reverse-Linked-List)

[Sliding Window](#Sliding-Window)
1. [Max sub array of size K](#Max-sub-array-of-size-K)
2. [Smallest SubArray with Given Sum S](#Smallest-SubArray-with-Given-Sum-S)
3. [Longest Substring With K Distinct Characters](#Longest-Substring-With-K-Distinct-Characters)
4. [Length of Longest Substring](#Length-of-Longest-Substring)
5. [Length of Longest Substring with 1s and 0s](#Length-of-Longest-Substring-with-1s-and-0s)
6. [Problem 1: Permutation in a String (hard)](#Permutation-in-a-String-(hard))
7. [Problem 4: Words Concatenation (hard)](#Words-Concatenation-(hard))

[Merge Intervals](#Merge-Intervals)

[Modified Binary Search](#Modified-Binary-Search)
1. [Order-agnostic Binary Search (easy)](#Order-agnostic-Binary-Search-(easy))
2. [Ceiling of a Number (medium)](#Ceiling-of-a-Number-(medium))
2. [Rotation Count (medium)](#Rotation-Count-(medium))


# Two Pointers
## Pair with Target Sum (easy)
```javascript
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
## Triplet Sum Closest to Target
```javascript
function triplet_sum_close_to_target(arr, targetSum) {
  arr.sort((a, b) => a - b);
  let smallest_difference = Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      const target_diff = targetSum - arr[i] - arr[left] - arr[right];
      if (target_diff === 0) { // we've found a triplet with an exact sum
        return targetSum - target_diff; // return sum of all the numbers
      }

      // the second part of the following 'if' is to handle the smallest sum when we have more than one solution
      if (Math.abs(target_diff) < Math.abs(smallest_difference) ||
        (Math.abs(target_diff) === Math.abs(smallest_difference) && target_diff > smallest_difference)) {
        smallest_difference = target_diff; // save the closest and the biggest difference
      }


      if (target_diff > 0) {
        left += 1; // we need a triplet with a bigger sum
      } else {
        right -= 1; // we need a triplet with a smaller sum
      }
    }
  }
  return targetSum - smallest_difference;
}
```
## Minimum Window Sort (medium)
```javascript
function shortest_window_sort(arr) {
  let low = 0,
    high = arr.length - 1;
  // find the first number out of sorting order from the beginning
  while ((low < arr.length - 1 && arr[low] <= arr[low + 1])) {
    low += 1;
  }

  if (low === arr.length - 1) { // if the array is sorted
    return 0;
  }

  // find the first number out of sorting order from the end
  while (high > 0 && arr[high] >= arr[high - 1]) {
    high -= 1;
  }

  // find the maximum and minimum of the subarray
  let subarrayMax = -Infinity,
    subarrayMin = Infinity;
  for (k = low; k < high + 1; k++) {
    subarrayMax = Math.max(subarrayMax, arr[k]);
    subarrayMin = Math.min(subarrayMin, arr[k]);
  }

  // extend the subarray to include any number which is bigger than the minimum of the subarray
  while (low > 0 && arr[low - 1] > subarrayMin) {
    low -= 1;
  }
  // extend the subarray to include any number which is smaller than the maximum of the subarray
  while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
    high += 1;
  }

  return high - low + 1;
}

```
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
## Find Middle of a Linked List
```javascript

function find_middle_of_linked_list(head) {
  let slow = head,
    fast = head;
  while ((fast !== null && fast.next !== null)) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
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
  // abccdefak
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
    charIndexMap[rightChar] = windowEnd; // {a: 0, b: 1, c : 2}
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
## Length of Longest Substring with 1s and 0s
```javascript
function length_of_longest_substring(arr, k) {
  let windowStart = 0,
    maxLength = 0,
    maxOnesCount = 0;

  // Try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxOnesCount += 1;
    }

    // Current window size is from windowStart to windowEnd, overall we have a maximum of 1s
    // repeating 'maxOnesCount' times, this means we can have a window with 'maxOnesCount' 1s
    // and the remaining are 0s which should replace with 1s.
    // now, if the remaining 0s are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' 0s
    if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
      if (arr[windowStart] === 1) {
        maxOnesCount -= 1;
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
```
## Permutation in a String (hard)
```javascript
/*
startWindow = 0
endWindow = startWindow+3
hashMap = {pattern[n]: frequency of that char}
iterate along the length of the string comparing str.length chars at a time
if the string char matches a key in our hashmap, decrement frequency, when freq goes back down to 0, increase matched
if length of the window is greater than the size of the pattern we must move startWindow and increment frequency/ decrementing matchedcount if the increment is at 0
when matchcount is same number as the number of keys in hashmap return true
*/
function find_permutation(str, pattern) {
  let windowStart = 0,
    matched = 0,
    charFrequency = {};

  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  // Our goal is to match all the characters from the 'charFrequency' with the current window
  // try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      // Decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      return true;
    }

    // Shrink the sliding window
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  return false;
}

```
## Words Concatenation (hard)
```javascript
function find_word_concatenation(str, words) {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  wordFrequency = {};

  words.forEach((word) => {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word] += 1;
  });

  const resultIndices = [],
    wordsCount = words.length;
  wordLength = words[0].length;

  for (i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
    const wordsSeen = {};
    for (j = 0; j < wordsCount; j++) {
      next_word_index = i + j * wordLength;
      // Get the next word from the string
      word = str.substring(next_word_index, next_word_index + wordLength);
      if (!(word in wordFrequency)) { // Break if we don't need this word
        break;
      }

      // Add the word to the 'wordsSeen' map
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;


      // no need to process further if the word has higher frequency than required
      if (wordsSeen[word] > (wordFrequency[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) { // Store index if we have found all the words
        resultIndices.push(i);
      }
    }
  }

  return resultIndices;
}

```
# Merge Intervals

# Modified Binary Search
## Order-agnostic Binary Search (easy)
```javascript
function binary_search(arr, key) {
  let start = 0;
  end = arr.length - 1;
  isAscending = arr[start] < arr[end];
  while (start <= end) {
    // calculate the middle of the current range
    mid = Math.floor(start + (end - start) / 2);

    if (key === arr[mid]) {
      return mid;
    }
    if (isAscending) { // ascending order
      if (key < arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else { // key > arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    } else { // descending order
      if (key > arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else { // key < arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    }
  }

  return -1; // element not found
}
```
## Ceiling of a Number (medium)
```javascript
function search_ceiling_of_a_number(arr, key) {
  const n = arr.length;
  if (key > arr[n - 1]) { // if the 'key' is bigger than the biggest element
    return -1;
  }

  let start = 0;
  let end = n - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else { // found the key
      return mid;
    }
  }
  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  // we are not able to find the element in the given array, so the next big number will be arr[start]
  return start;
}
```

## Rotation Count (medium)
```javacript
function count_rotations(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);

    // if mid is greater than the next element
    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }

    // if mid is smaller than the previous element
    if (mid > start && arr[mid - 1] > arr[mid]) {
      return mid;
    }

    if (arr[start] < arr[mid]) { // left side is sorted, so the pivot is on right side
      start = mid + 1;
    } else { // right side is sorted, so the pivot is on the left side
      end = mid - 1;
    }
  }
  return 0; // the array has not been rotated
}
```
