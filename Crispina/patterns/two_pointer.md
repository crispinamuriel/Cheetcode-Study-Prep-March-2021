# Two Pointer Pattern

## Pair with Target Sum (easy)

/*
keep a left pointer
keep a right pointer
while the two pointers do not touch
add the values at the pointers
if the value is equal to the target return the indices

if the target is greater than the current sum move low pointer
else move high pointer

if not found return -1

*/

```
function pairTargetSum(arr, targetSum) {
  let left = 0;
  let right = arr.length - 1;
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


console.log(pair_with_target_sum([1, 2, 3, 4, 6], 6));
console.log(pair_with_target_sum([2, 5, 9, 11], 11));
```
