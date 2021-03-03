## Question #1 Google Interview Question Two Sum (Easy)

```javascript
const twoSum = function (nums, target) {
  let hashTable = {};

  for (let [index, num] of nums.entries()) {
    if (hashTable[num] !== undefined) return [hashTable[num], index];
    hashTable[target - num] = index;
  }
};
```

## Question #2 Container With Most Water (Medium)

```javascript
const maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let length = Math.min(height[left], height[right]);
    let currentArea = length * width;
    maxArea = Math.max(maxArea, currentArea);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
```

## Question #3 Trapping Rainwater (Hard)

```javascript
const trap = function (height) {
  let totalWater = 0;
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        totalWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        totalWater += maxRight - height[right];
      }
      right--;
    }
  }
  return totalWater;
};
```

## Question #4 Backspace String Compare (Easy)

```javascript
const backspaceCompare = function (S, T) {
  let sRight = S.length - 1;
  let tRight = T.length - 1;

  while (sRight >= 0 || tRight >= 0) {
    if (S[sRight] === '#' || T[tRight] === '#') {
      if (S[sRight] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          sRight--;
          backCount--;
          if (S[sRight] === '#') {
            backCount += 2;
          }
        }
      }

      if (T[tRight] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          tRight--;
          backCount--;
          if (T[tRight] === '#') {
            backCount += 2;
          }
        }
      }
    } else {
      if (S[sRight] !== T[tRight]) {
        return false;
      } else {
        sRight--;
        tRight--;
      }
    }
  }

  return true;
};
```

## Question #5 Longest Substring Without Repeating Characters (Medium)

```javascript
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;

  let longest = 0;
  let left = 0;
  let seen = {};

  for (let right = 0; right < s.length; right++) {
    let currChar = s[right];
    let prevSeen = seen[currChar];

    if (prevSeen >= left) {
      left = prevSeen + 1;
    }
    seen[currChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};
```
