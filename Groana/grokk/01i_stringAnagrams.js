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

console.log(find_string_anagrams('ppqp', 'pq')); // [1,2]
console.log(find_string_anagrams('abbcabc', 'abc')); // [2,3,4]