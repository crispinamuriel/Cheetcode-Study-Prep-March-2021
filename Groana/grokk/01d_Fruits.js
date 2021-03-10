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


console.log(`Maximum number of fruits: ${fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'])}`);
console.log(`Maximum number of fruits: ${fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C'])}`);