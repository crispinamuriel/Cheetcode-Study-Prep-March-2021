# Modiified Binary Search

# Order-agnostic Binary Search

```
Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

Example 1:

Input: [4, 6, 10], key = 10
Output: 2
Example 2:

Input: [1, 2, 3, 4, 5, 6, 7], key = 5
Output: 4
Example 3:

Input: [10, 6, 4], key = 10
Output: 0
Example 4:

Input: [10, 6, 4], key = 4
Output: 2
```

```javascript
// running time O(logn) and time O(1)
const binary_search = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  // finding is it acc or des
  let isAcc = arr[start] < arr[end];
  /**
   find key and return index of key   
    while arra[midde] != key 
      change start and middle based on that
    if broken found key and return key
   */
  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);
    //what direction to go in
    if (arr[middle] == key) {
      return middle;
    } else if (isAcc) {
      if (key < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if (key < arr[middle]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return -1;
};
```

# Ceiling of a Number

```
Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

Example 1:

Input: [4, 6, 10], key = 6
Output: 1
Explanation: The smallest number greater than or equal to '6' is '6' having index '1'.
Example 2:

Input: [1, 3, 8, 10, 15], key = 12
Output: 4
Explanation: The smallest number greater than or equal to '12' is '15' having index '4'.
Example 3:

Input: [4, 6, 10], key = 17
Output: -1
Explanation: There is no number greater than or equal to '17' in the given array.
Example 4:

Input: [4, 6, 10], key = -1
Output: 0
Explanation: The smallest number greater than or equal to '-1' is '4' having index '0'.
```

```javascript
// running time: O(log n) and space O(1)
const search_ceiling_of_a_number = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  if (key > arr[arr.length - 1]) {
    return -1;
  }
  while (start <= end) {
    let middle = Math.floor(start + (end - start) / 2);
    if (arr[middle] === key) {
      return middle;
    } else if (key < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }

  return start;
};
```

# Next Letter

```
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

Example 1:

Input: ['a', 'c', 'f', 'h'], key = 'f'
Output: 'h'
Explanation: The smallest letter greater than 'f' is 'h' in the given array.
Example 2:

Input: ['a', 'c', 'f', 'h'], key = 'b'
Output: 'c'
Explanation: The smallest letter greater than 'b' is 'c'.
Example 3:

Input: ['a', 'c', 'f', 'h'], key = 'm'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'm' is 'a'.
Example 4:

Input: ['a', 'c', 'f', 'h'], key = 'h'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest letter greater than 'h' is 'a'.
```

```javascript
// space O(N) and O(1)
function search_next_letter(letters, key) {
  const n = letters.length;
  if (key < letters[0] || key > letters[n - 1]) {
    return letters[0];
  }

  let start = 0;
  let end = n - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < letters[mid]) {
      end = mid - 1;
    } else {
      // key >= letters[mid]:
      start = mid + 1;
    }
  }
  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  return letters[start % n];
}
```

```
Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

Example 1:

Input: [4, 6, 6, 6, 9], key = 6
Output: [1, 3]
Example 2:

Input: [1, 3, 8, 10, 15], key = 10
Output: [3, 3]
Example 3:

Input: [1, 3, 8, 10, 15], key = 12
Output: [-1, -1]
```

```javascript
// running time: O(log N ) and space O(1)
function find_range(arr, key) {
  result = [-1, -1];
  result[0] = binary_search(arr, key, false);
  if (result[0] !== -1) {
    // no need to search, if 'key' is not present in the input array
    result[1] = binary_search(arr, key, true);
  }

  return result;
}

// modified Binary Search
function binary_search(arr, key, findMaxIndex) {
  let keyIndex = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      // key === arr[mid]
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

# Search in a Sorted Infinite Array

```
Given an infinite sorted array (or an array with unknown size), find if a given number ‘key’ is present in the array. Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

Since it is not possible to define an array with infinite (unknown) size, you will be provided with an interface ArrayReader to read elements of the array. ArrayReader.get(index) will return the number at index; if the array’s size is smaller than the index, it will return Integer.MAX_VALUE.

Example 1:

Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 16
Output: 6
Explanation: The key is present at index '6' in the array.
Example 2:

Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 11
Output: -1
Explanation: The key is not present in the array.
Example 3:

Input: [1, 3, 8, 10, 15], key = 15
Output: 4
Explanation: The key is present at index '4' in the array.
Example 4:

Input: [1, 3, 8, 10, 15], key = 200
Output: -1
Explanation: The key is not present in the array.
```

```javascript
class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) {
      return Infinity;
    }
    return this.arr[index];
  }
}

function search_in_infinite_array(reader, key) {
  // find the proper bounds first
  let start = 0;
  let end = 1;
  while (reader.get(end) < key) {
    newStart = end + 1;
    end += (end - start + 1) * 2;
    // increase to double the bounds size
    start = newStart;
  }

  return binary_search(reader, key, start, end);
}

function binary_search(reader, key, start, end) {
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < reader.get(mid)) {
      end = mid - 1;
    } else if (key > reader.get(mid)) {
      start = mid + 1;
    } else {
      // found the key
      return mid;
    }
  }

  return -1;
}
```

# Minimum Difference Element (medium)

```
Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.

Example 1:

Input: [4, 6, 10], key = 7
Output: 6
Explanation: The difference between the key '7' and '6' is minimum than any other number in the array
Example 2:

Input: [4, 6, 10], key = 4
Output: 4
Example 3:

Input: [1, 3, 8, 10, 15], key = 12
Output: 10
Example 4:

Input: [4, 6, 10], key = 17
Output: 10
```

```javascript
// running time O(logN) and space O(1)
function search_min_diff_element(arr, key) {
  if (key < arr[0]) {
    return arr[0];
  }
  const n = arr.length;
  if (key > arr[n - 1]) {
    return arr[n - 1];
  }

  let start = 0;
  let end = n - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      return arr[mid];
    }
  }

  // at the end of the while loop, 'start === end+1'
  // we are not able to find the element in the given array
  // return the element which is closest to the 'key'
  if (arr[start] - key < key - arr[end]) {
    return arr[start];
  }

  return arr[end];
}
```

# Bitonic Array Maximum

```
Find the maximum value in a given Bitonic array. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

Example 1:

Input: [1, 3, 8, 12, 4, 2]
Output: 12
Explanation: The maximum number in the input bitonic array is '12'.
Example 2:

Input: [3, 8, 3, 1]
Output: 8
Example 3:

Input: [1, 3, 8, 12]
Output: 12
Example 4:

Input: [10, 9, 8]
Output: 10
```

```javascript
function find_max_in_bitonic_array(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  // at the end of the while loop, 'start === end'
  return arr[start];
}
```

# Search Bitonic Array (medium)

```

```

```javascript
Given a Bitonic array, find if a given ‘key’ is present in it. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.

Example 1:

Input: [1, 3, 8, 4, 3], key=4
Output: 3
Example 2:

Input: [3, 8, 3, 1], key=8
Output: 1
Example 3:

Input: [1, 3, 8, 12], key=12
Output: 3
Example 4:

Input: [10, 9, 8], key=10
Output: 0
```

```
// O(logN) and O(1)
function search_bitonic_array(arr, key) {
  const maxIndex = find_max(arr);
  const keyIndex = binary_search(arr, key, 0, maxIndex);
  if (keyIndex !== -1) {
    return keyIndex;
  }
  return binary_search(arr, key, maxIndex + 1, arr.length - 1);
}

// find index of the maximum value in a bitonic array
function find_max(arr) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  // at the end of the while loop, 'start === end'
  return start;
}


// order-agnostic binary search
function binary_search(arr, key, start, end) {
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (key === arr[mid]) {
      return mid;
    }

    if (arr[start] < arr[end]) { // ascending order
      if (key < arr[mid]) {
        end = mid - 1;
      } else { // key > arr[mid]
        start = mid + 1;
      }
    } else { // descending order
      if (key > arr[mid]) {
        end = mid - 1;
      } else { // key < arr[mid]
        start = mid + 1;
      }
    }
  }
  return -1; // element is not found
}
```

# Search in Rotated Array (medium)

```
Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.

Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1. You can assume that the given array does not have any duplicates.

Example 1:

Input: [10, 15, 1, 3, 8], key = 15
Output: 1
Explanation: '15' is present in the array at index '1'.

Example 2:

Input: [4, 5, 7, 9, 10, -1, 2], key = 10
Output: 4
Explanation: '10' is present in the array at index '4'.
```

```javascript
// time O(logN) and O(1)
function search_rotated_array(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    }

    if (arr[start] <= arr[mid]) {
      // left side is sorted in ascending order
      if (key >= arr[start] && key < arr[mid]) {
        end = mid - 1;
      } else {
        // key > arr[mid]
        start = mid + 1;
      }
    } else {
      // right side is sorted in ascending order
      if (key > arr[mid] && key <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  // we are not able to find the element in the given array
  return -1;
}
```

```
How do we search in a sorted and rotated array that also has duplicates?

The code above will fail in the following example!

Example 1:

Input: [3, 7, 3, 3, 3], key = 7
Output: 1
Explanation: '7' is present in the array at index '1'.
```

```javascript
// O(logN) and space O(1)
function search_rotated_with_duplicates(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    }

    // the only difference from the previous solution,
    // if numbers at indexes start, mid, and end are same, we can't choose a side
    // the best we can do, is to skip one number from both ends as key !== arr[mid]
    if (arr[start] === arr[mid] && arr[end] === arr[mid]) {
      start += 1;
      end -= 1;
    } else if (arr[start] <= arr[mid]) {
      // left side is sorted in ascending order
      if (key >= arr[start] && key < arr[mid]) {
        end = mid - 1;
      } else {
        // key > arr[mid]
        start = mid + 1;
      }
    } else {
      // right side is sorted in ascending order
      if (key > arr[mid] && key <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  // we are not able to find the element in the given array
  return -1;
}
```

# Rotation Count (medium)

```
Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.

You can assume that the array does not have any duplicates.

Example 1:

Input: [10, 15, 1, 3, 8]
Output: 2
Explanation: The array has been rotated 2 times.

Example 2:

Input: [4, 5, 7, 9, 10, -1, 2]
Output: 5
Explanation: The array has been rotated 5 times.

Example 3:

Input: [1, 3, 8, 10]
Output: 0
Explanation: The array has been not been rotated.
```

```javascript
// time: O(logn) and O(1)
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

    if (arr[start] < arr[mid]) {
      // left side is sorted, so the pivot is on right side
      start = mid + 1;
    } else {
      // right side is sorted, so the pivot is on the left side
      end = mid - 1;
    }
  }
  return 0; // the array has not been rotated
}
```

How do we find the rotation count of a sorted and rotated array that has duplicates too?

The above code will fail on the following example!

Example 1:

Input: [3, 3, 7, 3]
Output: 3
Explanation: The array has been rotated 3 times

```javascript
// O(logn) and O(1)
function count_rotations_with_duplicates(arr) {
  let start = 0;
  end = arr.length - 1;
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2);
    // if element at mid is greater than the next element
    if (mid < end && arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }
    // if element at mid is smaller than the previous element
    if (mid > start && arr[mid - 1] > arr[mid]) {
      return mid;
    }

    // this is the only difference from the previous solution
    // if numbers at indices start, mid, and end are same, we can't choose a side
    // the best we can do is to skip one number from both ends if they are not the smallest number
    if (arr[start] === arr[mid] && arr[end] === arr[mid]) {
      if (arr[start] > arr[start + 1]) {
        // if element at start+1 is not the smallest
        return start + 1;
      }
      start += 1;
      if (arr[end - 1] > arr[end]) {
        // if the element at end is not the smallest
        return end;
      }
      end -= 1;
    } // left side is sorted, so the pivot is on right side
    else if (
      arr[start] < arr[mid] ||
      (arr[start] == arr[mid] && arr[mid] > arr[end])
    ) {
      start = mid + 1;
    } else {
      // right side is sorted, so the pivot is on the left side
      end = mid - 1;
    }
  }

  return 0; // the array has not been rotated
}
```
