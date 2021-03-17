// ## Maximum Sum Subarray of Size K (easy)
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
// Example:
// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].


const max_sub_array_of_size_k = function(k, arr) {
  let maxSum = 0
  let windowSum = 0
  let windowStart = 0
  let windowEnd = 0

  //As long as the end of our window doesn't go beyond the array
  while (windowEnd < arr.length){
    windowSum += arr[windowEnd] 
    if (windowEnd >= k-1){  //window is size K
      maxSum = Math.max(windowSum,maxSum)  //window is size K so store the sum
      //after storing the max sum we can now shrink the window
      windowSum -= arr[windowStart] 
      windowStart++
    }
    windowEnd++
  }
  return maxSum
};
console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])) //9  //k-1 = 2
console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]))//7

/* Notes: Although we add to the sum at every iteration we don't STORE the sum until
the window is of size K.
*/