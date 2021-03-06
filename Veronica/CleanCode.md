# Clean Code Handbook

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
