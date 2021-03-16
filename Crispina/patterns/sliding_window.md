# Sliding Window Template
### Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
```
/*
SlidingWindow approach for Average size of Subarrays
Create a fn
keep a result
keep a windowSum
keep a windowStart

for(windowEnd)
    windowSum += arr[windowEnd]      // add each element to the sum
    // slide the window, we don't need to slide if we've not hit the required size of k
    ?? How do we slide the window...  the window is increasing in the for loop. To slide the window you have to create a condition of when the window is the correct size
    ?? How do we know when the window is the correct size. To know when the window is the correct size, you have to check if the index we're at is >= to k - 1?
    // calculate the averate
    // subtract the element going out
    // side the window ahead
  }
} // return
*/


const findAverageSub = (arr, k) => {
  const result = [];
  let windowSum = 0.0;
  let windowStart = 0;

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    if(windowEnd >= k - 1) {
      result.push(windowSum / k);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }
  return result;
}


const result = findAverageSub([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
console.log(`Averages of subarrays of size K: ${result}`);
```

## Find Max SubArray

```
function max_sub_array_of_size_k(k, arr) {
  let maxSum = 0,
    windowSum = 0;

  for (i = 0; i < arr.length - k + 1; i++) {
    windowSum = 0;
    for (j = i; j < i + k; j++) {
      windowSum += arr[j];
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}


console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`);
console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`);


```
