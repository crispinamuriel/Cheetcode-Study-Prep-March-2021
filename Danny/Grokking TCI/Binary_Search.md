# Binary Search

## Template

## My Naive Solution
```js
const binary_search = function(arr, key) {
  let start = 0;
  let end = arr.length-1;
  let isAcc = arr[start] < arr[end];
  while (start <= end){
    let middle = Math.floor(start + (end - start) / 2);
    if(arr[middle] === key){
        return middle;
    }
    else if (isAcc) {
        if(key < arr[middle]){
          end = middle-1;
        } else {
          start = middle+1;
        }
    }
    else {
      if(key < arr[ middle]){
        start = middle+1;
      } else {
        end = middle-1;
      }
    }
  }
  return -1;
};
```
