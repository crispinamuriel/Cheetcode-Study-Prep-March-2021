/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].
Follow up: Could you write an algorithm with O(log n) runtime complexity?
 */

// const binarySearch = (arr, elem) => {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === elem) return mid;

//     if (arr[mid] < elem) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };

function find_range(arr, key) {
  let result = [-1, -1];
  result[0] = searchRange(arr, key, false);
  if (result[0] !== -1) { // no need to search, if 'key' is not present in the input array
    result[1] = searchRange(arr, key, true);
  }

  return result;
}

// modified Binary Search
function searchRange(arr, key, findMaxIndex) {
  let keyIndex = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
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


// console.log(binarySearch([5, 7, 7, 8, 8, 10], 8));
// console.log(binarySearch([5], 5));

console.log(find_range([5, 7, 7, 8, 8, 10], 8)); // [3,4]
console.log(find_range([5, 7, 7, 8, 8, 10], 6)); // [-1,-1]
console.log(find_range([], 0)); // [-1,-1]
