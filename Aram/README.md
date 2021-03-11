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

## Time: O(n) --- Space: O(1)

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

## Time: O(n) --- Space: O(1)

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

    for (let i = height.length - 2; i >= 0; i--) {
        if (maxRight[i] < maxRight[i - 1]) {
            maxRight[i] maxright[i - 1]
        }
    }

    return heights.reduce((total, cur, idx) => total + Math.min(maxLeft[idx], maxRight[idx]) - cur, 0)
}
```

## Question #4 Backspace String Compare (Easy)
# Time: O(n^2) --- Space: O(n)

## Time: O(n) --- Space: O(n)

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

## Time: O(n) --- Space: O(n)

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

## Time: O(n) --- Space: O(1)

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

# Question #6c Valid Palindrome II

## Time: --- Space:

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

# Question #7 Reverse Words in a String

## Time: O(n) --- Space: O(n)

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

# Question #8 Reverse Words in a String II (in-place)

## Time: O(n) --- Space: O(1)

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

# Question #9 Convert String to Integer (atoi)

## Time: O(n) --- Space: O(1)

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

# Question #10 Valid Number (Hard)

## Time: --- Space:

```JavaScript
function validNumber(str) {
}
```

# Question #20 Merge Two Sorted Linked Lists

## Time: O(m + n) --- Space: O(1)

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

# Question #21 Reverse Singly Linked List

## Time: O(n) --- Space: O(1)

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

# Question #22 Linked List Cycle

## Time: --- Space

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

# Question #23 Valid Parentheses

## Time: O(n) --- Space: O(n)

```JavaScript
const isValid = (s) => {
    if(s.length === 1){
        return false
    }
    let validMap = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    var stack = []
    for(let i = 0; i < s.length; i++) {
        if(s[i]==='(' || s[i]==='[' || s[i]==='{'){
            stack.push(s[i])
        } else if (validMap[s[i]] === stack[stack.length - 1] && stack.length !== 0) {
            stack.pop()
        } else {
            return false
        }
    }
    if (stack.length === 0) return true;
    else return false
}
```

# Question #24 Decode String

## Time: --- Space:

```JavaScript
// k = how many times you'll repeat the letters
// [ = indicates to store what you need to repeat
// ] = indicates it is safe to repeat the items you've store
const decodeString = (string) => {
    let stack = []
    let subString = []
    let temp = ''
    let result = ''
    for (let elem in string) {
        if (!isNaN(elem)) { // if elem is a number
            temp = `${temp}${elem}`
        } else if (elem === '[') { // if elem is opening of square bracket
            stack.push(temp)
            temp = ''
            subString.push(result)
            result = ''
        } else if (elem === ']') { // if elem is closing of square bracket
            result = subString.pop() + result.repeat(stack.pop())
        } else {
            result += elem
        }
    }
    return result
}
```

# Question #24 Asteroid Collision

## Time: --- Space:

```JavaScript
// array on integers
// positive initegers --> right
// negative integers --> left
// if two asteroids meet, smaller explodes ---- if same value integer, both will
// if the last item in our stack is positive and the current element is negative, assess collision

// if the one im on is negative and the one before it is positive
// compare opposite values
// if i is smaller don't add to stack
// if i === i - 1, pop from stack AND don't push
// if i > i - 1, pop from stack first and then push
// can use Math.abs() on current and previous to get absolute value and cross compare those

const isCollision = (array) => {
    let stack = []
    let i = 0

    while (i < array.length) {
        // current is positive (greater than or equal to 0) OR the stack is empty OR the last item in the stack is negative (less than 0)
        if (array[i] >= 0 || !stack.length || stack[stack.length - 1] < 0) {
            stack.push(array[i]++)
            // current negative is bigger than previous positive
        } else if (array[i] + stack[stack.length -1] < 0) {
            stack.pop()
            // current and previous are the same value (i.e. [8, -8])
        } else if (array[i] + stack[stack.length - 1] === 0) {
            stack.pop()
            i++
            // current negative is smaller than previous positive
        } else {
            i++
        }
    }
    return stack
}
```

# Question #25 Basic Calculator II
## Time: --- Space:
```JavaScript
// account for the numbers in the string -- condition -- evaluate based on integer value
// account for the sign/operands in the string -- condition -- evaluate based on operand
// account for any spaces in the string -- condition -- continue on
// basic calculations contingent upon PEMDAS, evaluate from left-to-right

const calculator = (string) => {
    let stack = []
    let num = ''
    let operand = null

    for (let i = 0; i <= string.length; i++) {
        const elem = string[i]
        if (elem === ' ') continue
        // if current element is a number, concate to string
        if (!isNaN(elem)) {
            num += elem
        }
        // if current element is an operand
        if (isNaN(elem)) {
            num = Number(num) // turn string into valid integer
            switch(operand) {
                case '+':
                case null:
                    stack.push(num) // push number into stack
                    break;
                case '-':
                    stack.push(-num) // push negative value into our stack
                    break;
                case '*':
                    stack.push(stack.pop() * num) // pop last item in stack, multiply times number and place back in stack
                    break;
                case '/':
                    stack.push(parseInt(stack.pop()/num, 10)) // pop last item in stack, divide by base 10 and place back in stack
                    break;
            }
            operand = elem
            num = ''
        }
    }
    // reduce array by adding positive and negative integer values
    return stack.reduce((a,b) => {
        return a + b
    }, 0)
}
```

# Question #26 Max-Stack
## Time: --- Space: 
```JavaScript
/*

Implement a LIFO stack that has a push(), pop(), and max() function, where max() returns the maximum value in the stack.
All of these functions should run in O(1) time.

*/





```
