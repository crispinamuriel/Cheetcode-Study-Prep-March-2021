/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */

const isValid = (str) => {
  if (str.length === 0) return false;

  let parens = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let stack = [];

  for (let bracket of str) {
    if (bracket in parens) {
      stack.push(bracket);
    } else {
      let leftBracket = stack.pop();
      if (parens[leftBracket] !== bracket) return false;
    }
  }
  if (stack.length > 0) return false;
  return true;
};

console.log(isValid('(')); // false
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('{()[]}')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true
