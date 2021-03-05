## Question #1 Google Interview Question Two Sum (Easy)

# Time: O(n) --- Space: O(n)

```JavaScript


function twoSum(nums, target) {
    const hash = {}
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (hash[diff] && hash[diff] !== i) {
            return [i, hash[diff]]
        }
    }
}

```

## Question #2 Container With Most Water (Medium)

# Time: O(n) --- Space: O(1)

```JavaScript
function maxArea(heights) {
    let maxOne = 0
    let maxTwo = heights.length - 1
    let maxArea = 0
    while (maxOne < maxTwo) {
        const width = maxTwo - maxOne
        const height = Math.min(heights[maxOne], heights[maxTwo])
        const area = width * height
        const maxArea = Math.max(maxArea, area)
        if (heights[maxOne] <= heights[maxTwo]) {
            maxOne++
        } else {
            maxTwo++
        }
    }
    return maxArea
}
```

## Question # 3 Trapping Rain Water (Hard)

# Time: O(n) --- Space: O(1)

```JavaScript
function trap(heights) {
    const maxLeft = 0
    const maxRight = 0

    if (heights.length < 3) return 0


    for (let i = i; i < height.length; i++) {
        if (maxLeft[i] < maxLeft[i - 1]) {
            maxLeft[i] = maxLeft[i - 1]
        }
    }

    for (let i = height.length - 2; i >= 0; i--) {
        if (maxRight[i] < maxRight[i - 1]) {
            maxRight[i] maxright[i - 1]
        }
    }

    return heights.reduce((total, cur, idx) => total + Math.min(maxLeft[idx], maxRight[idx]) - cur, 0)
}


    for (let i = i; i < height.length; i++) {
        if (maxLeft[i] < maxLeft[i - 1]) {
            maxLeft[i] = maxLeft[i - 1]
        }
    }

    for (let i = height.length - 2; i >= 0; i--) {
        if (maxRight[i] < maxRight[i - 1]) {
            maxRight[i] maxright[i - 1]
        }
    }

    return heights.reduce((total, cur, idx) => total + Math.min(maxLeft[idx], maxRight[idx]) - cur, 0)
}
```

## Question #4 Backspace String Compare (Easy)

# Time: O(n) --- Space: O(n)

```JavaScript
function backSpaceCompare(S, T) {
    let s = []
    let t = []
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '#') {
            s.pop()
        } else {
            s.push(S[i])
        }
    }
    for (let i = 0; i < T.length; i++) {
        if (T[i] === '#') {
            t.pop()
        } else {
            t.push(T[i])
        }
    }
    s = s.join('')
    t = t.join('')
    return s === t
}
```

## Question #5 Longest Substring Without Repeating Characters (Medium)

# Time: O(n) --- Space: O(n)

```JavaScript
function substringCheck(s) {
    const memo = {}
    let longest = [0, 1]
    let start = 0
    for (let i = 0; i < s.length; i++) {
        const letter = s[i]
        if (letter in memo) {
            start = Math.max(start, memo[letter] + 1)
        }
        if (longest[1] - longest[0] < i + 1 - start) {
            longest = [start, i + 1]
        }
        memo[letter] = i
    } return s.slice(longest[0], longest[1])
}
```

## Question #6a Valid Palindrome (Easy)
# Time: O(n) --- Space: O(1)
```JavaScript
function validPalindrome(s) {
    leftIndex = 0
	rightIndex = string.length - 1
    while(leftIndex < rightIndex) {
        leftLetter = s[leftIndex].toLowerCase()
        rightLetter = s[rightIndex].toLowerCase()
        if (leftLetter !== rightLetter) return false
        leftIndex++
        rightIndex++
    }
    return true
}
```

## Question #6b Almost Palindrome (Easy)
# Time: O(n) --- Space: O(1)
```JavaScript
function almostPalindrome(s) {
     let start = 0;
  let end = s.length - 1;
  while (start < end) {

      if (s[start] !== s[end]) {
          return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
      }
      start++;
      end--;
  }
  return true;
};
const validSubPalindrome = function(s, start, end) {
  while (start < end) {
      if (s[start] !== s[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
}
```

## Question #6c Valid Palindrome II
# Time: --- Space:
```JavaScript
function validPalindromeII(str) {
    if (str === '') return true
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let start = 0
    let end = str.length - 1
    while (start < end) {
        if (str[start] === str[end]) {
            start++;
            end--;
        } else {
        return false;
        }
    }
    return true;
}
```

## Question #7 Reverse Words in a String
# Time: O(n) --- Space: O(n)
```JavaScript
function reverseWords(str) {
    let words = str.split(' ')
    let newStr = []
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] !== '') {
            newStr.push(words[i])
        }
    }
    return newStr.join(' ')
}
```

## Question #8 Reverse Words in a String II (in-place)
# Time: O(n) --- Space: O(1)
```JavaScript
const reverseString = (str) => {
    let strArr = str.split(' ')
    let start = 0
    let end = str.length - 1

    while (start <= end) {
        const temp = strArr[start]
        strArr[start] = strArr[end]
        strArr[end] = temp
        start++
        end--
    }
    return strArr.join(' ')
}
```

## Question #9 Convert String to Integer (atoi)
# Time: O(n) --- Space: O(1)
```JavaScript
function convertToInt(str) {
   let result = 0
   let sign = 1
   let hasNumberStarted = false
   let isNotBlankSpace = false

   for (let i = 0; i < str.length; i++) {
       const char = str[i]
       if (char === ' ') {
           if (!isNotBlankSpace) {
               continue
           } else {
               break
           }
       }

       isNotBlankSpace = true

       if (char >= '0' && char <= '9') {
           result = result * 10 + (char - '0')
           continue
       }
       if (char === '-' && !hasNumberStarted) {
           hasNumberStarted = true
           sign = -1
           continue
       }
       if (char === '+' && !hasNumberStarted) {
           hasNumberStarted = true
           continue
       }
       break
   }
   result *= sign
   return Math.min(Math.max(-(2 ** 31), result), 2 ** 31 - 1)
}
```

## Question #10 Valid Number (Hard)
# Time: --- Space:
```JavaScript
function validNumber(str) {
}
```

## Question #20 Merge Two Sorted Linked Lists
# Time: O(m + n) --- Space: O(1)
```JavaScript
class Node {
    constructor(val) {
        this.val = val
        this.next = next
    }
}
const mergeSorted = (l1, l2) => {
    let pointer1 = l1
    let pointer2 = l2
    previous = null

    while (pointer1 !== null && pointer2 !== null) {
        if (pointer1.val <= pointer2.val) {
            previous = pointer1
            pointer1 = pointer1.next
        } else {
            if (previous !== null) previous.next = pointer2
            previous = pointer2
            poiunter2 = pointer2.next
            previous.next = pointer1
        }
    }
    if (pointer1 !== null) pointer1.next = pointer2
    return l1.val < l2.val ? l1 : l2
}
```

## Question #21 Reverse Singly Linked List
# Time: O(n) --- Space: O(1)
```JavaScript
class Node {
    constructor(val) {
        this.val = val
        this.next = next
    }
}
const reverseList = (listHead) => {
    let node = listHead
    let temp
    let previous

    if (node.next === null) return node
    while (node) {
        temp = node.next
        node.next = previous
        previous = node
        node = temp
    }
    return previous
}
```

## Question #22 Linked List Cycle
# Time: --- Space
```JavaScript
const isCycle = (listHead) => {
    let slow = listHead
    let fast = listHead
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (slow === fast) {
            return true
        }
    }
    return false
}
```
