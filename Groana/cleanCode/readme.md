## Question #6 Reverse Words in a String

```Javascript
const reverseWords = (str) => {
  let words = str.split(' ');
  let newStr = [];

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] !== '') {
      newStr.push(words[i]);
    }
  }
  return newStr.join(' ');
};
```

## Question #8 String to Integer (atoi)

```Javascript
const atoi = (str) => {
  let place = 1;
  let num = 0;
  let isNeg = false;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === '–') {
      isNeg = true;
    } else if (str[i] !== ' ') {
      num += str[i] * place;
      place *= 10;
    }
  }

  return isNeg ? num * -1 : num;
};
```

## Question #9 Valid Number

```Javascript
const validNum = (str) => {
  let nums = {
    '.': true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    0: true,
  };
  let i = 0;

  while (i < str.length) {
    if (i === 0 && (str[i] === ' ' || str[i] === '+' || str[i] === '-')) {
      i++;
    } else if (
      i === str.length - 1 &&
      (str[i] === ' ' || str[i] === '+' || str[i] === '-')
    ) {
      i++;
    } else if (!nums[str[i]]) {
      return false;
    }
    i++;
  }
  return true;
};
```
