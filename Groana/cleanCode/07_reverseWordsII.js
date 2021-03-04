/**
 Given an input string s, reverse the string word by word.
For example, given s = "the sky is blue", return "blue is sky the".

constraint:
The input string does not contain leading or trailing spaces and the words are always
separated by a single space.”

Could you do it in-place without allocating extra space? --> Not in JS

For example, given s = "the sky is blue", return "blue is sky

input = "the sky is blue"
out

put: "blue is sky"
 */

const reverseWordsII = (str) => { 
  let words = str.split(" "); 
  let newStr = [];

  for(let i = words.length-1; i >= 0; i--){ 
      newStr.push(words[i]);
  }
  return newStr.join(' ');
}

console.log(reverseWordsII('the sky is blue'));