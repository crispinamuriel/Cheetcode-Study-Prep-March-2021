# Question #1 Maximum Sum Subarray of Size

## Time: --- Space

###### Given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray of size 'k'.

```JavaScript
const maxSubArr = function(k, array) {
  let maxSum = 0
  let runningSum = 0
  let start = 0

  for (let end = 0; end < array.length; end++) {
    runningSum += array[end]
    if (end - start + 1 >= k) {
       maxSum = Math.max(maxSum, runningSum)
       start++
       runningSum -= array[start - 1]
    }
  }
  return maxSum
}
```
