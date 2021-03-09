# Clean Code Handbook
## Table of contents

1. [Two Sum II-- Input Array Sorted](#Two-Sum-II---Input-Array-Sorted)
2. [Longest Substring Without Repeating Characters](#longest-substring-without-repeating-characters)
3. [Valid Palindrome](#Valid-Palindrome)
4. [Merge Two Sorted Lists](#Merge-Two-Sorted-Lists)
5. [Swap Nodes in Pairs](#Swap-Nodes-in-Pairs)
6. [Merge K Sorted Linked Lists](#Merge-K-Sorted-Linked-Lists)
7. [Copy List with Random Pointer](#Copy-List-with-Random-Pointer)

## Two Sum II-- Input Array Sorted
```javascript
const twoSumTwo = function(arr, target) {
    let p1 = 0;
    let p2 = arr.length - 1;
    while (p1 < p2) {
        if (arr[p1] + arr[p2] == target)
            return [p1, p2];
        else if (arr[p1] + arr[p2] > target)
            p2--;
        else
            p1++;
    }
};
```
## Longest Substring Without Repeating Characters
```javascript
const LongestSubstringWithoutRepeat = function(str) {
    if(str.length <= 1) return str.length;
    const seen = {};
    // hashmap for storing previously seen values and their indices
    let pointer1 = 0
    let longest = 0;
    // start left pointer1 at position 0 and initialize longest seen varible as 0
    for(let pointer2 = 0; pointer2 < str.length; pointer2++) {
        const currChar = str[pointer2];
        const prevSeenChar = seen[currChar];
        if(prevSeenChar >= pointer1) {
        // if a character has been seen but is before where pointer 1 is pointing it does not need to be counted as seen
          pointer1 = prevSeenChar + 1;
        }
        seen[currChar] = pointer2;
        longest = Math.max(longest, pointer2 - pointer1 + 1);
    }
    return longest;
};
```
## Valid Palindrome
Two pointers from outside
```javascript
const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // initialize left/right pointers at start and end of string respectively
    let left = 0; right = s.length - 1;
    // loop through string characters while comparing them, then move the pointers closer to the center
    while(left < right) {
        if(s[left] !== s[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;
};
```
## Merge Two Sorted Lists
## Add Two Numbers
## Swap Nodes in Pairs
## Merge K Sorted Linked Lists
## Copy List with Random Pointer
