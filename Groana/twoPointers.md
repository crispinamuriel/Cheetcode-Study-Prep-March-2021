## Two Pointers
```
```

## Pair with Target Sum (easy)
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

```Javascript
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

## Remove Duplicates (easy)
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.

```Javascript
const remove_duplicates = (arr) => {
  let nextNonDuplicate = 1;
  let next = 1;

  while (next < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[next]) {
      arr[nextNonDuplicate] = arr[next];
      nextNonDuplicate++;
    }
    next++;
  }
  return nextNonDuplicate;
};
```

## Squaring a Sorted Array (easy)
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

```Javascript
function make_squares(arr) {
  const n = arr.length;
  squares = Array(n).fill(0);
  let highestSquareIdx = n - 1;
  let left = 0,
    right = n - 1;
  while (left <= right) {
    let leftSquare = arr[left] * arr[left],
      rightSquare = arr[right] * arr[right];
    if (leftSquare > rightSquare) {
      squares[highestSquareIdx] = leftSquare;
      left += 1;
    } else {
      squares[highestSquareIdx] = rightSquare;
      right -= 1;
    }
    highestSquareIdx -= 1;
  }

  return squares;
}
```

## Triplet Sum to Zero (medium)
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

```Javascript
function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  const triplets = [];
  for (i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) { // skip same element to avoid duplicate triplets
      continue;
    }
    search_pair(arr, -arr[i], i + 1, triplets);
  }

  return triplets;
}


function search_pair(arr, target_sum, left, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target_sum) { // found the triplet
      triplets.push([-target_sum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate triplets
      }
    } else if (target_sum > current_sum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}
```

## Triplet Sum Close to Target (medium)
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

```Javascript
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

      if (Math.abs(target_diff) < Math.abs(smallest_difference)) {
        smallest_difference = target_diff; // save the closest difference
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

## Triplets with Smaller Sum (medium)
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

```Javascript
function triplet_with_smaller_sum(arr, target) {
  arr.sort((a, b) => a - b);
  let count = 0;
  for (i = 0; i < arr.length - 2; i++) {
    count += search_pair(arr, target - arr[i], i);
  }
  return count;
}


function search_pair(arr, target_sum, first) {
  let count = 0;
  let left = first + 1,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] < target_sum) { // found the triplet
      // since arr[right] >= arr[left], therefore, we can replace arr[right] by any number between
      // left and right to get a sum less than the target sum
      count += right - left;
      left += 1;
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
  return count;
}
```

## Subarrays with Product Less than a Target (medium)
Given an array with positive numbers and a target number, find all of its contiguous subarrays whose product is less than the target number.

```Javascript
function find_subarrays(arr, target) {
  let result = [],
    product = 1,
    left = 0;
  for (right = 0; right < arr.length; right++) {
    product *= arr[right];
    while ((product >= target && left < arr.length)) {
      product /= arr[left];
      left += 1;
    }
    // since the product of all numbers from left to right is less than the target therefore,
    // all subarrays from left to right will have a product less than the target too; to avoid
    // duplicates, we will start with a subarray containing only arr[right] and then extend it
    const tempList = new Deque();
    for (let i = right; i > left - 1; i--) {
      tempList.unshift(arr[i]);
      result.push(tempList.toArray());
    }
  }
  return result;
}
```

## Dutch National Flag Problem (medium)
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it is called Dutch National Flag problem.

```Javascript
function dutch_flag_sort(arr) {
  let low = 0,
    high = arr.length - 1,
    i = 0;
  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]]; 
      i += 1;
      low += 1;
    } else if (arr[i] === 1) {
      i += 1;
    } else { 
      [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
      high -= 1;
    }
  }
}
```

## Quadruple Sum to Target (medium)
Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

```Javascript
function search_quadruplets(arr, target) {
  arr.sort((a, b) => a - b)
  const quadruplets = [];
  for (let i = 0; i < arr.length - 3; i++) {
    // skip same element to avoid duplicate quadruplets
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      // skip same element to avoid duplicate quadruplets
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }
      search_pairs(arr, target, i, j, quadruplets);
    }
  }
  return quadruplets;
}


function search_pairs(arr, targetSum, first, second, quadruplets) {
  let left = second + 1,
    right = arr.length - 1;
  while ((left < right)) {
    sum = arr[first] + arr[second] + arr[left] + arr[right];
    if (sum === targetSum) { // found the quadruplet
      quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while ((left < right && arr[left] === arr[left - 1])) {
        left += 1; // skip same element to avoid duplicate quadruplets
      }
      while ((left < right && arr[right] === arr[right + 1])) {
        right -= 1; // skip same element to avoid duplicate quadruplets
      }
    } else if (sum < targetSum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}
```

## Comparing Strings containing Backspaces (medium)
Given two strings containing backspaces (identified by the character ‘#’), check if the two strings are equal.

```Javascript
function backspace_compare(str1, str2) {
  // use two pointer approach to compare the strings
  let index1 = str1.length - 1,
    index2 = str2.length - 1;
  while (index1 >= 0 || index2 >= 0) {
    let i1 = get_next_valid_char_index(str1, index1),
      i2 = get_next_valid_char_index(str2, index2);
    if (i1 < 0 && i2 < 0) { // reached the end of both the strings
      return true;
    }
    if (i1 < 0 || i2 < 0) { // reached the end of one of the strings
      return false;
    }
    if (str1[i1] !== str2[i2]) { // check if the characters are equal
      return false;
    }

    index1 = i1 - 1;
    index2 = i2 - 1;
  }
  return true;
}


function get_next_valid_char_index(str, index) {
  let backspaceCount = 0;
  while (index >= 0) {
    if (str[index] === '#') { // found a backspace character
      backspaceCount += 1;
    } else if (backspaceCount > 0) { // a non-backspace character
      backspaceCount -= 1;
    } else {
      break;
    }

    index -= 1; // skip a backspace or a valid character
  }

  return index;
}
```

## Minimum Window Sort (medium)
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

```Javascript
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