const longest_substring_with_k_distinct = function(str, k) {
  let left = 0;
  let maxLength = 0;
  let hash = {};

  // in the following loop we'll try to extend the range
  for (let right = 0; right < str.length; right++) {
    let rightChar = str[right];
    if (!hash[rightChar]) {
      hash[rightChar] = 0;
    }
    hash[rightChar]++;

    while (Object.keys(hash).length > k) {
      let leftChar = str[left];
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

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`); // 4
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`); // 2
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`); // 5