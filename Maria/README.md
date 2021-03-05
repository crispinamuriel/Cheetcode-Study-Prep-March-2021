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
```
## Container With Most Water (MEDIUM)
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