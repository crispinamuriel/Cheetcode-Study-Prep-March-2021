ARRAYS/STRINGS
## Question #1 Two sum
``` Javascript
const twoSum = (nums, target) =>  {
  let map = {}

   for(let i=0; i<nums.length; i++){
     let thisNum = nums[i];
     map[thisNum] = i;
   }

   for(let i=0; i<nums.length; i++){
     let difference = target-nums[i];
     if(map.hasOwnProperty(difference) && map[difference] !== i){
       return [i, map[difference]]
     }
   }
```
## Question #2 Two sum II - Input array is sorted
``` Javascript
```

## Question #3 Two sum III - Data structure design
``` Javascript
```

## Question #4 Valid Palindrome
``` Javascript
const isPalindrome =(string) => {
    string= string.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    let leftIdx = 0;
    let rightIdx = string.length - 1;

    while(leftIdx < rightIdx){
        if (string[leftIdx] !== string[rightIdx]) return false

        rightIdx --
        leftIdx ++

    }
    return true
}
```

## Question #5 Implement strStr()
``` Javascript
```

## Question #6 Reverse words in a String
``` Javascript
```
## Question #7 Reverse words in a String II
``` Javascript
```

## Question #8 String to Integer (atoi)
``` Javascript
```

## Question #9 Valid Number
``` Javascript
```

## Question #10 Longest substring without repeating characters
``` Javascript
const longestSubstring = (string) => {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let set =  new Set();

  while(right<string.length) {
    if(!set.has(string.charAt(right))){
      set.add(string.charAt(right));
      maxLength = Math.max(maxLength, set.size);
      right++;
    } else {
      set.delete(string.charAt(left));
      left ++;
    }
  }
  return maxLength
}
```

## Question #11 Longest substring with at most two distinct characters
``` Javascript
```

## Question #12 Missing Ranges
``` Javascript
```

## Question #13 Longest Palindromic Substring
``` Javascript
```

## Question #14 One edit distance
``` Javascript
```

## Question #15 Read N Characters given Read4
``` Javascript
```

## Question #16 Read N Characters given Read4 - Call multiple times
``` Javascript
```





