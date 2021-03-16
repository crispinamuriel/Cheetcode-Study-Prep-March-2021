# Clean Code Readme

## Two Sum

https://leetcode.com/problems/two-sum/

Given an array of integers, find two numbers such that they add up to target.

The function twoSum should return indicies of the two values that add up to the target.

Solutions:

Brute Force - Nested For Loop - Runtime O(n^2), O(1) constant space
Optimal - Hash Map - O(n) Runtime , O(n) space complexity

```
var twoSum = function(nums, target) {

    const map = new Map();

    for(let i = 0; i < nums.length; i++) {

        const compliment = target - nums[i];

        if(map.has(compliment)) {
            return [map.get(compliment), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return -1;
};
```


## Two Sum II
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

Optimal Solution - Binary Search - O(n log n) runtime, O(1) space complexity

Binary search solution is optimal because the hashtable will cost is O(n) space complexity. It does not make use of the fact that the input array is sorted. The space complexity of of BS is O(1).


```
function twoSum(numbers, target) {
   // Assume input is already sorted.
   for (let i = 0; i < numbers.length; i++) {
      let j = bsearch(numbers, target - numbers[i],  i + 1);
      if (j != -1) {
        return [i + 1, j + 1];
    }
    throw new Error("No two sum solution");
  }

  function bsearch(arr, key, start) {
    let left = start
    let right = arr.length - 1;
    while (left < right) {
        let midpoint = Math.floor((left + right) / 2);
        if (arr[midpoint] < key) {
          left = midpoint + 1;
        } else {
          right = midpoint;
        }
    }
    return (left == right && arr[left] == key) ? left : -1;
  }
}
```



Two Pointer - O(n) Runtime, O(1) Space complexity
```
var twoSum = function(numbers, target) {
    // This array is sorted so we can bet on the fact that
    // if the value our pointers are on isn't what we want
    // moving left will decrease value, and moving right will increase value

    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {

        if(numbers[left] + numbers[right] === target) return [left + 1, right + 1];

        if(numbers[left] + numbers[right] > target) right--;

        if(numbers[left] + numbers[right] < target) left++;
    }
    return -1;
};
```

## Two Sum III

implement TwoSum class

```
class TwoSum {
  constructor() {
    this.db = new Map();
  }
  add(num) {
    this.stack.push(num);
    console.log(this.stack);
  }
  find(target) {
    //TODO: find numbers inside stack/db that add to target
  }
}

let two = new TwoSum();

two.add(1);
two.find(2);
two.add(3);
```

## Valid Palinddrome

 https://oj.leetcode.com/problems/valid-palindrome/

given a string, determin if it is a  palindrome, considering only alphanumeric ccaracters andd ignoring cases.

```
// Optimal Solution
function isPalindrome(s) {
  if (s.length === 1) return true; // "a" is already a palindrome, no further work needed

  s = s.replace(/[^a-zA-Z0-9]+/g, ''); // replace any characters that aren't alphanumeric with nothing, i.e. delete them ("^" is a negation similar to "!"; it means "match on anything not in the square brackets"; "g" means greedy. i.e. replace all occurences)
  s = s.toUpperCase() // to avoid false negatives caused by case

  // set "r" pointer after modifying the string to avoid out of bounds errors
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l++] !== s[r--]) return false;
  }

  return true;
}

```

## Implement strstr()

https://leetcode.com/problems/implement-strstr/

Implement strstr() Returns the index of the first occurence of needle in haystack or -1 if needle is  not  part  of haystacck
