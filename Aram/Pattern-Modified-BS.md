# Question #1 Order Agnostic Binary Search
## Time: O(log n) --- Space: O(1)

###### Given a sorted array of numbers, find if a given number ‘key’ is present in the array. Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. You should assume that the array can have duplicates.
###### Write a function to return the index of the ‘key’ if it is present in the array, otherwise return -1.
 
 ```JavaScript
const binarySearch = function(array, key) {
  let start = 0
  let end = array.length - 1
  let isAscending = array[start] < array[end]

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2)
    if (key === array[mid]) {
      return mid
    }
    if (isAscending) {
      if (key < array[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else {
      if (key > array[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    }
  }
  return -1
}

 ```

 # Question #2 Ceiling of a Number
 ## Time: O(log n) --- Space: O(1)

 ###### Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.
 ###### Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

 ```JavaScript


const numberCeiling = (arr, key) {

  let start = 0, end = arr.length - 1

  const n = arr.length
  if (key > arr[n - 1]) {
    return -1
  }

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2)
    if (key < arr[mid]) {
      end = mid - 1
    } else if (key > arr[mid]) {
      start = mid + 1
    } else {
      return mid;
    }
  }
  return -1
}
 ```

 # Question #3 Next Letter
 ## Time: --- Space: 
 ###### Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.
 ##### Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.
 ###### Write a function to return the next letter of the given 'key'.

 ```JavaScript
 const nextLetter = (array, key) => {
   let start = 0, end = array.length -1

   
 }




 ```