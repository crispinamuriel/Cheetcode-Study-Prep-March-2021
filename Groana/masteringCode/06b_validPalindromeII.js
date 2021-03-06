/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const isPalindromeII = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return (
        isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindromeII('race a car')); // true
console.log(isPalindromeII('abccdba')); // true
console.log(isPalindromeII('abcdefdba')); // false
console.log(isPalindromeII('aba')); // true
console.log(isPalindromeII('')); // true
console.log(isPalindromeII('a')); // true
console.log(isPalindromeII('ab')); // true
console.log(isPalindromeII('abca')); // true
