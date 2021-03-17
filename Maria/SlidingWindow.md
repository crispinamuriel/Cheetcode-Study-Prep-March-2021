## Maximum Sum Subarray of Size K (easy)
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
Example:
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

```Javascript
const max_sub_array_of_size_k = function(k, arr) {
  let maxSum = 0
  let windowSum = 0

  let windowStart = 0
  let windowEnd = 0

  //Window is valid as long as it's not beyond array
  while (windowEnd < arr.length){
    windowSum += arr[windowEnd] 
    if (windowEnd >= k-1){  //window is size K
      maxSum = Math.max(windowSum,maxSum)  //window is size K so store the sum
      //after storing the max sum we can now shrink the window
      windowSum -= arr[windowStart] 
      windowStart++
    }
    windowEnd++
  }
  return maxSum
};
```
>Time/Space: O(N)/O(1)

## Smallest Subarray with a given sum (easy)
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2]

```Javascript
const smallest_subarray_with_given_sum = function(s, arr) {
  let leftSide = 0
  let rightSide = 0
  let windowSum = 0
  let minSize = Infinity
  while (rightSide < arr.length){
     windowSum += arr[rightSide]
    while (windowSum >= s){
      minSize = Math.min(minSize,rightSide - leftSide +1)
      //shrink window from left hand side
      windowSum -= arr[leftSide]
      leftSide++ 
    }
    rightSide++
  }
  return minSize;
};
```
>Time/Space: O(N)/O(1)
1. If our current sum is less than the target sum then keep expanding the window to the right
2. Stop expanding the window at the first sum that is greater than or equal to the target sum. - At this point we have the smallest window size. We can now shrink the window again from the left side and repeat from step 1.

## Longest Substring with K distinct characters (medium)
Given a string, find the length of the longest substring in it with no more than K distinct characters.
Example:
Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

```Javascript
const longest_substring_with_k_distinct = function(str, k) {
  let left = 0
  let charFreq = {}
  let longestSubString = 0
  for (let right = 0; right < str.length; right++){
    let char = str[right]
    //add char to hash
    if (char in charFreq){
      charFreq[char] += 1 
    }else{
      charFreq[char] = 1
    }
    //keep shrinking window from left side for as long as our hash is too large
    while (Object.keys(charFreq).length > k){
      charFreq[str[left]] -= 1
      if (charFreq[str[left]]===0) {
        delete charFreq[str[left]]
      }
      left++
    } 
    //keep track of longest substring
    longestSubString = Math.max(longestSubString, right - left +1)
  }
  return longestSubString;
};
```
>Time/Space: O(N)/O(N)

## Fruits into Baskets
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.

Example:
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']

```Javascript
const fruits_into_baskets = function(fruits) {
  let windowStart = 0
  let fruitCount = {}
  let maxCount = 0
  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++){
    let fruit = fruits[windowEnd]
    //add fruit if not in {}
    if (fruit in fruitCount){
      fruitCount[fruit]++
    }else{
      fruitCount[fruit] = 1
    }
    //if we have too many fruits 
    while (Object.keys(fruitCount).length > 2){
      //move window by one to the right
      fruitCount[fruits[windowStart]] -= 1
      if (fruitCount[fruits[windowStart]] === 0) delete fruitCount[fruits[windowStart]]
      windowStart++
    }
    maxCount = Math.max(maxCount,windowEnd-windowStart+1)
  }
  return maxCount;
};
```
> Time/Space: O(N)/O(1)

## No-Repeat Substring (hard)
Given a string, find the length of the longest substring, which has no repeating characters.

Example:
Input: String="aabccbb"
Output: 3
Explanation: The longest substring without any repeating characters is "abc".

```Javascript
function lengthOfLongestSubstring(str) {
    let windowStart = 0
    let maxLength = 0
    let charIndexMap = {}
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
        let char = str[windowEnd]
        if (char in charIndexMap){
            //shrink window from left side to remove ONLY duplicated letter
            //but if the duplicted letter is not adjacent then don't do anything
            windowStart = Math.max(windowStart,charIndexMap[char]+1 )
        }
        //update value of char in map
        charIndexMap[char] = windowEnd
        maxLength = Math.max(maxLength,windowEnd - windowStart+1 )
    }
    return maxLength
}
```
>Time/Space:O(N)/O(1)

## Longest Substring with Replacement
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

Example:
Input: String="aabccbb", k=2
Output: 5
Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".

```Javascript
const length_of_longest_substring = function(str, k) {
  let windowStart = 0
  let maxWindowsize = 0 
  let maxRepeats = 0 
  let charFreq = {}
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
    let letter = str[windowEnd]
    //adding to hashmap
    if (charFreq[letter]){
      charFreq[letter]++
    }else{
      charFreq[letter] = 1
    }
    maxRepeats = Math.max(maxRepeats,charFreq[letter])
    //if windowSize not valid
    if ((windowEnd - windowStart +1) - maxRepeats > k ){
      charFreq[str[windowStart]] -= 1 
      windowStart++
    }
    maxWindowsize = Math.max(maxWindowsize,windowEnd - windowStart +1)
  }
  
  return maxWindowsize;
};
```
>Time/Space:O(N)/O(1)

## Longest Substring with Ones
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example:
Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

```Javascript
const length_of_longest_substring = function(arr, k) {
  let windowStart = 0
  let maxLength = 0 // length of subArray
  let maxOnesCount = 0

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    let num = arr[windowEnd]
    if (num === 1)maxOnesCount++
    //if windowSize is valid (amount of zeros is <= k)
    //size of current window - maxOnesCount = amt of zeros
    if ((windowEnd - windowStart +1) - maxOnesCount > k){
      //shrink the window
      if (arr[windowStart]===1) maxOnesCount--
      windowStart++
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength
};
```
>Time/Space:O(N)/O(1)

## Permutation in a String (hard); Problem Challenge 1
Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has "bca" as one of its permutations.
```Javascript
const find_permutation = function(str, pattern) {
  let windowStart = 0
  let matchedLetters = 0
  let charFreq = {}

  //create charFreq
  for (let i = 0; i < pattern.length; i++){
    let char = pattern[i]
    if (char in charFreq){
      charFreq[char]++
    }else{
      charFreq[char] = 1
    }
  }

  //expand window 
  for (let windowEnd = 0; windowEnd < str.length; windowEnd ++){
    let rightChar = str[windowEnd]
    if (rightChar in charFreq){
      charFreq[rightChar]--
      if (charFreq[rightChar] === 0) matchedLetters++
    }
  
    //if all characters matched then return true
    if (Object.keys(charFreq).length === matchedLetters)return true

    //if windowSize is equal to pattern size but we haven't found a match from line 25 above
    //then shrink the window. 
    if ((windowEnd - windowStart +1)=== pattern.length){
      let leftChar = str[windowEnd]
      if (leftChar in charFreq){
        //if we accounted for this letter giving us a match before let's fix that
        if (charFreq[leftChar]=== 0)matchedLetters--
        //this letter was counted by accident let's add it back in
        charFreq[leftChar]++  
      }
    }

  }
  return false;
};
```
>Time/Space: O(N)/O(N)

