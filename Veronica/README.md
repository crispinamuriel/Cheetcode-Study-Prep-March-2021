# Master the Coding Interview: Big Tech (FAANG) Udemy
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
## Longest Substring Without Repeating Characterts (MEDIUM)
## Valid Palindrome (EASY)
# Clean Code Handbook Problems
## REVERSE WORDS IN A STRING
## REVERSE WORDS IN A STRING II
## STRING TO INTEGER (ATOI)
## VALID NUMBER
## LONGEST SUBSTRING WITH AT MOST TWO DISTINCT CHARACTERS
## MISSING RANGES
## LONGEST PALINDROMIC SUBSTRING
## ONE EDIT DISTANCE
## READ NCHARACTERS GIVEN READ4
## READ NCHARACTERS GIVEN READ4–CALL MULTIPLE TIMES
# Code Meet up Leetcode Problems
##  Invert Binary Tree
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
    if(root === null){
        return null
    }
 let temp = root.left
 root.left = root.right
 root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
};
```
