## Binary Search

Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.
```Javascript
function indexEqualsValueSearch(arr) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start <= end) {
    let middle = Math.floor(start + (end - start)/2);
    
    if (middle === arr[middle]) return middle;
    
    if (arr[middle] < middle) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
```

#### Order-agnostic Binary Search (easy)
Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1

```Javascript
function binary_search(arr, key) {
  let start = 0;
  end = arr.length - 1;
  isAscending = arr[start] < arr[end];
  
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

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

#### Ceiling of a Number (medium)
Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

```Javascript
function search_ceiling_of_a_number(arr, key) {
  const n = arr.length;
  if (key > arr[n - 1]) { 
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
    } else { 
      return mid;
    }
  }
  return start;
}
```

#### Next Letter (medium)
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

```Javascript
function search_next_letter(letters, key) { // key = 'b'
  const n = letters.length;    // 4
  if (key < letters[0] || key > letters[n - 1]) {
    return letters[0];
  }

  let start = 0;
  let end = n - 1;
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < letters[mid]) {
      end = mid - 1;
    } else { // key >= letters[mid]:
      start = mid + 1;
    }
  }
  return letters[start % n]; // the answer is -1;
}
```

#### Number Range (medium)
Given an array of lowercase letters sorted in ascending order, Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

```Javascript
function find_range(arr, key) {
  result = [-1, -1];
  result[0] = binary_search(arr, key, false);
  if (result[0] !== -1) { // no need to search, if 'key' is not present in the input array
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