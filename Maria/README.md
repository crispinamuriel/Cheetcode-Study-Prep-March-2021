## Two Sum (EASY)
```Javascript
function twoSum (nums, target) {
    let result = []
    let leftPointer = 0
    let rightPointer = nums.length-1
    
    nums.sort((a,b)=> (a-b))
   
    while (leftPointer < rightPointer){
        let sum = nums[leftPointer] + nums[rightPointer]
        if (sum > target){
            rightPointer--
        }else if (sum < target){
            leftPointer++
        }else if (sum === target){
            result.push(leftPointer)
            result.push(rightPointer)
            return result
        }
    }
};
//solution without sorting the given array: 
function twoSum (nums, target) {
 let numsObj = {}
 for (let i = 0; i < nums.length; i++){
     let value = nums[i]
     let mapValue = numsObj[value]
     if (mapValue >= 0){  
         return [mapValue,i]
     }else{
         let numToFind = target - value
         numsObj[numToFind]=i
     }
 }
    return null
}
```
## Container With Most Water (MEDIUM)
```Javascript
function maxArea(height) {
  let leftP = 0
  let rightP = height.length - 1
  let maxArea = 0
  
  while (leftP < rightP){
     let length = Math.min(height[leftP],height[rightP])
     let width = rightP-leftP
     let area = length * width  
     maxArea = Math.max(maxArea,area)
     if (height[leftP] <= height[rightP]){
         leftP++
     }else{
         rightP--
     }
  }
    return maxArea
};
```
 * As long as we're moving the pointer that is smaller we're always working with the lesser of the two heights that form a container.
 >Time/Space: O(N) / O(1)
## Trapping Rainwater (HARD)
```Javascript
function trap (heights){
    let totalWater = 0 , maxL = 0 , maxR = 0, leftP = 0 , rightP = heights.length-1
    
    while (leftP < rightP){
        //determine which pointer to operate on
        let leftHeight = heights[leftP]
        let rightHeight = heights[rightP]
        if (leftHeight<=rightHeight){
            //maxL
            if (maxL > leftHeight){
                //calculate water
                totalWater += (maxL - leftHeight)
            }else{
                maxL = leftHeight
            }
            leftP++
        }else{
            //maxR
             if (maxR > rightHeight){
                //calculate water
                totalWater += (maxR - rightHeight)
            }else{
              maxR = rightHeight
            }
              rightP-- 
        } 
    }
    return totalWater
}
```
 * As long as we're moving the pointer that is smaller we're always working with the lesser of the two heights that form a container.
## Typed Out Strings (EASY)
```Javascript
function backspaceCompare (S, T) {
    let p1 = S.length-1
    let p2 = T.length-1
    //while either pointer is at a character 
    while (p1 >=0 || p2 >= 0){
        //check if either p1 or p2 is a '#'
        if (S[p1] === '#' || T[p2] === '#' ){
             //check if the character is a '#' in S
            if (S[p1] === '#'){
                let backCount = 2
                //check for more hashes
                while (backCount > 0){
                    p1--
                    backCount--
                    if (S[p1] === '#'){
                        backCount += 2
                    }
                }
            }
            //check if character is a '#' in T
            if (T[p2] === '#'){
                let backCount = 2
                //check for more hashes
                while (backCount > 0){
                    p2--
                    backCount--
                    if (T[p2] === '#'){
                        backCount += 2
                    }
                }
            }
            
        }else{  //p1 and p2 BOTH must be characters
            //false if characters don't match
            if (S[p1] !== T[p2]){
                return false
            }else{  //p1 and p2 match
                p1--
                p2--
            }
        } 
    }
    return true
};
```
> Time/Space: O(A+B) where A and B are the strings/O(1)
* Why do we need backcount if we’re moving the pointers by one anyway? Backcount variable provides a condition to keep moving pointers if there are any hashes 
* Why are we returning true when breaking out of the while loop? We will only break out of the while loop if neither string has any letters left to compare and no false conditions were met. This means the resulting string must match! If even one of the strings has a letter remaining then we will enter the while loop again and return false at the condition that checks for the matching character in both strings.
## Longest Substring Without Repeating Characterts (MEDIUM)
## Valid Palindrome (EASY)
```Javascript
function isPalindrome(str) {
    let onlyLetters = ''
    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if (char.toLowerCase() !== char.toUpperCase()){
            onlyLetters += char 
        }
    }
    
    return onlyLetters.toLowerCase() === onlyLetters.split("").reverse().join("").toLowerCase()
};
```
## Almost Palindrome (EASY)
## Reverse a Linked List (EASY)
### Pattern: In place reversal of a linked list
```Javascript
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}
const head = new Node(2)
head.next = new Node(4)
head.next.next = new Node (6)

function reverseList(head){
    let currentNode = head
    let previous = null
    while (currentNode !== null){
      let next = currentNode.next
      currentNode.next = previous
      previous = currentNode
      currentNode = next
    }
  return previous
}

```
  1. Build a linked list using a class
  2. Define pointers for the current and previous nodes. 
  3. Execute a while loop for as long as the current node exists:
     - temporarily store the next node
     - reverse the current node 
     - before we move to the next node point previous to the current node
     - move onto the next node
  >Time Complexity: O(N) where N is the number of nodes in the linked list
  
  >Space Complexity: O(1) since only constant space is used
  ## Linked List Cycle (EASY) 
  ### Pattern: Fast and Slow pointers
```Javascript
function hasCycle(head) {
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true; // found the cycle
    }
  }
  return false;
}
```
>Time Complexity: O(N) where N is the number of nodes in the linked list
  
>Space Complexity: O(1) since only constant space is used
  