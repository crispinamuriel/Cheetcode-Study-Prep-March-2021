const max_sub_array_of_size_k = function(k, arr) {
    let maxSum = 0
    let windowSum = 0
    let left = 0
    let right = 0
    while (right < arr.length){
      windowSum += arr[right] 
      if (right >= k-1){  //correct size window
        maxSum = Math.max(windowSum,maxSum)
        windowSum -= arr[left] 
        left++
      }
      right++
    }
    return maxSum
  };