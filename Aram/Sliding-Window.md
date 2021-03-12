# Question #1 Maximum Sum Subarray of Size

## Time: O(n) --- Space: O(1)

###### Given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray of size 'k'.

```JavaScript
const maxSubArr = function(k, array) {
  let maxSum = 0
  let runningSum = 0
  let start = 0

  for (let end = 0; end < array.length; end++) {
    runningSum += array[end]
    if (end - start + 1 >= k) {
       maxSum = Math.max(maxSum, runningSum)
       start++
       runningSum -= array[start - 1]
    }
  }
  return maxSum
}
```

# Question #2 Smallest Subarray with a Given Sum

## Time: O(n) --- Space: O(1)

###### Given an array of positive numbers and a positive number 'S', find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0 if no subarray exists.

```JavaScript
const subarraySum = (nums, k) => {
  let windowSum = 0;
  let start = 0;
  let windowLength = Infinity

  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end];

    while (windowSum >= k) {
      windowLength = Math.min(windowLength, end - start + 1);
      windowSum -= nums[end];
      start++;
    }
  }
  if (windowLength === Infinity) {
    return 0
  }
  return windowLength
}
```

# Question #3 Longest Substring with K Distinct Characters

## Time: O(n) --- Space: O(n)

###### Given a string, find the length of the longest substring in it with no more than K distinct characters

```JavaScript
const distinctChar = (string, k) => {
  let start = 0
  let maxLength = 0
  let reference = {}

  for (let end = 0; end < string.length; end++) {
    const rightChar = string[end]
    if (!(rightChar in reference)) {
      reference[rightChar] = 0
    }
    reference[rightChar] += 1
    while (Object.keys(reference).length > k) {
      const leftChar = string[start]
      reference[leftChar] -= 1
      if (reference[leftChar] === 0) {
        delete reference[leftChar]
      }
      start += 1
    }
    maxLength = Math.max(maxLength, end - start + 1)

  }
  return maxLength
}
```

# Question #4 Fruits into Baskets

## Time: O(n) --- Space: O(1)

###### Given an array of characters where each represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit

###### You can start with any tree but once you have started you can't skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will not stop when you have to pick from a third fruit type

###### Write a function to return the maximum number of fruits in both the baskets

```JavaScript

const fruitCount = (string, k) => {
    let start = 0
    let maxLength = 0
    let reference = {}

    for (let end = 0; end < string.length; end++) {
      const rightChar = string[end]
      if (!(rightChar in reference)) {
        reference[rightChar] = 0
      }
      reference[rightChar] += 1
      while (Object.keys(reference).length > k) {
        const leftChar = string[start]
        reference[leftChar] -= 1
        if (reference[leftChar] === 0) {
          delete reference[leftChar]
        }
        start += 1
      }
      maxLength = Math.max(maxLength, end - start + 1)

    }
    return maxLength
  }

```

# Question #5 No-repeat Substring

## Time: O(n) --- Space: O(1)

###### Given a string, find the length of the longest substring which has no repeating characters.

```JavaScript
const noRepeat = (string) => {
  let start = 0
  let maxLength = 0
  let reference = {}

  for (let end = 0; end < string.length; end++) {
    const rightChar = string[end]
    if (rightChar in reference) {
      start = Math.max(start, reference[rightChar] + 1)
    }
    reference[rightChar] = end
    maxLength = Math.max(maxLength, end - start + 1)
  }
  return maxLength
}
```

# Question #6 Longest Substring with Same Letters after Replacement

## Time: O(n) --- Space: O(1)

###### Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

```JavaScript
const afterReplacement = (string, k) => {
  let start = 0
  let maxCount = 0
  let maxLength = 0
  let reference = {}

  for (let end = 0; end < string.length; end++) {
    const rightChar = string[end]
    if (!(rightChar in reference)) {
      reference[rightChar] = 0
    }
    reference[rightChar] += 1
    maxCount = Math.max(maxCount, reference[rightChar])
    if ((end - start + 1 - maxCount) > k) {
      leftChar = reference[start]
      reference[leftChar] -= 1
      start += 1
    }
    maxLength = Math.max(maxLength, end - start + 1)
  }
  return maxLength
}
```

# Question #7 Longest Subarray with ones after Replacement

## Time: O(n) --- Space: O(1)

###### Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

```JavaScript
const replacementOnes = (array, k) => {
  let start = 0
  let maxCount = 0
  let maxLength = 0

  for (let end = 0; end < array.length; end++) {
    if (arrary[i] === 1) {
      maxCount += 1
    } 
    if ((end - start + 1 - maxCount) > k) {
      if (array[start] === 1) {
        maxCount -= 1
      }
      start += 1
    }
    maxLength = Math.max(maxLength, end - start + 1)
  }
  return maxLength
}
```

# Problem Challenge #1 Permutation in a String
## Time: O(n) --- Space: O(n)
###### Given a string and a pattern find out if the string contains any permutation of the pattern

###### Permutation is defined as the re-arranging of the characters of the string

```JavaScript
const stringPerm = (string, pattern) => {
  let start = 0
  let match = 0
  let reference = {}

  for (let end = 0; end < pattern.length; end++) {
    const char = pattern[i]
    if (!(char in reference)) {
      reference[char] = 0
    }
    reference[char] += 1
  }
  for (let end = 0; end < string.length; end++) {
    rightChar = string[end]
    if (rightChar in reference) {
      reference[rightChar] -= 1
      if (reference[rightChar] === 0) {
        matched += 1
      }
    }
    if (matched === Object.keys(reference).length) {
      return true
    }
    if (end >= pattern.length - 1) {
      leftChar = string[start]
      if (leftChar in reference) {
        if (reference[leftChar] === 0) {
          matched -= 1
        }
        reference[leftChar] += 1
      }
    }
  }
  return false
}

```
