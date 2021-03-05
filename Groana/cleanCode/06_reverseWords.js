/*
 Given an input string s, reverse the string word by word.
For example, given s = "the sky is blue", return "blue is sky the".

example 1: "the sky is blue"

example 2: " the sky is  blue "

example 3: " "
*/

// O(N) space and time
const reverseWords = (str) => {
  let words = str.split(' '); //O(n) time
  let newStr = [];

  for (let i = words.length - 1; i >= 0; i--) {
    //O(n) time
    if (words[i] !== '') {
      newStr.push(words[i]);
    }
  }
  return newStr.join(' '); //O(n) time
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords(' the sky is  blue '));
