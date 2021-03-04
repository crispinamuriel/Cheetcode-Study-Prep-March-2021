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
//TODO: need to revisit to many edge cases not passing
var myAtoi = function (s) {
  function isNumeric(num) {
    return !isNaN(num);
  }
  let length = s.length;
  let i = 0;
  let number = 1;
  let isNumber = false;
  //ignore white space

  while (i < length && s[i] === " ") {
    i++;
  }
  //is next char pos or neg
  if (i < length && (s[i] === "+" || s[i] === "-")) {
    number *= `${s[i]}1`;
    i++;
  }
  let start = i;
  while (i < length && isNumeric(s[i])) {
    isNumber = true;
    i++;
  }
  if (isNumber) {
    number = number * Number(s.substring(start, i));
    console.log(number);
  }
  if (isNumber) {
    if (-2147483648 <= number && number < 2147483648) return number;
    else if (number < 0) {
      return -2147483648;
    } else return 2147483648 - 1;
  }

  return 0;
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
