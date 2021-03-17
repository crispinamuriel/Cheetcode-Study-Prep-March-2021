# Order-agonstic binary search

Time: O(logN); Space: O(1)

Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.

Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.

!!NB
The safest way to find the middle of two numbers without getting an integer overflow is as follows:

middle = start + (end-start)/2

```js
function binary_search(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  const isAscending = arr[start] < arr[end];
  while (start <= end) {
    // calculate the middle of the current range
    mid = Math.floor(start + (end - start) / 2);

    if (key === arr[mid]) {
      return mid;
    }
    if (isAscending) {
      // ascending order
      if (key < arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else {
        // key > arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    } else {
      // descending order
      if (key > arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else {
        // key < arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    }
  }

  return -1; // element not found
}
```
