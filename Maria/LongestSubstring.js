const longest_substring_with_k_distinct = function(str, k) {
    let left = 0
    let charFreq = {}
    let longestSubString = 0
    for (let right = 0; right < str.length; right++){
      let char = str[right]
      //add char to hash
      if (char in charFreq){
        charFreq[char] += 1 
      }else{
        charFreq[char] = 1
      }
      //keep shrinking window from left side for as long as our hash is too large
      while (Object.keys(charFreq).length > k){
        charFreq[str[left]] -= 1
        if (charFreq[str[left]]===0) {
          delete charFreq[str[left]]
        }
        left++
      } 
      //keep track of longest substring
      longestSubString = Math.max(longestSubString, right - left +1)
    }
    return longestSubString;
  };
 