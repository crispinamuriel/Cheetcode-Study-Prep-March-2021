
## BINARY SEARCH
Given aN array of numbers, find if a given number ‘key’ is present in the array.
```Javascript 
function binary_search(arr, key) {
  let start = 0;
  let end = arr.length - 1;

  arr.sort((a,b)=> a-b)

  while (start <= end) {
    // calculate the middle of the current range
    mid = Math.floor(start + (end - start) / 2);
    if (key === arr[mid]) {
      return mid;
    }
      if (key < arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else { // key > arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
  }

  return -1; // element not found
}
```
> Time/Space: O(logN)/O(1)

## Ceiling of a Number (medium)
Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’. 
Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.
Example:
Input: [1, 3, 8, 10, 15], key = 12
Output: 4

```Javascript
const search_ceiling_of_a_number = function(arr, key) {
  
  if (key > arr[arr.length-1])return -1

  let start = 0
  let end = arr.length-1

  while (start <= end){
    let mid = Math.floor(start + (end-start)/2)
    if (key > arr[mid]){
      start = mid+1
    }else if ( key < arr[mid]){
      end = mid -1
    }else {
      return mid
    }
  }
  return start
};
```
> Time/ Space: O(logN)/O(1)

## Next Letter (medium)
Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.Assume the given array is a circular list. Write a function to return the next letter of the given ‘key’.
```Javascript
const search_next_letter = function(letters, key) {
  let start = 0
  let end = letters.length - 1

  if (key > letters[letters.length-1] || key < letters[0]) return letters[0]
  
  while ( start <= end){
    let mid = Math.floor(start + (end-start)/2)
    let midValue = letters[mid]
    if (key >= midValue){
      start = mid + 1
    }else {
      end = mid - 1
    }
  }
  return letters[start % letters.length];
};
```
> Time/Space: O(logN)/O(1)
