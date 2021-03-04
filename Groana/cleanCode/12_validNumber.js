/**
 Validate if a given string is numeric.
 Some examples:
 "0" -> true
 "0.1" -> true
 "abc" -> false
 */

//  const validNum = (str) => {
//     let nums = {'.': true, '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true, '0': true}

//     for (let i = 0; i < str.length; i++) {
//       if (!nums[str[i]]) {
//         return false
//       }
//     }
//     return true
//   }

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

console.log(validNum('0')); // true
console.log(validNum('0.1')); // true
console.log(validNum(' 123 ')); // true
console.log(validNum('1 1')); // false
console.log(validNum('0xFF')); // false
console.log(validNum('+1')); // true
console.log(validNum('-1')); // true
console.log(validNum('1e10')); // false
