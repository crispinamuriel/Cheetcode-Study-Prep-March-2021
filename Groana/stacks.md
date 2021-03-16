## Question #10 Valid Parentheses (Easy)

```Javascript
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
```

## Question #11 Minimum Brackets To Remove To Make Valid (Medium)

```Javascript
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

  while (stack.length) {
    let currIdx = stack.pop();
    res[currIdx] = '';
  }

  return res.join('');
};
```