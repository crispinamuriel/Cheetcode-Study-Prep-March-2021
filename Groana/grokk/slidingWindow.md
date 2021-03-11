## Maximum Sum Subarray of Size K (easy)
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

```Javascript
const max_sub_array_of_size_k = function (k, arr) {
  if (k > arr.length) return 0;

  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
```

## Smallest Subarray with a given sum (easy)
Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.

```Javascript
function SmallestSubArrWithGivenSum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];
    
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}
```

## Longest Substring with K Distinct Characters (medium)
Given a string, find the length of the longest substring in it with no more than K distinct characters.

```Javascript
const longest_substring_with_k_distinct = function(str, k) {
  let left = 0;
  let maxLength = 0;
  let hash = {};

  for (let right = 0; right < str.length; right++) {
    let rightChar = str[right];
    if (!hash[rightChar]) {
      hash[rightChar] = 0;
    }
    hash[rightChar]++;

    while (Object.keys(hash).length > k) {
      let leftChar = str[left];
      hash[leftChar]--;

      if (hash[leftChar] === 0) {
        delete hash[leftChar];
      }
      right++; // shrink the window
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
```

## Fruits into Baskets (medium)
Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

```Javascript
const fruitsIntoBaskets = function(fruits) {
  let left = 0;
  let maxLength = 0;
  let hash = {};

  // in the following loop we'll try to extend the range
  for (let right = 0; right < fruits.length; right++) {
    let rightChar = fruits[right];
    if (!hash[rightChar]) {
      hash[rightChar] = 0;
    }
    hash[rightChar]++;

    while (Object.keys(hash).length > 2) {
      let leftChar = fruits[left];
      // subtract the frequency of that character from hash
      hash[leftChar]--;

      if (hash[leftChar] === 0) {
        delete hash[leftChar];
      }
      right++; // shrink the window
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
```

## No-repeat Substring (hard)
Given a string, find the length of the longest substring, which has no repeating characters.

```Javascript
const non_repeat_substring = function(str) {
  let left = 0;
  let maxLength = 0;
  let hash = {};
  for (let right = 0; right < str.length; right++) {
    let currChar = str[right];
    if (currChar in hash) {
      left = Math.max(left, hash[currChar] + 1)
    }
    hash[currChar] = right;
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength;
};
```

## Longest Substring with Same Letters after Replacement (hard)
Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

```Javascript
function length_of_longest_substring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

    if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
      leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
```

## Longest Subarray with Ones after Replacement (hard)
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

```Javascript
function length_of_longest_substring(arr, k) {
  let windowStart = 0,
    maxLength = 0,
    maxOnesCount = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxOnesCount += 1;
    }

    if ((windowEnd - windowStart + 1 - maxOnesCount) > k) {
      if (arr[windowStart] === 1) {
        maxOnesCount -= 1;
      }
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}
```

## Permutation in a String (hard)
Given a string and a pattern, find out if the string contains any permutation of the pattern.

```Javascript
function find_permutation(str, pattern) {
  let left = 0,
    matched = 0,
    charFrequency = {};

  for (let i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      return true;
    }

    if (right >= pattern.length - 1) {
      let leftChar = str[left];
      left += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  return false;
}
```

## String Anagrams (hard)
Given a string and a pattern, find all anagrams of the pattern in the given string.

```Javascript
const find_string_anagrams = (str,pattern) => {
  let left = 0,
    matched = 0,
    charFrequency = {},
    results = [];

  for (let i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  for (let right = 0; right < str.length; right++) { 
    const rightChar = str[right];
    if (rightChar in charFrequency) {
      charFrequency[rightChar]--;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      results.push(left);
    }

    if (right >= pattern.length - 1) {
      let leftChar = str[left];
      left++;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched--;
        }
        charFrequency[leftChar]++;
      }
    }
  }
  return results;
}
```

## Smallest Window containing Substring (hard)
Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

```Javascript
const find_substring = function(str, pattern) {
  let left = 0,
    matched = 0,
    substrStart = 0,
    minLength = str.length + 1,
    charFrequency = {};

  for (let i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] >= 0) {
        matched += 1;
      }
    }

    while (matched === pattern.length) {
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
        substrStart = left;
      }

      const leftChar = str[left];
      left += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }

  if (minLength > str.length) {
    return '';
  }
  return str.substring(substrStart, substrStart + minLength);
}
```

## Words Concatenation (hard)
Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

```Javascript
const find_word_concatenation = (str, words) => {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }

  let wordFrequency = {};

  words.forEach((word) => {
    if (!(word in wordFrequency)) {
      wordFrequency[word] = 0;
    }
    wordFrequency[word] += 1;
  });

  const resultIndices = [],
    wordsCount = words.length;
  let wordLength = words[0].length;

  for (let i = 0; i < (str.length - wordsCount * wordLength) + 1; i++) {
    const wordsSeen = {};
    for (let j = 0; j < wordsCount; j++) {
      let next_word_index = i + j * wordLength;
      // Get the next word from the string
      let word = str.substring(next_word_index, next_word_index + wordLength);
      if (!(word in wordFrequency)) { // Break if we don't need this word
        break;
      }

      // Add the word to the 'wordsSeen' map
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;


      // no need to process further if the word has higher frequency than required
      if (wordsSeen[word] > (wordFrequency[word] || 0)) {
        break;
      }

      if (j + 1 === wordsCount) { // Store index if we have found all the words
        resultIndices.push(i);
      }
    }
  }
  return resultIndices;
}
```