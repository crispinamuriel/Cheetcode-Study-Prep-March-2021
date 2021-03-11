# Question #1 Maximum Sum Subarray of Size

## Time: --- Space

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

## Time: --- Space:

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

# Longest Substring with K Distinct Characters
## Time: --- Space:

###### Given a string, find the length of the longest substring in it with no more than K distinct characters
```JavaScript
const distincChar = (string, k) => {
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

# Question #3 Fruits into Baskets
## Time: --- Space:
###### Given an array of characters where each represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit
###### You can start with any tree but once you have started you can't skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will not stop when you have to pick from a third fruit type
###### Write a function to return the maximum number of fruits in both the baskets

```JavaScript

const distincChar = (string, k) => {
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


