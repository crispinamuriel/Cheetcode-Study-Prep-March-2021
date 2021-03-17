## Question #6 Reverse Words in a String
Given an input string s, reverse the string word by word.
For example, given s = "the sky is blue", return "blue is sky the".
example 1: "the sky is blue"
example 2: " the sky is  blue "
example 3: " "

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
Implement atoi to convert a string to an integer.

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
 Validate if a given string is numeric.

```Javascript
const validNum = (str) => {
  let i = 0;

  while (i < str.length) {
    if (i === 0 && (str[i] === ' ' || str[i] === '+' || str[i] === '-')) {
      i++;
    } else if (i === str.length - 1 && (str[i] === ' ')) {
      i++;
    } else if (!(str[i] >= 0 || str[i] <= 9 || str[i] === '.') || str[i] === ' ') {
      return false;
    }
    i++;
  }
  return true;
};
```
