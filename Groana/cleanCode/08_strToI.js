/*
Implement atoi to convert a string to an integer.

The atoi function first discards as many whitespace characters as necessary until the first non-whitespace character is found.

Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numericalvalue.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number,or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representablevalues, the maximum integer value (2147483647) or the minimum integer value (–2147483648) is returned.
*/

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

console.log(typeof atoi('1234'), atoi('1234'));
console.log(typeof atoi('1 2 34'), atoi('1 2 34'));
console.log(typeof atoi('7'), atoi('7'));
console.log(typeof atoi(''), atoi(''));
console.log(typeof atoi('2147483647'), atoi('2147483647'));
console.log(typeof atoi('–2147483648'), atoi('–2147483648'));
console.log(typeof atoi('1234'), atoi('1234'));
