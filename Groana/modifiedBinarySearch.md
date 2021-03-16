## Binary Search

```Javascript
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length -1;

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);

    if (arr[middle] === target) return middle;

    if (target > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1
}
```

## Order-agnostic Binary Search (easy)
Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

```Javascript
function binary_search(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let isAscending = arr[start] < arr[end];

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
Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

!! 

```Javascript
function search_ceiling_of_a_number(arr, key) {
  let start = 0;
  let end = arr.length - 1; 

  if (key > arr[end]) { // if the 'key' is bigger than the biggest element
    return -1;
  }
  
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

## Floor of a Number (medium)

```Javascript
function search_floor_of_a_number(arr, key) {
  if (key < arr[0]) { // if the 'key' is smaller than the smallest element
    return -1;
  }

  let start = 0;
  let end = arr.length - 1;
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
  // we are not able to find the element in the given array, so the next smaller number will be arr[end]
  return end;
}
```


## Next Letter (medium)
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

Write a function to return the next letter of the given ‘key’.

```Javascript
function search_next_letter(letters, key) {
  let start = 0;
  let end = letters.length - 1;
  if (key < letters[0] || key > letters[end]) {
    return letters[0];
  }

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (key < letters[mid]) {
      end = mid - 1;
    } else { // key >= letters[mid]:
      start = mid + 1;
    }
  }
  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  return letters[start % letters.length];
}
```

## Number Range (medium)
Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

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