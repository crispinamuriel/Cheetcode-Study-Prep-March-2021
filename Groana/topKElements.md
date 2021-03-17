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

##### Brute Force O(N * logN )
```Javascript

```

#### Brute Force O(N * logN )
```Javascript

```