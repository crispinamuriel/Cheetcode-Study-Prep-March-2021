# Multiple Pointers

### Template
Usually for a sorted array. You will have these 2 variables in function scope:
* Left
* Right

Pointing to the indices of the array being iterated over. Sometimes 3 or 4 vars depending on the problem's complexity.

For Two Sum, you start with the indices on opposite ends of the array. Decrement the right index and increment the left index to get closer to the target.

## Two Sum / Pair With Target Sum
Time: O(N) | Space: O(1)
```javascript
const pair_with_targetsum = function (arr, target_sum) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] === target_sum) {
      return [left, right];
    } else if (arr[left] + arr[right] > target_sum) {
      right--;
    } else {
      left++;
    }
  }
  return [];
};
```
