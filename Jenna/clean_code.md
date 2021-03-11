## 1. Two Sum
Brute force with 2 loops: Time Complexity: O(n^2) , Space Complexity: O(1) space
Hash Table 1 pass: Time Complexity: O(n) runtime, Space Complexity: O(n) space
```Javascript
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        let val = target - nums[i]
        if(nums[i] in map){
            return [i, map[nums[i]]]
        }
        map[val] = i
    }
    throw new Error('No two sum')
};
```
## 2. Two Sum II -sorted input array
Time Complexity: O(n)
Space Complexity: O(1)
```Javascript
var twoSum = function(numbers, target) {

    let pointer1 = 0
    let pointer2 = numbers.length - 1
    while(pointer2 > pointer1){
        if(numbers[pointer2] + numbers[pointer1] == target){
            return [pointer1 + 1, pointer2 + 1]
        } else if(numbers[pointer2] + numbers[pointer1] < target){
            pointer1++
        } else {
            pointer2--
        }
    }
    return -1
};
```
## 3. Two Sum III – Data structure design
```Javascript
Pending
```
## 4. Valid Palindrome
Time Complexity: O(n)
Space Complexity: O(1)
``` Javascript
var isPalindrome = function(s) {
    let a = [],
    b = s.toLowerCase().split("");
  for (let i = 0; i < b.length; i++) {
    let charCode = b[i].charCodeAt();
    if (
    charCode >= 48 && charCode <= 57 ||
     charCode>= 97 && charCode <= 122
    ) {
      a.push(b[i]);
    }
  }
  return [...a].reverse().join("") === a.join("")
};
```
## 5. Implement strstr()
Time Complexity: O(nm)  n = length of haystack and m = length of needle
Space Complexity: O(1)
```Javascript
var strStr = function(haystack, needle) {
    if(needle == ''){
        return 0
    }
    if(haystack.length < needle.length){
        return -1
    }
    let pointer1 = 0
    let pointer2 = needle.length
    while(pointer2 <= haystack.length){
        if(haystack.slice(pointer1, pointer2) == needle){
            return pointer1
        }
        pointer1++
        pointer2++
    }
    return -1
};
```
## 6. Reverse Words in a String
Time Complexity: O(n)
Space Complexity: O(n)
```Javascript
var reverseWords = function(s) {
    s = s.split(' ')
    let wordArr = []
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i]!=='')wordArr.push(s[i])
    }

    return wordArr.join(' ')
};
```
## 7. Reverse Words in a String II
Challenge 1: Without Split function
Time Complexity: O(n)
Space Complexity: O(n) if string mutable would be O(1)
Note: JS string is immutable, thus using array to mimic mutable string.
```Javascript
var reverseWords = function(s) {
    s = s.split('')
    reverse(s, 0, s.length)
    let i = 0;
    for( let j = 0; j <= s.length; j++){
        if(j == s.length|| s[j] == ' '){
            reverse(s, i, j)
            i = j + 1
        }
    }
    return s.join('')
};
var reverse = function(s, i, j){
    let start = i
    let end = j - 1
    while(start < end){
            let temp = s[start]
            s[start] = s[end]
            s[end] = temp
        start++
        end--
    }

}
```
## 8. String to Integer (atoi)
```Javascript
var myAtoi = function(s) {
    let result = 0
    let start = 0
    let sign = 1
    while(s[start] == ' '){
        start++
    }
    if(s[start] == '-' || s[start] == '+'){
        s[start] == '-' ? sign = -1 : 1
        start++
    }

    while(start < s.length){
        let cur = parseInt(s[start])
        if(isNaN(cur) )break
        result = result * 10 + cur
        start++
    }
    let max = Math.pow(2, 31) - 1
    let min = -1 * (max + 1)
    result = result * sign
    if(result <= max && result >= min){
            return result
    } else {
        if(result < min){
            return min
        }
        return max
    }

};
```
## 9. Valid Number
```Javascript
Pending
```
## 10. Longest Substring Without Repeating Characters
```Javascript
Pending
```
## 11. Longest Substring with At Most Two Distinct Characters
```Javascript
Pending
```
## 12. Missing Ranges
```Javascript
Pending
```
## 13. Longest Palindromic Substring
```Javascript
Pending
```
## 14. One Edit Distance
```Javascript
Pending
```
## 15. Read N Characters Given Read4
```Javascript
Pending
```
## 16. Read N Characters Given Read4 – Call multiple times
```Javascript
Pending
```
