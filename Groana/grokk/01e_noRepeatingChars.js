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

console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`); // 3
console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`); // 2
console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`); // 3