# Master the Coding Interview: Big Tech (FAANG) Udemy
## Table of contents
1. [Two Sum (EASY)](#Two-Sum-(EASY))
2. [Container with Most Water (MEDIUM)](#container-with-most-water-(MEDIUM))
3. [Trapping Rainwater (HARD)](#Trapping-Rainwater-(HARD))
4. [Typed Out Strings (EASY)](#Typed-Out-Strings-(EASY))
5. [Longest Substring Without Repeating Characters  (MEDIUM)](#longest-substring-without-repeating-characters-(MEDIUM))
6. [Valid Palindrome (EASY)](#Valid-Palindrome-(EASY))
7. [Valid Palindrome II or Almost A Palidrome](#Almost-Palindrome)
8. [Reverse Linked List](#Basic-Algorithm---Reverse-Linked-List)
9. [Reverse Linked List II or M, N Reversals](#M,-N-Reversals-(Medium))
10. [Merge Multi-Level Doubly Linked List (Medium)](#Merge-Multi-Level-Doubly-Linked-List-(Medium))
11. [Cycle Detection (Medium)](#Cycle-Detection-(Medium))
12. [Valid Parentheses](#Valid-Parentheses)
13. [Minimum Brackets To Remove](#Minimum-Brackets-To-Remove)
14. [Implement Queue with Stacks](#Implement-Queue-with-Stacks)
13. [Maximum Depth of A Binary Tree](#Max-Depth-of-A-Binary-Tree)
14. [Level Order of Binary Tree](#Level-Order-Binary-Tree)


## Two Sum (EASY)
https://gist.github.com/vtomchak/f521d41b424119afd7e8c45f651f1828
```javascript
const findTwoSum = function(nums, target) {
  const hashMap = {};

  for(let pointer = 0; pointer < nums.length; pointer++) {
    const currentMapVal = hashMap[nums[pointer]];
    //if the value does not already exist in the hash map currentMapVal will be undefined

    if(currentMapVal >= 0) {
    //this checks if the value already exists in the hash map
    //undefined will evaluate as not greater or equal to 0 so this if statement will fail if value doesnt exist
    //otherwise that value does already exist and we have our answer

      return [currentMapVal, pointer];
    } else {
      const numberToFind = target - nums[pointer];
      hashMap[numberToFind] = pointer;
    }
  }

  return null;
}
```
## Container With Most Water (MEDIUM)
psuedo code notes:
```javascript
//length of array must be > 1
// max = -1
// iterate over the array, compare each one to max, if greater than max replace it
// we need to track the indices of max and next max
//the distance between the indices is our x value
// max (1,8) multiply value from array.length (end)
// maxproduct = -1
// last value: (8,7)
// x value: 8-1 = 7
// y value: whichever is lesser
// x times y: maxproduct
// iterate backwards array.length -- , compare to maxproduct, if greater replace, if not return


const getMaxWaterContainer = function(height) {
  let pointer1 = 0;
  let  pointer2 = height.length - 1;
  let maxArea = 0;

  while(pointer1 < pointer2) {
    const h = Math.min(height[pointer1], height[pointer2]);
    const w = pointer2 - pointer1;
    const area = h * w;
    maxArea = Math.max(maxArea, area);

    if(height[pointer1] <= height[pointer2]) {
      pointer1++;
    } else {
      pointer2--;
    }
  }

  return maxArea;
}
```
## Trapping Rainwater (HARD)
## Typed Out Strings (EASY)
https://gist.github.com/vtomchak/761c1cfa8ac713858fc61745ea2cb533
``` javascript
const backspaceCompare = function(S, T) {
    let p1 = S.length - 1, p2 = T.length - 1;
    while(p1 >= 0 || p2 >= 0) {
    // if p1 or p2 reaches 0 it's at the "end" of the string
    //but we must account for both p1 and p2 incase they are diff lengths which means we return false
        if(S[p1] === "#" || T[p2] === "#") {
            if(S[p1] === "#") {
                let backCount = 2;
                // set the iteration to be 2 steps instead of just one--
                while(backCount > 0) {
                    p1--;
                    backCount--;
                           // check if the next character is a # as well and if it is add to backCount
                    if(S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }
            if(T[p2] === "#") {
                let backCount = 2;
                // we must independently do the # check and change in iteration for p2 as well
                while(backCount > 0) {
                    p2--;
                    backCount--;

                    if(T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
        // after checking for # now we can compare the string characters and if they match iterate--
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
```

## Longest Substring Without Repeating Characters (MEDIUM)
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
## Valid Palindrome (EASY)
Two Pointers from Center:
```javascript
const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
    let left = Math.floor(s.length / 2), right = left;
    // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
    if(s.length % 2 === 0) {
        left--;
    }
    // loop through the string while expanding pointers outwards comparing the characters.
    while(left >= 0 && right < s.length) {
        if(s[left] !== s[right]) {
            return false
        }
        left--;
        right++;
   }
    return true;
};
```
Compare Against Reverse
```javascript
const isValidPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let rev = "";
    // generate a reverse string using a reverse for loop.
    for(let i = s.length - 1; i >= 0; i--) {
        rev += s[i];
    }
    return rev === s;
};
```

## Almost Palindrome
```javascript
const validPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  // pointers on the outside ends iterating inwards
  while (start < end) {
      if (s[start] !== s[end]) {
        // if a character doesn't match the character from the other pointer, run the helper function
          return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
          /* this checks if either the string made from removing the left character or the string made from removing the right character is it's self a valid palindrome for the rest of the inner characters. No characters are actually removed, the pointers are just iterated an extra step each so skip the "removed" character */
      }
      start++;
      end--;
  }
  return true;
};

const validSubPalindrome = function(s, start, end) {
  /* this takes the original string and the starting pointer and ending pointer that are iterated past the skipped character*/
  while (start < end) {
      if (s[start] !== s[end]) {
          return false;
      }
      start++;
      end--;
  }
  return true;
};
```
## Basic Algorithm - Reverse Linked List
```javascript
// class ListNode {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

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
## M, N Reversals (Medium)
```javascript
var reverseBetween = function(head, m, n) {
  let currentPos = 1, currentNode = head;
  let start = head;

  while(currentPos < m) {
    // before the starting position converges on the m boundary
    /* we move through the list before m starts and then capture the value previous to the boundary in the start variable*/
    start = currentNode;
    currentNode = currentNode.next;
    currentPos++;
  }

  let newList = null, tail = currentNode;
  // newList will hold our previous/ listsofar values for the portion we are reversing
  while(currentPos >= m && currentPos <= n) {
    // inside the boundary of m and n reverse the list
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    currentPos++;
  }
// these two steps piece the boundary, start, and after-boundary portions together
  start.next = newList;
  // newList is always the head of the portion of the list that we reversed
  // we stored the node before we entered into the boundary in the start variable
  tail.next = currentNode;
  // after our while loop currentNode is pointing to n+1

//if m is equal to 1 we must return the newList head, otherwise we return the head
  if(m > 1) {
    return head
  } else {
    return newList;
  }
};
```
## Merge Multi-Level Doubly Linked List (Medium)
```javascript
const flatten = function(head) {
  if(!head) return head;   //if the head is null, just return null
  let currentNode = head;   //instantiate current node at first node, head
  while(currentNode){     // while the currrent node is not null
    if(currentNode.child === null){  //if the node has no children iterate
      currentNode= currentNode.next
    }
   else {  //else case for if the node does have a child
     let tail = currentNode.child
     //storage variable for the head of the child sub LL to find the tail of that sub LL
     while(tail.next){
       /*while the ail variable has a next, til the end, iterate so that our variable will be pointing at the end of the child sub LL*/
       tail = tail.next;
     }
     tail.next = currentNode.next
     if(tail.next !== null){
       // if tail.next is null that means that the parent (currentNode) was at the end of the main LL
       tail.next.prev = tail
     }
     currentNode.next = currentNode.child //reset currentNode.next to be the child
     currentNode.next.prev = currentNode
     //reset child node that is now currentNode.next to point previous towards currentNode
     currentNode.child = null;
   }
  }
  return head;
}
```

## Cycle Detection (Medium)
```javascript
function has_cycle(head) {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true; // when slow is equal to fast that means the cycle was found
    }
  }
  return false;
  // if slow never catches up to fast that means the LinkedList is not cyclical
}
```
## Valid Parentheses
```javascript
const validParen = function (s) {
  const parenCheck = {
  '(':')',
  '{':'}',
  '[':']'
}
   const stack = []
   if(s.length === 0) return true; //an empty string should return true
   for (let i = 0; i < s.length; i++) {

     if(parenCheck[s[i]]){ //checks if the character at i is a key in the hashmap which means its a left paren
       stack.push(s[i])
     } else { //this means it is a right parentheses
       const leftBracket = stack.pop(); //take the latest bracket pushed into our array
       const correctBracket = parenCheck[leftBracket] // find the value where that left bracket is a key
       if(s[i] !== correctBracket){ //if they dont match
         return false
       }
     }
   }
   if(stack.length){ //if there are still left brackets left in the stack after the for loop that means they did not have valid matches so not valid
     return false
   } else{
     return true
   }
 }
```
## Minimum Brackets To Remove
## Implement Queue with Stacks
```javascript
var MyQueue = function() {
    this.stackA = [] // push elements
    this.stackB = [] // pop elements
};
MyQueue.prototype.push = function(x) {
    this.stackA.push(x)
};
MyQueue.prototype.pop = function() {
    if (this.stackB.length > 0) {
        return this.stackB.pop()
    } else {
        while(this.stackA.length > 1){
            this.stackB.push(this.stackA.pop())
        }
        return this.stackA.pop()
    }
};
MyQueue.prototype.peek = function() {
    if (this.stackB.length > 0) {
        return this.stackB[this.stackB.length-1]
    } else {
          while(this.stackA.length > 0){
            this.stackB.push(this.stackA.pop())
        }
        return this.stackB[this.stackB.length-1]
    }
};

MyQueue.prototype.empty = function() {
  if(this.stackA.length === 0 && this.stackB.length === 0){
    return true
  } else {
      return false
  }

}
// Using JS Class Syntax
class queueWithStacks {
  constructor(){
    this.in =[];
    this.out=[];
  }
  enqueue(val){
    this.in.push(val)
  }
  dequeue(val){
    if(this.out.length === 0){
      while(this.in.length){
        this.out.pudh(this.in.pop());
      }
    }
         return this.out.pop();
  }
  peek(){
    if(this.out.length === 0){
      while(this.in.length){
        this.out.push(this.in.pop())
      }
    }
    return this.out[this.out.length-1]
  }
  empty() {
   return this.in.length === 0 && this.out.length === 0
  }
}
```
## Max Depth of A Binary Tree
```javascript
var maxDepth = function(node, currentDepth) {
    if (!node) {
      return currentDepth;
    }

    currentDepth++;

    return Math.max(maxDepth(node.right, currentDepth), maxDepth(node.left, currentDepth));
};
```
## Level Order Binary Tree
```javascript
const levelOrder = function(root) {
  if(!root) return [];
  const result = [];
  const queue = [root];

  while(queue.length) {
    const currentLevelValues = [];
    let length = queue.length, count = 0;

    while(count < length) {
      const currentNode = queue.shift();

      currentLevelValues.push(currentNode.value);

      if(currentNode.left) {
        queue.push(currentNode.left)
      }

      if(currentNode.right) {
        queue.push(currentNode.right)
      }

      count++;
    }

    result.push(currentLevelValues);
  }

  return result;
};
```
