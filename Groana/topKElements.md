## Heaps

### Top 'K' Numbers (easy)
Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

##### Brute Force O(N * logN )
```Javascript
const find_k_largest_numbers = function(nums, k) {
  let result = []
  nums.sort((a,b) => a - b);

  while (k > 0) {
    result.push(nums[nums.length - k]);
    k--;
  }
  return result;
};
```

##### Optimized Solution O(N * logK)
```Javascript
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_k_largest_numbers(nums, k) {
  const minHeap = new Heap([], null, ((a, b) => b - a));
  // put first 'K' numbers in the min heap
  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }
  // the heap has the top 'K' numbers, return them in a list
  return minHeap.toArray();
}
```

## Kth Smallest Number (easy)
Given an unsorted array of numbers, find Kth smallest number in it.

```Javascript
const Heap = require('./collections/heap'); //http://www.collectionsjs.com

function find_Kth_smallest_number(nums, k) {
  let maxHeap = new Heap();

  for (i = 0; i < k; i++) {
    maxHeap.push(nums[i]);
  }
  // go through the remaining numbers of the array, if the number from the array is smaller than the
  // top(biggest) number of the heap, remove the top number from heap and add the number from array
  for (i = k; i < nums.length; i++) {
    if (nums[i] < maxHeap.peek()) {
      maxHeap.pop();
      maxHeap.push(nums[i]);
    }
  }
  // the root of the heap has the Kth smallest number
  return maxHeap.peek();
}
```

## 'K' Closest Points to the Origin (easy)
Given an array of points in the a 2D2D plane, find ‘K’ closest points to the origin.

```Javascript

```