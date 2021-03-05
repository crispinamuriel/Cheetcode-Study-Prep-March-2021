## Reverse Words in a String

```javascript
const reverseWords = function (s) {
  s = s.split(' ');
  let splitArr = [];

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== '') splitArr.push(s[i]);
  }
  return splitArr.join(' ');
};
```
