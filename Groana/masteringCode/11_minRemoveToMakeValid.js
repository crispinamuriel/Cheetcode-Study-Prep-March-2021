/*
Given a string s of '(' , ')' and lowercase English characters. 

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
*/

const minRemoveToMakeValid = (str) => {
  let res = str.split('');
  let stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === '(') {
      stack.push(i);
    } else if (res[i] === ')' && stack.length) {
      stack.pop();
    } else if (res[i] === ')') {
      res[i] = '';
    }
  }
  console.log(res)

  while (stack.length) {
    let currIdx = stack.pop();
    res[currIdx] = '';
  }

  return res.join('');
};

console.log(minRemoveToMakeValid('lee(t(c)o)de)')); // "lee(t(c)o)de"
console.log(minRemoveToMakeValid('a)b(c)d')); // "ab(c)d"
console.log(minRemoveToMakeValid('))((')); // ""
console.log(minRemoveToMakeValid('(a(b(c)d)')); // "a(b(c)d)"
