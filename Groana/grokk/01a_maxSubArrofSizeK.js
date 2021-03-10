const max_sub_array_of_size_k = function (k, arr) {
  if (k > arr.length) return 0;

  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(max_sub_array_of_size_k([2, 1, 5, 1, 3, 2], 3)) // 9
console.log(max_sub_array_of_size_k([2, 3, 4, 1, 5], 2))  // 7
