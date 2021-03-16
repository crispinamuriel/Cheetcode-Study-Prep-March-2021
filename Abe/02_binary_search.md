# Binary Search

```markdown
Given an array of integers nums which 
is sorted in ascending order, and an
integer target, write a function to search 
target in nums. If target exists, then return its index.
Otherwise, return -1.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
```
## Iterative
```python
class Solution:
    def search(self, nums, target):
        left, right = 0, len(nums) - 1
        
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            if target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        return -1
```

## Recursive

```python
def binary_search(arr, low, high, x):

    if high >= low:
 
        mid = (high + low) // 2
        
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            return binary_search(arr, low, mid - 1, x)
         else:
            return binary_search(arr, mid + 1, high, x)
 
    else:
        return -1
 
```