/*
 Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
 */

const pair_with_target_sum = (arr, targetSum) => {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
      let diff = targetSum - arr[i];
      if (diff in hash) {
          return [hash[diff], i]
      }
      hash[arr[i]] = i;
  }
  return [-1, -1];
};

console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(pair_with_target_sum([2, 5, 9, 11], 11)); // [0, 2]
