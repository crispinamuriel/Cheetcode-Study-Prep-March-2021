const twoSum = (nums, target) => {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
      if (hash[nums[i]] >= 0) {
          return [hash[nums[i]], i];
      } else {
          const diff = target - nums[i];
          hash[diff] = i;
      }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
