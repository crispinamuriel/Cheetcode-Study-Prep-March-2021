# Binary Search Template

```
const binaryS = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high)/ 2); // index to be returned
    let guess = arr[mid];   // keeping the value at the mid index

    if(guess === target) return mid;

    else if (guess > target) {   // if my guess is too high, move our highpointer to the left of this guess's index (mid)
      high = mid - 1;
    } else if (guess < target) { // if my guess is too low, move our lowpionter to the right of this guess's index (mid)
      low = mid + 1;
    }
  }
  return -1;
}



console.log(binaryS([4, 6, 10], 10));
console.log(binaryS([1, 2, 3, 4, 5, 6, 7], 5));
```
