const maxArea = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let maxArea = 0;

  while (left < right) {
    let height = Math.min(arr[left], arr[right]);
    let width = right - left;
    let area = width * height;
    maxArea = Math.max(maxArea, area);

    if (arr[left] <= arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

console.log(maxArea([7, 1, 2, 3, 9])); // 28
console.log(maxArea([])); // 0
console.log(maxArea([8])); // 0
console.log(maxArea([6, 9, 3, 4, 5, 8])); // 32
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1, 2, 1])); //1
