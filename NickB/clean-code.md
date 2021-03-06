## 1 Two Sum

```javascript
var twoSum = function (nums, target) {
  let dict = new Map();
  if (nums.length <= 1) return [];
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];
    if (dict.has(nums[i])) {
      return [dict.get(nums[i]), i];
    }
    dict.set(difference, i);
  }
  return [];
};
```

## 2 Two sum II – INPUT ARRAY IS SORTED

```javascript
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [];
};
```

## 3 Two sum III – DATA STRUCTURE DESIGN

```javascript
class TwoSum {
  constructor() {
    this.dict = new map();
  }
  add(val) {
    this.dict[val] = this.dict[val] ? this.dict[val] + 1 : 1;
  }
  find(target) {
    for (let [key, value] of map) {
      let difference = target - key;
      if (difference === key && value >= 2) {
        return true;
      } else if (dict.has(difference)) {
        return true;
      }
    }
    return false;
  }
}
```

## 4 VALID PALINDROME

```javascript
var isPalindrome = function (s) {
  let clean = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
  //OR return clean === clean.reverse();
};
```

## 5 IMPLEMENT STRSTR()

```javascript
var strStr = function (haystack, needle) {
  if (needle == "") return 0;
  if (needle.length > haystack.length) return -1;
  if (haystack.length < 1) return -1;
  let needleI = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] != needle[needleI]) {
      i = i - needleI;
      needleI = 0;
    } else {
      if (needleX === needle.length - 1) return i - needleI;
      needleI++;
    }
  }
  return -1;
};
```

## 6 REVERSE WORDS IN A STRING

```javascript
var reverseWords = function (s) {
  let words = s.split(" ");
  let answer = [];
  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] != "") {
      answer.push(words[i]);
    }
  }
  return answer.join(" ");
};

var reverseWords = function (s) {
  return str.split(" ").filter(Boolean).reverse().join(" ");
};

var reverseWords = function (s) {
  //TBD can you does this in O(1) in js?
};
```

## 7 REVERSE WORDS IN A STRING II

```javascript
function reverse(s, begin, end) {
  for (let i = 0; i < (end - begin) / 2; i++) {
    let temp = s[begin + i];
    s[begin + i] = s[end - i - 1];
    s[end - i - 1] = temp;
  }
}
/*
@param [char] s
*/
var reverseWords = function (s) {
  //TBD can you does this in O(1) in js? with a string?
  reverse(s, 0, s.length);
  for (let left = 0, end = 0; end <= s.length; end++) {
    if (end === s.length || s[end] === "") {
      reverse(s, left, end);
      left = end + 1;
    }
  }
};
```

## 8 STRING TO INTEGER (ATOI)

```javascript
var myAtoi = function (s) {
  const string = s.trim();
  let sign = "+";
  let start = 0;
  if (string[0] === "-" || string[0] === "+") {
    sign = string[0];
    start++;
  }

  if (string.length - start < 1) {
    return 0;
  }
  let zero = "0".charCodeAt(0);
  let nine = "9".charCodeAt(0);

  if (string.charCodeAt(start) < zero || string.charCodeAt(start) > nine)
    return 0;

  let result = 0;
  let curr = start;

  let currNumCharCode = string[curr].charCodeAt(0);
  const OVERFLOW_MAX = Math.pow(2, 31);

  while (
    curr < string.length &&
    currNumCharCode >= zero &&
    currNumCharCode <= nine
  ) {
    result = 10 * result + Number(string[curr++]);

    if (result >= OVERFLOW_MAX) {
      if (sign === "-") {
        return Number(-+OVERFLOW_MAX);
      }
      return OVERFLOW_MAX - 1;
    }

    if (curr < string.length) {
      currNumCharCode = string[curr].charCodeAt(0);
    }
  }

  return Number(sign + result);
};
```

## 9 VALID NUMBER

```javascript

```

## 10 LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS

```javascript
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let index = {};
  let right = 0;
  for (let left = 0; right < s.length; right++) {
    left = Math.max(index[s[right]] || 0, left);
    max = Math.max(max, right - left + 1);
    index[s[right]] = right + 1;
  }
};
```

## 11 LONGEST SUBSTRING WITH AT MOST TWO DISTINCT CHARACTERS

```javascript

```

## 12 MISSING RANGES

```javascript

```

## 13 LONGEST PALINDROMIC SUBSTRING

```javascript

```

## 14 ONE EDIT DISTANCE

```javascript

```

## 15 READ N CHARACTERS GIVEN READ4

```javascript

```

## 16 READ N CHARACTERS GIVEN READ4 – CALL MULTIPLE TIMES

```javascript

```

## 20 Merge Two Sorted Lists

```javascript
var mergeTwoLists = function (l1, l2) {
  let newList = new ListNode(0);
  let head = newList;
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      newList.next = l1;
      l1 = l1.next;
    } else {
      newList.next = l2;
      l2 = l2.next;
    }
    newList = newList.next;
  }

  if (l1 != null) {
    newList.next = l1;
  }
  if (l2 != null) {
    newList.next = l2;
  }
  return head.next;
};
```

## 21. ADD TWO NUMBERS

```javascript
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let temp = head;
  let overflow = 0;
  //iterate until one of them is null
  while (l1 !== null || l2 !== null) {
    let x = l1 != null ? l1.val : 0;
    let y = l2 != null ? l2.val : 0;
    let total = x + y + overflow;
    // while iterating add them and keep an overflow

    // x%10
    let currentValue = total % 10;
    // x/10
    overflow = Math.floor(total / 10);
    temp.next = new ListNode(currentValue);

    temp = temp.next;
    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
  }

  if (overflow > 0) {
    temp.next = new ListNode(overflow);
  }

  return head.next;
};
```

## 22. SWAP NODES IN PAIRS

```javascript
var swapPairs = function (head) {
  if (!head) return null;
  if (!head.next) return head;

  let prev = null;
  const start = head.next;

  while (head && head.next) {
    const next = head.next;
    const secondNext = head.next.next;

    head.next = secondNext;
    next.next = head;

    if (prev) prev.next = next;

    prev = head;
    head = secondNext;
  }

  return start;
};
```

## 23. MERGE K SORTED LINKED LISTS

```javascript

```

## 24. COPY LIST WITH RANDOM POINTER

```javascript

```
