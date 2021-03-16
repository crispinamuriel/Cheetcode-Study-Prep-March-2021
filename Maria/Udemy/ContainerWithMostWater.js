function maxArea(height) {
    let leftP = 0
    let rightP = height.length - 1
    let maxArea = 0
    
    while (leftP < rightP){
       let length = Math.min(height[leftP],height[rightP])
       let width = rightP-leftP
       let area = length * width  
       maxArea = Math.max(maxArea,area)
       if (height[leftP] <= height[rightP]){
           leftP++
       }else{
           rightP--
       }
    }
      return maxArea
  };