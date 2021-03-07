 **to keep this repo updated before pull request complete the following:**

 ```git pull --rebase upstream main```

# Crispina's Solutions

## Question #1 Google Interview Question Two Sum (Easy)

## JavaScript

```
var twoSum = function(nums, target) {
    // create a dictionary
    const dict = new Map();

    // loop through array
    for(let i = 0; i < nums.length; i++) {
        const currentVal = nums[i];
    // subtract one value from main target
        const remainder = target - currentVal;
    // make a check if it's availible
        // if it's a match then
        if(dict.has(remainder)) {
            return [dict.get(remainder) ,i];
        } else {
        // store value as key and index as a value
            dict.set(currentVal, i);
        }
    }
    return -1;
};
```

## Question #2 Container With Most Water (Medium)

```
var maxArea = function(height) {
//the two tallest (biggest integers)
// going through every single pair calulcate thea area
//loop through array
// use a hash map to keep , no need for hash map
// subtraction with the left and right
// area = smallest of (leftValue, rightValue) * (right-left)
let left =0;
let right =height.length-1;
let areaMax =0;

while(left < right){
  areaMax = Math.max(areaMax, Math.min(height[left], height[right]) * (right-left))
  if(height[left]<height[right]){
    left++;
  }
  else {
    right--;
  }
}


return areaMax;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7] )=== 49)

console.log(maxArea([1,1] )=== 1)

console.log(maxArea([4,3,2,1,4] )=== 16)


console.log(maxArea([1,2,1] )=== 2)
```

## Question #3 Trapping Rainwater (Hard)

```const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

/*
1. Identify the pointer with the lesser value
2. Is this pointer value greater than or equal to max on that side
  yes -> update max on that side
  no -> get water for pointer, add to total
3. move pointer inwards
4. repeat for other pointer
 */

const getTrappedRainwater = function(heights) {

  let left = 0, right = heights.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0;

  while(left < right) {
    if(heights[left] <= heights[right]) {
      if(heights[left] >= maxLeft) {
        maxLeft = heights[left]
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if(heights[right] >= maxRight) {
          maxRight = heights[right];
      } else {
          totalWater += maxRight - heights[right];
      }

      right--;
    }
  }

  return totalWater;
}


console.log(getTrappedRainwater(elevationArray));
```

## Question #4 Backspace String Compare (Easy)
```// Optimal solution
const string1 = "ab#z"
const string2 = "az#z"

var backspaceCompare = function(S, T) {
    let p1 = S.length - 1, p2 = T.length - 1;

    while(p1 >= 0 || p2 >= 0) {
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2;

                while(backCount > 0) {
                    p1--;
                    backCount--;

                    if(S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }

            if(T[p2] === "#") {
                let backCount = 2;

                while(backCount > 0) {
                    p2--;
                    backCount--;

                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if(S[p1] !== T[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }

    return true;
};

console.log(backspaceCompare(string1, string2));

```





``` // my first try
var backspaceCompare = function(S, T) {

    const removeB = (str) => {
        let result = '';
        for(let i = str.length; i >= 0; i--) {
            if(str[i]  === '#') i--;
            else result += str[i];
        }
        return result;
    }
    S = removeB(S);
    T = removeB(T);

    return S === T;
};
```

## Question #5 Longest Substring Without Repeating Characters (Medium)
```
var lengthOfLongestSubstring = function(s) {
    // s is a string
    // find longest substring without a repeat

    // keep a count of each element you pass without repeat
    let maxLength = 0;

    // keep an array of chars you've seen
    let dict = [];

    // loop through
    for(let i = 0; i < s.length; i++) {
        // use .includes to check if you've seen that char before
        if(dict.includes(s[i])) {
            if(dict.length > maxLength) maxLength = dict.length;

            // if you have seen the element reset the array
            dict = [];
        }
        dict.push(s[i]);
    }
    return maxLength;
};
```
## Question #6a Valid Palindrome(Easy)
### This contains regex must keep note of it
```
var isPalindrome = function(s) {
    // determine if string s is a palindrome ignoring cases, and spaces
    //clean the string
    s = s.split(/[^a-z0-9$]/gi).join("").toLowerCase();
    //two pointer solution
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if(s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};

// my first try
var isPalindrome = function(s) {
    // determine if string s is a palindrome ignoring cases, and spaces
    //clean the string
    s = s.split(' ').join('').split(',').join('').split(':').join('').toLowerCase();
    console.log(s);
    //two pointer solution
    let left = 0;
    let right = s.length - 1;
    while (left !== right) {
        if(s[left] === s[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};
```
## Question #6b Almost Palindrome (Easy)

```
// create helper function that tests if given string is palindrome
const isTruePalindrome = function(s, p1, p2) {
  while (p1 < p2) {
    if (s[p1] !== s[p2]) return false;
    p1++;
    p2--;
  }

  return true;
}

// leetcode function
const validPalindrome = function(s) {
  let p1 = 0;
  let p2 = s.length - 1;

  while (p1 < p2) {
    //call helper function passing in string and indices to check deleted elements (skipping over 1 index)
    if (s[p1] !== s[p2]) return isTruePalindrome(s, p1 + 1, p2) || isTruePalindrome(s, p1, p2 - 1);
    p1++;
    p2--;
  }

  return true;
}
```


-------------------------------------------------------

## Homework 2nd set of problems

## Question 7a, Reverse a Linked List
https://leetcode.com/problems/reverse-linked-list

```
var reverseList = function(head) {
    let current = head; // current node we are currently operating on
    let prev =  null; // we will build our new list onto this tail
    let next; // assigned within loop to keep track of severed (old) LL
    
    while (current) {
        next = current.next; // keep track of the rest of the severed list
        current.next = prev; // move the head to new list we're building (prev)
        prev = current; // move prev up to the head of our new list
        current = next; // move up current node to use this loop to operate further
    }
    return prev;
};

// MY EXPLAINATION:
// we are taking apart the list and pointing the pointers backwards
// Original LinkedList: 1=> 2=> 3=> 4=> 5=> null
// Because we know null goes to the tail, and we want 1 to be the tail, we set 1.next to null

// Returned LL: 5=> 4=> 3=> 2=> 1=> null


// this is done by reassigning .next of each node
// and traversing through the array  using a while loop, and reassigning the node we pass as a stoping condition to the while loop. The while loop  will stop once current is equal to null.

// here are the steps

// save the new next as prev
// keep a pointer to the LL head
// while we have a current,  it means we're still in the list
// keep track of the next node
// point our next to the newPrev
// reassign prev to point at where we're at now (We're going backards so we want to remember current as a prev to assign the next node's next to this node)
// FINALLY make current the next node in the OLD linked List
// After the first iteration of the while loop our head and prev looks llike this
// head : [1,2,3,4,5,null]
// prev: [2,1,null]

// WE ARE BUILDING a new linked list by traversing through and reassembling the LL we are passed


var reverseList = function(head) {
  let prev = null; // we need this to hold the node before us
  let current = head; // hold the node we're on

  while(current) {  // while we're in the list
    let nextTemp = current.next; // create a temp var that holds next node
    current.next = prev; // make the next node of the head null (this is now the tail)
    prev = current;  // reassign prev to be the current node
    current = nextTemp; //
  }

  return prev;
};
```

## Question #7 M, N Reversals (Medium)

```

// 2nd try no solution, Will look at solution now

var reverseBetween = function(head, left, right) {
    let current = head;  // current node
    let connectHead;   // node just before left node
    let connectTail;   // node just after right node
    let leftNode;  // node who's value is left
    let rightNode; // node whos value is right
    let next; // temp value to remember next
    let reversedBetween; // flag for "We hit the left node! Time to reverse!"
    
    // traverse through LL
    while (current) { 
        next = current.next;
        
        // save the node just before leftNode
        if(current.next.val === left) {
            connectHead = current;          
        }
        
        // set flag for reversal
        if(current.val === left) {
            reversedBetween = current;
        }
        
        if(reversedBetween) {
            
            // fn to reverse a linked list
            const reverse = (head) => {
                let curr = head;
                let  prev;
                let innerNext;
                
                while(curr && curr.val !== right) {
                    if(curr.next && curr.next.val === right) {
                        rightNode = curr.next;
                        connectTail = curr.next.next;
                        connectHead.next = curr;
                        break;
                    } 
                    
                    innerNext = curr.next;
                    curr.next = prev;
                    prev = curr;
                    curr = innerNext;     
                }
                return prev;
            }
            
            // call our reverse function with the node whos value is "left" and set the returned LL as reversedBetween
            reversedBetween = reverse(reversedBetween);
                  
        }

        //step towards ending condition
        current = next;
    }

    return head;
};

```

