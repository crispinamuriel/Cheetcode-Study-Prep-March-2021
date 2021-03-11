/*
 Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
 */

const remove_duplicates = (arr) => {
  // start both pointers at the first index (skip the first element since it's nota  dupe)
  let nextNonDuplicate = 1;
  let next = 1;

  while (next < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[next]) {
      arr[nextNonDuplicate] = arr[next];
      nextNonDuplicate++;
    }
    next++;
  }
  return nextNonDuplicate;
};

console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9])); // 4
console.log(remove_duplicates([2, 2, 2, 11])); // 2