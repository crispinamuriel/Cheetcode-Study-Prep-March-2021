## Problem Challenge 1 - Permutation in a String (hard)

```JavaScript
const find_permutation = function(str, pattern) {
  // TODO: Write your code here
  let windowStart = 0
  let match = 0
  let frequency = {}
  //place all of the pattern values inside of a hashmap
  for (let i = 0; i < pattern.length; i++){
    if (pattern[i] in frequency){
      frequency[pattern[i]] += 1
    } frequency[pattern[i]] = 1
  }
  //sliding window
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
    let char = str[windowEnd]
    if (char in frequency){
      frequency[char] -= 1
    }
    if (frequency[char] === 0){
      match += 1
    }
    if (match === Object.keys(frequency).length){
      return true
    }
    //if windowEnd > pattern, then we need to resize the window
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in frequency) {
        if (frequency[leftChar] === 0) {
          match -= 1;
        }
        frequency[leftChar] += 1;
      }
    }
  }
  return false
};
//Time: O(m+n) since we're traversing through 2 inputs
//Space: O(n)
```

## Problem Challenge 2 - String Anagrams (hard)

```JavaScript
const find_string_anagrams = function(str, pattern) {
  result_indexes = [];
  // TODO: Write your code here
  let windowStart = 0
  let frequency = {}
  let matched = 0
  for (let i = 0; i < pattern.length; i++){
    if (!(pattern[i] in frequency)) {
      frequency[pattern[i]] = 0;
    }
    frequency[pattern[i]] += 1;
  }
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
    let char = str[windowEnd]
    if (char in frequency){
      frequency[char] -= 1
    }
    if (frequency[char] === 0){
      matched += 1
    }
    if (matched === Object.keys(frequency).length){
      result_indexes.push(windowStart)
    }
    //still a bit confused on this code, re-do challenges problems
    if (windowEnd >= pattern.length - 1){
      let leftChar = str[windowStart]
      windowStart++
      if (leftChar in frequency){
        if (frequency[leftChar] === 0){
          matched -= 1
        }
        frequency[leftChar] += 1
      }
    }
  }


  return result_indexes;
};
//Time: O(m+n)
//Space: O(n)
```
